import axios from 'axios';

const API_URL = 'https://smartbin-be.asterme.xyz/';

const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

apiClient.interceptors.request.use(
    (req) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            req.headers['Authorization'] = `Bearer ${token.slice(1, -1)}`;
        }
        return req;
    },
    (err) => {
        return Promise.reject(err);
    }
);


export default apiClient;
