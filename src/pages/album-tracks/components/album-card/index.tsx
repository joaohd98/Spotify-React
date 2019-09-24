import React from 'react';
import './styles.scss'

export class AlbumCard extends React.Component {

  render() {

    return (
      <div className="album-container">
        <img src={"https://e.snmc.io/i/300/w/4f0b811b8377bd258111cfd66c174ebb/6190855"} alt="album"/>
        <p>Nome do album</p>
        <p>Nome do artista</p>
      </div>
    )
  }

}
