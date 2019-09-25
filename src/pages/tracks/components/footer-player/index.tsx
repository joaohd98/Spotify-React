import React from 'react';
import './styles.scss'
import {TracksPageModel} from "../../providers/tracks-page-model";

interface State {
  isPlaying: boolean,
  name: string,
  audio: HTMLAudioElement,
  progress: number
}

export class FooterPlayer extends React.Component<TracksPageModel.Props, State> {

  state = {
    isPlaying: false,
    name: "",
    audio: new Audio(),
    progress: 0
  };

  componentWillMount() {

    this.state.audio.removeEventListener("timeupdate", () => {});

  }

  componentDidUpdate(prevProps: Readonly<TracksPageModel.Props>, prevState: Readonly<State>, snapshot?: any): void {

    if(prevProps.currentIndex !== this.props.currentIndex) {

      prevState.audio.pause();

      let selectedTrack = this.props.tracks[this.props.currentIndex];
      let audio = new Audio(selectedTrack.url);

      audio.addEventListener("timeupdate", () => this.checkProgress(), false);

      audio.play();

      this.setState({
        isPlaying: true,
        name: selectedTrack.name,
        audio: audio,
        progress: 0
      });

    }

  }

  checkProgress = () => {

    let { currentTime, duration } = this.state.audio;

    let progress = ( currentTime / duration ) * 100;

    if(progress === 100) {

      this.props.functions.changeMusic("next", this.props.currentIndex, this.props.tracks);

    }

    else
      this.setState({ progress });

  };

  getPlayerClass = () => {

    return this.props.currentIndex === -1 ? "disabled" : ""

  };

  getPlayPauseIcon = () => {

    return this.state.isPlaying ? "pause" : "play"

  };

  getProgressBarSize = () => {

    return {
      width: this.state.progress + "%"
    }

  };

  changeMusic = (change: "previous" | "next") => {

    let audio = this.state.audio;

    if(this.state.audio.currentTime > 3 && change === "previous")
      audio.currentTime = 0;

    else
      this.props.functions.changeMusic(change, this.props.currentIndex, this.props.tracks);
    
  };

  playPauseMusic = () => {

    if(this.state.isPlaying)
      this.state.audio.pause();

    else
      this.state.audio.play();

    this.setState({isPlaying: !this.state.isPlaying});

  };

  render() {

    return (
      <div className="player">
        <div className="progress-bar" style={this.getProgressBarSize()}/>
        <div className={`player-actions ${this.getPlayerClass()}`}>
          <div className="previous-next">
            <button onClick={() => this.changeMusic("previous")}>
              <i className="custom-icon previous-player" />
            </button>
            <button onClick={() => this.changeMusic("next")}>
              <i className="custom-icon next-player" />
            </button>
          </div>
          <div className="title">
            { this.state.name }
          </div>
          <div className="play-pause">
            <button onClick={this.playPauseMusic}>
              <i className={`custom-icon ${this.getPlayPauseIcon()}`} />
            </button>
          </div>
        </div>
      </div>
    )

  }

}
