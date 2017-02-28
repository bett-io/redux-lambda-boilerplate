import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import App from '../src/components/App';

describe('<App />', () => {
  it('contains 3 <NavItem />s', function() {
    expect(shallow(<App />).find('NavItem')).to.have.length(3);
  });
  it('contains links to about, repos and hello', function() {
    var containers = shallow(<App />).find('LinkContainer');
    expect(containers.findWhere(n => n.props().to === '/about')).to.have.length(1);
    expect(containers.findWhere(n => n.props().to === '/repos')).to.have.length(1);
    expect(containers.findWhere(n => n.props().to === '/repo')).to.have.length(0);
    expect(containers.findWhere(n => n.props().to === '/hello')).to.have.length(1);
  });
});
