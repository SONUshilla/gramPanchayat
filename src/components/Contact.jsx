import React, { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { panchayatData } from "../data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-blue-500 font-medium tracking-wider text-sm uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Have questions, concerns, or suggestions? Reach out to your Panchayat — 
            we're here to listen and support our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">
              Get in Touch
            </h3>
            <ul className="space-y-6 text-slate-700">
              <li className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <strong className="block text-slate-800 mb-1">Address:</strong>
                  <span className="text-slate-600">
                    Shanti Gram Panchayat Office
                    <br />
                    Main Road, Shanti Village
                    <br />
                    {panchayatData.location}
                  </span>
                </div>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <strong className="block text-slate-800 mb-1">Phone:</strong>
                  <span className="text-slate-600">{panchayatData.contacts[0].phone}</span>
                </div>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <strong className="block text-slate-800 mb-1">Email:</strong>
                  <span className="text-slate-600">info@shantigrampanchayat.gov.in</span>
                </div>
              </li>
            </ul>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-8 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              <MapPin className="w-4 h-4 mr-2" />
              View on Google Maps
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dotnoise-light-grey.png')] opacity-10"></div>
    </section>
  );
};

export default Contact;