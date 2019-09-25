import {ENV} from "../../env";
import {Helpers} from "../../helpers";
import {getRedirectUri} from "../user-model";

interface UserAuthorizationModel {
  client_id: string,
  response_type: string,
  redirect_uri: string
}

export class UserAuthorizationService {

  static url = ENV.auth_url + "authorize";

  static getUrl = () => {

    return Helpers.generateUrlGet(UserAuthorizationService.url, {
      client_id: ENV.client_id,
      response_type: "code",
      redirect_uri: getRedirectUri()
    }, "getParameter")

  };

}
