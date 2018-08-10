import { API_BASE_URL } from '../config';
import axios from 'axios';
import store from '../store';

export default (method, params = null, data = null, url_parts = [], authenticated = true) => {
    return new Promise((resolve, reject) => {
        method = method.toUpperCase();

        let path = url_parts.join('/');
        let url = `${API_BASE_URL}/${path}`
        console.log(url)
        let headers = {};
        let config = {
            url,
            method,
        };

        if (method === 'GET' && params) {
            config['params'] = prepareParams(params);
        }

        if (method !== 'GET' && data) {
            config['data'] = data;
        }

        // setup headers
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';
        // if authenticated request, add the access token in headers 
        if (authenticated && store.getState()) {
            let access_token = store.getState()['auth']['access_token'] || null;
            if (access_token) {
                headers['Authorization'] = access_token;
            }
        }
    
        config['headers'] = headers;

        axios.request(config)
        .then(response => {
            return resolve(response['data']);
        })
        .catch(error => {
            reject(error['data'] || error);
        });

    })
    
}


const prepareParams = (params) => {
    let result = {};
    
    if (params) {
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                let value = params[key];
                // handle array params by joining them with commas
                if (Array.isArray(value)) {
                    value = value.join(',');
                }
                switch (typeof (value)) {
                    case 'object':
                        throw new Error('Object is not allowed as GET parameter');
                    default:
                        result[key] = value
                        break;
                }
            }
        }
    }
    return result;
}
