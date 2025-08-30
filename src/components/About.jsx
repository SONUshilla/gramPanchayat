import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
    className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
  >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Image with frame */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/20 to-cyan-300/20 rounded-3xl blur-xl z-0"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
              <img
                src="./images/about.png"
                alt="Panchayat overview"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5,000+</div>
                  <div className="text-sm text-slate-600">Residents</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-slate-600">Villages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-slate-600">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <div className="mb-4">
              <span className="text-blue-500 font-medium tracking-wider text-sm uppercase">
                About Our Community
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Discover <span className="text-blue-600">Shanti</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our panchayat has been serving the community with dedication and transparency for over two decades. We take pride in our sustainable rural development initiatives that have transformed the lives of our residents.
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nestled in the beautiful countryside, our villages represent the perfect blend of traditional values and modern development. We strive to create an environment where everyone can thrive while preserving our cultural heritage.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Transparent Governance</h3>
                  <p className="text-slate-600">Open processes and accountable leadership</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Community Development</h3>
                  <p className="text-slate-600">Focus on education, health, and infrastructure</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Sustainable Initiatives</h3>
                  <p className="text-slate-600">Environmentally conscious development projects</p>
                </div>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
      </motion.section>
  );
};

export default AboutSection;