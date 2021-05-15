import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { ImageInput } from '../components/ImageInput.component';
import { Img } from '../../../components/utility/Img';

import { CDNContext } from '../../../services/cdn/cdn.context';

export const UploadScreen = () => {
  const [inputError, setInputError] = useState(null);
  const { onUpload, error, isLoading, image } = useContext(CDNContext);

  const handleUpload = async (image) => {
    setInputError(null);
    await onUpload(image);
  };

  return (
    <div className="container mx-auto md:w-3/4 lg:w-3/5">
      <div className="flex min-h-screen flex-col md:flex-row justify-center items-center">
        <div className="bg-blue-500 rounded-3xl transform rotate-2 w-3/4 max-w-md p-1">
          <div className="h-full w-full text-gray-800 rounded-3xl transform shadow-lg bg-gradient-to-br  from-white to-gray-200 -rotate-2 px-4 py-4">
            <h1 className="text-xl mb-4">Upload</h1>
            <ImageInput
              handleError={(e) => setInputError(e)}
              handleUpload={handleUpload}
              isLoading={isLoading}
            >
              <div className="border relative border-blue-500 border-dashed rounded-lg w-full h-96 flex flex-col justify-center p-4 focus:bg-gray-200 hover:bg-gray-200 cursor-pointer">
                {image ? (
                  <Img
                    className="max-h-full w-full object-contain"
                    src={image}
                    transformation={[{ height: 374, width: 374 }]}
                    loading="lazy"
                    height={374}
                    width={374}
                    lqip={{ active: true }}
                  />
                ) : isLoading ? (
                  <div className="absolute top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-opacity-50 bg-gray-700 backdrop-filter backdrop-blur firefox:bg-opacity-90">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500 mx-auto mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    <span className="text-blue-500 mx-auto">Select Image</span>
                  </>
                )}
              </div>
            </ImageInput>
            {image ? (
              <div className="my-4">
                <Link
                  to="/result"
                  className="px-2 py-2 text-center w-full text-white block bg-gradient-to-br from-green-400 to-blue-500 border border-transparent rounded-md hover:to-green-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-100"
                >
                  Select
                </Link>
              </div>
            ) : null}
            {error || inputError ? (
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
                  <p>{inputError || error.toString()}</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
