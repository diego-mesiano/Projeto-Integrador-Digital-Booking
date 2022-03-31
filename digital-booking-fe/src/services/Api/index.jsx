import axios from 'axios';

const api = axios.create({
    baseURL: "http://34.230.30.141:8080"
    
});

export default api;