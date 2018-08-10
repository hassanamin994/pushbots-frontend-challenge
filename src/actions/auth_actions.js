import authController from '../api/auth';
import { AUTH_LOADING, AUTH_FAILED, AUTH_SUCCESS } from './types';

const login = (email, password) => {
    return (dispatch) => {
        dispatch({type: AUTH_LOADING});

        authController.login(email, password)
        .then(response => {
            const loginSuccessAction = {
                type: AUTH_SUCCESS, 
                payload: {
                    user: response.user,
                    access_token: `${response.token_type} ${response.access_token}`
                }
            };

            dispatch(loginSuccessAction);
        })
        .catch(error => {
            dispatch({type: AUTH_FAILED, payload: 'Invalid email or password'});
        })
    }
}


export default {
    login
}