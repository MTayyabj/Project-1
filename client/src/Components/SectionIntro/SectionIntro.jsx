import React from 'react';
import './Sectionintro.css';
const SectionIntro = ({ heading, text }) => {
  return (
    <section className="section-intro">
      <div className="intro-container">
        <h2 className="intro-heading">{heading}</h2>
        <p className="intro-text">{text}</p> 
      </div>
    </section>
  );
};

export default SectionIntro;
