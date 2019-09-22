import React from "react";
import './styles.scss'
import {AlbumsPageModel} from "../../services/albums-page-model";
import spinner from "../../../../assets/spinner.svg"
import {ServiceStatus} from "../../../../service";

export class FooterLoading extends React.Component<AlbumsPageModel.Props> {

  renderButton = () => {

    const click = () => this.props.functions.addAlbums(this.props.text, this.props.offset, this.props.limit);

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

  render() {

    if(!this.props.footerLoading.seeMore && this.props.status === ServiceStatus.success && this.props.cards.length > 0)
      return <div className="footer-loading">{ this.renderButton() } </div>;

    else if(this.props.footerLoading.reachedBottom)
      return <div className="footer-loading">{ this.renderLoading() } </div>;

    else
      return <div/>
  }

}
