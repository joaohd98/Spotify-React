import {AlbumModel} from "../album/album-model";
import {Helpers} from "../../helpers";
import {Service, ServiceReturn, ServiceStatus} from "../index";
import {AlbumTracksModel} from "./album-tracks-model";

export class AlbumTracksService {

  private static url = "albums/{id}/tracks";

  private static getUrl = (id) => {

    let request: AlbumModel.Request = {
      id,
    };

    return Helpers.generateUrlGet(AlbumTracksService.url, request, "urlParameter");

  };


  static makeRequest = (id, success: (response: ServiceReturn<AlbumTracksModel.Response>) => void, failed: (response: ServiceReturn<AlbumTracksModel.Response>) => void) => {

    let service = Service.get<AlbumTracksModel.Request, AlbumTracksModel.Response>(AlbumTracksService.getUrl(id));

    service.then((response: ServiceReturn<AlbumTracksModel.Response>) => {

      if(response.cod === ServiceStatus.success)
        success(response);

      else
        failed(response)

    });

  }

}
