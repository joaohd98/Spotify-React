import React from 'react';
import {SearchBar} from "./components/search-bar";
import {SubHeaderTitle} from "./components/sub-header-title";

export class Albums extends React.Component {

  render() {

    return (
      <div>
        <SearchBar/>
        <SubHeaderTitle/>
      </div>
    )

  }

}
