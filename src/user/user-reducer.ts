import {UserModel} from "./user-model";
import {UserAction, UserActionConst} from "./user-action";

export const UserInitialState: UserModel = {

  authToken: "",
  refreshToken: "",
  accessToken: "",
  albumsRecent: [],
  functions: {
    saveToken: (accessToken, refreshToken, dispatch) => UserAction.saveToken(accessToken, refreshToken, dispatch)
  }

};

export const UserReducer = (state = UserInitialState, action: { type: UserActionConst, payload: any}) => {

  switch (action.type) {

    case UserActionConst.SAVE_TOKEN: {

      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      }

    }

    default: return state;

  }

};
