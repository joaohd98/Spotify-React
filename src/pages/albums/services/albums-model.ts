import {ServiceStatus} from "../../../service/service";

export namespace AlbumsModel {

  export interface Props {

    text: string;
    albums: object[];
    loading: boolean;
    error: ServiceStatus;

    functions: {
      searchAlbums: (text: string) => void
    }

  }

  export interface State {

  }

}
