import React from 'react';
import './styles.scss'

export class TrackRows extends React.Component {

  render() {

    return (
      <div className="track-list">
        <p className="track-row">
          <span className="track-number">
            <span>
              1.
            </span>
            <span>
              Nome da faixa
            </span>
          </span>
          <span className="duration">
            2:32
          </span>
        </p>
      </div>
    )

  }

}
