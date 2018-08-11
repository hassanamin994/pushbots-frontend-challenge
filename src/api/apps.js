import request from './request';

const getApps = (filter = 'complete') => {
    console.log('filter from api ', filter)
    return request('GET', {filter}, null, []);
}


export default {
    getApps
}