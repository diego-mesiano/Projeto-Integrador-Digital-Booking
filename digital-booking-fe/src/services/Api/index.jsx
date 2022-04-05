import axios from 'axios';

const local = "http://localhost:8080";
//const aws = "http://34.230.30.141:8080";

const api = axios.create({
    
    baseURL: local
    
});

export default api;