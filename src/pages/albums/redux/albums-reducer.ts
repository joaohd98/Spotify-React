import {AlbumActionConst, AlbumsAction} from "./albums-action";
import {AlbumsModel} from "../services/albums-model";
import {ServiceStatus} from "../../../service";

export const AlbumsInitalState: AlbumsModel.Props = {

  text: "",
  albums: [],
  status: ServiceStatus.noAction,
  offset: 0,
  limit: 20,
  functions: {
    searchAlbums: (text, offset, limit) => AlbumsAction.searchAlbums(text, offset, limit)
  }

};

export const AlbumsReducer = (state = AlbumsInitalState, action: { type: AlbumActionConst, payload: any}) => {

  switch (action.type) {

    case AlbumActionConst.LOADING_SEARCH_ALBUM: {

      return {
        ...state,
        text: action.payload.text,
        albums: [],
        status: action.payload.status
      };

    }


    case AlbumActionConst.FAILED_SEARCH_ALBUM: {

      return {
        ...state,
        status: action.payload.status
      };

    }

    default: return state;

  }

};
