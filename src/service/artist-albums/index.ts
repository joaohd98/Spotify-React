import {Service, ServiceReturn, ServiceStatus} from "../index";
import {ArtistAlbumModel} from "./artist-album-model";

export class ArtistAlbumservice {

  private static url = "artists/{id}/albums";

  private static getUrl = (id: string) => {

    return ArtistAlbumservice.url.replace("{id}", id);

  };

  static makeRequest = (id: string, success: (response: ServiceReturn<ArtistAlbumModel.Response>) => void, failed: (response: ServiceReturn<ArtistAlbumModel.Response>) => void = () => {}) => {

   let service = Service.get<any, ArtistAlbumModel.Response>(ArtistAlbumservice.getUrl(id));

    service.then((response: ServiceReturn<ArtistAlbumModel.Response>) => {

      if(response.cod === ServiceStatus.success)
        success(response);

      else
        failed(response)

    });

  }

}
