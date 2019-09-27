import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {FooterLoading} from "./index";
import {AlbumsPageInitialState} from "../../redux/albums-page-reducer";

describe("FooterLoadingComponent", () => {

  let component: ShallowWrapper;
  beforeEach(() => component = shallow(<FooterLoading {...AlbumsPageInitialState}/>));

  it("render", () => {

    expect(component).toBeTruthy();

  });

});
