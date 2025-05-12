import React from 'react';
import './About.css';
import SectionIntro from '../SectionIntro/SectionIntro';
import Team from "../../assets/Team.jpeg";
import Tayyab from "../../assets/Tayyab2.jpg";
import Naik from "../../assets/Naik2.jpg";
import Img1 from "../../assets/blog-img-01-.jpeg";
import Img2 from "../../assets/blog-img-03-.jpeg";
import Img3 from "../../assets/blog-img-04-768x432.jpeg";
import Img4 from "../../assets/blog-img-05-.jpeg"; 


 
export default function About() {
  return (
  <>
  <SectionIntro
      heading="About us"
      text="NT is a leading IT company specializing in innovative, responsive, and scalable website development solutions for businesses worldwide."
  />
      {/* <Heading title="Our Services" description="Discover our wide range of services designed to meet your needs." /> */}
<div className="row321">
<div className="item3">
<h3 className="cheading111">Naik Muhammad</h3>
<ul className='ctext222'>
    <li>student of CS at NED TIEST</li>
    <li>Python expert</li>
    <li>Relational databse specialist</li>
    <li>CGPA: 3.5+</li>
</ul>
</div>
<div className="item3">
<img className="image2" src={Naik} alt=""/>
</div>
</div>

<div className="row321">

<div className="item3 row-reverse-mobile">
<img className="image2" src={Tayyab} alt=""/>
</div>

<div className="item3">
<h3 className="cheading111">Tayyab Arshad</h3>
<ul className='ctext222'>
    <li>CS Undergrad at NED</li>
    <li>Front-end developer</li>
    <li>Website Designer</li>
    <li>CGPA: 3.5+</li>

</ul>
</div>

</div>

<div className="row321">
<div className="item3">
<h3 className="cheading111">As a TEAM</h3>
<ul className='ctext222'>
    <li>Website development COMBO</li>
    <li>Python & Databases</li>
    <li>Problem Solvers</li>
    <li>Collaborative</li>
</ul>
</div>
<div className="item3">
<img className="image2" src={Team} alt=""/>
</div>
</div>

  <SectionIntro
      heading="More Info"
      text="For more information about our services, pricing, or project timelines, explore our FAQ section or contact our support team directly."
    />
{/* NEW DEVELOPMENT */}
<div className="row4">
  {/* <div>
    <h2 className="cheading1">Learn more about marketing in our featured blog entries</h2>
  </div> */}    
  <div className="row4b">
    <div className="item4">
      <img className="image1" src={Img1} alt="" />
      <a className="cheading222" href="#">
        The Ultimate Guide To Digital Marketing & Social Media Strategy
      </a>
      <p className="ctext222">
        I’ve put together this guide to help you understand the world of digital marketing and social media strategy...
      </p>
    </div>
 
    <div className="item4">
      <img className="image1" src={Img2} alt="" />
      <a className="cheading222" href="#">
        The Ultimate Guide To Digital Marketing & Social Media Strategy
      </a>
      <p className="ctext222">
        I’ve put together this guide to help you understand the world of digital marketing and social media strategy...
      </p>
    </div>

    <div className="item4">
      <img className="image1" src={Img3} alt="" />
      <a className="cheading222" href="#">
        The Ultimate Guide To Digital Marketing & Social Media Strategy
      </a>
      <p className="ctext222">
        I’ve put together this guide to help you understand the world of digital marketing and social media strategy...
      </p>
    </div>

    <div className="item4">
      <img className="image1" src={Img4} alt="" />
      <a className="cheading222" href="#">
        The Ultimate Guide To Digital Marketing & Social Media Strategy
      </a>
      <p className="ctext222">
        I’ve put together this guide to help you understand the world of digital marketing and social media strategy...
      </p>
    </div>
  </div>
</div>

</>
  );
}
