'use client';

import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [expandedLinks, setExpandedLinks] = useState([]);

  const toggleLinks = (index) => {
    setExpandedLinks((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="footer-container">
      {/* firstRow */}
      <div className="footer-row">
        <div className="footer-col">
          <div className='newsletter'>
            <div className='content'>
              <h4>Be the first to know</h4>
              <p>Sign up for updates from mettā muse.</p>
            </div>
            <div className='newsletter-input'>
              <input type="email" placeholder="Subscribe to our newsletter" />
              <button type='submit'>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="footer-col ">
          <div className='content'>
            <h4>Contact Us</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div className='content'>
            <h4>Currency</h4>
            <div className='country-currency'>
              <img src="/images/United States of America (US).svg" alt="USA" />
              <img src="/images/Star 1.svg" alt="star" />
              <p>USD</p>
            </div>
            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
      </div>

      {/* secondRow */}
      <div className="footer-row">
        <div className='rightSide-link'>
          <div className="footer-col links">

           <div className="links mettāmuse-links-sm" onClick={() => toggleLinks(0)}>
              <h4 style={{ textTransform: 'lowercase' }}>Mettā Muse</h4>
              <img src="/images/arrow-left.svg" alt="arrow-down" />
            </div>
            <ul className={expandedLinks.includes(0) ? 'expanded' : ''}>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="footer-col links">
             <div className="links quick-links-sm" onClick={() => toggleLinks(1)}>
              <h4>Quick Links</h4>
              <img src="/images/arrow-left.svg" alt="arrow-down" />
            </div>
            <ul className={expandedLinks.includes(1) ? 'expanded' : ''}>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className='footer-col '>
          <div className="follow-us" style={{ marginBottom: '3rem' }}>
            <h4>Follow Us</h4>
            <div className="social-icons">
              <img src="/images/insta.svg" alt="instagram-icon" />
              <img src="/images/linkedin.svg" alt="linkedin-icon" />
            </div>
          </div>
          <div className="follow-us">
            <h4 style={{ textTransform: 'lowercase' }}> mettā muse Accepts </h4>
            <div className="social-icons">
              <img src="/images/gpay.svg" alt="gpay" />
              <img src="/images/card.svg" alt="card" />
              <img src="/images/paypal.svg" alt="paypal" />
              <img src="/images/amex.svg" alt="amex" />
              <img src="/images/applepay.svg" alt="applepay" />
              <img src="/images/opay.svg" alt="opay" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Metta Muse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
