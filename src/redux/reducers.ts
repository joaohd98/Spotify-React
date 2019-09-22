import {combineReducers} from "redux";
import {AlbumsReducer} from "../pages/albums/redux/albums-reducer";
import {AlbumsPageModel} from "../pages/albums/services/albums-page-model";

export interface StatesReducers {
  AlbumsReducer: AlbumsPageModel.Props,
}

let States = {
  AlbumsReducer
};

export const combinedReducers = () => combineReducers(States);
