import {AlbumsPageModel} from "../../albums/providers/albums-page-model";
import {ServiceStatus} from "../../../service";
import {TrackModel} from "../../../service/track/track-model";
import {GlobalProps} from "../../../config/global-props";
import History from 'history';

export namespace TracksPageModel {

  export interface Props extends GlobalProps{

    card: AlbumsPageModel.cardView | null,
    tracks: TrackModel.Response[],
    currentIndex: number,
    status: ServiceStatus,
    functions: {
      goBack: (history: History) => void,
      findAlbum: (id: string) => void,
      changeMusic: (change: "previous" | "next")  => void,
    }

  }

  export interface State {

  }

}

