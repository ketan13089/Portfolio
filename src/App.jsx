import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Route
import Navbar from './components/Navigation/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollProgress from './hooks/useScrollProgress';
import Hero from './components/Hero/Hero';
import ProjectCard from './components/Projects/ProjectCard';
import KG from './components/KG/KG';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

export default function App() {
  const scrollProgress = useScrollProgress();

  

  return (
    <Router>
      <div className={`min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300 `}>
        <motion.div
          className='fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50'
          style={{ scaleX: scrollProgress / 100 }}
          initial={{ scaleX: 0 }}
        />
        <Navbar />

        <AnimatePresence>
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                ><KG/>
                </motion.div>
            } />

            <Route path="/about" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
              </motion.div>
            } />
            <Route path="/projects" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard />
              </motion.div>
            } />
            <Route path="/skills" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <Skills />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                ><Contact/>
                </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}
