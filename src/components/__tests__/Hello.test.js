/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import toJson from 'enzyme-to-json';
import Hello from '../Hello';
import { shallow } from 'enzyme';

describe('Hello component', () => {
  test('should pass snapshot check', () => {
    const rendered = shallow(<Hello />);
    expect(toJson(rendered)).toMatchSnapshot();
  });

  test('should render "hello world" string', () => {
    expect(shallow(<Hello />).contains(<div>hello world</div>)).toBeTruthy();
  });

  test('should contain a link to /about', () => {
    expect(shallow(<Hello />).contains(<a href="/about">about</a>)).toBeTruthy();
  });
});
