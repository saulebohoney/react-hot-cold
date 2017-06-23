import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';

import GuessList from './guess-list';

describe ('<GuessList />', ()=> {

    const seedGuesses = [];
    
    beforeAll(() => {
        for (let i=0; i<10; i++) {
            seedGuesses.push(Math.floor(Math.random() * 100))
        }
    });

    it('Should render without failing', () => {
        shallow(<GuessList guesses={seedGuesses}/>);
    });

    it('Should render array of values', () => {
        const wrapper = mount(<GuessList guesses={seedGuesses}/>);

        expect(wrapper.find('ul').children().length).toEqual(seedGuesses.length);
    });

});
   
 