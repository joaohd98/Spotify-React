import {combineReducers} from "redux";
import {AlbumsPageModel} from "../pages/albums/services/albums-page-model";
import {UserReducer} from "../user/user-reducer";
import {AlbumsReducer} from "../pages/albums/redux/albums-reducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {UserModel} from "../user/user-model"; // defaults to localStorage for web

export interface StatesReducers {
  AlbumsReducer: AlbumsPageModel.Props,
  UserReducer: UserModel,
}

const UserPersistedReducer = persistReducer({ key: 'root', storage}, UserReducer);

let States = {
  AlbumsReducer,
  UserPersistedReducer
};

export const combinedReducers = () => combineReducers(States);
