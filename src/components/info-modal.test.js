import React from 'react';
import {shallow} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', ()=> {

  it('Should render without failing', () => {
    shallow(<InfoModal />);
  });

});