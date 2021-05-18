import axios from '../../utils/axios';

export const loginRequest = async (email, password) => {
  try {
    const data = await axios.post('/auth/login', { email, password });
    return data;
  } catch (e) {
    throw e;
  }
};

export const registerRequest = async (name, email, password) => {
  try {
    const data = await axios.post('/auth/register', { name, email, password });
    return data;
  } catch (e) {
    throw e;
  }
};

export const logoutRequest = async () => {
  try {
    const data = await axios.post('/auth/register');
    return data;
  } catch (e) {
    throw e;
  }
};
