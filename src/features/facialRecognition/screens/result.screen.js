import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CDNContext } from '../../../services/cdn/cdn.context';
import { getFaceRecognition } from '../../../services/faceRecognition/faceRecognition.service';

import { Img } from '../../../components/utility/Img';

export const ResultScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [boxes, setBoxes] = useState([]);
  const [error, setError] = useState(null);
  const { image, resetImage } = useContext(CDNContext);

  useEffect(() => {
    getFaceLocation();
    return () => {
      resetImage();
    };
  }, []);

  const getFaceLocation = async () => {
    if (image) {
      setIsLoading(true);
      try {
        const data = await getFaceRecognition(image);
        setBoxes(calculateFaceLocation(data));
      } catch (e) {
        setError(e.toString());
      } finally {
        setIsLoading(false);
      }
    } else {
      setError("Can't retrive Image");
    }
  };

  const calculateFaceLocation = (data) => {
    const image = document.getElementById('resultImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return data.map((face) => {
      const clarifaiFace = face.region_info.bounding_box;
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
      };
    });
  };

  return (
    <div className="container mx-auto md:w-3/4 lg:w-3/5">
      <div className="flex min-h-screen flex-col md:flex-row justify-center items-center">
        <div className="bg-blue-500 rounded-3xl transform rotate-2 w-3/4 max-w-xl p-1">
          <div className="h-full w-full text-gray-800 rounded-3xl transform shadow-lg bg-gradient-to-br  from-white to-gray-200 -rotate-2 px-4 py-4">
            <h1 className="text-xl text-center mb-4">Result</h1>
            {!error && image ? (
              <div className="relative">
                {isLoading ? (
                  <div className="absolute top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-opacity-50 bg-gray-700 backdrop-filter backdrop-blur firefox:bg-opacity-90">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                ) : null}
                <Img
                  id="resultImage"
                  className="max-h-full w-full object-cover"
                  src={image}
                  transformation={[{ height: 230, width: 350 }]}
                  loading="lazy"
                  height={230}
                  width={350}
                  lqip={{ active: true }}
                />
                {boxes.map((box) => (
                  <div
                    key={`box${box.topRow}${box.rightCol}`}
                    className="bounding-box"
                    style={{
                      top: box.topRow,
                      right: box.rightCol,
                      bottom: box.bottomRow,
                      left: box.leftCol,
                    }}
                  />
                ))}
              </div>
            ) : null}
            {error ? (
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
                  <p>{error}</p>
                </div>
              </div>
            ) : null}
            <div className="my-8">
              <Link
                to="/"
                className="px-2 py-2 text-center text-white block bg-gradient-to-br from-green-400 to-blue-500 border border-transparent rounded-md hover:to-green-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-100"
              >
                Scan More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
