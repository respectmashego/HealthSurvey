import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Department of Health, South Africa. All rights reserved.
      </p>
      <p>
        Made with ❤️ by Symplenormics
      </p>
    </footer>
  );
}

export default Footer;
