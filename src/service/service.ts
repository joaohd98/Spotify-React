import {Helpers} from "../helpers";
import {ENV} from "../env";
import axios, {AxiosResponse} from 'axios';


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

  private getHttpOptions = () => {

  };

  get = async <DataType, ReturnType>(url: string, data: DataType) => {

    url = Helpers.generateUrlGet<DataType>(ENV.url + url, data);

    return this.callRequest<ReturnType>(await axios.get<ReturnType>(url));

  };

  post = async <DataType, ReturnType>(url: string, data: DataType) => {

    url = ENV.url + url;

    return this.callRequest<ReturnType>(await axios.post<ReturnType>(url, data));


  };

  private callRequest = async <T>(response: AxiosResponse<T>) => {

    try {

      let serviceReturn: ServiceReturn<T> = {
        cod: ServiceStatus.success,
        data: response.data
      };

      return serviceReturn;

    } catch (e) {

      console.log(e);

      let serviceReturn: ServiceReturn<T> = {
        cod: ServiceStatus.failed,
      };

      return serviceReturn;

    }

  };



}




