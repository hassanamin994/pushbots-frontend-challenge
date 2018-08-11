import { expect } from 'chai';
import { appsReducer, INITIAL_STATE } from '../../reducers/apps_reducer';
import { FETCH_APPS_LOADING, FETCH_APPS_SUCCESS, FETCH_APPS_FAILED, CHANGE_APPS_FILTER } from '../../actions/types';

describe('Reducers => app_reducer', () => {

    it('Should Set loading flag to true with type FETCH_APPS_LOADING', () => {
        const resultState = appsReducer(INITIAL_STATE, { type: FETCH_APPS_LOADING });
        expect(resultState.loading).to.be.true;
    })

    it('Should set error message when type FETCH_APPS_FAILED', () => {
        const resultState = appsReducer(INITIAL_STATE, { type: FETCH_APPS_FAILED, payload: 'something went wrong' });
        expect(resultState.error).to.equal('something went wrong');        
    })

    it('Should set list of apps according to provided filter', () => {
        const payload = {
            appsFilter: 'complete',
            totalApps: 15,
            completedApps: 2,
            inProgressApps: 3,
            sharedApps: 0,
            activeApps: 2,
            apps: {
                current_page: 1,
                data: [{}, {}]
            }
        }

        const resultState = appsReducer(INITIAL_STATE, { type: FETCH_APPS_SUCCESS, payload });
        expect(resultState.complete.data).to.be.an('array');
        expect(resultState.complete.data.length).to.eq(2);
        
        expect(resultState.counts.inProgressApps).to.eq(3);
        expect(resultState.counts.completedApps).to.eq(2);
        expect(resultState.counts.sharedApps).to.eq(0);
        expect(resultState.counts.activeApps).to.eq(2);
        
        
    })

    it('Should change filter when CHANGE_APPS_FILTER action dispatched', () => {
        const resultState = appsReducer(INITIAL_STATE, { type: CHANGE_APPS_FILTER, payload: 'inprogress' });
        expect(resultState.filter).to.equal('inprogress');        
    })

})