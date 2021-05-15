import PropTypes from 'prop-types';

export const ImagePreview = ({ dataUri, handleDelete, handleUpload }) => {
  return (
    <div className="w-full h-full relative">
      <img src={dataUri} alt="preview" />
      <div className="absolute bottom-4 w-full flex justify-center">
        <button
          onClick={handleDelete}
          className="px-2 py-2 text-gray-100 w-24 mx-2 text-center text-sm font-medium bg-gradient-to-br from-pink-400 to-yellow-500 border border-transparent rounded-md hover:to-pink-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-100"
        >
          Delete
        </button>
        <button
          onClick={handleUpload}
          className="px-2 py-2 text-gray-100 w-24  mx-2 text-center text-sm font-medium bg-gradient-to-br from-green-400 to-blue-500 border border-transparent rounded-md hover:to-green-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-100"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
};
