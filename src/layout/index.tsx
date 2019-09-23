import * as React from 'react';
import {Provider} from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import './styles.scss'
import logo from "../assets/logo.png"
import {AlbumsPage} from "../pages/albums";
import {PersistGate} from "redux-persist/integration/react";
import {UserInitialState} from "../user/user-reducer";
import {store, persistor} from "../config/configure-store"
import {ConfigureInterceptor} from "../config/configure-interceptor";
import {UserAuthorizationService} from "../user/service/authorization";
import {getUserCode} from "../user/user-model";
import {UserTokenService} from "../user/service/token";

export class Layout extends React.Component {

  componentDidMount() {

    ConfigureInterceptor();

  }

  checkIfHasToken = () => {

    if(window.location.pathname === "/auth") {

      let code = new URL(window.location.href).searchParams.get("code")!;

      if (!code)
        window.location.href = UserAuthorizationService.getUrl();

      UserInitialState.functions.saveAuthCode(code, store.dispatch);

      UserTokenService.makeRequest(getUserCode("authCode"), (response) => {

        console.log(response);

        persistor.flush().then(() => {

          window.location.href = window.location.origin;

        });

      }, (response) => {

        console.log(response);

      });


    }

    else if(!getUserCode("authCode"))
      window.location.href = UserAuthorizationService.getUrl();

  };

  render() {

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} onBeforeLift={this.checkIfHasToken}  >
          <BrowserRouter>
            <div className="container">
              <img className="logo" src={logo} alt="logo"/>
              <div className="page-container">
                <Route path="/" exact component={AlbumsPage} />
              </div>
            </div>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );

  }

}


