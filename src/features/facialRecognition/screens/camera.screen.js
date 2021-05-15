import { useState, useContext } from 'react';
import Camera from 'react-html5-camera-photo';
import { useHistory } from 'react-router-dom';
import 'react-html5-camera-photo/build/css/index.css';

import { CDNContext } from '../../../services/cdn/cdn.context';
import { ImagePreview } from '../components/ImagePreview.component';
export const CameraScreen = () => {
  let history = useHistory();
  const [dataUri, setDataUri] = useState('');
  const [cameraError, setCameraError] = useState(null);

  const { onUpload, error, isLoading } = useContext(CDNContext);

  const handleTakePhotoAnimationDone = (dataUri) => {
    setDataUri(dataUri);
  };

  const handleDelete = () => {
    setDataUri('');
  };
  const handleUpload = async () => {
    await onUpload(dataUri);
    history.push('/result');
  };
  const handleCameraError = (error) => {
    setCameraError(error.toString());
  };

  return (
    <div className="container mx-auto md:w-3/4 lg:w-3/5">
      <div className="flex min-h-screen flex-col md:flex-row justify-center items-center">
        <div className="bg-blue-500 rounded-3xl transform rotate-2 w-3/4 max-w-xl p-1">
          <div className="h-full relative w-full text-gray-800 rounded-3xl transform shadow-lg bg-gradient-to-br  from-white to-gray-200 -rotate-2 px-4 py-4">
            <h1 className="text-xl text-center mb-4">Face Recognition</h1>
            <div className="relative">
              {isLoading ? (
                <div className="absolute top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-opacity-50 bg-gray-700 backdrop-filter backdrop-blur firefox:bg-opacity-90">
                  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : null}

              {dataUri && !cameraError && !error ? (
                <ImagePreview
                  dataUri={dataUri}
                  handleDelete={handleDelete}
                  handleUpload={handleUpload}
                />
              ) : !cameraError && !error ? (
                <Camera
                  onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                  onCameraError={handleCameraError}
                />
              ) : (
                <div className="bg-red-50 p-4 rounded flex items-start text-red-600 my-4 shadow-lg max-w-xl mx-auto">
                  <div className="text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="px-3">
                    <h3 className="text-red-800 font-semibold tracking-wider">
                      Error
                    </h3>
                    <p>{cameraError || error.toString()}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
