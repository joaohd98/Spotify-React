import {combineReducers} from "redux";
import {AlbumsPageModel} from "../pages/albums/services/albums-page-model";
import {UserReducer} from "../user/user-reducer";
import {AlbumsReducer} from "../pages/albums/redux/albums-reducer";

export interface StatesReducers {
  AlbumsReducer: AlbumsPageModel.Props,
}

let States = {
  AlbumsReducer,
  UserReducer
};

export const combinedReducers = () => combineReducers(States);
