import {AlbumsPageModel} from "../../albums/providers/albums-page-model";
import {ServiceStatus} from "../../../service";
import {TrackModel} from "../../../service/track/track-model";
import {GlobalProps} from "../../../config/global-props";

export namespace TracksPageModel {

  export interface Props extends GlobalProps{

    card: TracksPageModel.AlbumCard | null,
    tracks: TracksPageModel.trackRow[],
    currentIndex: number,
    status: ServiceStatus,
    functions: {
      goBack: (history) => void,
      findAlbum: (id: string) => void,
      getTracks: (id: string) => void,
      changeMusic: (change: "previous" | "next", currentIndex: number, card: AlbumsPageModel.cardView)  => void,
    }

  }

  export interface AlbumCard {

    id: string,
    albumName: string,
    artistName: string,
    img: string,

  }

  export interface trackRow {

    name: string,
    duration: number,

  }


}

