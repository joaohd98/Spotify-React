import {ServiceStatus} from "../../../service";

export namespace AlbumsPageModel {

  export interface Props {

    text: string;
    cards: cardView[];
    status: ServiceStatus;
    offset: number,
    limit: number

    functions: {
      searchAlbums: (text: string, offset: number, limit: number) => void
    }

  }

  export interface State {

  }

  export interface cardView {

    id: string,
    type: "artist" | "track" | "album",
    title: string,
    subTitle: string,
    img: string,

  }

}
