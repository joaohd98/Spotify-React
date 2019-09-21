export class AlbumsInteractor {

  static breakTooLongWorld(text: string): string {


    return text.length <= 20 ? text : text.substring(0, 20) + "...";

  }

}
