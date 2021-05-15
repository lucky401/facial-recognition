import { Link } from 'react-router-dom';
import image404 from '../../../assets/icon/404.svg';

export const Error404Screen = () => (
  <div className="container mx-auto md:w-3/4 lg:w-3/5">
    <div className="flex min-h-screen flex-col md:flex-row justify-center items-center">
      <div className="bg-blue-500 rounded-3xl transform rotate-2 w-3/4 max-w-xl p-1">
        <div className="h-full w-full text-gray-800 rounded-3xl transform shadow-lg bg-gradient-to-br  from-white to-gray-200 -rotate-2 px-4 py-4">
          <img src={image404} alt="page not found" />
          <Link
            to="/"
            className="px-2 py-2 text-center text-white block bg-gradient-to-br from-green-400 to-blue-500 border border-transparent rounded-md hover:to-green-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-100"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  </div>
);
