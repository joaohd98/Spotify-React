import {SearchService} from "../../../service/search";
import {AlbumsPageInteractor} from "../services/albums-page-interactor";

export enum AlbumActionConst {

  LOADING_SEARCH_ALBUM,
  SUCCESS_SEARCH_ALBUM,
  FAILED_SEARCH_ALBUM,

  LOADING_ADD_ALBUM,
  SUCCESS_ADD_ALBUM,
  FAILED_ADD_ALBUM

}

export class AlbumsAction {

  static searchAlbums = (text: string, limit: number, offset: number) => {

    return dispatch => {

      dispatch({
        type: AlbumActionConst.LOADING_SEARCH_ALBUM, payload: {
          text: text,
          cards: [],
          seeMore: false,
          offset: 0,
        }
      });

      SearchService.makeRequest(text, limit, offset, response => {

        dispatch({
          type: AlbumActionConst.SUCCESS_SEARCH_ALBUM, payload: {
            cards: AlbumsPageInteractor.formatRequest(response.data!),
            status: response.cod,
          }
        });

      }, response => {

        dispatch({
          type: AlbumActionConst.FAILED_SEARCH_ALBUM, payload: {
            status: response.cod,
          }
        });

      });

    };

  };

  static addAlbums = (text: string, offset: number, limit: number) => {

    return dispatch => {

      offset += 3;

      dispatch({type: AlbumActionConst.LOADING_ADD_ALBUM});

      SearchService.makeRequest(text, limit, offset, response => {

        dispatch({
          type: AlbumActionConst.SUCCESS_ADD_ALBUM, payload: {
            cards: AlbumsPageInteractor.formatRequest(response.data!),
            status: response.cod,
            offset
          }
        });

      }, response => {

        dispatch({
          type: AlbumActionConst.FAILED_ADD_ALBUM, payload: {
            status: response.cod,
          }
        });

      });

    }

  }

}
