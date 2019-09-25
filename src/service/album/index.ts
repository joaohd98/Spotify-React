import {Helpers} from "../../helpers";
import {Service, ServiceReturn, ServiceStatus} from "../index";
import {AlbumModel} from "./album-model";

export class AlbumService {

  private static url = "albums/{id}";

  private static getUrl = (id) => {

    let request: AlbumModel.Request = {
      id,
    };

    return Helpers.generateUrlGet(AlbumService.url, request, "urlParameter");

  };


  static makeRequest = (id, success: (response: ServiceReturn<AlbumModel.Response>) => void, failed: (response: ServiceReturn<AlbumModel.Response>) => void) => {

    let service = Service.get<AlbumModel.Request, AlbumModel.Response>(AlbumService.getUrl(id));

    service.then((response: ServiceReturn<AlbumModel.Response>) => {

      if(response.cod === ServiceStatus.success)
        success(response);

      else
        failed(response)

    });

  }

}
