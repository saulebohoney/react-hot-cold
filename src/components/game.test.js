import React from 'react';
import {shallow} from 'enzyme';
import Header from './header';

import Game from './game';

describe('<Game />', ()=> {

  it('Should render without failing', () => {
    shallow(<Game />);
  });

  it('Should render each component', () =>{
      const wrapper = shallow(<Game/>);
      expect(wrapper.contains(<header></header>)).toEqual(true);

      // const instance = wrapper.instance();
      //const lists = wrapper.find('List');
   });
});