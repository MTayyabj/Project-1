import React from "react";
import SectionIntro from "../SectionIntro/SectionIntro";
import "./Stories.css";
import Logo from "../../assets/B.png";


const Stories = () => {
  

  return (
    <>
    <SectionIntro
      heading="Privacy Policy"
      text="NT values your privacy. We securely store and protect your data, never sharing it without consent, ensuring full confidentiality."
    />
    <div className="privacy-policy">
      {/* <p><strong>Effective Date:</strong> [Insert Date]</p> */}
      
      <h2>1. Introduction</h2>
       <p>Welcome to NK Company. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p> 
      
      <h2>2. Information We Collect</h2>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide.</li>
        <li><strong>Usage Data:</strong> Information on how you use our website, including IP addresses, browser type, and access times.</li>
        <li><strong>Cookies and Tracking Technologies:</strong> Data collected through cookies and similar tracking tools to enhance user experience.</li>
      </ul>
      
      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>Providing and maintaining our services.</li>
        <li>Improving user experience and website functionality.</li>
        <li>Sending promotional materials, updates, and customer support responses.</li>
        <li>Compliance with legal obligations.</li>
      </ul>
      
      <h2>4. Sharing Your Information</h2>
      <p>We do not sell your personal information. However, we may share data with:</p>
      <ul>
        <li>Service providers assisting in website operation.</li>
        <li>Legal authorities if required by law.</li>
        <li>Business partners with your consent.</li>
      </ul>
      
      <h2>5. Data Security</h2>
      <p>We implement security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure.</p>
      
      <h2>6. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access, update, or delete your personal data.</li>
        <li>Opt-out of marketing communications.</li>
        <li>Restrict data processing in certain situations.</li>
      </ul>
      
      <h2>7. Third-Party Links</h2>
      <p>Our website may contain links to third-party sites. We are not responsible for their privacy policies or practices.</p>
      
      <h2>8. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
      
      <h2>9. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at [Your Contact Email].</p>
    </div>



    <SectionIntro
      heading="Benefits of Our Policy"
      text="Our policies ensure data protection, transparent communication, secure payments, and reliable long-term support for your website’s performance and safety."
    />
    {/* NEW DEVELOPMENT */}
    <div className="row22"> 
    <div className="item11">
        <h3>Data Protection</h3>
        <p>Your personal information is securely stored and never shared without consent.</p>
    </div>
    <div className="item11">
        <h3>Transparency</h3>
        <p>We clearly explain what data we collect and how we use it.</p>
    </div>
    <div className="item11">
        <h3>User Control</h3>
        <p>You have full control to update, access, or delete your data anytime.</p>
    </div>
    <div className="item11">
        <h3>3rd-Party Safety</h3>
      <p>Our partners are only those services that follow strict data standards.</p>
    </div>
    <div className="item11">
        <h3>Compliance</h3>
       <p>ur policy aligns with GDPR and other global privacy regulations.</p>
    </div>
    <div className="item11">
        <h3>No Spam</h3>
       <p>We respect your inbox — no unwanted emails or promotions.</p>
    </div>
    </div>
    </>
  );
};

export default Stories;
