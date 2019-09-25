import * as React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import './styles.scss'
import logo from "../assets/logo.png"
import {AlbumsPage} from "../pages/albums";
import {PersistGate} from "redux-persist/integration/react";
import {UserInitialState} from "../user/user-reducer";
import {store, persistor} from "../config/store"
import {ConfigureInterceptor} from "../config/interceptor";
import {UserAuthorizationService} from "../user/service/authorization";
import {getUserCode} from "../user/user-model";
import {UserTokenService} from "../user/service/token";
import spinner from "../assets/spinner.svg"
import {CSSProperties} from "react";
import {TracksPage} from "../pages/tracks";

interface State {
  loading: boolean
}

export class Layout extends React.Component<null, State> {

  state = {
    loading: true
  };

  componentDidMount() {

    ConfigureInterceptor();

  }

  checkIfHasToken = () => {

    if(window.location.pathname === "/auth") {

      let code = new URL(window.location.href).searchParams.get("code")!;

      if (!code)
        window.location.href = UserAuthorizationService.getUrl();

      UserTokenService.makeRequest(code, response => {

        let data = response.data!;

        UserInitialState.functions.saveToken(data.access_token, data.refresh_token, store.dispatch);

        persistor.flush().then(() => {

          window.location.href = window.location.origin;

        });

      }, (response) => {

        console.log(response);

      });


    }

    else if(!getUserCode("accessToken"))
      window.location.href = UserAuthorizationService.getUrl();

    else
      this.setState({loading: false})

  };

  renderViews = () => {

    return (
      <div className="page-container">
        <Route path="/" exact component={AlbumsPage} />
        <Route path="/:id/tracks" exact component={TracksPage} />
      </div>
    )

  };

  renderLoading = () => {

    let div: CSSProperties = {width: "100%", marginTop: "25vh", marginRight: "5vw"};
    let img: CSSProperties = {display: "block", margin: "auto"};
    let p: CSSProperties = {textAlign: "center", margin: 0, fontSize: 30};

    return (
      <div style={div}>
        <img style={img} src={spinner} alt="spinner"/>
        <p style={p}>Carregando...</p>
      </div>
    )

  };

  render() {

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} onBeforeLift={this.checkIfHasToken}>
          <BrowserRouter>
            <div className="container">
              <img className="logo" src={logo} alt="logo"/>
              { this.state.loading ? this.renderLoading() : this.renderViews()}
            </div>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );

  }

}


