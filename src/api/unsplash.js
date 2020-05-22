import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID YC4gqgaYSHLcm2Ung0Uq4jKRY5d4gy02QiPsrqz3zU0'
    }
});