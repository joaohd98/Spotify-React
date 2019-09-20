export enum AlbumActionConst {

  LOADING_SEARCH_ALBUM,

}

export class AlbumsAction {

  static searchAlbums = (text: string) => {

    return dispatch => {

      dispatch({
        type: AlbumActionConst.LOADING_SEARCH_ALBUM,
        payload: {
          text: text,
        }
      })

    }

  };

}
