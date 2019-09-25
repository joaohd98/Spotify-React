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

class Tracks extends React.Component<TracksPageModel.Props> {

  componentDidMount() {

    console.log(this.props);

    if(this.props.card != null)
      this.props.functions.getTracks(this.props.card.id);

    else
      this.props.functions.findAlbum(this.props.match!.params.id);

  }

  render() {

    return (
      <div>
        <BackButton {...this.props} />
        <div className="container-tracks-album">
          <div className="album">
            <AlbumCard {...this.props}  />
          </div>
          <div className="tracks">
            <TrackRows {...this.props} />
          </div>
        </div>
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


