import axios, {AxiosRequestConfig} from 'axios';
import {getUserCode} from "../user/user-model";
import {persistor, store} from "./store";
import {UserRefreshTokenService} from "../user/service/refresh-token";

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

  axios.interceptors.response.use(response => response, error => {

    //Token expired
    if (error.config && error.response && error.response.status === 401) {

      let user = store.getState().UserPersistedReducer;

      return UserRefreshTokenService.makeRequest(user.refreshToken, (response) => {

        user.functions.saveToken(response.data!.access_token, user.refreshToken, store.dispatch);

        return persistor.flush().then(() => {

          return axios.request(error.config);

        });

      });

    }

    return Promise.reject(error);


  })

};


