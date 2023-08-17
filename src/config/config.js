// apiConfig.js

const API_BASE_URL = 'https://fakestoreapi.com';

export const API_ENDPOINTS = {
  products: `${API_BASE_URL}/products`,
  productDetails: (id) => `${API_BASE_URL}/products/${id}`,
};
