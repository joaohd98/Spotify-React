import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {FooterLoading} from "./index";
import {AlbumsPageInitialState} from "../../redux/albums-page-reducer";
import {ServiceStatus} from "../../../../service";

describe("FooterLoadingComponent", () => {

  let component: ShallowWrapper;
  beforeEach(() => component = shallow(<FooterLoading {...AlbumsPageInitialState}/>));

  it("check if show empty", () => {

    expect(component).toBeFalsy();

  });

  it("check if show 'ver mais' button", () => {

    let initialState = AlbumsPageInitialState;

    initialState.cards.push({
      id: "",
      type: "artist",
      artistName: "",
      albumName: "",
      trackName: "",
      img: ""
    });

    component.setProps(initialState);

    expect(component.hasClass('see-more')).toBeTruthy();

  });


  it("check if show 'ver mais' button", () => {

    let initialState = AlbumsPageInitialState;

    initialState.cards.push({
      id: "",
      type: "artist",
      artistName: "",
      albumName: "",
      trackName: "",
      img: ""
    });

    component.setProps(initialState);

    expect(component.hasClass('see-more')).toBeTruthy();

  });

  it("check if show spinner", () => {

    let initialState = AlbumsPageInitialState;

    initialState.cards.push({
      id: "",
      type: "artist",
      artistName: "",
      albumName: "",
      trackName: "",
      img: ""
    });

    component.setProps(initialState);
    component.setState({
      seeMore: true,
      reachBottom: true,
    });

    expect(component.hasClass('loading')).toBeTruthy();

  });

  it("check if show error message", () => {

    let initialState = AlbumsPageInitialState;

    initialState.status = ServiceStatus.failed;

    component.setProps(initialState);

    expect(component.hasClass('error-message')).toBeTruthy();

  });

});
