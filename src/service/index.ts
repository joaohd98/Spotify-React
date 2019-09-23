import {ENV} from "../env";
import axios,  {AxiosResponse} from 'axios';

export enum ServiceStatus {

  noAction,
  success,
  loading,
  failed,
  noInternetConnection,

}

export interface ServiceReturn<T> {

  cod: ServiceStatus;
  data?: T;

}


export class Service {

  private static setURl = (url: string, token: boolean) => (token ? ENV.token_url : ENV.url) + url;

  static get = async <DataType, ReturnType>(url: string, token = false) => {

    const urlString = Service.setURl(url, token);

    return await Service.callRequest<ReturnType>(axios.get<ReturnType>(urlString));

  };

  static post = async <DataType, ReturnType>(url: string, data: DataType, token = false) => {

    const urlString = Service.setURl(url, token);

    return Service.callRequest<ReturnType>(axios.post<ReturnType>(urlString, data));

  };

  private static callRequest = async <T>(response: Promise<AxiosResponse<T>>) => {

    try {

      let serviceReturn: ServiceReturn<T> = {
        cod: ServiceStatus.success,
        data: (await response).data
      };

      return serviceReturn;

    } catch (e) {

      let cod = e.message === "Network Error" ? ServiceStatus.noInternetConnection : ServiceStatus.failed;

      let serviceReturn: ServiceReturn<T> = {
        cod,
      };

      return serviceReturn;

    }

  };



}




