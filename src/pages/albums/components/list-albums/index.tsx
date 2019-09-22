import React from 'react';
import "./styles.scss"
import {AlbumsModel} from "../../services/albums-model";
import {ErrorMessage, ErrorMessageInterface} from "../../../../components/error-message";
import {AlbumsInteractor} from "../../services/albums-interactor";
import {ServiceStatus} from "../../../../service";

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

    let data: ErrorMessageInterface;

    if(this.props.status === ServiceStatus.failed)  {

      data = {

        title: 'Não foi possível encontrar os àlbuns',
        subTitle: "Tente novamente mais tarde.",
        buttonText : "Tentar Novamente",
        buttonPress : () => this.props.functions.searchAlbums(this.props.text, this.props.offset, this.props.limit)

      }


    }

    else if(this.props.status === ServiceStatus.noInternetConnection) {

      data = {

        title: "Sem acesso a internet",
        subTitle: "Verifique a sua rede Wi-Fi ou dados móveis.",
        buttonText : "Tentar Novamente",
        buttonPress : () => this.props.functions.searchAlbums(this.props.text, this.props.offset, this.props.limit)

      };

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

    for(let i = 0; i < 10; i++)
      elements.push(<div className="card skeleton" key={i}/>);

    return <div className="list-album skeleton-container">{ elements }</div>

  };

  render() {

    const hasErrors = (
      this.props.status === ServiceStatus.failed ||
      this.props.status === ServiceStatus.noInternetConnection ||
      (this.props.albums.length !== 0 && this.props.text !== "")
    );

    if(hasErrors)
      return this.renderErrorMessage();

    else if(this.props.status === ServiceStatus.loading)
      return this.renderSkeletonCard();

    else
      return this.renderMultipleCard();

  }

}
