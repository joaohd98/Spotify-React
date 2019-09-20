import * as React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from "../redux/store";
import './layout.scss'
import {Albums} from "../pages/albums/albums";
import logo from "../assets/logo.png"

export const Layout = () => {

  return (
    <Provider store={store()}>
      <BrowserRouter>
        <div className="container">
          <img className="logo" src={logo} alt="logo"/>
          <div className="page-container">
            <Route path="/" exact component={Albums} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );

};

