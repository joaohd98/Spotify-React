import {AlbumActionConst, AlbumsAction} from "./albums-action";
import {ServiceStatus} from "../../../service";
import {AlbumsPageModel} from "../services/albums-page-model";
import {AlbumsPageInteractor} from "../services/albums-page-interactor";

export const AlbumsInitialState: AlbumsPageModel.Props = {

  text: "",
  cards: [],
  status: ServiceStatus.noAction,
  offset: 0,
  hasNext: false,
  limit: AlbumsPageInteractor.getOffsetOrLimit(),
  functions: {
    searchAlbums: (text, offset, limit) => AlbumsAction.searchAlbums(text, offset, limit),
    addAlbums: (text, offset, limit) => AlbumsAction.addAlbums(text, offset, limit),
  }

};

export const AlbumsReducer = (state = AlbumsInitialState, action: { type: AlbumActionConst, payload: AlbumsPageModel.Props}) => {

  switch (action.type) {

    case AlbumActionConst.LOADING_SEARCH_ALBUM: {

      return {
        ...state,
        cards: [],
        text: action.payload.text,
        status: ServiceStatus.loading,
        offset: 0,
      };

    }

    case AlbumActionConst.FAILED_SEARCH_ALBUM: {

      return {
        ...state,
        status: action.payload.status
      };

    }

    case AlbumActionConst.SUCCESS_SEARCH_ALBUM: {

      return {
        ...state,
        cards: action.payload.cards,
        status: action.payload.status,
        hasNext: action.payload.hasNext,
      };

    }


    case AlbumActionConst.LOADING_ADD_ALBUM: {

      return {
        ...state,
        status: ServiceStatus.loading
      };

    }

    case AlbumActionConst.SUCCESS_ADD_ALBUM: {

      return {
        ...state,
        cards: state.cards.concat(action.payload.cards),
        offset: action.payload.offset,
        hasNext: action.payload.hasNext,
      };

    }

    case AlbumActionConst.FAILED_ADD_ALBUM: {

      return {
        ...state,
        status: action.payload.status,
      };

    }

    default: return state;

  }

};
