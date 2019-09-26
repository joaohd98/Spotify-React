import React from 'react';
import './styles.scss'
import {ErrorMessage} from "../../../components/error-message";
import {GlobalProps} from "../../../config/global-props";
import {connect} from "react-redux";
import NotFoundImg  from "../../../assets/not-found.jpg";

class NotFound404 extends React.Component<GlobalProps> {

  getImage = () => {

    return (
      <div>
        <img src={NotFoundImg} alt={"página não encontrada imagem"} />
      </div>
    )

  };

  goToHome = () => {

    this.props.history!.replace("/");

  };

  render() {

    return (
      <div>
        <ErrorMessage
          title={"Não encontramos essa página :("}
          subTitle={this.getImage()}
          buttonText={"Voltar para o início"}
          buttonPress={this.goToHome}
        />
      </div>
    )

  }

}

export const NotFound404Page = connect(null, null)(NotFound404);
