import React from 'react';
import './styles.scss'
import {TracksPageModel} from "../../providers/tracks-page-model";
import {TracksPageInteractor} from "../../providers/tracks-page-interactor";

export class TrackRows extends React.Component<TracksPageModel.Props> {

  checkIsSelected = (index: number) => {

    return this.props.currentIndex === index ? "selected" : "";

  };


  renderTracks = () => {

    let elements: JSX.Element[] = [];

    this.props.tracks.forEach((track, index) => {

      elements.push(
        <p className={`track-row ${this.checkIsSelected(index)}`} key={index} onClick={() => this.props.functions.selectMusic(index)}>
          <span className="track-number">
            <span>
              { index + 1 }.
            </span>
            <span>
              { track.name }
            </span>
          </span>
          <span className="duration">
              { TracksPageInteractor.secondsToMinutes(track.duration) }
          </span>
        </p>
      )

    });

    return elements;

  };

  render() {

    return (
      <div className="track-list">
        { this.renderTracks() }
      </div>
    )

  }

}
