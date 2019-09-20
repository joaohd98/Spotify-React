import React, {ChangeEvent} from 'react';
import "./search-bar.scss"
import {AlbumsModel} from "../../services/albums-model";

interface States {
  textInput: string;
}

export class SearchBar extends React.Component<AlbumsModel.Props, States> {

  state = {
    textInput: this.props.text,
  };

  searchAlbum = ({target}: ChangeEvent<HTMLInputElement>) => {

    this.setState({ textInput: target.value });

    this.props.functions.searchAlbums(target.value);

  };

  render() {

    return (
      <div className="search-bar">
        <label htmlFor="search-bar">Busque por artistas, álbuns ou músicas.</label>
        <input type="search" id="search-bar" value={this.state.textInput} onChange={this.searchAlbum} placeholder="Comece a escrever..."/>
      </div>
    )

  }

}
