import React from 'react';
import { shallow } from 'enzyme';

it("it should render without error", () => {

  let res = shallow(<div>Test</div>);

  expect(res).toBeTruthy();

});
