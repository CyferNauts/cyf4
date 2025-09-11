import React from 'react';

const images = [
  '/images/DSC_0014.JPG',
  '/images/DSC_0016.JPG',
  '/images/DSC_0022.JPG',
  '/images/DSC_0023.JPG',
  '/images/DSC_0024.JPG',
  '/images/DSC_0025.JPG',
  '/images/DSC_0026.JPG',
  '/images/DSC_0027.JPG',
  '/images/DSC_0028.JPG',
  '/images/DSC_0029.JPG',
  // Add more image paths as needed
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
