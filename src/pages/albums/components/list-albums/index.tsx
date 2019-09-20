import React from 'react';
import "./list-albums.scss"

export class ListAlbums extends React.Component {

  renderMultipleCard = () => {

    let elements: JSX.Element[] = [];

    for(let i = 0; i < 11; i++) {
      elements.push(
        <div className="card" key={i}>
          <img src="https://e.snmc.io/i/300/w/4f0b811b8377bd258111cfd66c174ebb/6190855" alt="capa" />
          <p>Nome do Artista</p>
          <p>Nome do Artista</p>
        </div>
      )

    }

    return elements;

  };

  render() {

    return (
     <div className="list-album">
       { this.renderMultipleCard() }
     </div>
    )

  }

}
