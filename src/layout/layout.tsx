import * as React from 'react';
import './layout.scss'
import { Provider } from 'react-redux'
import store from "../redux/store";

export const Layout = () => {

  return (
    <Provider store={store()}>
      <div>
        Hello world
      </div>
    </Provider>
  );

};

