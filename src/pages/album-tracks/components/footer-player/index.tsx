import React from 'react';
import './styles.scss'

export class FooterPlayer extends React.Component {

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
