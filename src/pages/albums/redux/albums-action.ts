import {ServiceStatus} from "../../../service";
import {SearchService} from "../../../service/search";

export enum AlbumActionConst {

  LOADING_SEARCH_ALBUM,
  SUCESS_SEARCH_ALBUM,
  FAILED_SEARCH_ALBUM,

}

export class AlbumsAction {

  static searchAlbums = (text: string, limit: number, offset: number) => {

    return dispatch => {

      dispatch({
        type: AlbumActionConst.LOADING_SEARCH_ALBUM, payload: {
          text: text,
          albums: [],
          status: ServiceStatus.loading,
        }
      });

      SearchService.makeRequest(text, limit, offset, response => {

        console.log(response);

        dispatch({
          type: AlbumActionConst.SUCESS_SEARCH_ALBUM, payload: {
            albums: response.data,
            status: response.cod,
          }
        });

      }, response => {

        console.log(response);

        dispatch({
          type: AlbumActionConst.FAILED_SEARCH_ALBUM, payload: {
            text: text,
            status: response.cod,
          }
        });

      });

    };

  }

}
