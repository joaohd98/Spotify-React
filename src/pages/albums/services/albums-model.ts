export namespace AlbumsModel {

  export interface Props {

    text: string;
    albums: object[];
    loading: boolean;
    error: false;

    functions: {
      searchAlbums: (text: string) => void
    }

  }

  export interface State {

  }

}
