import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2 className="footer-logo">SeedInov.</h2>
          <p className="footer-desc">
            Product, design and <strong>engineering</strong> for Business innovators
          </p>
          <div className="footer-social">
            <p>Follow us:</p>
            <div className="footer-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <button className="footer-btn">Let’s Talk</button>
      </div>

      <div className="footer-subscribe">
        <p>Subscribe to our quarterly newsletter and resolve our latest insights</p>
        <div className="footer-input">
          <input type="email" placeholder="Your Email..." />
          <button><FaPaperPlane /></button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 Seedinov Technologies | Powered by Seedinov</p>
      </div>
    </footer>
  );
}
