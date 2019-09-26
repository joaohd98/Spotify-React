import {AlbumService} from "../../../service/album";
import {AlbumTracksService} from "../../../service/album-tracks";
import {TracksPageInteractor} from "../providers/tracks-page-interactor";
import {TracksPageModel} from "../providers/tracks-page-model";
import {UserInitialState} from "../../../user/user-reducer";

export enum TracksPageConst {

  SERVICE_LOADING = "TRACK_PAGE_SERVICE_LOADING",
  SERVICE_FAILED = "TRACK_PAGE_SERVICE_FAILED",
  SET_CARD_ALBUM = "TRACK_PAGE_SET_CARD_ALBUM",
  GET_ALBUM_TRACKS = "TRACK_PAGE_GET_ALBUM_TRACKS",
  GET_TRACKS = "TRACK_PAGE_GET_TRACKS",
  CHANGE_CURRENT_MUSIC = "TRACK_PAGE_CHANGE_CURRENT_MUSIC",

}

export class TracksPageAction {

  static goBack = (history) => {

    return () => {

      history.replace('/');

    }

  };

  static getSavedAlbum = (card: TracksPageModel.AlbumCard, tracks: TracksPageModel.TrackRow[]) => {

    return dispatch => {

      dispatch({type: TracksPageConst.SET_CARD_ALBUM, payload: {
          card,
          tracks
        }
      });

    }

  };

  static findAlbum = (id: string) => {

    return dispatch => {

      dispatch({type: TracksPageConst.SERVICE_LOADING});

      AlbumService.makeRequest(id, responseAlbum => {

        AlbumTracksService.makeRequest(id, responseTracks => {

          const album = {
            card: TracksPageInteractor.formatAlbum(responseAlbum.data!),
            tracks: TracksPageInteractor.formatTracks(responseTracks.data!),
          };

          UserInitialState.functions.addAlbumRecent(album.card, album.tracks, dispatch);

          dispatch({type: TracksPageConst.GET_ALBUM_TRACKS, payload: {
            ...album,
            status: responseTracks.cod,
          }});


        }, error => {

          dispatch({type: TracksPageConst.SERVICE_FAILED, payload: { status: error.cod }});

        })

      }, error => {

        dispatch({type: TracksPageConst.SERVICE_FAILED, payload: { status: error.cod }});

      })

    }

  };

  static getTracks = (album: TracksPageModel.AlbumCard) => {

    return dispatch => {

      dispatch({type: TracksPageConst.SERVICE_LOADING});

      AlbumTracksService.makeRequest(album.id, response => {

        const tracks = TracksPageInteractor.formatTracks(response.data!);

        UserInitialState.functions.addAlbumRecent(album, tracks, dispatch);

        dispatch({type: TracksPageConst.GET_TRACKS, payload: {
            tracks,
            status: response.cod,
          }
        });


      }, error => {

        dispatch({type: TracksPageConst.SERVICE_FAILED, payload: { status: error.cod }});

      })

    }

  };

  static selectMusic = (currentIndex: number) => {

    return dispatch => {

      dispatch({type: TracksPageConst.CHANGE_CURRENT_MUSIC, payload: { currentIndex }})

    }

  };

  static changeMusic = (change: "previous" | "next", currentIndex: number, tracks: TracksPageModel.TrackRow[]) => {

    return dispatch => {

      const tracksLength = tracks.length;

      currentIndex += change === "previous" ? -1 : 1;

      if(currentIndex < 0)
        currentIndex = tracksLength - 1;

      else if(currentIndex >= tracksLength)
        currentIndex = 0;

      dispatch({type: TracksPageConst.CHANGE_CURRENT_MUSIC, payload: { currentIndex }})

    }

  }

}
