import React, { useEffect, useState, useRef } from "react";
import "./MoreAboutUs.css";

const carouselImages = [
  "https://i.pinimg.com/1200x/50/8e/7b/508e7bce303a9fe5e4e8f398695fd535.jpg",
  "https://i.pinimg.com/736x/27/ef/4b/27ef4b86aa7e444ad9eeb10a33363890.jpg",
  "https://i.pinimg.com/1200x/2e/04/e2/2e04e297cba83b4507a337a6c513bbb4.jpg",
  "https://i.pinimg.com/736x/7e/63/05/7e63055da75a41c9ccdd4f396a356b51.jpg",
  "https://i.pinimg.com/736x/7e/63/05/7e63055da75a41c9ccdd4f396a356b51.jpg",
  "https://i.pinimg.com/736x/08/7b/fa/087bfa46f04b0dd59af21bea5f9a170d.jpg",
  "https://i.pinimg.com/1200x/2e/04/e2/2e04e297cba83b4507a337a6c513bbb4.jpg",
  "https://i.pinimg.com/736x/7e/63/05/7e63055da75a41c9ccdd4f396a356b51.jpg",
  "https://i.pinimg.com/1200x/f0/64/ff/f064ffa0e39c8ad434e1a173bb43f655.jpg"







];

// Slider images array - all images from Cyfernode0.3Photos-lowres
const allImages = [
  "/Cyfernode0.3Photos-lowres/DSC_0030.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0031.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0032.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0033.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0034.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0035.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0036.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0038.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0039.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0040.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0041.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0042.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0043.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0044.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0045.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0046.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0049.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0050.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0052.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0053.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0054.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0055.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0060.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0061.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0062.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0063.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0064.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0071.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0072.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0073.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0074.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0075.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0076.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0077.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0078.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0079.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0081.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0082.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0083.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0084.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0085.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0086.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0087.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0088.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0089.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0090.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0091.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0093.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0094.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0095.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0096.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0097.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0099.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0100.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0101.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0102.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0103.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0104.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0105.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0106.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0108.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0109.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0110.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0130.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0131.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0132.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0133.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0161.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0163.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0165.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0173.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0176.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0181.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0184.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0186.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0187.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0188.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0191.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0192.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0193.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0194.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0195.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0196.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0197.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0198.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0200.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0201.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0202.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0204.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0205.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0206.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0207.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0208.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0210.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0212.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0213.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0214.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0215.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0216.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0217.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0218.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0220.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0221.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0223.JPG",
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
        <div className="features-title">
          <h1>Example</h1>
        </div>
        <p className="features-desc">
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        </p>
      </div>

      <div className="features-grid">
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

        {/* Card 2 - Empty */}
        <div className="card center-card behen">

  <div className="bhai gallerywala" onMouseDown={handleMouseDown} style={{ cursor: isDragging ? 'grabbing' : 'grab' }}>
    <div className="slider">
      <div className="slide-track" ref={slideTrackRef1}>
        {sliderImages.slice(0, 8).map((img, i) => (
          <div className="slide" key={i}>
            <img src={img} alt="" />
          </div>
        ))}
        {sliderImages.slice(0, 8).map((img, i) => (
          <div className="slide" key={i + 8}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
    <div className="slider">
      <div className="slide-track" ref={slideTrackRef2}>
        {sliderImages.slice(8, 16).map((img, i) => (
          <div className="slide" key={i}>
            <img src={img} alt="" />
          </div>
        ))}
        {sliderImages.slice(8, 16).map((img, i) => (
          <div className="slide" key={i + 8}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  </div>
<div className="bhai">
  <p className="Registernowkatext">
    Register Now 
  </p>
    <p className="Registernowkatextkades">
    Don't miss your chance secure your spot today. 
  </p>
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
