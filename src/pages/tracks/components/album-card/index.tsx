import React from 'react';
import './styles.scss'
import {TracksPageModel} from "../../providers/tracks-page-model";

export class AlbumCard extends React.Component<TracksPageModel.Props> {

  render() {

    let card = this.props.card!;

    if(card) {

      return (
        <div className="album-container">
          <img src={card.img} alt="album"/>
          <p>{card.albumName}</p>
          <p>{card.artistName}</p>
        </div>
      )
    }

    else
      return <div />

  }

}
