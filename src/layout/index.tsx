import * as React from 'react';
import {Provider} from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from "../redux/store";
import './styles.scss'
import logo from "../assets/logo.png"
import {AlbumsPage} from "../pages/albums";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {UserModel} from "../user/user-model";

export const Layout = (props: UserModel) => {

  console.log(props);

  return (
    <Provider store={store()}>
      <PersistGate loading={null} persistor={persistStore(store())}>
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

};

