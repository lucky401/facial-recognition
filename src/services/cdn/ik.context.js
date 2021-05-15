import { IKContext } from 'imagekitio-react';
import {
  IMAGEKIT_URL_ENDPOINT,
  IMAGEKIT_PUBLIC_KEY,
  IMAGEKIT_AUTH_ENDPOINT,
} from '../../utils/env';

const urlEndpoint = IMAGEKIT_URL_ENDPOINT;
const publicKey = IMAGEKIT_PUBLIC_KEY;
const authenticationEndpoint = IMAGEKIT_AUTH_ENDPOINT;

export const IKContextProvider = ({ children }) => {
  return (
    <IKContext
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticationEndpoint={authenticationEndpoint}
    >
      {/* ...client side upload component goes here */}
      {children}
    </IKContext>
  );
};
