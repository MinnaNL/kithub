import axios, { AxiosRequestConfig } from 'axios';
import { CatModel } from '../models/CatModel';

// Reusable fetch function to handle GET requests
const makeRequest = async (url: string, method: 'GET', body?: any) => {
  const options: AxiosRequestConfig = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (body) {
    options.data = body;
  }

  try {
    const response = await axios(options);
    return response.data;
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
};

// Fetch cat details
export const FindCat = async (endpoint: string): Promise<CatModel> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}${endpoint}`;
  return await makeRequest(url, 'GET');
};