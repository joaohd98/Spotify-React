import {ServiceStatus} from "../../../service";
import {CustomHistory, CustomLocation, GlobalProps} from "../../../config/global-props";

export namespace TracksPageModel {

  export interface Props extends GlobalProps{

    card: TracksPageModel.AlbumCard | null,
    tracks: TracksPageModel.TrackRow[],
    currentIndex: number,
    status: ServiceStatus,
    functions: {
      goBack: (history: CustomHistory, location: CustomLocation) => void,
      findAlbum: (id: string) => void,
      getTracks: (album: TracksPageModel.AlbumCard) => void,
      getSavedAlbum: (card: TracksPageModel.AlbumCard, tracks: TracksPageModel.TrackRow[]) => void
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

