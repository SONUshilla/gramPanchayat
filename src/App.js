import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import News from './components/News';
import Members from './components/Members';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { panchayatData } from './data';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <motion.section 
          id="about"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
        >
          <About />
        </motion.section>
        <motion.section 
          id="gallery"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
        >
          <Gallery />
        </motion.section>
        <motion.section 
          id="news"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
        >
          <News />
        </motion.section>
        <motion.section 
          id="members"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
        >
          <Members />
        </motion.section>
        <motion.section 
          id="contact"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

export default App;