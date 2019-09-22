import React from 'react';
import "./styles.scss"
import {ErrorMessage, ErrorMessageInterface} from "../../../../components/error-message";
import {AlbumsPageInteractor} from "../../services/albums-page-interactor";
import {ServiceStatus} from "../../../../service";
import {AlbumsPageModel} from "../../services/albums-page-model";
import {FooterLoading} from "../footer-loading";

export class ListAlbums extends React.Component<AlbumsPageModel.Props> {

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

    if(this.props.status === ServiceStatus.failed)  {

      data = {

        title: 'Não foi possível encontrar os àlbuns',
        subTitle: "Tente novamente mais tarde.",
        buttonText : "Tentar Novamente",
        buttonPress : () => this.props.functions.searchAlbums(this.props.text, this.props.limit, this.props.offset)

      }


    }

    else if(this.props.status === ServiceStatus.noInternetConnection) {

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

    const hasErrors = (
      this.props.status === ServiceStatus.failed ||
      this.props.status === ServiceStatus.noInternetConnection ||
      (this.props.status === ServiceStatus.success && this.props.cards.length === 0 && this.props.text !== "")
    );

    if(hasErrors)
      return this.renderErrorMessage();

    else if(this.props.status === ServiceStatus.loading)
      return this.renderSkeletonCard();

    else
      return this.renderMultipleCard();

  }

}
