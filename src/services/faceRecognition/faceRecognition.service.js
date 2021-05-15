import { BASE_API_URL } from '../../utils/env';
import axios from 'axios';

export const getFaceRecognition = async (url) => {
  try {
    const request = JSON.stringify({ url });
    const { data } = axios.post(
      `${BASE_API_URL}/face-recogniton-by-url`,
      request
    );
    return data;
  } catch (e) {
    throw e;
  }
};
