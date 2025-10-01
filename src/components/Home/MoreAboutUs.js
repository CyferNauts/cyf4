import React, { useEffect, useState, useRef } from "react";
import "./MoreAboutUs.css";

// Use local images for the main carousel
const carouselImages = [
  "https://cyfernode.netlify.app/images/DSC_0014.JPG",
  "https://cyfernode.netlify.app/images/DSC_0016.JPG",
  "https://cyfernode.netlify.app/images/DSC_0022.JPG",
  "https://cyfernode.netlify.app/images/DSC_0023.JPG",
  "https://cyfernode.netlify.app/images/DSC_0024.JPG",
  "https://cyfernode.netlify.app/images/DSC_0025.JPG",
  "https://cyfernode.netlify.app/images/DSC_0026.JPG",
  "https://cyfernode.netlify.app/images/DSC_0027.JPG",
  "https://cyfernode.netlify.app/images/DSC_0028.JPG"
];

// Slider images array - all images from the images folder
const allImages = [
  "https://cyfernode.netlify.app/images/DSC_0030.JPG",
  "https://cyfernode.netlify.app/images/DSC_0031.JPG",
  "https://cyfernode.netlify.app/images/DSC_0032.JPG",
  "https://cyfernode.netlify.app/images/DSC_0033.JPG",
  "https://cyfernode.netlify.app/images/DSC_0034.JPG",
  "https://cyfernode.netlify.app/images/DSC_0035.JPG",
  "https://cyfernode.netlify.app/images/DSC_0036.JPG",
  "https://cyfernode.netlify.app/images/DSC_0038.JPG",
  "https://cyfernode.netlify.app/images/DSC_0039.JPG",
  "https://cyfernode.netlify.app/images/DSC_0040.JPG",
  "https://cyfernode.netlify.app/images/DSC_0041.JPG",
  "https://cyfernode.netlify.app/images/DSC_0042.JPG",
  "https://cyfernode.netlify.app/images/DSC_0043.JPG",
  "https://cyfernode.netlify.app/images/DSC_0044.JPG",
  "https://cyfernode.netlify.app/images/DSC_0045.JPG",
  "https://cyfernode.netlify.app/images/DSC_0046.JPG",
  "https://cyfernode.netlify.app/images/DSC_0049.JPG",
  "https://cyfernode.netlify.app/images/DSC_0050.JPG",
  "https://cyfernode.netlify.app/images/DSC_0052.JPG",
  "https://cyfernode.netlify.app/images/DSC_0053.JPG",
  "https://cyfernode.netlify.app/images/DSC_0054.JPG",
  "https://cyfernode.netlify.app/images/DSC_0055.JPG",
  "https://cyfernode.netlify.app/images/DSC_0060.JPG",
  "https://cyfernode.netlify.app/images/DSC_0061.JPG",
  "https://cyfernode.netlify.app/images/DSC_0062.JPG",
  "https://cyfernode.netlify.app/images/DSC_0063.JPG",
  "https://cyfernode.netlify.app/images/DSC_0064.JPG",
  "https://cyfernode.netlify.app/images/DSC_0070.JPG",
  "https://cyfernode.netlify.app/images/DSC_0071.JPG",
  "https://cyfernode.netlify.app/images/DSC_0072.JPG",
  "https://cyfernode.netlify.app/images/DSC_0073.JPG",
  "https://cyfernode.netlify.app/images/DSC_0074.JPG",
  "https://cyfernode.netlify.app/images/DSC_0075.JPG",
  "https://cyfernode.netlify.app/images/DSC_0076.JPG",
  "https://cyfernode.netlify.app/images/DSC_0077.JPG",
  "https://cyfernode.netlify.app/images/DSC_0078.JPG",
  "https://cyfernode.netlify.app/images/DSC_0079.JPG",
  "https://cyfernode.netlify.app/images/DSC_0081.JPG",
  "https://cyfernode.netlify.app/images/DSC_0082.JPG",
  "https://cyfernode.netlify.app/images/DSC_0083.JPG",
  "https://cyfernode.netlify.app/images/DSC_0084.JPG",
  "https://cyfernode.netlify.app/images/DSC_0085.JPG",
  "https://cyfernode.netlify.app/images/DSC_0086.JPG",
  "https://cyfernode.netlify.app/images/DSC_0087.JPG",
  "https://cyfernode.netlify.app/images/DSC_0088.JPG",
  "https://cyfernode.netlify.app/images/DSC_0089.JPG",
  "https://cyfernode.netlify.app/images/DSC_0090.JPG",
  "https://cyfernode.netlify.app/images/DSC_0091.JPG",
  "https://cyfernode.netlify.app/images/DSC_0092.JPG",
  "https://cyfernode.netlify.app/images/DSC_0093.JPG",
  "https://cyfernode.netlify.app/images/DSC_0094.JPG",
  "https://cyfernode.netlify.app/images/DSC_0095.JPG",
  "https://cyfernode.netlify.app/images/DSC_0096.JPG",
  "https://cyfernode.netlify.app/images/DSC_0097.JPG",
  "https://cyfernode.netlify.app/images/DSC_0099.JPG",
  "https://cyfernode.netlify.app/images/DSC_0100.JPG",
  "https://cyfernode.netlify.app/images/DSC_0101.JPG",
  "https://cyfernode.netlify.app/images/DSC_0102.JPG",
  "https://cyfernode.netlify.app/images/DSC_0103.JPG",
  "https://cyfernode.netlify.app/images/DSC_0104.JPG",
  "https://cyfernode.netlify.app/images/DSC_0105.JPG",
  "https://cyfernode.netlify.app/images/DSC_0106.JPG",
  "https://cyfernode.netlify.app/images/DSC_0108.JPG",
  "https://cyfernode.netlify.app/images/DSC_0109.JPG",
  "https://cyfernode.netlify.app/images/DSC_0110.JPG",
  "https://cyfernode.netlify.app/images/DSC_0111.JPG",
  "https://cyfernode.netlify.app/images/DSC_0126.JPG",
  "https://cyfernode.netlify.app/images/DSC_0130.JPG",
  "https://cyfernode.netlify.app/images/DSC_0131.JPG",
  "https://cyfernode.netlify.app/images/DSC_0132.JPG",
  "https://cyfernode.netlify.app/images/DSC_0133.JPG",
  "https://cyfernode.netlify.app/images/DSC_0161.JPG",
  "https://cyfernode.netlify.app/images/DSC_0163.JPG",
  "https://cyfernode.netlify.app/images/DSC_0165.JPG",
  "https://cyfernode.netlify.app/images/DSC_0166.JPG",
  "https://cyfernode.netlify.app/images/DSC_0167.JPG",
  "https://cyfernode.netlify.app/images/DSC_0169.JPG",
  "https://cyfernode.netlify.app/images/DSC_0170.JPG",
  "https://cyfernode.netlify.app/images/DSC_0171.JPG",
  "https://cyfernode.netlify.app/images/DSC_0172.JPG",
  "https://cyfernode.netlify.app/images/DSC_0173.JPG",
  "https://cyfernode.netlify.app/images/DSC_0176.JPG",
  "https://cyfernode.netlify.app/images/DSC_0177.JPG",
  "https://cyfernode.netlify.app/images/DSC_0178.JPG",
  "https://cyfernode.netlify.app/images/DSC_0179.JPG",
  "https://cyfernode.netlify.app/images/DSC_0180.JPG",
  "https://cyfernode.netlify.app/images/DSC_0181.JPG",
  "https://cyfernode.netlify.app/images/DSC_0182.JPG",
  "https://cyfernode.netlify.app/images/DSC_0183.JPG",
  "https://cyfernode.netlify.app/images/DSC_0184.JPG",
  "https://cyfernode.netlify.app/images/DSC_0186.JPG",
  "https://cyfernode.netlify.app/images/DSC_0187.JPG",
  "https://cyfernode.netlify.app/images/DSC_0188.JPG",
  "https://cyfernode.netlify.app/images/DSC_0191.JPG",
  "https://cyfernode.netlify.app/images/DSC_0192.JPG",
  "https://cyfernode.netlify.app/images/DSC_0193.JPG",
  "https://cyfernode.netlify.app/images/DSC_0194.JPG",
  "https://cyfernode.netlify.app/images/DSC_0195.JPG",
  "https://cyfernode.netlify.app/images/DSC_0196.JPG",
  "https://cyfernode.netlify.app/images/DSC_0197.JPG",
  "https://cyfernode.netlify.app/images/DSC_0198.JPG",
  "https://cyfernode.netlify.app/images/DSC_0200.JPG",
  "https://cyfernode.netlify.app/images/DSC_0201.JPG",
  "https://cyfernode.netlify.app/images/DSC_0202.JPG",
  "https://cyfernode.netlify.app/images/DSC_0203.JPG",
  "https://cyfernode.netlify.app/images/DSC_0204.JPG",
  "https://cyfernode.netlify.app/images/DSC_0205.JPG",
  "https://cyfernode.netlify.app/images/DSC_0206.JPG",
  "https://cyfernode.netlify.app/images/DSC_0207.JPG",
  "https://cyfernode.netlify.app/images/DSC_0208.JPG",
  "https://cyfernode.netlify.app/images/DSC_0209.JPG",
  "https://cyfernode.netlify.app/images/DSC_0210.JPG",
  "https://cyfernode.netlify.app/images/DSC_0211.JPG",
  "https://cyfernode.netlify.app/images/DSC_0212.JPG",
  "https://cyfernode.netlify.app/images/DSC_0213.JPG",
  "https://cyfernode.netlify.app/images/DSC_0214.JPG",
  "https://cyfernode.netlify.app/images/DSC_0215.JPG",
  "https://cyfernode.netlify.app/images/DSC_0216.JPG",
  "https://cyfernode.netlify.app/images/DSC_0217.JPG",
  "https://cyfernode.netlify.app/images/DSC_0218.JPG",
  "https://cyfernode.netlify.app/images/DSC_0219.JPG",
  "https://cyfernode.netlify.app/images/DSC_0220.JPG",
  "https://cyfernode.netlify.app/images/DSC_0221.JPG",
  "https://cyfernode.netlify.app/images/DSC_0222.JPG",
  "https://cyfernode.netlify.app/images/DSC_0223.JPG",
  "https://cyfernode.netlify.app/images/DSC_0224.JPG"
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

const MoreAboutUs = ({setActiveTab, setShowRegister}) => {
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
    <div className="vulahuladula">





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
            <p>
              With participation from over 25 schools, our fest brought together 200+ enthusiastic students who showcased their talent, creativity, and passion across diverse events.
              .</p>
            
 
          </div>
        </div>

        {/* Card 2 - Gallery with Animated Grid */}
        <div className="card center-card">
          <div className="gallery-container">
            <div className="animated-grid-background">
              <div className="grid-overlay"></div>
            </div>
            <button className="gallery-button" onClick={() => {
              setActiveTab('timeline')
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            }>
              <span>View Timeline</span>
              
            </button>
          </div>
          <div className="registration-section">
            <p className="Registernowkatext">Register Now</p>
            <p className="Registernowkatextkades">Don't miss your chance secure your spot today.</p>
            <button className="registernowkeliyebutton" onClick={() => setShowRegister(true)}>
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
        <div className="card center-card" style={{ padding: '1rem'}}>
          <div className="welcomedsfdsfdsfdsfdsfds">
            <p>Expertly crafted by a top-tier team of innovators.</p>
          </div>
          <div className="teamkelogokiphotoschotiwali">
          <button className="registernowkeliyebutton teampejanekeliyebtn">
  <span onClick={() => {
    setActiveTab('team')
    window.scrollTo({ top: 0, behavior: 'smooth' });
    }}>Our team</span>
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
            {/* <img className="pic1sdsss" src="https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg"></img>
            <img className="pic2sdsss" src="https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg"></img>
            <img className="pic3sdsss" src="https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg"></img>
            <img className="pic4sdsss" src="https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg"></img>

            <img className="pic5sdsss" src="https://i.pinimg.com/736x/03/56/83/035683fe2b8ddc296260e593ed4a8cf8.jpg"></img> */}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default MoreAboutUs;
