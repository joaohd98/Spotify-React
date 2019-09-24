import React from 'react';
import "./styles.scss"
import {AlbumsPageInteractor} from "../../providers/albums-page-interactor";
import {AlbumsPageModel} from "../../providers/albums-page-model";

export class SubHeaderTitle extends React.Component<AlbumsPageModel.Props> {

  getMessage() {

    return (
      this.props.text === '' ?
        `Álbuns buscados recentemente` :
        `Resultados encontrados para "${AlbumsPageInteractor.breakTooLongWorld(this.props.text)}"`
    )

  }

  render() {

    return <p>{this.getMessage()}</p>

  }

}
