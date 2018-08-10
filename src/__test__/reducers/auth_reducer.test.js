import { expect } from 'chai';
import { authReducer, INITIAL_STATE } from '../../reducers/auth_reducer';
import { AUTH_LOADING, AUTH_SUCCESS, AUTH_FAILED } from '../../actions/types';

describe('Reducers => auth_reducer', () => {

    it('Should Set loading flag to true with type AUTH_LOADING', () => {
        const resultState = authReducer(INITIAL_STATE, { type: AUTH_LOADING });
        expect(resultState.loading).to.be.true;
    })

    it('Should set loading flag to false with type AUTH_SUCCESS', () => {
        const resultState = authReducer(INITIAL_STATE, { type: AUTH_SUCCESS, payload: { user: {}, access_token: {} } });
        expect(resultState.loading).to.be.false;
        expect(resultState.error).to.be.empty;
    });

    it('Should set error message with type AUTH_FAILED', () => {
        const resultState = authReducer(INITIAL_STATE, {type: AUTH_FAILED, payload: 'something went wrong'});
        expect(resultState.loading).to.be.false;
        expect(resultState.error).to.equal('something went wrong');
    })

})