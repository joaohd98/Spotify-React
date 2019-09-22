import {ServiceStatus} from "../../../service";

export namespace AlbumsPageModel {

  export interface Props {

    text: string;
    albums: AlbumView[];
    status: ServiceStatus;
    offset: number,
    limit: number

    functions: {
      searchAlbums: (text: string, offset: number, limit: number) => void
    }

  }

  export interface State {

  }

  export interface AlbumView {

    id: string,
    nameAlbum: string,
    nameArtist: string,
    img: string,

  }

}
