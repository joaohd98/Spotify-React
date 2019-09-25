export enum TracksPageConst {

  SET_CARD_ALBUM = "TRACK_PAGE_SET_CARD_ALBUM"

}

export class TracksPageAction {

  static goBack = (history) => {

    return dispatch => {

      history.goBack()


    }

  };

  static findAlbum = (id: string) => {

    return dispatch => {


    }

  };



  static getTracks = (id: string) => {

    return dispatch => {


    }

  };


  static changeMusic = (change) => {

    return dispatch => {


    }

  }

}
