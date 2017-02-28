import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Hello from '../src/components/Hello';

describe('<Hello />', () => {
  it('renders "hello world" string', function() {
    expect(shallow(<Hello />).contains(<div>hello world</div>)).to.equal(true);
  });
});
