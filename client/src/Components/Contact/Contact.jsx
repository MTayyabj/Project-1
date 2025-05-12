import React from "react";
import SectionIntro from '../SectionIntro/SectionIntro.jsx'
import "./Contact.css";
import Logo from "../../assets/Logo2.png";
import Person1 from "../../assets/person.jpg";
import Person2 from "../../assets/Person1.jpg";
import Person3 from "../../assets/Person2.jpg";
import Person4 from "../../assets/Person3.jpg";

import "../Stories/Stories.css";

const Contact = () => { 
  const cases = [
    {
      img: Person1,
      title: "John Smith",
      description: "Working with NT was a game-changer for our business. Their team developed a sleek, responsive website that perfectly reflects our brand. The site is fast, SEO-optimized, and user-friendly—we saw a noticeable increase in traffic and customer engagement within weeks!",
    },
    {
      img: Person2,
      title: "Williams",
      description: "NT turned our outdated website into a modern, high-performing platform. Their attention to detail, from UI/UX design to backend integration, was outstanding. They delivered on time, and their post-launch support has been top-notch.",
    },
    {
      img: Person3,
      title: "Steve",
      description: "We approached NT with a vision, and they brought it to life better than we imagined. Their team not only built a robust e-commerce site for us, but also made it scalable for future growth. Highly recommended for anyone serious about professional web development",
    },
    {
      img: Person4,
      title: "Muhammad",
      description: "NT’s website development service exceeded our expectations. They took the time to understand our goals, provided creative design options, and implemented features that improved user experience dramatically. Our online presence has never looked better",
    },
  ];

  return (
    <>
    <SectionIntro
      heading="Contact us"
      text="Reach out to NT for expert web development services via email or phone available 24/7."
    />
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          {/* Contact Options */}
          <div className="contact-options">
            {/* Call Us */}
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call us directly</h3>
              <p className="contact-number">+92 331 2514833</p>
              <p className="contact-number">+92 310 3300599</p>
            </div>

            {/* Social Links */}
            <div className="contact-card">
              <div className="contact-icon">🔗</div>
              <h3>Our Social Links</h3>
              {/* <a href="https://linkedin.com" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://facebook.com" className="contact-link" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://youtube.com" className="contact-link" target="_blank" rel="noopener noreferrer">YouTube</a> */}
              <a className="social-icons11" href="https://www.facebook.com/share/167tZrpBcR/" aria-label="Facebook"><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" /></a>
              <a className="social-icons11" href="https://www.youtube.com/@TJsketches" aria-label="YouTube"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" /></a>
              <a className="social-icons11" href="https://www.linkedin.com/in/naik-muhammad-ansari-2b5b60289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" /></a>
            </div>

            {/* Emails */}
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Our Emails</h3>
              <p className="contact-number">tayyabarshad91018@gmail.com</p>
              <p className="contact-number">n.m.ansari2004@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="contact-right">
          <img src={Logo} alt="Logo" className="contact-image" />
        </div>
      </div>

      {/* Case Studies Section */}
    <SectionIntro
      heading="Our Clients Responses"
      text="Clients consistently praise NT’s professionalism, timely delivery, and custom website solutions that drive real business results and user satisfaction."
    />
      <section className="case-studies">
        <div className="container">
          <div className="grid">
            {cases.map((item, index) => (
              <div key={index} className="card">
                <img src={item.img} alt={item.title} className="image" />
                <h3 className="headline">{item.title}</h3>
                <p className="description">{item.description}</p>
                {/* <button className="more-btn">MORE</button> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
