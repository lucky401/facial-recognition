export const RenderError = ({ error, touched }) => {
  if (touched && error) {
    return <div className="text-red-500 text-xs mt-1 mx-2">{error}</div>;
  } else {
    return <div className="text-red-500 text-xs mt-1 mx-2"></div>;
  }
};
