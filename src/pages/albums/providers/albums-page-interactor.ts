import {AlbumsPageModel} from "./albums-page-model";
import {SearchModel} from "../../../service/search/search-model";
import noPhoto from "../../../assets/no-photo.png";
import {Helpers} from "../../../helpers";
import {ArtistModel} from "../../../service/artist/artist-model";
import {AlbumModel} from "../../../service/album/album-model";
import {TrackModel} from "../../../service/track/track-model";

export class AlbumsPageInteractor {

  static breakTooLongWorld = (text: string): string => {

    return text.length <= 20 ? text : text.substring(0, 20) + "...";

  };

  static formatRequest = (albums: AlbumModel.Response[] = [], tracks: TrackModel.Response[] = []): AlbumsPageModel.cardView[] => {

    let cards: AlbumsPageModel.cardView[] = [];

    const getImage = (data: {url: string}[]) => ( data.length > 0 ? data[0].url  : noPhoto);

    const upperCaseFirstLetter = Helpers.upperCaseFirstLetter;

    albums.forEach(album => {

      cards.push({
        id: album.id,
        type: "album",
        title: upperCaseFirstLetter(album.name),
        subTitle: upperCaseFirstLetter(album.artists[0].name),
        img: getImage(album.images)
      })

    });

    tracks.forEach(track => {

      cards.push({
        id: track.id,
        type: "track",
        title: upperCaseFirstLetter(track.name),
        subTitle: upperCaseFirstLetter(track.artists[0].name),
        img: getImage(track.album.images)
      })

    });

    return cards.sort((card1, card2) => ( card1.title > card2.title ? 1 : card1.title < card2.title ? -1 : 0));

  };

  static verifyHasNext =  (request: SearchModel.Response) => {

    return request.artists.next != null || request.tracks.next != null || request.albums.next != null

  };

  static findArtist = (artists: ArtistModel.Response[], text: string) => {

    return artists.find(artist => Helpers.compare2Words(artist.name, text))
  };


  static getOffsetOrLimit() {

    return 5;

  }

}
