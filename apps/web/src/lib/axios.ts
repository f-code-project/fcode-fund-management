import axios from 'axios';

export const privateApi = axios.create({
  baseURL: process.env.PRIVATE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const publicApi = axios.create({
  baseURL: process.env.PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
