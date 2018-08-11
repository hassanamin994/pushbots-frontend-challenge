import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { expect } from 'chai';
import moxios from 'moxios';
import Enzyme from 'enzyme';

import { API_BASE_URL } from '../../config';
import authActions from '../../actions/auth_actions';
import Root from '../../Root';
import AppsDashboard from '../../components/AppsDashboard';
import { AppsResponse } from '../helpers/mocks';

describe('Integration => Apps', () => {

    describe('<AppsDashboard /> ', () => {
        let wrapped;
        beforeEach(() => {
            moxios.install();
            moxios.stubRequest(`${API_BASE_URL}`, {
                response: AppsResponse
            })
            wrapped = Enzyme.mount(
                <Root>
                    <AppsDashboard />
                </Root>
            )
        })

        afterEach(() => {
            moxios.uninstall();
            wrapped.unmount();
        })
        
        it('Selected filter should have active class')

    })

})