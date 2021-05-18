import axios from '../../utils/axios';

export const getFaceRecognition = async (url) => {
  try {
    const request = JSON.stringify({ url });
    const { data } = await axios.post(`/facial-recognition`, request);
    return data;
  } catch (e) {
    throw e;
  }
};
