import {AlbumActionConst, AlbumsAction} from "./albums-action";
import {AlbumsModel} from "../services/albums-model";
import {ServiceCod} from "../../../service/service";

export const AlbumsInitalState: AlbumsModel.Props = {

  text: "",
  albums: [],
  loading: true,
  error: ServiceCod.success,
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
