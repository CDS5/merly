// src/controller/api.js

import axios from 'axios';

const apiRequest = async (method, url, payload = {}, params = {}) => {
  try {
    const response = await axios({
      method,
      url,
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
