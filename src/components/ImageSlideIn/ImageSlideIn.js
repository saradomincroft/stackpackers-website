import React, { forwardRef } from 'react';
import './ImageSlideIn.css';

const ImageSlideIn = forwardRef(({ src, alt }, ref) => {
  return (
    <div ref={ref} className="image-slide-in">
      <img src={src} alt={alt} />
    </div>
  );
});

export default ImageSlideIn;
