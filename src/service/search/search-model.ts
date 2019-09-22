import {AlbumModel} from "../album/album-model";
import {TrackModel} from "../track/track-model";
import {ArtistModel} from "../artist/artist-model";

export namespace SearchModel {

  export interface Request {

    q: string,
    type: string
    limit: number,
    offset: number,

  }

  export interface Response {

    albums: AlbumModel.Response[];
    artists: ArtistModel.Response[];
    tracks: TrackModel.Response[];

  }

}
