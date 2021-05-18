import axios from 'axios';

import { BASE_API_URL } from './env';

export default axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
