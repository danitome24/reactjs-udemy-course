import axios from 'axios';

// This will be useful when
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default instance;
