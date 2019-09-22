import {ServiceStatus} from "../../../service";
import {SearchService} from "../../../service/search";
import {AlbumsPageInteractor} from "../services/albums-page-interactor";

export enum AlbumActionConst {

  LOADING_SEARCH_ALBUM,
  SUCCESS_SEARCH_ALBUM,
  FAILED_SEARCH_ALBUM,

}

export class AlbumsAction {

  static searchAlbums = (text: string, limit: number, offset: number) => {

    return dispatch => {

      dispatch({
        type: AlbumActionConst.LOADING_SEARCH_ALBUM, payload: {
          text: text,
          cards: [],
          status: ServiceStatus.loading,
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

  }

}
