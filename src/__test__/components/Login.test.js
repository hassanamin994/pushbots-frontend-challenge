import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { expect } from 'chai';
import moxios from 'moxios';
import Enzyme from 'enzyme';

import { API_BASE_URL } from '../../config';
import authActions from '../../actions/auth_actions';
import Root from '../../Root';
import Login from '../../components/Login';

const TEST_EMAIL = 'codechallenge@gmail.com';
const TEST_PASSWORD = 'secret';

describe('Components => <Login />', () => {
    let wrapped = Enzyme.mount(
        <MemoryRouter>
            <Root>
                <Login />
            </Root>
        </MemoryRouter>
    )

    beforeEach(() => {
        moxios.install();
        wrapped = Enzyme.mount(
            <MemoryRouter>
                <Root>
                    <Login />
                </Root>
            </MemoryRouter>
        )
    })

    afterEach(() => {
        wrapped.unmount();
    })

    it('Should be able to enter email and password', () => {
        // simulate updating email and password fields
        wrapped.find('input#email').simulate('change', {
            target: { value: TEST_EMAIL }
        });
        wrapped.find('input#password').simulate('change', {
            target: { value: TEST_PASSWORD }
        });
        wrapped.update();
        expect(wrapped.find('input#email').prop('value')).to.equal(TEST_EMAIL);
        expect(wrapped.find('input#password').prop('value')).to.equal(TEST_PASSWORD);
    })

})