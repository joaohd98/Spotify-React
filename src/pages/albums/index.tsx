import React from 'react';
import {SearchBar} from "./components/search-bar";
import {SubHeaderTitle} from "./components/sub-header-title";
import {ListAlbums} from "./components/list-albums";
import {StatesReducers} from "../../config/store";
import {bindActionCreators} from "redux";
import {AlbumsInitialState} from "./redux/albums-reducer";
import {connect} from "react-redux";
import {AlbumsPageModel} from "./services/albums-page-model";
import {FooterLoading} from "./components/footer-loading";

class Albums extends React.Component<AlbumsPageModel.Props, AlbumsPageModel.State> {

  render() {

    return (
      <div>
        <SearchBar {...this.props}/>
        <SubHeaderTitle {...this.props}/>
        <ListAlbums {...this.props} />
        <FooterLoading {...this.props} />
      </div>
    )

  }

}

const mapStateToProps = (state: StatesReducers) => {
  return state.AlbumsReducer
};

const mapDispatchToProps = dispatch => ({
  functions: bindActionCreators(AlbumsInitialState.functions, dispatch)
});

export const AlbumsPage = connect(mapStateToProps, mapDispatchToProps)(Albums);
