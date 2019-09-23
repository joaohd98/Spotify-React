import {AnyAction, Dispatch} from "redux";
import {store} from "../config/store";

export interface UserModel {

  authToken: string,
  accessToken: string,
  refreshToken: string,
  albumsRecent: object[],

  functions: {
    saveToken: (accessToken: string, refreshToken: string, dispatch: Dispatch<AnyAction>) => void,
  }

}

export const getUserCode = (type: "refreshToken" | "accessToken") => {

  return store.getState().UserPersistedReducer[type];

};


export const getRedirectUri = () => {

  return window.location.origin + "/auth";

};

