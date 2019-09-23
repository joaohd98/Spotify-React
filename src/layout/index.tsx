import * as React from 'react';
import {Provider} from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import './styles.scss'
import logo from "../assets/logo.png"
import {AlbumsPage} from "../pages/albums";
import {PersistGate} from "redux-persist/integration/react";
import {UserService} from "../user/user-service";
import {UserInitialState} from "../user/user-reducer";
import {store, persistor} from "../redux/configure-store"

export class Layout extends React.Component {

  getToken = () => {

    return store.getState().UserPersistedReducer.token;

  };

  checkIfHasToken = () => {

    if(window.location.pathname === "/auth") {

      let code = new URL(window.location.href).searchParams.get("code")!;

      if (!code)
        window.location.href = UserService.getUrl();

      UserInitialState.functions.saveToken(code, store.dispatch);

      persistor.flush().then(() => {

        window.location.href = window.location.origin;

      });

    }

    else if(!this.getToken())
      window.location.href = UserService.getUrl();

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


