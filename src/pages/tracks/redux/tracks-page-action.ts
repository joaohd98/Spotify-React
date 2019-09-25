export enum TracksPageConst {

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


  static changeMusic = (change) => {

    return dispatch => {


    }

  }

}
