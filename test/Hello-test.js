/* eslint-disable react/jsx-filename-extension */

import 'babel-polyfill';

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Hello from '../src/components/Hello';

describe('<Hello />', () => {
  it('renders "hello world" string', function() {
    expect(shallow(<Hello />).contains(<div>hello world</div>)).to.equal(true);
  });
  it('contains a link to /about', function() {
    expect(shallow(<Hello />).contains(<a href="/about">about</a>)).to.equal(true);
  });
});
