import {combineReducers} from "redux";
import {AlbumsReducer} from "../pages/albums/redux/albums-reducer";
import {AlbumsModel} from "../pages/albums/services/albums-model";

export interface StatesReducers {
  AlbumsReducer: AlbumsModel.Props,
}

let States = {
  AlbumsReducer
};

export const combinedReducers = () => combineReducers(States);
