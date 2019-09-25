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
    getTracks: (id) => TracksPageAction.getTracks(id),
    changeMusic: (change: "previous" | "next")  => TracksPageAction.changeMusic(change)
  }


};

export const TrackPageReducer = (state = TrackPageInitialState, action: { type: TracksPageConst, payload: TracksPageModel.Props}) => {

  switch (action.type) {

    case TracksPageConst.SET_CARD_ALBUM: {

      return {
        ...state,
        card: action.payload.card
      };

    }

    default: return state

  }


};
