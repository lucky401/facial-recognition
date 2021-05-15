import { Switch, Route } from 'react-router-dom';

import { CDNContextProvider } from '../../services/cdn/cdn.context';

import { FacialRecognitionScreen } from '../../features/facialRecognition/screens/facialRecognition.screen';
import { CameraScreen } from '../../features/facialRecognition/screens/camera.screen';
import { UploadScreen } from '../../features/facialRecognition/screens/upload.screen';
import { ResultScreen } from '../../features/facialRecognition/screens/result.screen';

export const DashboardNavigator = () => (
  <Switch>
    <Route path="/" exact component={FacialRecognitionScreen} />
    <CDNContextProvider>
      <Route path="/camera" exact component={CameraScreen} />
      <Route path="/upload" exact component={UploadScreen} />
      <Route path="/result" exact component={ResultScreen} />
    </CDNContextProvider>
  </Switch>
);
