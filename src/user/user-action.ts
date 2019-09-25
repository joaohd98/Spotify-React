import {AnyAction, Dispatch} from "redux";
import {TracksPageModel} from "../pages/tracks/providers/tracks-page-model";

export enum UserActionConst {

  SAVE_TOKEN = "USER_ACTION_SAVE_TOKEN",
  ADD_ALBUM_RECENT = "USER_ACTION_ADD_ALBUM_RECENT"

}

export class UserAction {

  static saveToken = (accessToken: string, refreshToken: string, dispatch: Dispatch<AnyAction>) => {

    dispatch({type: UserActionConst.SAVE_TOKEN, payload: {accessToken, refreshToken}});

  };


  static addAlbumRecent = (card: TracksPageModel.AlbumCard, tracks: TracksPageModel.TrackRow[], dispatch: Dispatch<AnyAction>) => {

    dispatch({
      type: UserActionConst.ADD_ALBUM_RECENT, payload: {
        albumsRecent: {
          card,
          tracks
        }
      }
    });

  };

}
