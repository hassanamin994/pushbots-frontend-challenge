import request from './request';

const login = (email, password) => {
    const loginData = {
        email,
        password
    };

    return request('POST', null, loginData, ['auth', 'login']);
}


export default {
    login
}