import React from 'react';
import {SearchBar} from "./components/search-bar";
import {SubHeaderTitle} from "./components/sub-header-title";
import {ListAlbums} from "./components/list-albums";

export class Albums extends React.Component {

  render() {

    return (
      <div>
        <SearchBar/>
        <SubHeaderTitle/>
        <ListAlbums />
      </div>
    )

  }

}
