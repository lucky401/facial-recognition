import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthenticationContext } from '../../services/authentication/authentication.context';

export const Header = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <header
      className="fixed w-full top-0 z-30 mx-auto bg-opacity-50 bg-gray-900 backdrop-filter backdrop-blur max-w-8xl xl:px-8 firefox:bg-opacity-90"
      style={{ height: '82px' }}
    >
      <div className="flex items-center justify-between px-4 py-5 border-b lg:px-8 sm:px-6 xl:px-0 border-gray-800">
        <Link to="/" className="text-2xl flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
          Facenition
        </Link>
        {isAuthenticated ? null : (
          <div className="grid gap-4 grid-cols-2">
            <Link
              to="/login"
              className="px-2 py-2 text-center text-sm font-medium  border-2 border-blue-500 hover:border-blue-700 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-100"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-2 py-2 text-center text-sm font-medium bg-gradient-to-br from-green-400 to-blue-500 border border-transparent rounded-md hover:to-green-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-100"
            >
              Sign Up, now!
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
