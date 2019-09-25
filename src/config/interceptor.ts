import axios, {AxiosRequestConfig} from 'axios';
import {getUserCode} from "../user/user-model";
import {persistor, store} from "./store";
import {UserRefreshTokenService} from "../user/service/refresh-token";

export const ConfigureInterceptor = () => {

  axios.interceptors.request.use((config: AxiosRequestConfig) => {

    // Normal Request
    if (!config.url!.endsWith("token")) {

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

    return new Promise((resolve, reject) => {

      if (error.config && error.response && error.response.status === 401) {

        let user = store.getState().UserPersistedReducer;

        //Token expired
        UserRefreshTokenService.makeRequest(user.refreshToken, (response) => {

          user.functions.saveToken(response.data!.access_token, user.refreshToken, store.dispatch);

          persistor.flush().then(() => {

            resolve(axios.request(error.config));

          });

        }, () => {

          reject(error);

        });

      } else
        reject(error);

    });


  });


}
