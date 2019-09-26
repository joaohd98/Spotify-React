import React, {ChangeEvent} from 'react';
import "./styles.scss"
import {AlbumsPageModel} from "../../providers/albums-page-model";

export class SearchBar extends React.Component<AlbumsPageModel.Props> {

  searchAlbum = ({target}: ChangeEvent<HTMLInputElement>) => {

    this.props.functions.searchAlbums(target.value, this.props.limit, this.props.offset);

  };

  render() {

    return (
      <div className="search-bar">
        <label htmlFor="search-bar">Busque por artistas, álbuns ou músicas.</label>
        <input type="search" id="search-bar" autoComplete="off" autoCorrect="false" value={this.props.text} onChange={this.searchAlbum} placeholder="Comece a escrever..."/>
      </div>
    )

  }

}
