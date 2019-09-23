import React from 'react';
import "./styles.scss"
import {ErrorMessage, ErrorMessageInterface} from "../../../../components/error-message";
import {AlbumsPageInteractor} from "../../services/albums-page-interactor";
import {ServiceStatus} from "../../../../service";
import {AlbumsPageModel} from "../../services/albums-page-model";
import {FooterLoading} from "../footer-loading";

interface State {
  failed: boolean,
  noInternetConnection: boolean,
  noResult: boolean,
  isLoading: boolean
}

export class ListAlbums extends React.Component<AlbumsPageModel.Props, State> {

  state = {
    failed: false,
    noInternetConnection: false,
    noResult: false,
    isLoading: false
  };

  componentDidUpdate() {

    const valid = {
      failed: this.props.status === ServiceStatus.failed,
      noInternetConnection: this.props.status === ServiceStatus.noInternetConnection,
      noResult: this.props.status === ServiceStatus.success && this.props.cards.length === 0 && this.props.text !== "",
      isLoading: this.props.status === ServiceStatus.loading
    };

    if(JSON.stringify(this.state) !== JSON.stringify(valid))
      this.setState(valid);

  }

  renderMultipleCard = () => {

    let elements: JSX.Element[] = [];

    this.props.cards.forEach((card, index) => {

      elements.push(
        <div className="card" key={index}>
          <img src={card.img} alt="capa" />
          <p>{card.title}</p>
          <p>{card.subTitle}</p>
        </div>
      )

    });

    return (
      <div>
        <div className="list-album">{ elements }</div>
        <FooterLoading {...this.props} />
      </div>
    )

  };

  renderErrorMessage = () => {

    let data: ErrorMessageInterface;

    const {failed, noInternetConnection} = this.state;

    if(failed)  {

      data = {

        title: 'Não foi possível encontrar os àlbuns',
        subTitle: "Tente novamente mais tarde.",
        buttonText : "Tentar Novamente",
        buttonPress : () => this.props.functions.searchAlbums(this.props.text, this.props.limit, this.props.offset)

      }


    }

    else if(noInternetConnection) {

      data = {

        title: "Sem acesso a internet",
        subTitle: "Verifique a sua rede Wi-Fi ou dados móveis.",
        buttonText : "Tentar Novamente",
        buttonPress : () => this.props.functions.searchAlbums(this.props.text, this.props.limit, this.props.offset)

      };

    }

    else {

      data = {

        title: <div>Não foi possível encontrar: <br/>"{AlbumsPageInteractor.breakTooLongWorld(this.props.text)}</div>,
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

    const {failed, noInternetConnection, noResult, isLoading} = this.state;

    if(failed || noInternetConnection || noResult)
      return this.renderErrorMessage();

    else if(isLoading)
      return this.renderSkeletonCard();

    else
      return this.renderMultipleCard();

  }

}
