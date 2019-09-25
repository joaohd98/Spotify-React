import {AlbumModel} from "../../../service/album/album-model";
import {AlbumTracksModel} from "../../../service/album-tracks/album-tracks-model";
import {TracksPageModel} from "./tracks-page-model";
import noPhoto from "../../../assets/no-photo.png";
import {Helpers} from "../../../helpers";

export class TracksPageInteractor {

  static formatAlbum = (album: AlbumModel.Response): TracksPageModel.AlbumCard => {

    const getImage = (data: {url: string}[]) => ( data.length > 0 ? data[0].url  : noPhoto);

    const upperCaseFirstLetter = Helpers.upperCaseFirstLetter;

    return {
      id: album.id,
      albumName: upperCaseFirstLetter(album.name),
      artistName: upperCaseFirstLetter(album.artists[0].name),
      img: getImage(album.images)
    }

  };

  static secondsToMinutes = (milliseconds: number) => {

    let sec_num = milliseconds / 1000;

    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    let m = minutes > 9 ? minutes.toFixed(0) : "0" + minutes.toFixed(0);
    let s = seconds > 9 ? seconds.toFixed(0) : "0" + seconds.toFixed(0);

    return m + ':' + s;

  };

  static formatTracks = (tracks: AlbumTracksModel.Response): TracksPageModel.TrackRow[] => {

    let rows: TracksPageModel.TrackRow[] = [];

    tracks.items.forEach(track => {

      rows.push({
        name: track.name,
        url: track.preview_url,
        duration: track.duration_ms
      })

    });

    return rows;

  };

}
