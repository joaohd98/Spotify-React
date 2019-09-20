import {combineReducers} from "redux";
import {AlbumsReducer} from "../pages/albums/redux/albums-reducer";

export interface StatesReducers {
  AlbumsReducer,
}

let States: StatesReducers = {
  AlbumsReducer
};

export const combinedReducers = () => combineReducers(States);
