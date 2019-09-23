import axios, {AxiosRequestConfig, } from 'axios';
import {ENV} from "../env";
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
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      config.auth = {
       username: ENV.client_id,
       password: ENV.client_secret
      };

      console.log(config);

    }


    return config;

  });

};


