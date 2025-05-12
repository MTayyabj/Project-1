// Hero2.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Img1 from "../../assets/blog-img-03-.jpeg";
import Img2 from "../../assets/solarone-featured-01.png";
import Img3 from "../../assets/solarone-featured-02.png";
import Img4 from "../../assets/solarone-featured-03.png";
import Img5 from "../../assets/solarone-featured-wide.png";
import Img6 from "../../assets/solarone-hero-01-768x813.png";
import './Hero2.css';
 

const Hero2 = () => {
      const navigate = useNavigate();

  return (
    <>
      <div className="row1">
        <div className="row1a">
            <h1 className="cheading1">Digital growth tailored to your business</h1>
            <button className="button1" onClick={() => navigate('/login')}>Get Started</button>
            <p className="ctext1">We help you reach new markets and stand out from the competition.</p>
        </div>
        <div className="row1b">
            <img src={Img6} alt="Your Business Growth"/>
        </div>
    </div>
    <div className="row2">
      <div className="row2a">
        <h1 className="cheading1">Driven to Enhance Your Online Experience</h1>
        <p className="ctext1">We create compelling experiences and exceptional campaigns for the world’s top brands and social ventures.</p>
        <img className="image1" src={Img1} alt="" />
      </div>

      <div className="row2b">
        <div className="item">
          <h2 className="cheading2">Strategic Marketing that Delivers Results</h2>
          <p className="ctext1">We believe in turning good ideas into powerful brands. Our purpose is simple – to help organisations and people flourish.</p>
          <button className='button1' onClick={() => navigate('/contact')}>Contact</button>
          {/* <button className="button2">Learn more</button> */}
        </div>
        <div className="item">
          <img className="image1" src={Img2} alt="" />
        </div>
      </div>

      <div className="row2b">
        <div className="item">
          <h2 className="cheading2">We help your business to stand out from the crowd</h2>
          <p className="ctext1">We create everything from web design to mobile applications, social media management and more. We focus on your target market and what will sell.</p>
          <button className="button1" onClick={() => navigate('/about')}>About</button>
        </div>
        <div className="item">
          <img className="image1" src={Img3} alt="" />
        </div>
      </div>

      <div className="row2b">
        <div className="item">
          <h2 className="cheading2">Technology can help you grow and thrive</h2>
          <p className="ctext1">With our proprietary technology and the best designers in the business, we craft smart solutions for our clients that use their data to drive better business.</p>
          <button className="button1" onClick={() => navigate('/policy')}>Policy</button>
          {/* <button className="button2">More info</button> */}
        </div>
        <div className="item">
          <img className="image1" src={Img4} alt="" />
        </div>
      </div>

      <div className="row2a">
        <h2 className="cheading1">Track your progress and marketing campaigns</h2>
        <p className="ctext1">With our proprietary technology and the best designers in the business, we craft smart solutions for our clients that use their data to drive better business.</p>
        <img className="image1" src={Img5} alt="" />
      </div>
    </div>
    </>
  );
};

export default Hero2;
