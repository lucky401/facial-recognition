import { Link } from 'react-router-dom';
export const FacialRecognitionScreen = () => {
  return (
    <div className="container mx-auto md:w-3/4 lg:w-3/5">
      <div className="flex min-h-screen flex-col md:flex-row justify-center items-center">
        <div className="bg-blue-500 rounded-3xl transform rotate-2 w-3/4 max-w-xl p-1">
          <div className="h-full w-full text-gray-800 rounded-3xl transform shadow-lg bg-gradient-to-br  from-white to-gray-200 -rotate-2 px-4 py-4">
            <h1 className="text-xl text-center mb-4">Face Recognition</h1>
            <div className="grid gap-9 grid-cols-2 my-8 px-6">
              <Link
                to="/upload"
                className="px-2 py-2 text-center text-md font-medium border-2 border-blue-500 hover:border-blue-700 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto mb-1"
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
                Upload
              </Link>
              <Link
                to="/camera"
                className="px-2 py-2 text-center text-md font-medium  border-2 border-blue-500 hover:border-blue-700 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Take Photo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
