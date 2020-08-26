import axios from 'axios';

const api = axios.create({
    //ip que aparece na aplicação Expo do celular
    baseURL: 'http://192.168.31.152:3333'
});

export default api;