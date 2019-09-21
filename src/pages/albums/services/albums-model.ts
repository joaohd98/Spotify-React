import {ServiceCod} from "../../../service/service";

export namespace AlbumsModel {

  export interface Props {

    text: string;
    albums: object[];
    loading: boolean;
    error: ServiceCod;

    functions: {
      searchAlbums: (text: string) => void
    }

  }

  export interface State {

  }

}
