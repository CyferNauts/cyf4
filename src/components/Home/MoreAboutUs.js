import React, { useEffect, useState, useRef } from "react";
import "./MoreAboutUs.css";

// Use local images for the main carousel
const carouselImages = [
  "/images/DSC_0014.JPG",
  "/images/DSC_0016.JPG",
  "/images/DSC_0022.JPG",
  "/images/DSC_0023.JPG",
  "/images/DSC_0024.JPG",
  "/images/DSC_0025.JPG",
  "/images/DSC_0026.JPG",
  "/images/DSC_0027.JPG",
  "/images/DSC_0028.JPG"
];

// Slider images array - all images from the images folder
const allImages = [
  "/images/DSC_0030.JPG",
  "/images/DSC_0031.JPG",
  "/images/DSC_0032.JPG",
  "/images/DSC_0033.JPG",
  "/images/DSC_0034.JPG",
  "/images/DSC_0035.JPG",
  "/images/DSC_0036.JPG",
  "/images/DSC_0038.JPG",
  "/images/DSC_0039.JPG",
  "/images/DSC_0040.JPG",
  "/images/DSC_0041.JPG",
  "/images/DSC_0042.JPG",
  "/images/DSC_0043.JPG",
  "/images/DSC_0044.JPG",
  "/images/DSC_0045.JPG",
  "/images/DSC_0046.JPG",
  "/images/DSC_0049.JPG",
  "/images/DSC_0050.JPG",
  "/images/DSC_0052.JPG",
  "/images/DSC_0053.JPG",
  "/images/DSC_0054.JPG",
  "/images/DSC_0055.JPG",
  "/images/DSC_0060.JPG",
  "/images/DSC_0061.JPG",
  "/images/DSC_0062.JPG",
  "/images/DSC_0063.JPG",
  "/images/DSC_0064.JPG",
  "/images/DSC_0070.JPG",
  "/images/DSC_0071.JPG",
  "/images/DSC_0072.JPG",
  "/images/DSC_0073.JPG",
  "/images/DSC_0074.JPG",
  "/images/DSC_0075.JPG",
  "/images/DSC_0076.JPG",
  "/images/DSC_0077.JPG",
  "/images/DSC_0078.JPG",
  "/images/DSC_0079.JPG",
  "/images/DSC_0081.JPG",
  "/images/DSC_0082.JPG",
  "/images/DSC_0083.JPG",
  "/images/DSC_0084.JPG",
  "/images/DSC_0085.JPG",
  "/images/DSC_0086.JPG",
  "/images/DSC_0087.JPG",
  "/images/DSC_0088.JPG",
  "/images/DSC_0089.JPG",
  "/images/DSC_0090.JPG",
  "/images/DSC_0091.JPG",
  "/images/DSC_0092.JPG",
  "/images/DSC_0093.JPG",
  "/images/DSC_0094.JPG",
  "/images/DSC_0095.JPG",
  "/images/DSC_0096.JPG",
  "/images/DSC_0097.JPG",
  "/images/DSC_0099.JPG",
  "/images/DSC_0100.JPG",
  "/images/DSC_0101.JPG",
  "/images/DSC_0102.JPG",
  "/images/DSC_0103.JPG",
  "/images/DSC_0104.JPG",
  "/images/DSC_0105.JPG",
  "/images/DSC_0106.JPG",
  "/images/DSC_0108.JPG",
  "/images/DSC_0109.JPG",
  "/images/DSC_0110.JPG",
  "/images/DSC_0111.JPG",
  "/images/DSC_0126.JPG",
  "/images/DSC_0130.JPG",
  "/images/DSC_0131.JPG",
  "/images/DSC_0132.JPG",
  "/images/DSC_0133.JPG",
  "/images/DSC_0161.JPG",
  "/images/DSC_0163.JPG",
  "/images/DSC_0165.JPG",
  "/images/DSC_0166.JPG",
  "/images/DSC_0167.JPG",
  "/images/DSC_0169.JPG",
  "/images/DSC_0170.JPG",
  "/images/DSC_0171.JPG",
  "/images/DSC_0172.JPG",
  "/images/DSC_0173.JPG",
  "/images/DSC_0176.JPG",
  "/images/DSC_0177.JPG",
  "/images/DSC_0178.JPG",
  "/images/DSC_0179.JPG",
  "/images/DSC_0180.JPG",
  "/images/DSC_0181.JPG",
  "/images/DSC_0182.JPG",
  "/images/DSC_0183.JPG",
  "/images/DSC_0184.JPG",
  "/images/DSC_0186.JPG",
  "/images/DSC_0187.JPG",
  "/images/DSC_0188.JPG",
  "/images/DSC_0191.JPG",
  "/images/DSC_0192.JPG",
  "/images/DSC_0193.JPG",
  "/images/DSC_0194.JPG",
  "/images/DSC_0195.JPG",
  "/images/DSC_0196.JPG",
  "/images/DSC_0197.JPG",
  "/images/DSC_0198.JPG",
  "/images/DSC_0200.JPG",
  "/images/DSC_0201.JPG",
  "/images/DSC_0202.JPG",
  "/images/DSC_0203.JPG",
  "/images/DSC_0204.JPG",
  "/images/DSC_0205.JPG",
  "/images/DSC_0206.JPG",
  "/images/DSC_0207.JPG",
  "/images/DSC_0208.JPG",
  "/images/DSC_0209.JPG",
  "/images/DSC_0210.JPG",
  "/images/DSC_0211.JPG",
  "/images/DSC_0212.JPG",
  "/images/DSC_0213.JPG",
  "/images/DSC_0214.JPG",
  "/images/DSC_0215.JPG",
  "/images/DSC_0216.JPG",
  "/images/DSC_0217.JPG",
  "/images/DSC_0218.JPG",
  "/images/DSC_0219.JPG",
  "/images/DSC_0220.JPG",
  "/images/DSC_0221.JPG",
  "/images/DSC_0222.JPG",
  "/images/DSC_0223.JPG",
  "/images/DSC_0224.JPG"
];

