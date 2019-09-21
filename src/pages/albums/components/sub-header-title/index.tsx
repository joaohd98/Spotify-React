import React from 'react';
import "./styles.scss"
import {AlbumsModel} from "../../services/albums-model";
import {AlbumsInteractor} from "../../services/albums-interactor";

export class SubHeaderTitle extends React.Component<AlbumsModel.Props> {

  getMessage() {

    return (
      this.props.text === '' ?
        `Álbuns buscados recentemente` :
        `Resultados encontrados para "${AlbumsInteractor.breakTooLongWorld(this.props.text)}"`
    )

  }

  render() {

    return <p>{this.getMessage()}</p>

  }

}
