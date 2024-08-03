import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black shadow-md z-50 w-full text-white relative text-4xl">
      <div className="container mx-auto ">
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo and tagline */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
            <img
              className="h-auto w-40"
              src="/src/assets/logo.png"
              alt="Kind Logo"
            />
          </div>

          {/* Company */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Company</h3>
            <ul className="text-xl space-y-1">
              <li>
                <Link to="/about" className="no-underline hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="no-underline hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="no-underline hover:underline">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Product</h3>
            <ul className="text-xl space-y-1">
              <li>
                <Link to="/pricing" className="no-underline hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/customers" className="no-underline hover:underline">
                  Customers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Support</h3>
            <ul className="text-xl space-y-1">
              <li>
                <Link to="/feedback" className="no-underline hover:underline">
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/referrals" className="no-underline hover:underline">
                  Referrals
                </Link>
              </li>
              <li>
                <Link to="/FAQ" className="no-underline hover:underline">
                  F.A.Q
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Network */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Social Network</h3>
            <ul className="text-xl space-y-1">
              <li>
                <Link
                  to="https://facebook.com"
                  className="no-underline hover:underline"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="https://instagram.com"
                  className="no-underline hover:underline"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="https://tiktok.com"
                  className="no-underline hover:underline"
                >
                  TikTok
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-300 text-center text-sm text-gray-600">
          Copyright © All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