// Shuffle the array to randomize
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const sliderImages = shuffleArray([...allImages, ...allImages, ...allImages]);

const MoreAboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const slideTrackRef1 = useRef(null);
  const slideTrackRef2 = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // 4s interval
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e) => {
        const delta = e.clientX - dragStart;
        const newTranslate = currentTranslate + delta;
        const maxTranslate = -(120 * 16);
        const clamped = Math.max(maxTranslate, Math.min(0, newTranslate));
        if (slideTrackRef1.current) {
          slideTrackRef1.current.style.transform = `translateX(${clamped}px)`;
        }
        if (slideTrackRef2.current) {
          slideTrackRef2.current.style.transform = `translateX(${clamped}px)`;
        }
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        const clamped = parseFloat(slideTrackRef1.current?.style.transform?.replace('translateX(', '').replace('px)', '') || 0);
        setCurrentTranslate(clamped);
        if (slideTrackRef1.current) {
          slideTrackRef1.current.style.animationPlayState = 'running';
          slideTrackRef1.current.style.transform = '';
        }
        if (slideTrackRef2.current) {
          slideTrackRef2.current.style.animationPlayState = 'running';
          slideTrackRef2.current.style.transform = '';
        }
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart, currentTranslate]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    if (slideTrackRef1.current) {
      slideTrackRef1.current.style.animationPlayState = 'paused';
    }
    if (slideTrackRef2.current) {
      slideTrackRef2.current.style.animationPlayState = 'paused';
    }
  };

  return (
    <div>





    <div className="sub-navbarcontainer">
      <div className="sub-navbar">
        <p>Impact</p>
        <p className="midsubnavel dsgdfgdg">Our Story So Far</p>
        <img className="sub-navbar-img " src="https://i.pinimg.com/1200x/e2/00/51/e20051b95ebd75f4644e1dbc412feaac.jpg"></img>
      </div>
      </div>




      <section className="features">
      <div className="features-header">
        <div className="features-title text-5xl md:text-3xl">
          <h1>Innovate Together</h1>
        </div>
        <p className="features-desc">
          Empowering Tomorrow’s Innovators Today
        </p>
      </div>

      <div className="features-grid grid-cols-1 md:grid-cols-3">
        {/* Card 1 - Carousel */}
        <div className="card">
          <div className="carousel">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {carouselImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`slide-${i}`}
                  className="carousel-img"
                />
              ))}
            </div>
          </div>
          <div className="card-text">
            <h3 className="card-titlefdfdfd">25+ SCHOOLS</h3>
            <p>Your gateway to effortless crypto and fiat conversion.Your gateway to effortless crypto and fiat conversion.Your gateway to effortless crypto and fiat conversion.</p>
            
 
          </div>
        </div>

        {/* Card 2 - Gallery with Animated Grid */}
        <div className="card center-card">
          <div className="gallery-container">
            <div className="animated-grid-background">
              <div className="grid-overlay"></div>
            </div>
            <button className="gallery-button">
              <span>View Gallery</span>
              
            </button>
          </div>
          <div className="registration-section">
            <p className="Registernowkatext">Register Now</p>
            <p className="Registernowkatextkades">Don't miss your chance secure your spot today.</p>
            <button className="registernowkeliyebutton">
              <span>Register</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 74 74"
                height="34"
                width="34"
              >
                <circle stroke-width="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                <path
                  fill="black"
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Card 3 - Tagline */}
        <div className="card center-card">
          <div className="welcomedsfdsfdsfdsfdsfds">
            <p>Expertly crafted by a top-tier team of innovators.</p>
          </div>
          <div className="teamkelogokiphotoschotiwali">
          <button className="registernowkeliyebutton teampejanekeliyebtn">
  <span>Our team</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 74 74"
    height="34"
    width="34"
  >
    <circle stroke-width="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
    <path
      fill="black"
      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
    ></path>
  </svg>
</button>
            <img className="pic1sdsss" src="https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg"></img>
            <img className="pic2sdsss" src="https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg"></img>
            <img className="pic3sdsss" src="https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg"></img>
            <img className="pic4sdsss" src="https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg"></img>

            <img className="pic5sdsss" src="https://i.pinimg.com/736x/03/56/83/035683fe2b8ddc296260e593ed4a8cf8.jpg"></img>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default MoreAboutUs;
