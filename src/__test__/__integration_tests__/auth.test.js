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

describe('Integration => Auth', () => {
    let wrapped;
    beforeEach(() => {
        moxios.install();
        moxios.stubRequest(`${API_BASE_URL}/auth/login`, {
            response: {
                access_token: "sometoken",
                token_type: "bearer",
                user: {
                    _id: "5aee2fde9a89200d1a4b45e2",
                    name: "Code Challenge",
                    email: "codechallenge@gmail.com",
                }
            }
        })
        wrapped = Enzyme.mount(
            <MemoryRouter>
                <Root>
                    <Login />
                </Root>
            </MemoryRouter>
        )
    })

    afterEach(() => {
        moxios.uninstall();
        wrapped.unmount();
    })

    it('Should be able to login with correct credentials and get redirected', (done) => {
        // simulate updating email and password fields
        expect(wrapped.find(Login).length).to.eq(1);

        wrapped.find('input#email').simulate('change', {
            target: { value: TEST_EMAIL }
        });
        wrapped.find('input#password').simulate('change', {
            target: { value: TEST_PASSWORD }
        });
        wrapped.update();
        wrapped.find('form#login-form').simulate('submit');
        wrapped.update();

        moxios.wait(() => {
            wrapped.update();
            // Test if the form is still there
            expect(wrapped.find('form#login-form').length).to.eq(0);
            done();
        })
    })

})