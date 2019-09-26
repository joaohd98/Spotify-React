import React from "react";
import './styles.scss'
import {BackButton} from "./components/back-button";
import {AlbumCard} from "./components/album-card";
import {TrackRows} from "./components/track-rows";
import {FooterPlayer} from "./components/footer-player";
import {StatesReducers} from "../../config/store";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {TrackPageInitialState} from "./redux/tracks-page-reducer";
import {TracksPageModel} from "./providers/tracks-page-model";
import {ServiceStatus} from "../../service";
import {LoadingSpinner} from "../../components/loading-spinner";
import {ErrorMessage, ErrorMessageInterface} from "../../components/error-message";

class Tracks extends React.Component<TracksPageModel.Props> {

  componentDidMount() {

    if(this.props.card != null)
      this.props.functions.getTracks(this.props.card);

    else if(this.props.tracks.length === 0)
      this.props.functions.findAlbum(this.props.match!.params.id);

  }

  renderErrorMessage = () => {

    let data: ErrorMessageInterface;

    if(this.props.status === ServiceStatus.noInternetConnection)  {

      data = {

        title: "Sem acesso a internet",
        subTitle: "Verifique a sua rede Wi-Fi ou dados móveis.",
        buttonText : "Tentar Novamente",
        buttonPress : () => this.props.functions.getTracks(this.props.card!)

      };

    }

    else {

      data = {

        title: 'Não foi possível encontrar ás músicas',
        subTitle: "Tente novamente mais tarde.",
        buttonText : "Tentar Novamente",
        buttonPress : () => this.props.functions.getTracks(this.props.card!)

      }


    }

    return <ErrorMessage {...data} />


  };

  renderLoading = () => {

    return <LoadingSpinner/>;

  };

  renderAlbumTracks = () => {

    return (
      <div className="container-tracks-album">
        <div className="album">
          <AlbumCard {...this.props}  />
        </div>
        <div className="tracks">
          <TrackRows {...this.props} />
        </div>
      </div>
    )

  };

  getRenderType = () => {

    if(this.props.status === ServiceStatus.loading)
      return this.renderLoading();

    else if(this.props.status === ServiceStatus.noInternetConnection || this.props.status === ServiceStatus.failed)
      return this.renderErrorMessage();

    else
      return this.renderAlbumTracks()

  };

  render() {

    return (
      <div>
        <BackButton {...this.props} />
        { this.getRenderType() }
        <FooterPlayer {...this.props}  />
      </div>
    )

  }

}

const mapStateToProps = (state: StatesReducers) => {
  return state.TrackPageReducer
};

const mapDispatchToProps = dispatch => ({
  functions: bindActionCreators(TrackPageInitialState.functions, dispatch)
});

export const TracksPage = connect(mapStateToProps, mapDispatchToProps)(Tracks);


