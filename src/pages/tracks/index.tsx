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

class Tracks extends React.Component {

  render() {

    return (
      <div>
        <BackButton />
        <div className="container-tracks-album">
          <div className="album">
            <AlbumCard />
          </div>
          <div className="tracks">
            <TrackRows/>
          </div>
        </div>
        <FooterPlayer />
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


