import {AnyAction, Dispatch} from "redux";
import {store} from "../config/configure-store";

export interface UserModel {

  authCode: string,
  accessToken: string,
  refreshToken: string,
  albumsRecent: object[],

  functions: {
    saveAuthCode: (authCode: string, dispatch: Dispatch<AnyAction>) => void
  }

}

export const getUserCode = (type: "authCode" | "refreshToken" | "accessToken") => {

  return store.getState().UserPersistedReducer[type];

};


export const getRedirectUri = () => {

  return window.location.origin + "/auth";

};

