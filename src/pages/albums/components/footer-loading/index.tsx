import React from "react";
import './styles.scss'
import {AlbumsPageModel} from "../../services/albums-page-model";
import spinner from "../../../../assets/spinner.svg"
import {ServiceStatus} from "../../../../service";

export class FooterLoading extends React.Component<AlbumsPageModel.Props> {

  private click = () => this.props.functions.addAlbums(this.props.text, this.props.offset, this.props.limit);

  renderButton = () => {

    return <button onClick={this.click}>Ver Mais</button>;

  };

  renderLoading = () => {

    return (
      <div>
        <img src={spinner} alt="spinner" />
        <p>Carregando</p>
      </div>
    )

  };

  renderError = (type: "internet" | "failed") => {

    let button = <button onClick={this.click}>Tentar Novamente</button>;

    if(type === "internet") {
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

    if(!this.props.footerLoading.hasNext)
      return <div/>;

    else if(!this.props.footerLoading.seeMore && this.props.status === ServiceStatus.success && this.props.cards.length > 0)
      return <div className="footer-loading">{ this.renderButton() } </div>;

    else if(this.props.footerLoading.reachedBottom) {

      if(this.props.footerLoading.status === ServiceStatus.noInternetConnection)
        return <div className="footer-loading">{ this.renderError("internet") } </div>;

      else if(this.props.footerLoading.status === ServiceStatus.failed)
        return <div className="footer-loading">{ this.renderError("failed") } </div>;

      else
        return <div className="footer-loading">{this.renderLoading()} </div>;
    }

    else
      return <div/>
  }

}
