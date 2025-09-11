import React, { useEffect, useState } from "react";
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

// Slider images array - reduced to 16 images for better performance
const allImages = [
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
  "/Cyfernode0.3Photos-lowres/DSC_0111.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0126.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0130.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0131.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0132.JPG",
  "/Cyfernode0.3Photos-lowres/DSC_0133.JPG",
];

// Shuffle the array to randomize
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const sliderImages = shuffleArray([...allImages]);

const MoreAboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // 4s interval
    return () => clearInterval(interval);
  }, []);

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

  <div className="bhai gallerywala">
    <div className="slider">
      <div className="slide-track">
        {sliderImages.slice(0, 4).map((img, i) => (
          <div className="slide" key={i}>
            <img src={img} alt="" />
          </div>
        ))}
        {sliderImages.slice(0, 4).map((img, i) => (
          <div className="slide" key={i + 4}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
    <div className="slider">
      <div className="slide-track">
        {sliderImages.slice(4, 8).map((img, i) => (
          <div className="slide" key={i}>
            <img src={img} alt="" />
          </div>
        ))}
        {sliderImages.slice(4, 8).map((img, i) => (
          <div className="slide" key={i + 4}>
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
