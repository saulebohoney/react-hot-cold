import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', ()=> {

  it('Should render without failing', () => {
    shallow(<TopNav />);
  });

  it('Should call a function when "new game" is clicked', () => {
    const onNewGame = jest.fn();
    const wrapper = mount(<TopNav onNewGame={onNewGame}/>);
    wrapper.find('.new').simulate('click');
    expect(onNewGame).toHaveBeenCalled();
  });

  it('Should call a function when "what" is clicked', () => {
    const onInfo = jest.fn();
    const wrapper = mount(<TopNav onInfo={onInfo}/>);
    wrapper.find('.what').simulate('click');
    expect(onInfo).toHaveBeenCalled();
  });

});