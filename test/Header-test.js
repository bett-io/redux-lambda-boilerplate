/* eslint-disable react/jsx-filename-extension */

import 'babel-polyfill';

import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../src/components/Header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('contains 3 <NavItem />s', function () {
    expect(shallow(<Header />).find('NavItem')).to.have.lengthOf(3);
  });
  it('contains links to about, repos and hello', function () {
    const component = shallow(<Header />).find('LinkContainer');
    expect(component.findWhere(n => n.props().to === '/about')).to.have.lengthOf(1);
    expect(component.findWhere(n => n.props().to === '/repos')).to.have.lengthOf(1);
    expect(component.findWhere(n => n.props().to === '/repo')).to.have.lengthOf(0);
    expect(component.findWhere(n => n.props().to === '/hello')).to.have.lengthOf(1);
  });
});
