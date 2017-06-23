import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe ('<GuessList />', ()=> {
    const seedLists = [];
    beforeAll(() => {
        for (let i=0; i<10; i++) {
            seedLists.push(i)
        }
    });

  it('Should render without failing', () => {
    shallow(<GuessList guesses={seedLists}/>);
  });

});
   
 