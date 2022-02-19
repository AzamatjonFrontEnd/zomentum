import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
      <div className="footer">
          <div className="quick-links">
              <div className="product">
                  <h3>Product</h3>
                  <ul>
                      <li><a>Features</a></li>
                      <li><a>Pricing</a></li>
                      <li><a>Intregation</a></li>
                      <li><a>Product</a></li>
                  </ul>
              </div>
              <div className="company">
                  <h3>Company</h3>
                  <ul>
                      <li><a>About us</a></li>
                      <li><a>Contact us</a></li>
                      <li><a>Submit a ticket</a></li>
                      <li><a>Privacy policy</a></li>
                      <li><a>Terms & conditions</a></li>
                  </ul>
              </div>
              <div className="users">
                  <h3>Users</h3>
                  <ul>
                      <li><a>Login</a></li>
                      <li><a>Get a demo</a></li>
                      <li><a>Talk to us</a></li>
                      <li><a>Privacy policy</a></li>
                      <li><a>Terms & conditions</a></li>
                  </ul>
              </div>
              <div className="guides">
                  <h3>Guides</h3>
                  <ul>
                      <li><a>MSP</a></li>
                      <li><a>MSP Sales</a></li>
                  </ul>
              </div>
              <div className="contact-us">
                  <h3>Contact Us</h3>
                  <ul>
                      <li><a>Address</a></li>
                  </ul>
              </div>
          </div>
          <div className="about-footer">
              <div className="copyright">
                  <p>&copy; 2020 Pactora Inc. All rights reserved.</p>
              </div>
              <div className="follow-us">
                  <p>Follow us on social</p>
              </div>
          </div>
      </div>
  )
};

export default Footer;