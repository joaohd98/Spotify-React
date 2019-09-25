import React from 'react';
import './styles.scss'
import {TracksPageModel} from "../../providers/tracks-page-model";

export class BackButton extends React.Component<TracksPageModel.Props> {

  render() {

    return (
        <p className="back-button" onClick={() => this.props.functions.goBack(this.props.history!)}>
          <i className="custom-icon back"/> Voltar
        </p>
    )

  }

}
