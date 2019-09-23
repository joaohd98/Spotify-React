import {UserModel} from "./user-model";
import {UserAction, UserActionConst} from "./user-action";

export const UserInitialState: UserModel = {

  authCode: "",
  refreshToken: "",
  accessToken: "",
  albumsRecent: [],
  functions: {
    saveAuthCode: (authCode, dispatch) => UserAction.saveToken(authCode, dispatch)
  }
};

export const UserReducer = (state = UserInitialState, action: { type: UserActionConst, payload: any}) => {

  switch (action.type) {

    case UserActionConst.SAVE_TOKEN: {

      return {
        ...state,
        authCode: action.payload.authCode,
      }

    }

    default: return state;

  }

};
