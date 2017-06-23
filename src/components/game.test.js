import React from 'react';
import {shallow} from 'enzyme';
import Header from './header';

import Game from './game';

describe('<Game />', ()=> {

  it('Should render without failing', () => {
    shallow(<Game />);
  });

  it('Should start a new game when prompted', () => {
    const wrapper = shallow(<Game />);
    const instance = wrapper.instance();
    const firstAnswer = instance.state.correctAnswer;
    instance.newGame();
    const newAnswer = instance.state.correctAnswer;
    expect(firstAnswer === newAnswer).toBe(false);
  });

  it('Should reject invalid entry', () =>{
    const wrapper = shallow(<Game />);
    const instance = wrapper.instance();
    instance.guess('');
    //console.log(instance.feedback);
    expect(instance.state.feedback).toEqual('Please enter a valid number')
  })

});