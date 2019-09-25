import {ServiceStatus} from "../../../service";
import {CustomHistory, GlobalProps} from "../../../config/global-props";

export namespace AlbumsPageModel {

  export interface Props extends GlobalProps{

    text: string;
    cards: cardView[];
    status: ServiceStatus;
    hasNext: boolean,
    offset: number,
    limit: number,
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
