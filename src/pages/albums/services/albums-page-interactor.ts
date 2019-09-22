import {AlbumsPageModel} from "./albums-page-model";
import {SearchModel} from "../../../service/search/search-model";

export class AlbumsPageInteractor {

  static breakTooLongWorld = (text: string): string => {


    return text.length <= 20 ? text : text.substring(0, 20) + "...";

  };

  static formatAlbumRequest = (request: SearchModel.Response): AlbumsPageModel.AlbumView[] => {

    let albums: AlbumsPageModel.AlbumView[] = [];

    request.albums.forEach(album => {

      albums.push({
        id: album.id,
        nameAlbum: album.name,
        nameArtist: album.artists[0].name,
        img: album.images[0].url
      })

    });


    request.tracks.forEach(track => {

      let album = track.album;

      albums.push({
        id: track.id,
        nameAlbum: album.name,
        nameArtist: album.artists[0].name,
        img: album.images[0].url
      })

    });


    request.artists.forEach(artist => {

      // let album = artist;
      //
      // albums.push({
      //   id: album.id,
      //   nameAlbum: album.name,
      //   nameArtist: artist.name,
      //   img: album.images[0].url
      // })

    });

    console.log(albums);

    return albums;

  }

}
