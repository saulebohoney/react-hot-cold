import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', ()=> {

  it('Should render without failing', () => {
    shallow(<InfoModal />);
  });

  it('Should call the close function when "got it" button is clicked', () => {
    const closeFunction = jest.fn();
    const wrapper = mount(<InfoModal onClose={closeFunction}/>);
    wrapper.find('.close').simulate('click');
    expect(closeFunction).toHaveBeenCalled;
  });
  
});