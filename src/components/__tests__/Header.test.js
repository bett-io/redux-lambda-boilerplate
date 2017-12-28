/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import toJson from 'enzyme-to-json';
import Header from '../Header';
import { shallow } from 'enzyme';

describe('Header component', () => {
  test('should pass snapshot check', () => {
    const rendered = shallow(<Header />);
    expect(toJson(rendered)).toMatchSnapshot();
  });

  test('contains 3 <NavItem />s', () => {
    expect(shallow(<Header />).find('NavItem')).toHaveLength(3);
  });

  test('contains links to about, repos and hello', () => {
    const component = shallow(<Header />).find('LinkContainer');
    expect(component.findWhere(n => n.props().to === '/about')).toHaveLength(1);
    expect(component.findWhere(n => n.props().to === '/repos')).toHaveLength(1);
    expect(component.findWhere(n => n.props().to === '/repo')).toHaveLength(0);
    expect(component.findWhere(n => n.props().to === '/hello')).toHaveLength(1);
  });
});
