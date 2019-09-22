import {AlbumActionConst, AlbumsAction} from "./albums-action";
import {ServiceStatus} from "../../../service";
import {AlbumsPageModel} from "../services/albums-page-model";

export const AlbumsInitalState: AlbumsPageModel.Props = {

  text: "",
  cards: [],
  status: ServiceStatus.noAction,
  offset: 0,
  limit: 3, //9
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
        cards: [],
        status: action.payload.status
      };

    }

    case AlbumActionConst.SUCCESS_SEARCH_ALBUM: {

      return {
        ...state,
        cards: action.payload.cards,
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
