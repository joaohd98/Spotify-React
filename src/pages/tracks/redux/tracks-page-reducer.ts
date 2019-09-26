import {TracksPageModel} from "../providers/tracks-page-model";
import {TracksPageAction, TracksPageConst} from "./tracks-page-action";
import {ServiceStatus} from "../../../service";

export const TrackPageInitialState: TracksPageModel.Props = {

  card: null,
  tracks: [],
  currentIndex: -1,
  status: ServiceStatus.noAction,
  functions: {
    goBack: (history) => TracksPageAction.goBack(history),
    findAlbum: (id) => TracksPageAction.findAlbum(id),
    getSavedAlbum: (card, tracks) => TracksPageAction.getSavedAlbum(card, tracks),
    getTracks: (album) => TracksPageAction.getTracks(album),
    selectMusic: (currentIndex)  => TracksPageAction.selectMusic(currentIndex),
    changeMusic: (change, currentIndex, tracks)  => TracksPageAction.changeMusic(change, currentIndex, tracks)
  }

};

export const TrackPageReducer = (state = TrackPageInitialState, action: { type: TracksPageConst, payload: TracksPageModel.Props}) => {

  switch (action.type) {

    case TracksPageConst.SET_CARD_ALBUM: {

      return {
        ...state,
        card: action.payload.card,
        tracks: action.payload.tracks
      };

    }

    case TracksPageConst.GET_ALBUM_TRACKS: {

      return {
        ...state,
        status: action.payload.status,
        card: action.payload.card,
        tracks: action.payload.tracks,
        currentIndex: -1,
      };

    }

    case TracksPageConst.GET_TRACKS: {

      return {
        ...state,
        status: action.payload.status,
        tracks: action.payload.tracks,
        currentIndex: -1,
      };

    }

    case TracksPageConst.CHANGE_CURRENT_MUSIC: {

      return {
        ...state,
        currentIndex: action.payload.currentIndex
      };

    }

    case TracksPageConst.SERVICE_FAILED: {

      return {
        ...state,
        status: action.payload.status
      };

    }

    case TracksPageConst.SERVICE_LOADING: {

      return {
        ...state,
        status: ServiceStatus.loading
      };

    }

    default: return state

  }


};
