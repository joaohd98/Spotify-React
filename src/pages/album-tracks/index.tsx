import React from "react";
import './styles.scss'
import {BackButton} from "./components/back-button";
import {AlbumCard} from "./components/album-card";
import {TrackRows} from "./components/track-rows";
import {FooterPlayer} from "./components/footer-player";

class AlbumTracks extends React.Component {

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

export const AlbumTracksPage = AlbumTracks;
