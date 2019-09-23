import {ENV} from "../env";
import {Helpers} from "../helpers";

interface UserServiceModel {
  client_id: string,
  response_type: string,
  redirect_uri: string
}
export class UserService {

  static url = ENV.auth_url + "authorize";

  static getUrl = () => {

    return Helpers.generateUrlGet<UserServiceModel>(UserService.url, {
      client_id: ENV.client_id,
      response_type: "code",
      redirect_uri: window.location.origin + "/auth"
    })

  }

}
