import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Space from './components/Space';
import './App.css';
import './index.css';
import GeminiAnswerChecker from './components/GeminiAnswerChecker';

function App() {
  return (
    <div className="app">
      <Space/>
      <div className="scrollable">
      <Header />
      <div className="separator" ></div>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <GeminiAnswerChecker/>
      <div className="separator" ></div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
