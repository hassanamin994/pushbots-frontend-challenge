import { FETCH_APPS_LOADING, FETCH_APPS_SUCCESS, FETCH_APPS_FAILED } from "../actions/types";

export const INITIAL_STATE = {
    loading: false,
    error: '',
    counts: {
        totalApps: 0,
        completedApps: 0,
        inProgressApps: 0,
        sharedApps: 0,
        activeApps: 0
    },
    filter: 'complete',
    complete: {
        current_page: 0,
        data: []
    },
    inprogress: {
        current_page: 0,
        data: []
    },
    shared: {
        current_page: 0,
        data: []
    },
    active: {
        current_page: 0,
        data: []
    }
}


const handlers = {
    [FETCH_APPS_LOADING]: (state) => {
        return { ...state, loading: true, error: '' };
    },
    [FETCH_APPS_SUCCESS]: (state, action) => {
        const response = action.payload;
        const newState = Object.assign({}, state);
        
        newState['error'] = '';
        newState['loading'] = false;

        // Set Counts
        const {
            totalApps,
            completedApps,
            inProgressApps,
            sharedApps,
            activeApps
        } = response;

        newState['counts'] = {
            totalApps,
            completedApps,
            inProgressApps,
            sharedApps,
            activeApps
        };

        // Set filtered Apps list
        newState[response.appsFilter] = response.apps
        newState['filter'] = response.appsFilter;
        return newState;
    },
    [FETCH_APPS_FAILED]: (state, action) => {
        let error = action.payload;
        return { ...state, loading: false, error };
    }

}

export const appsReducer =  (state = INITIAL_STATE, action) => 
    handlers[action.type] ? handlers[action.type](state, action) : state