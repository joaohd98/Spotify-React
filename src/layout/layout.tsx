import * as React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from "../redux/store";
import './layout.scss'
import {SearchAlbumMusic} from "../pages/search-album-music/search-album-music";

export const Layout = () => {

  return (
    <Provider store={store()}>
      <BrowserRouter>
        <Route path="/" exact component={SearchAlbumMusic} />
      </BrowserRouter>
    </Provider>
  );

};

