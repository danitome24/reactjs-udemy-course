import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-4738d.firebaseio.com/',

});

export default instance;
