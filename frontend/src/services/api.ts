import axios from 'axios';
import { ProductInput } from '../types/Product';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getProducts = () => api.get('/produtos');
export const searchProducts = (term: string) => api.get(`/pesquisa/${term}`);
export const createProduct = (product: ProductInput) => api.post('/produtos', product);
export const filterProducts = (params: Record<string, string | number>) => 
  api.get('/produtos/filter', { params });

export default api;