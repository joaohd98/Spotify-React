import React from 'react';
import './styles.scss'

export class TrackRows extends React.Component {

  getNumber = () => {

    let elements: JSX.Element[] = [];

    for(let i = 1; i <= 10; i++){

      elements.push(
        <p className="track-row">
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
