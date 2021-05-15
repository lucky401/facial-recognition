import { useState, createContext } from 'react';
import axios from 'axios';

import {
  IMAGEKIT_PUBLIC_KEY,
  IMAGEKIT_AUTH_ENDPOINT,
  IMAGEKIT_ENDPOINT,
} from '../../utils/env';

export const CDNContext = createContext();
export const CDNContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const onUpload = async (base64) => {
    try {
      setImage(null);
      setIsLoading(true);

      const {
        data: { token, expire, signature },
      } = await axios.get(IMAGEKIT_AUTH_ENDPOINT);

      const formData = new FormData();
      formData.append('file', base64);
      formData.append('publicKey', IMAGEKIT_PUBLIC_KEY);
      formData.append('signature', signature);
      formData.append('expire', expire);
      formData.append('token', token);
      formData.append('fileName', 'face_recognition');

      const {
        data: { url },
      } = await axios.post(IMAGEKIT_ENDPOINT, formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
      setImage(url);
      return url;
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const resetImage = () => {
    setImage(null);
  };

  return (
    <CDNContext.Provider
      value={{
        image,
        resetImage,
        isLoading,
        error,
        onUpload,
      }}
    >
      {children}
    </CDNContext.Provider>
  );
};
