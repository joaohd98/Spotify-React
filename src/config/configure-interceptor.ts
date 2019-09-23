import axios, {AxiosRequestConfig, } from 'axios';
import {getUserCode} from "../user/user-model";

export const ConfigureInterceptor = () => {

  axios.interceptors.request.use( (config: AxiosRequestConfig) => {

    // Normal Request
    if(!config.url!.endsWith("token")) {

      config.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getUserCode("accessToken")}`
      };

    }

    // Token Request
    else {

      config.headers = {
        'Content-Type': 'application/json',
      };

    }

    return config;

  });

};


