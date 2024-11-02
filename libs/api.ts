import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.106:8000/api', // Substitua pela URL base da sua API
  timeout: 10000, // Tempo limite de 10 segundos para requisições
});

export default api;
