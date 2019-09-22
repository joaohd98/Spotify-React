import {ENV} from "../env";
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

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

  private static getHttpOptions = (): AxiosRequestConfig => {

    return {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + ENV.auth_token
      },
    }

  };

  static get = async <DataType, ReturnType>(url: string) => {

    const urlString = ENV.url + url;
    const httpOptions = Service.getHttpOptions();

    return await Service.callRequest<ReturnType>(axios.get<ReturnType>(urlString, httpOptions));

  };

  static post = async <DataType, ReturnType>(url: string, data: DataType) => {

    const urlString = ENV.url + url;
    const httpOptions = Service.getHttpOptions();

    return Service.callRequest<ReturnType>(axios.post<ReturnType>(urlString, data, httpOptions));

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




