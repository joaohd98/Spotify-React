import React from "react";
import './styles.scss'
import {AlbumsPageModel} from "../../providers/albums-page-model";
import spinner from "../../../../assets/spinner.svg"
import {ServiceStatus} from "../../../../service";
import {Helpers} from "../../../../helpers";

enum Status {

  nothing,
  internet,
  failed,
  loading,
  button

}

interface State {
  reachBottom: boolean,
  seeMore: boolean,
  renderStatus: Status
}

export class FooterLoading extends React.Component<AlbumsPageModel.Props, State> {

  state = {
    reachBottom: false,
    seeMore: false,
    renderStatus: Status.nothing
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps: Readonly<AlbumsPageModel.Props>, prevState: Readonly<AlbumsPageModel.State>, snapshot?: any): void {

    if(prevProps.offset !== this.props.offset)
      this.setState({ reachBottom: false });

    if(prevProps.text !== this.props.text)
      this.setState({ seeMore: false });

    let newStatus = this.getRenderStatus();

    if(newStatus !== this.state.renderStatus)
      this.setState({ renderStatus: newStatus });

  }

  addAlbum = () => this.props.functions.addAlbums(this.props.text, this.props.offset, this.props.limit);

  getRenderStatus = (): Status => {

    let renderStatus: Status = Status.nothing;

    if(!this.props.hasNext)
      renderStatus = Status.nothing;

    else if(!this.state.seeMore && this.props.status === ServiceStatus.success && this.props.cards.length > 0)
      renderStatus = Status.button;

    else if(this.state.reachBottom && this.props.cards.length > 0) {

      if(this.props.status === ServiceStatus.noInternetConnection)
        renderStatus = Status.internet;

      else if(this.props.status === ServiceStatus.failed)
        renderStatus = Status.failed;

      else
        renderStatus = Status.loading;
    }

    return renderStatus;

  };

  handleScroll = () => {

    if(this.state.seeMore && Helpers.checkIfReachBottom()  && !this.state.reachBottom && this.props.hasNext) {

      this.setState({ reachBottom: true });

      this.addAlbum();

    }

  };

  renderButton = () => {

    const click = () => {

      this.addAlbum();

      this.setState({
        seeMore: true,
        reachBottom: true,
      })

    };

    return <button onClick={click}>Ver Mais</button>;

  };

  renderLoading = () => {

    return (
      <div>
        <img src={spinner} alt="spinner" />
        <p>Carregando</p>
      </div>
    )

  };

  renderError = (type: Status.internet | Status.failed) => {

    let button = <button onClick={this.addAlbum}>Tentar Novamente</button>;

    if(type === Status.internet) {
      return (
        <div>
          <p>Sem acesso a internet</p>
          <p>Tente novamente mais tarde</p>
          { button }
        </div>
      )
    }

    else {

      return (
        <div>
          <p>Não foi possível encontrar mais àlbuns</p>
          <p>Verifique a sua rede Wi-Fi ou dados móveis.</p>
          { button }
        </div>
      )
    }

  };

  render() {

    let { renderStatus } = this.state;

    if(renderStatus === Status.nothing)
      return <div/>;

    let render: JSX.Element;

    if(renderStatus === Status.button)
      render = this.renderButton();

    else if(renderStatus === Status.loading)
      render = this.renderLoading();

    else
      render = this.renderError(renderStatus);

    return <div className="footer-loading">{ render }</div>

  }

}
