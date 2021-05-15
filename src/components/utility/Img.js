import { IKImage } from 'imagekitio-react';

import { IMAGEKIT_URL_ENDPOINT } from '../../utils/env';

export const Img = (props) => (
  <IKImage urlEndpoint={IMAGEKIT_URL_ENDPOINT} {...props} />
);
