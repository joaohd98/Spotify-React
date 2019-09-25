import React from 'react';
import './styles.scss'
import {TracksPageModel} from "../../providers/tracks-page-model";

export class FooterPlayer extends React.Component<TracksPageModel.Props> {


  // let audio = new Audio("https://p.scdn.co/mp3-preview/bf9e33b1bb53c281c5eea0da6c317f2cd7c3eb58?cid=774b29d4f13844c495f206cafdad9c86");
  //
  // audio.play();
  //
  // audio.pause();
  //
  // audio.currentTime
  //
  // audio.duration;

  render() {

    return (
      <div className="player">
        <div className="progress-bar"/>
        <div className="player-actions">
          <div className="previous-next">
            <button>
              <i className="custom-icon previous-player" />
            </button>
            <button>
              <i className="custom-icon next-player" />
            </button>
          </div>
          <div className="title">
            Titulo da musica
          </div>
          <div className="play-pause">
            <button>
              <i className="custom-icon play" />
            </button>
          </div>
        </div>
      </div>
    )

  }

}
