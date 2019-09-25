import {UserModel} from "./user-model";
import {UserAction, UserActionConst} from "./user-action";

export const UserInitialState: UserModel = {

  authToken: "",
  refreshToken: "",
  accessToken: "",
  albumsRecent: [],
  functions: {
    saveToken: (accessToken, refreshToken, dispatch) => UserAction.saveToken(accessToken, refreshToken, dispatch),
    addAlbumRecent: (card, tracks, dispatch) => UserAction.addAlbumRecent(card, tracks, dispatch)
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


    case UserActionConst.ADD_ALBUM_RECENT: {

      let albums = state.albumsRecent;

      albums = albums.filter((album, index) => album.card.id !== action.payload.album.card.id && index < 9);
      albums.unshift(action.payload.album);

      return {
        ...state,
        albumsRecent: albums
      }

    }

    default: return state;

  }

};
