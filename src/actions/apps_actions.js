import appsController from '../api/apps';
import { FETCH_APPS_LOADING, FETCH_APPS_SUCCESS, FETCH_APPS_FAILED, CHANGE_APPS_FILTER } from './types';

const fetchApps = (filter = 'complete') => {
    return (dispatch) => {
        dispatch({ type: CHANGE_APPS_FILTER, payload: filter });
        dispatch({ type: FETCH_APPS_LOADING });

        appsController.getApps(filter)
        .then(response => {
            console.log('response ', response)
            dispatch({ type: FETCH_APPS_SUCCESS, payload: response });
        })
        .catch(error => {
            const reason = 'Something went wrong while loading apps';
            console.log('error' , error)
            dispatch({ type: FETCH_APPS_FAILED, payload: reason })
        })
    }
}

export default {
    fetchApps
}