import {SearchModel} from "./search-model";
import {Helpers} from "../../helpers";
import {Service, ServiceReturn, ServiceStatus} from "../index";

export class SearchService {

  private static url = "search";

  private static getUrl = (text: string, limit: number, offset: number) => {

    let request: SearchModel.Request = {
      q: text,
      type: 'track,artist,album',
      limit: limit,
      offset: offset,
      market: "BR"
    };

    return Helpers.generateUrlGet(SearchService.url, request, "getParameter");

  };


  static makeRequest = (text, limit, offset, success: (response: ServiceReturn<SearchModel.Response>) => void, failed: (response: ServiceReturn<SearchModel.Response>) => void) => {

   let service = Service.get<SearchModel.Request, SearchModel.Response>(SearchService.getUrl(text, limit, offset));

    service.then((response: ServiceReturn<SearchModel.Response>) => {

      if(response.cod === ServiceStatus.success)
        success(response);

      else
        failed(response)

    });

  }

}
