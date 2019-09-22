export namespace AlbumModel {

  interface ExternalUrls {
    spotify: string;
  }

  interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface Response {
    album_type: string;
    artists: Artist[];
    copyrights: {
      text: string;
      type: string;
    }[];
    external_ids: {
      upc: string;
    };
    external_urls: ExternalUrls;
    genres: any[];
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    label: string;
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    tracks: {
      href: string;
      items: {
        artists: Artist[];
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_urls: ExternalUrls;
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
      next?: string;
      offset: number;
      previous?: string;
      total: number;
    };
    type: string;
    uri: string;
  }

}
