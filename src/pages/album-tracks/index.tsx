import React from "react";
import {BackButton} from "./components/back-button";
import {AlbumCard} from "./components/album-card";
import {TrackRows} from "./components/track-rows";
import {FooterPlayer} from "./components/footer-player";

class AlbumTracks extends React.Component {

  render() {

    return (
      <div>
        <BackButton />
        <AlbumCard />
        <TrackRows/>
        <FooterPlayer />
      </div>
    )

  }

}

export const AlbumTracksPage = AlbumTracks;
