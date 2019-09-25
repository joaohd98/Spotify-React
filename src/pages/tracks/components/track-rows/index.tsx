import React from 'react';
import './styles.scss'
import {TracksPageModel} from "../../providers/tracks-page-model";

export class TrackRows extends React.Component<TracksPageModel.Props> {

  getNumber = () => {

    let elements: JSX.Element[] = [];

    for(let i = 1; i <= 10; i++){

      elements.push(
        <p className="track-row" key={i}>
          <span className="track-number">
            <span>
              { i }.
            </span>
            <span>
              nome da musica
            </span>
          </span>
          <span className="duration">
            2:32
          </span>
        </p>
      )

    }

    return elements;

  };

  render() {

    return (
      <div className="track-list">
        { this.getNumber() }
      </div>
    )

  }

}
