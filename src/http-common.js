import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost:3001/api/users/`
});