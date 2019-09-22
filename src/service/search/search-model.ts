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

    albums:  { items: AlbumModel.Response[] };
    artists: { items: ArtistModel.Response[] };
    tracks:  { items: TrackModel.Response[] };

  }

}
