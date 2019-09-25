import {applyMiddleware, combineReducers, createStore} from "redux";
import {AlbumsPageModel} from "../pages/albums/providers/albums-page-model";
import {UserReducer} from "../user/user-reducer";
import {AlbumsPageReducer} from "../pages/albums/redux/albums-page-reducer";
import {UserModel} from "../user/user-model";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {TrackPageReducer} from "../pages/tracks/redux/tracks-page-reducer";
import {TracksPageModel} from "../pages/tracks/providers/tracks-page-model";

export interface StatesReducers {
  UserPersistedReducer: UserModel,
  AlbumsReducer: AlbumsPageModel.Props,
  TrackPageReducer: TracksPageModel.Props

}

const reducers = combineReducers({
  UserPersistedReducer: persistReducer({ key: 'config', storage, blacklist: ['functions']}, UserReducer),
  AlbumsReducer: AlbumsPageReducer,
  TrackPageReducer
});

const store = createStore(reducers, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

export {store, persistor};
