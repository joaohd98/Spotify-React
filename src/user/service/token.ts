import {Service, ServiceReturn, ServiceStatus} from "../../service";
import {getRedirectUri} from "../user-model";

interface UserTokenRequestModel {
  code: string,
  redirect_uri: string
}

interface UserTokenResponseModel {
  access_token: string,
  token_type: string,
  scope: string
  expires_in: string,
  refresh_token: string,
}

export class UserTokenService {

  static url = "access-token";

  static makeRequest = (code: string, success: (response: ServiceReturn<UserTokenResponseModel>) => void, failed: (response: ServiceReturn<UserTokenResponseModel>) => void) => {

    let service = Service.post<UserTokenRequestModel, UserTokenResponseModel>(UserTokenService.url, {
      code: code,
      redirect_uri: getRedirectUri()
    }, true);

    service.then(response => {

      if(response.cod === ServiceStatus.success)
        success(response);

      else
        failed(response)

    })


  }

}
