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
    expect(instance.state.feedback).toEqual('Please enter a valid number')
  });

  it('Should handle valid entries correctly', () => {
    const wrapper = shallow(<Game />);
    const instance = wrapper.instance();
    const correct = instance.state.correctAnswer;
    instance.guess(correct + 50);
    expect(instance.state.feedback).toEqual('You\'re Ice Cold...');
    instance.guess(correct + 30);
    expect(instance.state.feedback).toEqual('You\'re Cold...');
    instance.guess(correct + 10);
    expect(instance.state.feedback).toEqual('You\'re Warm');
    instance.guess(correct + 1);
    expect(instance.state.feedback).toEqual('You\'re Hot!');
    instance.guess(correct - 50);
    expect(instance.state.feedback).toEqual('You\'re Ice Cold...');
    instance.guess(correct - 30);
    expect(instance.state.feedback).toEqual('You\'re Cold...');
    instance.guess(correct - 10);
    expect(instance.state.feedback).toEqual('You\'re Warm');
    instance.guess(correct - 1);
    expect(instance.state.feedback).toEqual('You\'re Hot!');
    instance.guess(correct);
    expect(instance.state.feedback).toEqual('You got it!');
  });

  it('Should update guesses array', () => {
    const wrapper = shallow(<Game />);
    const instance = wrapper.instance();

    const testValues = [];

    for(let i = 0; i < 10; i++){
      let value = Math.floor(Math.random() * 100);
      testValues.push(value);
    }

    testValues.forEach(value => {
      instance.guess(value);
    });

    expect(testValues).toEqual(instance.state.guesses);

  });

});