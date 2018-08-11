import React from 'react';
import { expect } from 'chai';
import moxios from 'moxios';
import Enzyme from 'enzyme';

import AppsFilter from '../../components/common/AppsFilter';

import { filtersList } from '../helpers/mocks';

describe('Components => <AppsFilter />', () => {

    it('Should have an active class on the button with title of provided filter', () => {
        let wrapped = Enzyme.mount(
            <AppsFilter filters={filtersList} currentFilter={'inprogress'}  />
        );

        expect(wrapped.find('button.active').render().text().toLowerCase()).to.contain('progress');

    });

})