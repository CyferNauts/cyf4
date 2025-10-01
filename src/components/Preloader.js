import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      const assets = [
        // Videos
        './components/Home/0829.mp4',
        './components/Home/0827.mp4',
        './components/Home/PinDown.io_@eplerkirill_1756479385.mp4',
        './components/Home/ssvid.net--Dark-Substance-Moving-Slow-and-Wavy_486x864.mp4',

        // Team images
        './components/Team/Teamletters/A.png',
        './components/Team/Teamletters/E.png',
        './components/Team/Teamletters/M.png',
        './components/Team/Teamletters/T.png',
        './components/Team/Teamletters/Arrowuni.png',

        // Other images
        './components/Home/icon1.png',
        './components/Home/Tagline.svg',

        // Gallery images (first 20 for faster loading)
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
        '/images/DSC_0030.JPG',
        '/images/DSC_0031.JPG',
        '/images/DSC_0032.JPG',
        '/images/DSC_0033.JPG',
        '/images/DSC_0034.JPG',
        '/images/DSC_0035.JPG',
        '/images/DSC_0036.JPG',
        '/images/DSC_0038.JPG',
        '/images/DSC_0039.JPG',
        '/images/DSC_0040.JPG',

        // External images
        'https://media.discordapp.net/attachments/1403761173752451203/1409843541143715941/image.png?ex=68aeda9d&is=68ad891d&hm=235d8dd2132a2935eeffe3ca4e83b7ab22431d36d7096f72fb937eef37d58eb2&=&format=webp&quality=lossless&width=1860&height=365'
      ];

      const totalAssets = assets.length;
      let loadedAssets = 0;

      const loadPromises = assets.map(async (asset) => {
        return new Promise((resolve, reject) => {
          if (asset.endsWith('.mp4') || asset.endsWith('.webm')) {
            // Load video
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.onloadedmetadata = () => {
              loadedAssets++;
              setProgress((loadedAssets / totalAssets) * 100);
              resolve();
            };
            video.onerror = reject;
            video.src = asset;
          } else {
            // Load image
            const img = new Image();
            img.onload = () => {
              loadedAssets++;
              setProgress((loadedAssets / totalAssets) * 100);
              resolve();
            };
            img.onerror = reject;
            img.src = asset;
          }
        });
      });

      try {
        await Promise.all(loadPromises);
        setIsLoaded(true);
        setTimeout(() => {
          if (onLoaded && typeof onLoaded === 'function') {
            onLoaded();
          }
        }, 1000); // Small delay for smooth transition
      } catch (error) {
        console.error('Error loading assets:', error);
        // Still proceed even if some assets fail to load
        setIsLoaded(true);
        setTimeout(() => {
          if (onLoaded && typeof onLoaded === 'function') {
            onLoaded();
          }
        }, 1000);
      }
    };

    loadAssets();
  }, [onLoaded]);

  return (
    <div className={`preloader ${isLoaded ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">{Math.round(progress)}%</div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
