import React from 'react';
import "./search-bar.scss"

export class SearchBar extends React.Component {

  render() {

    return (
      <div className="input-container">
        <label htmlFor="search-bar">Busque por artistas, álbuns ou músicas.</label>
        <input type="search" id="search-bar" placeholder="Comece a ecrever..."/>
      </div>
    )

  }

}
