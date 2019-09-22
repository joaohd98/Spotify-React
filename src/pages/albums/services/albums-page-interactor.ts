import {AlbumsPageModel} from "./albums-page-model";
import {SearchModel} from "../../../service/search/search-model";
// import {ArtistAlbumservice} from "../../../service/artist-albums";
import noPhoto from "../../../assets/no-photo.png";

export class AlbumsPageInteractor {

  static breakTooLongWorld = (text: string): string => {

    return text.length <= 20 ? text : text.substring(0, 20) + "...";

  };

  static formatRequest = (request: SearchModel.Response): AlbumsPageModel.cardView[] => {

    let cards: AlbumsPageModel.cardView[] = [];

    const getImage = (data: {url: string}[]) => ( data.length > 0 ? data[0].url  : noPhoto);

    request.albums.items.forEach(album => {

      cards.push({
        id: album.id,
        type: "album",
        title: album.name,
        subTitle: album.artists[0].name,
        img: getImage(album.images)
      })

    });

    request.tracks.items.forEach(track => {

      cards.push({
        id: track.id,
        type: "track",
        title: track.name,
        subTitle: "",
        img: getImage(track.album.images)
      })

    });

    request.artists.items.forEach(artist => {

      cards.push({
        id: artist.id,
        type: "artist",
        title: artist.name,
        subTitle: "",
        img: getImage(artist.images)
      })

    });

    return cards.sort((card1, card2) => ( card1.title > card2.title ? 1 : card1.title < card2.title ? -1 : 0));

  }

}
