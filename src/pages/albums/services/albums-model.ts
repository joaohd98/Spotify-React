import {ServiceStatus} from "../../../service";

export namespace AlbumsModel {

  export interface Props {

    text: string;
    albums: object[];
    status: ServiceStatus;
    offset: number,
    limit: number

    functions: {
      searchAlbums: (text: string, offset: number, limit: number) => void
    }

  }

  export interface State {

  }

}
