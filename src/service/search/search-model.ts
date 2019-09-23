import {AlbumModel} from "../album/album-model";
import {TrackModel} from "../track/track-model";
import {ArtistModel} from "../artist/artist-model";

export namespace SearchModel {

  export interface Request {

    q: string,
    type: string
    limit: number,
    offset: number,
    market: string

  }

  export interface Response {

    albums:  { items: AlbumModel.Response[], next: string };
    artists: { items: ArtistModel.Response[], next: string };
    tracks:  { items: TrackModel.Response[], next: string };

  }

}
