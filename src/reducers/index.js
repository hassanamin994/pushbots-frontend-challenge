import { combineReducers } from 'redux';
import {authReducer} from './auth_reducer';
import { appsReducer } from './apps_reducer';


export default combineReducers({
    auth: authReducer,
    apps: appsReducer
})