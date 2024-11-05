import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Route
import Navbar from './components/Navigation/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollProgress from './hooks/useScrollProgress';
import Hero from './components/Hero/Hero';
import ProjectCard from './components/Projects/ProjectCard';

export default function App() {
  const scrollProgress = useScrollProgress();

  return (
    <Router>
      <div className='min-h-screen bg-gray-50'>
        <motion.div
          className='fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50'
          style={{ scaleX: scrollProgress / 100 }}
          initial={{ scaleX: 0 }}
        />
        <Navbar />

        <AnimatePresence>
          <Routes>
            <Route path="/about" element={<Hero />} />
            <Route path="/projects" element={<ProjectCard />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}
