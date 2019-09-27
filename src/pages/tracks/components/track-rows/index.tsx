import React from 'react';
import './styles.scss'
import {TracksPageModel} from "../../providers/tracks-page-model";
import {TracksPageInteractor} from "../../providers/tracks-page-interactor";

export class TrackRows extends React.Component<TracksPageModel.Props> {

  isSelected = (index: number) => {

    return this.props.currentIndex === index ? "selected" : "";

  };


  renderTracks = () => {

    let elements: JSX.Element[] = [];

    this.props.tracks.forEach((track, index) => {

      elements.push(
        <tr className={`track-row ${this.isSelected(index)}`} key={index} onClick={() => this.props.functions.selectMusic(index)}>
          <td>
            { index + 1 }.
          </td>
          <td>
            { track.name }
          </td>
          <td>
            { TracksPageInteractor.secondsToMinutes(track.duration) }
          </td>
        </tr>
      )

    });

    return elements;

  };

  render() {

    return (
      <table className="track-list">
        <tbody>
        { this.renderTracks() }
        </tbody>
      </table>
    )

  }

}
