import {TracksPageModel} from "../providers/tracks-page-model";
import {TracksPageConst} from "./tracks-page-action";

export const TrackPageInitialState: TracksPageModel.Props = {

  functions: {

  }

};

export const TrackPageReducer = (state = TrackPageInitialState, action: { type: TracksPageConst, payload: TracksPageModel.Props}) => {


  return state;

};
