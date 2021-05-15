import { useRef } from 'react';

export const ImageInput = ({
  children,
  handleError,
  handleUpload,
  isLoading,
}) => {
  const fileInput = useRef(null);

  const onChange = (files) => {
    if (files.length > 0) {
      const image = files[0];
      if (!image.type.match('image.*')) {
        handleError('Please select valid image format .jpg/.jpeg/.png');
      } else if (image.size > 5242880) {
        handleError('The maximum upload file size is limited to 5MB');
      } else {
        handleUpload(image);
      }
    }
  };

  return (
    <>
      <div onClick={() => fileInput.current.click()}>{children}</div>
      <input
        disabled={isLoading}
        type="file"
        id="file"
        name="image"
        className="hidden"
        ref={fileInput}
        onChange={(e) => onChange(e.target.files)}
      />
    </>
  );
};
