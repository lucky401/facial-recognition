import axios from '../../utils/axios';

export const profileRequest = async (email, password) => {
  try {
    const data = await axios.get('/profile');
    return data;
  } catch (e) {
    throw e;
  }
};
