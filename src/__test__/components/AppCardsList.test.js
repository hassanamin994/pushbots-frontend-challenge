import React from 'react';
import { expect } from 'chai';
import moxios from 'moxios';
import Enzyme from 'enzyme';

import AppCard from '../../components/common/AppCard';
import AppCardsList from '../../components/common/AppCardsList';

import { AppsArray } from '../helpers/mocks';

describe('Components => <AppCardsList />', () => {

    it('Should show an app card for each app item given in props', () => {
        let wrapped = Enzyme.mount(
            <AppCardsList apps={AppsArray} />
        );
        expect(wrapped.find(AppCard).length).to.eq(AppsArray.length);
    });

    it('Should show No content available if there\'s no apps provided', () => {
        let wrapped = Enzyme.mount(
            <AppCardsList />
        );

        expect(wrapped.find(AppCard).length).to.eq(0)
        expect(wrapped.render().text().toLowerCase()).to.contain('no content available');
    })

})