import * as React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from "../redux/store";
import './styles.scss'
import logo from "../assets/logo.png"
import {AlbumsPage} from "../pages/albums";

export const Layout = () => {

  return (
    <Provider store={store()}>
      <BrowserRouter>
        <div className="container">
          <img className="logo" src={logo} alt="logo"/>
          <div className="page-container">
            <Route path="/" exact component={AlbumsPage} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );

};

