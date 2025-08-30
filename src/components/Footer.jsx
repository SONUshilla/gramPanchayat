import React from "react";
import { panchayatData } from "../data";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socialIcons = {
    facebook: <FaFacebookF />,
    instagram: <FaInstagram />,
    twitter: <FaTwitter />,
    youtube: <FaYoutube />,
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white mt-20 overflow-hidden">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985 82.83c-78.33-20.83-161.22-53.35-241.16-68.64-82.26-17.34-168.06-16.32-250.45.39-57.84 11.73-114 31.07-172 41.86A600.21 600.21 0 0 1 0 27.35V0h1200v104c-78.61 5.91-144.5-2.54-215-21.17z"
            fill="currentColor"
            className="text-slate-900"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-10 relative">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold w-12 h-12 flex items-center justify-center rounded-xl shadow-md mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">
                {panchayatData.name}
              </h3>
            </div>
            <p className="mt-2 text-blue-200 max-w-md mx-auto md:mx-0">
              Serving our community with dedication and transparency for sustainable rural development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-blue-200">
              {["about", "gallery", "news", "members", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Ward No. 5, Village Panchayat</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>info@{panchayatData.name.toLowerCase().replace(/\s+/g, '')}.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold mb-4 text-white">
            Follow Us
          </h4>
          <div className="flex justify-center space-x-4">
            {Object.entries(panchayatData.socialMedia || {}).map(
              ([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-md text-white text-xl"
                  aria-label={platform}
                  style={{
                    background:
                      platform.toLowerCase() === "facebook"
                        ? "#1877F2"
                        : platform.toLowerCase() === "instagram"
                        ? "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
                        : platform.toLowerCase() === "twitter"
                        ? "#1DA1F2"
                        : platform.toLowerCase() === "youtube"
                        ? "	#FF0000"
                        : "	#FF0000",
                  }}
                >
                  {socialIcons[platform.toLowerCase()]}
                </a>
              )
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-300 text-sm">
          <p>
            © {new Date().getFullYear()} {panchayatData.name}. All rights
            reserved.
          </p>
          <p className="mt-1 text-xs">
            Designed with ❤️ for our community
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-700/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
    </footer>
  );
};

export default Footer;
