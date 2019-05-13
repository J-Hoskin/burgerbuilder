import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-ff38e.firebaseio.com/'
});

export default instance;