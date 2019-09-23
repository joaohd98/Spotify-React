import {UserModel} from "./user-model";
import {UserAction, UserActionConst} from "./user-action";

export const UserInitialState: UserModel = {

  token: "",
  albumsRecent: [],
  functions: {
    saveToken: (token: string, dispatch) => UserAction.saveToken(token, dispatch)
  }
};

export const UserReducer = (state = UserInitialState, action: { type: UserActionConst, payload: any}) => {

  switch (action.type) {

    case UserActionConst.SAVE_TOKEN: {

      return {
        ...state,
        token: action.payload.token,
      }

    }

    default: return state;

  }

};
