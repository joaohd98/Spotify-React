import {ServiceStatus} from "../../../service";
import {CustomHistory, GlobalProps} from "../../../config/global-props";
import {TracksPageModel} from "../../tracks/providers/tracks-page-model";

export namespace AlbumsPageModel {

  export interface Props extends GlobalProps{

    text: string;
    cards: cardView[];
    status: ServiceStatus;
    hasNext: boolean,
    offset: number,
    limit: number,
    albumsRecent: {
      card: TracksPageModel.AlbumCard,
      tracks: TracksPageModel.TrackRow[],
    }[],
    functions: {
      searchAlbums: (text: string, offset: number, limit: number) => void,
      addAlbums: (text: string, offset: number, limit: number) => void,
      goToAlbumTracks: (card: AlbumsPageModel.cardView, history: CustomHistory) => void
    }

  }

  export interface State {

  }

  export interface cardView {

    id: string,
    type: "artist" | "track" | "album",
    albumName: string,
    artistName: string,
    trackName: string,
    img: string,

  }

}
