import {AnyAction, Dispatch} from "redux";

export interface UserModel {

  token: string,
  albumsRecent: object[],

  functions: {
    saveToken: (token: string, dispatch: Dispatch<AnyAction>) => void
  }

}
