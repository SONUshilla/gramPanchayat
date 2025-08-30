import React from "react";
import { motion } from "framer-motion";
import { panchayatData } from "../data";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 overflow-hidden"
    >
      {/* Background pattern for added depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-blue-300 font-medium tracking-wider text-sm uppercase block"
              >
                Community Portal
              </motion.span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {panchayatData.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed"
            >
              Serving our community with dedication and transparency for
              sustainable rural development.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              viewport={{ once: true }}
            >
              <motion.button
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Report an Issue
              </motion.button>
              <motion.button
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6 }}
                className="border-2 border-blue-400/30 hover:border-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Services
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Image with animation */}
          <motion.div
            className="hidden md:block relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 rounded-3xl blur-xl"></div>
            <img
              src="/images/village.webp"
              alt="Village landscape"
              className="relative rounded-2xl shadow-2xl border border-white/10 transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
    </motion.section>
  );
};

export default Hero;
