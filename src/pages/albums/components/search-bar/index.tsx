import React, {ChangeEvent} from 'react';
import "./styles.scss"
import {AlbumsPageModel} from "../../providers/albums-page-model";

interface States {
  typingTimeout: any;
}

export class SearchBar extends React.Component<AlbumsPageModel.Props, States> {

  state = {
    typingTimeout : 0
  };

  searchAlbum = ({target}: ChangeEvent<HTMLInputElement>) => {

    const { typingTimeout } = this.state;

    this.props.functions.searchAlbums(target.value, this.props.limit, this.props.offset, true);

    if (typingTimeout)
      clearTimeout(typingTimeout);

    this.setState({
      typingTimeout: setTimeout(() => {
        this.props.functions.searchAlbums(target.value, this.props.limit, this.props.offset, false);
      }, 2000)
    });


  };

  render() {

    return (
      <div className="search-bar">
        <label htmlFor="search-bar">Busque por artistas, álbuns ou músicas.</label>
        <input type="search" id="search-bar" autoComplete="off" value={this.props.text} onChange={this.searchAlbum} placeholder="Comece a escrever..."/>
      </div>
    )

  }

}
