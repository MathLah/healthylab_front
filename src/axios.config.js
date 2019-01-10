import axios from 'axios';
import store from 'store';

// axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.baseURL = 'http://163.172.221.230:8000/';

// TODO get interceptors in their own file one day
axios.interceptors.response
    .use(
        response => response,
        (error) => {
            if (error.response) {
                if (error.response.status === 401) {
                    console.error('Wrong session');
                }
            }
            return Promise.reject(error);
        },
    );

axios.interceptors.request
    .use(
        (request) => {
            if (store.state.token) {
                request.headers.Authorization = `Token ${store.state.token}`;
            }
            return request;
        },
        error => error,
    );

export default axios;
