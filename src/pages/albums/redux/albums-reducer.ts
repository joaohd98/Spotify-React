import {AlbumActionConst} from "./albums-action";
import {AlbumsModel} from "../services/albums-model";

export const AlbumsInitalState: AlbumsModel.Props = {

  functions: {

  }

};

export const AlbumsReducer = (state = AlbumsInitalState, action: { type: AlbumActionConst, payload: any}) => {

  return state;

};
