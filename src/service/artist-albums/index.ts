import {Service, ServiceReturn, ServiceStatus} from "../index";
import {AlbumModel} from "../album/album-model";

export class ArtistAlbumservice {

  private static url = "artists/{id}/albums";

  private static getUrl = (id: string) => {

    return ArtistAlbumservice.url.replace("{id}", id);

  };

  static makeRequest = (id: string, success: (response: ServiceReturn<AlbumModel.Response>) => void, failed: (response: ServiceReturn<AlbumModel.Response>) => void = () => {}) => {

   let service = Service.get<any, AlbumModel.Response>(ArtistAlbumservice.getUrl(id));

    service.then((response: ServiceReturn<AlbumModel.Response>) => {

      if(response.cod === ServiceStatus.success)
        success(response);

      else
        failed(response)

    });

  }

}
