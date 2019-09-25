export namespace AlbumTracksModel {

  export interface Response {

    href: string;
    items: {
      artists: {
        external_urls: {
          spotify: string
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }[];
      disc_number: number;
      duration_ms: number;
      explicit: boolean;
      external_urls: {
        spotify: string
      };
      href: string;
      id: string;
      is_local: boolean;
      is_playable: boolean;
      name: string;
      preview_url: string;
      track_number: number;
      type: string;
      uri: string;
    }[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;

  }

  export interface Request {
    id: string
  }

}
