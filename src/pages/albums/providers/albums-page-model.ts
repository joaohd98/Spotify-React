import {ServiceStatus} from "../../../service";
import {GlobalProps} from "../../../config/global-props";

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
      goToAlbumTracks: (album: AlbumsPageModel.cardView, history: History) => void
    }

  }

  export interface State {

  }

  export interface cardView {

    id: string,
    type: "artist" | "track" | "album",
    title: string,
    subTitle: string,
    img: string,

  }

}
