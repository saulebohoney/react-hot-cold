import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', ()=> {

  it('Should render without failing', () => {
    shallow(<GuessForm />);
  });

  it('Should call a function on submit', () => {
    const onGuess = jest.fn();
    const wrapper = mount(<GuessForm onGuess={onGuess}/>);
    wrapper.simulate('submit');
    expect(onGuess).toHaveBeenCalled();
  });

  it('Should send up value that is entered in form', () => {

    let testValue = Math.floor(Math.random() * 100);
    let testPass = false;

    const onGuess = function testingInput(v){
      if(v == testValue){
        testPass = true;
      };
    };

    const wrapper = mount(<GuessForm onGuess={onGuess}/>);
    wrapper.find('#userGuess').simulate('change', {target: {value: testValue}})
    wrapper.simulate('submit');

    expect(testPass).toEqual(true);

  })

});