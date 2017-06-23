import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';

import Header from './header';

describe('<Header />', ()=> {

  it('Should render without failing', () => {
    shallow(<Header />);
  });

  it('Should toggle the modal', () => {
    const wrapper = mount(<Header />);
    const instance = wrapper.instance();

    const original = instance.state.showInfoModal
    instance.toggleInfoModal();
    expect(original === instance.state.showInfoModal).toEqual(false);
  });

});