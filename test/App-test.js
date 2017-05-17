import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { App } from '../src/containers/App';

describe('<App />', () => {
  it('contains 3 <NavItem />s', function() {
    expect(shallow(<App />).find('NavItem')).to.have.lengthOf(3);
  });
  it('contains links to about, repos and hello', function() {
    var containers = shallow(<App />).find('LinkContainer');
    expect(containers.findWhere(n => n.props().to === '/about')).to.have.lengthOf(1);
    expect(containers.findWhere(n => n.props().to === '/repos')).to.have.lengthOf(1);
    expect(containers.findWhere(n => n.props().to === '/repo')).to.have.lengthOf(0);
    expect(containers.findWhere(n => n.props().to === '/hello')).to.have.lengthOf(1);
  });
});
