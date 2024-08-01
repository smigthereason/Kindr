import React from "react";
import ItemsContainer from "./footer/ItemsContainer";
import SocialIcons from "./footer/SocialIcons";
import { Icons } from "./footer/Menu";
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1 className="footer-title">
          <span className="text-teal-400">Free</span> Get updates on success stories.
        </h1>
        <div className="footer-input-container">
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="footer-input"
          />
          <button className="footer-button">
            Request Code
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div className="footer-bottom">
        <span>© 2024 Kindr. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
