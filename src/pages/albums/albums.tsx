import React from 'react';
import {SearchBar} from "./components/search-bar";
import {SubHeaderTitle} from "./components/sub-header-title";
import {ListAlbums} from "./components/list-albums";
import {StatesReducers} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {AlbumsInitalState} from "./redux/albums-reducer";
import {connect} from "react-redux";
import {AlbumsModel} from "./services/albums-model";

class Albums extends React.Component<AlbumsModel.Props, AlbumsModel.State> {

  render() {

    return (
      <div>
        <SearchBar {...this.props}/>
        <SubHeaderTitle {...this.props}/>
        <ListAlbums />
      </div>
    )

  }

}

const mapStateToProps = (state: StatesReducers) => {
  return state.AlbumsReducer
};

const mapDispatchToProps = dispatch => ({
  functions: bindActionCreators(AlbumsInitalState.functions, dispatch)
});

export const AlbumsPage = connect(mapStateToProps, mapDispatchToProps)(Albums);
