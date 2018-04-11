import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        &copy; {new Date().getFullYear()} by Nikola Bojanovic
      </div>
    </React.Fragment>
  );
};

export default Footer;