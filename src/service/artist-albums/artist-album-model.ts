import {AlbumModel} from "../album/album-model";

export namespace ArtistAlbumModel {

  export interface Response {

    href: string;
    items: AlbumModel.Response[]
    limit: string;
    next: number;
    offset: number;
    previous: string;
    total: number
  }

  export interface Request {
    id: string
  }

}
