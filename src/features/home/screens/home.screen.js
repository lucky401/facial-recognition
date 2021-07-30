import { Link } from 'react-router-dom';
import { Img } from '../../../components/utility/Img';
export const HomeScreen = () => {
  return (
    <div className="container mx-auto md:w-3/4 lg:w-3/5">
      <div className="flex min-h-screen flex-col md:flex-row items-center justify-center">
        <div className="md:flex-1 p-4 md:p-0 flex flex-col md:mr-6 items-center md:items-start mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-wider mb-4">
            Facial Recognition
          </h1>
          <h3 className="w-11/12 md:w-full text-lg md:text-xl text-center md:text-left mb-6">
            Collaborate with Clarifai's Facial Recognition AI solutions.
          </h3>
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
        </div>
        <div className="bg-gray-700 rounded-3xl h-64 w-96 relative flex-none">
          <div className="h-full w-full rounded-3xl transform shadow-lg bg-gradient-to-br from-green-400 to-blue-500 rotate-1 px-4 py-4">
            <Img
              className="max-h-full w-full object-cover"
              src="https://ik.imagekit.io/masukinlink/retail-face-detection-vip-model_7IcRajCyY.jpeg"
              transformation={[{ height: 230, width: 350 }]}
              loading="lazy"
              height={230}
              width={350}
              lqip={{ active: true }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
