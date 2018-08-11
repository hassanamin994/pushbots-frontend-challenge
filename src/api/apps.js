import request from './request';

const getApps = (filter = 'complete') => {
    return request('GET', {filter}, null, []);
}


export default {
    getApps
}