import {Service, ServiceReturn, ServiceStatus} from "../index";
import {ArtistAlbumModel} from "./artist-album-model";
import {Helpers} from "../../helpers";

export class ArtistAlbumservice {

  private static url = "artists/{id}/albums";

  private static getUrl = (id: string) => {

    let request: ArtistAlbumModel.Request = {
      id
    };

    return Helpers.generateUrlGet(ArtistAlbumservice.url, request, "urlParameter");

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
