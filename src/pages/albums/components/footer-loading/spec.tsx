import React from 'react';
import { shallow } from 'enzyme';
import {FooterLoading} from "./index";
import {AlbumsPageInitialState} from "../../redux/albums-page-reducer";

describe("FooterLoadingComponent", () => {

  it("render", () => {

    let res = shallow(<FooterLoading {...AlbumsPageInitialState}/>);

    expect(res).toBeTruthy();

  })

});
