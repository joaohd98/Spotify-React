import {UserModel} from "./user-model";

export const UserInitialState: UserModel = {

  token: "",
  albumsRecent: []

};

export const UserReducer = (state = UserInitialState) => {

  return state;

};
