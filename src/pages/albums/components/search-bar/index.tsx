import React, {ChangeEvent} from 'react';
import "./styles.scss"
import {AlbumsPageModel} from "../../providers/albums-page-model";

interface States {
  textInput: string;
}

export class SearchBar extends React.Component<AlbumsPageModel.Props, States> {

  state = {
    textInput: this.props.text,
  };

  searchAlbum = ({target}: ChangeEvent<HTMLInputElement>) => {

    this.setState({ textInput: target.value });

    this.props.functions.searchAlbums(target.value, this.props.limit, this.props.offset);

  };

  render() {

    return (
      <div className="search-bar">
        <label htmlFor="search-bar">Busque por artistas, álbuns ou músicas.</label>
        <input type="search" id="search-bar" autoComplete="false" value={this.state.textInput} onChange={this.searchAlbum} placeholder="Comece a escrever..."/>
      </div>
    )

  }

}
