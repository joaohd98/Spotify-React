import {Service, ServiceReturn, ServiceStatus} from "../../service";

interface UserRefreshTokenRequestModel {
  refresh_token: string,
}

interface UserRefreshTokenResponseModel {
  access_token: string,
  token_type: string,
  scope: string
  expires_in: string,
}

export class UserRefreshTokenService {

  static url = "refresh-token";

  static makeRequest = (refreshToken: string, success: (response: ServiceReturn<UserRefreshTokenResponseModel>) => void, failed: (response: ServiceReturn<UserRefreshTokenResponseModel>) => void) => {

    let service = Service.post<UserRefreshTokenRequestModel, UserRefreshTokenResponseModel>(UserRefreshTokenService.url, {
      refresh_token: refreshToken,
    }, true);

    service.then(response => {

      if(response.cod === ServiceStatus.success)
        success(response);

      else
        failed(response);

    })


  }

}
