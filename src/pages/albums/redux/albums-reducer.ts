import {AlbumActionConst, AlbumsAction} from "./albums-action";
import {AlbumsModel} from "../services/albums-model";

export const AlbumsInitalState: AlbumsModel.Props = {

  text: "",
  albums: [],
  loading: false,
  error: false,
  functions: {
    searchAlbums: text => AlbumsAction.searchAlbums(text)
  }

};

export const AlbumsReducer = (state = AlbumsInitalState, action: { type: AlbumActionConst, payload: any}) => {

  switch (action.type) {

    case AlbumActionConst.LOADING_SEARCH_ALBUM: {

      return {
        ...state,
        text: action.payload.text,
      };

    }

    default: return state;

  }

};
