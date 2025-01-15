import axios from 'axios';
import { CatModel } from '../models/CatModel';

export const FindCats = async (endpoint: string): Promise<CatModel> => {

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const url = `${baseUrl}${endpoint}`;
  const result = await axios.get(url);

  return result.data.data;
};