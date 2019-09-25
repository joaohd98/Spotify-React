import {ServiceStatus} from "../../../service";
import {GlobalProps} from "../../../config/global-props";

export namespace TracksPageModel {

  export interface Props extends GlobalProps{

    card: TracksPageModel.AlbumCard | null,
    tracks: TracksPageModel.TrackRow[],
    currentIndex: number,
    status: ServiceStatus,
    functions: {
      goBack: (history) => void,
      findAlbum: (id: string) => void,
      getTracks: (id: string) => void,
      selectMusic: (currentIndex: number)  => void,
      changeMusic: (change: "previous" | "next", currentIndex: number, tracks: TracksPageModel.TrackRow[])  => void,
    }

  }

  export interface AlbumCard {

    id: string,
    albumName: string,
    artistName: string,
    img: string,

  }

  export interface TrackRow {

    name: string,
    url: string,
    duration: number,

  }


}

