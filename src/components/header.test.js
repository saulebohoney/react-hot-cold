import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', ()=> {

  it('Should render without failing', () => {
    shallow(<Header />);
  });

});