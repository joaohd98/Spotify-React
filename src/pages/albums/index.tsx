import React from 'react';
import {SearchBar} from "./components/search-bar";
import {SubHeaderTitle} from "./components/sub-header-title";
import {ListAlbums} from "./components/list-albums";
import {StatesReducers} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {AlbumsInitialState} from "./redux/albums-reducer";
import {connect} from "react-redux";
import {AlbumsPageModel} from "./services/albums-page-model";
import {Helpers} from "../../helpers";

class Albums extends React.Component<AlbumsPageModel.Props, AlbumsPageModel.State> {

  state = {
    reachBottom: false,
  };

  handleScroll = () => {

    if(this.props.footerLoading.seeMore && Helpers.checkIfReachBottom() && !this.state.reachBottom) {

      this.setState({reachBottom: true});
      this.props.functions.addAlbums(this.props.text, this.props.offset, this.props.limit);

    }

  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps: Readonly<AlbumsPageModel.Props>, prevState: Readonly<AlbumsPageModel.State>, snapshot?: any): void {

    if(prevProps.offset !== this.props.offset)
      this.setState({reachBottom: false});

  }

  render() {

    return (
      <div>
        <SearchBar {...this.props}/>
        <SubHeaderTitle {...this.props}/>
        <ListAlbums {...this.props} />
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
