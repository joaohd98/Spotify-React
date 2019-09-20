import * as React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from "../redux/store";
import './layout.scss'
import {SearchAlbumMusic} from "../pages/search-album-music/search-album-music";
import logo from "../assets/logo.png"

export const Layout = () => {

  return (
    <Provider store={store()}>
      <BrowserRouter>
        <div className="container">
          <img src={logo} alt="logo"/>
          <div className="page-container">
            <Route path="/" exact component={SearchAlbumMusic} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );

};

