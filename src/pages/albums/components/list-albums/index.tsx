import React from 'react';
import "./styles.scss"
import {ErrorMessage, ErrorMessageInterface} from "../../../../components/error-message";
import {AlbumsPageInteractor} from "../../providers/albums-page-interactor";
import {ServiceStatus} from "../../../../service";
import {AlbumsPageModel} from "../../providers/albums-page-model";

enum Status {

  success,
  empty,
  failed,
  noInternetConnection,
  noResult,
  isLoading
}

interface State {
  status: Status
}

export class ListAlbums extends React.Component<AlbumsPageModel.Props, State> {

  state = {
    status: Status.empty
  };

  componentDidUpdate(prevProps: Readonly<AlbumsPageModel.Props>, prevState: Readonly<State>, snapshot?: any): void {

    let newStatus = this.getRenderStatus();

    if(prevState.status !== newStatus)
      this.setState({status: newStatus});

  }

  getRenderStatus = (): Status => {

    let cardLength = this.props.cards.length;
    let { status } = this.props;

    if(cardLength === 0) {

      if(status === ServiceStatus.failed)
        return Status.failed;

      else if(status === ServiceStatus.loading)
        return Status.isLoading;

      else if(status === ServiceStatus.noInternetConnection)
        return Status.noInternetConnection;

      else if(status === ServiceStatus.success && this.props.text !== "")
        return Status.noResult;

      else
        return Status.empty;
    }

    else
      return Status.success



  };

  checkStatus = (status: Status) => {

    return this.state.status === status;

  };

  renderMultipleCard = () => {

    let elements: JSX.Element[] = [];

    this.props.cards.forEach((card, index) => {

      elements.push(
        <div className="card" key={index}>
          <img src={card.img} alt="capa" onClick={() => this.props.functions.goToAlbumTracks(card, this.props.history!)} />
          <p>{AlbumsPageInteractor.getCardTitle(card)}</p>
          <p>{card.artistName}</p>
        </div>
      )

    });

    return <div className="list-album">{ elements }</div>

  };

  renderRecentAlbum = () => {

    if(this.props.albumsRecent.length === 0)
      return <ErrorMessage title={""} subTitle={"Não foram encontrados albuns recentes."} />

    else {

      let elements: JSX.Element[] = [];

      this.props.albumsRecent.forEach(({card}, index) => {

        elements.push(
          <div className="card" key={index}>
            <img src={card.img} alt="capa" onClick={() => {}} />
            <p>{card.albumName}</p>
            <p>{card.artistName}</p>
          </div>
        )

      });

      return <div className="list-album">{ elements }</div>

    }


  };

  renderErrorMessage = () => {

    let data: ErrorMessageInterface;

    if(this.checkStatus(Status.failed))  {

      data = {

        title: 'Não foi possível encontrar os àlbuns',
        subTitle: "Tente novamente mais tarde.",
        buttonText : "Tentar Novamente",
        buttonPress : () => this.props.functions.searchAlbums(this.props.text, this.props.limit, this.props.offset)

      }


    }

    else if(this.checkStatus(Status.noInternetConnection)) {

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

    if(this.checkStatus(Status.failed) || this.checkStatus(Status.noInternetConnection) || this.checkStatus(Status.noResult))
      return this.renderErrorMessage();

    else if(this.checkStatus(Status.isLoading))
      return this.renderSkeletonCard();

    else if(this.checkStatus(Status.empty))
      return this.renderRecentAlbum();

    else
      return this.renderMultipleCard();

  }

}
