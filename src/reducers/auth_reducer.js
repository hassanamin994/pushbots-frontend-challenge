import { AUTH_LOADING, AUTH_SUCCESS, AUTH_FAILED } from "../actions/types";

export const INITIAL_STATE = {
    authenticated: false,
    loading: false,
    error: '',
    user: undefined, // { _id: string, name: string, email: string }
    access_token: ''
}


const handlers = {
    [AUTH_LOADING]: (state) => {
        return { ...state, loading: true, error: '' };
    },
    [AUTH_SUCCESS]: (state, action) => {
        let { user, access_token } = action.payload;
        return { ...state, loading: false, authenticated: true, error: '', user, access_token };
    },
    [AUTH_FAILED]: (state, action) => {
        let error = action.payload;
        return { ...state, loading: false, error };
    }

}

export const authReducer =  (state = INITIAL_STATE, action) => 
    handlers[action.type] ? handlers[action.type](state, action) : state