import React from 'react';
import "./list-albums.scss"
import {AlbumsModel} from "../../services/albums-model";
import {ServiceCod} from "../../../../service/service";
import {ErrorMessage, ErrorMessageInterface} from "../../../../components/error-message/error-message";
import {AlbumsInteractor} from "../../services/albums-interactor";

export class ListAlbums extends React.Component<AlbumsModel.Props> {

  renderMultipleCard = () => {

    // let {albums} = this.props;

    let elements: JSX.Element[] = [];

    for(let i = 0; i < 5; i++) {
      elements.push(
        <div className="card" key={i}>
          <img src="https://e.snmc.io/i/300/w/4f0b811b8377bd258111cfd66c174ebb/6190855" alt="capa" />
          <p>Nome do Artista</p>
          <p>Nome do Artista</p>
        </div>
      )

    }

    return <div className="list-album">{ elements }</div>;

  };

  renderErrorMessage = () => {

    const hasInternetConnectionError = this.props.error === ServiceCod.noInternetConnection;

    let data: ErrorMessageInterface;

    if(hasInternetConnectionError)  {

      data = {

        title: "Sem acesso a internet",
        subTitle: "Verifique a sua rede Wi-Fi ou dados móveis.",
        buttonText : "Tentar Novamente",
        buttonPress : () => this.props.functions.searchAlbums(this.props.text)

      }

    }

    else {

      data = {

        title: <div>Não foi possível encontrar: <br/>"{AlbumsInteractor.breakTooLongWorld(this.props.text)}</div>,
        subTitle: "Tente novamente escrevendo o termo da busca de outra forma ou usando outra palavra chave.",

      }

    }

    return <ErrorMessage {...data} />

  };

  renderSkeletonCard = () => {

    let elements: JSX.Element[] = [];

    for(let i = 0; i < 10; i++) {
      if (i % 2 === 0)
        elements.push(<div className="card skeleton" key={i}/>);
      else
        elements.push(
          <div className="card" key={i}>
            <img src="https://e.snmc.io/i/300/w/4f0b811b8377bd258111cfd66c174ebb/6190855" alt="capa" />
            <p>Nome do Artista</p>
            <p>Nome do Artista</p>
          </div>
        )

    }

    return <div className="list-album skeleton-container">{ elements }</div>

  };

  render() {

    const hasError = this.props.error !== ServiceCod.success || (this.props.text !== "" && this.props.albums.length === 0);

    if(hasError)
      return this.renderErrorMessage();

    else if(this.props.loading)
      return this.renderSkeletonCard();

    else
      return this.renderMultipleCard();

  }

}
