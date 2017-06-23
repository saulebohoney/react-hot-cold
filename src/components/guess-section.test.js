import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', ()=> {

  it('Should render without failing', () => {
    shallow(<GuessSection />);
  });

  it('Should display feedback passed into it', () => {
    const feedbackOptions = ['Hot', 'Cold', 'Ice Cold', 'Warm', 'Winner!', 'New Game'];
    const randomIndex = Math.floor(Math.random() * 5)
    const wrapper = mount(<GuessSection feedback={feedbackOptions[randomIndex]}/>);

    expect(wrapper.find('h2').html()).toEqual(`<h2 id="feedback">${feedbackOptions[randomIndex]}</h2>`)

  })

});