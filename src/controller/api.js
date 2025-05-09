// src/controller/api.js

import axios from 'axios';

// Crea una instancia de Axios con la URL base
const apiClient = axios.create({
  baseURL: 'https://merly-rest-api-production.up.railway.app/', // URL base
  timeout: 10000, // Tiempo de espera opcional
});

const apiRequest = async (method, endpoint, payload = {}, params = {}) => {
  try {
    const response = await apiClient({
      method,
      url: endpoint, // Solo necesitas pasar el endpoint
      data: method !== 'get' ? payload : {},
      params: method === 'get' ? params : {},
    });
    return response.data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export default apiRequest;
