import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', ()=> {

  it('Should render without failing', () => {
    shallow(<GuessCount />);
  });

  it('Should display number passed to it as a prop', () => {
    const count = Math.floor(Math.random()*10);
    const wrapper = mount(<GuessCount count={count}/>);
    expect(wrapper.contains(<span id="count">{count}</span>)).toEqual(true);
  })

});