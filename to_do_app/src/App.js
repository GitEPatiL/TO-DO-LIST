import React from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Hero from './components/Hero';
import Features from './components/Features';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.css';
import './style.css';
import CtaSection from './components/CtaSection';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main style={{ marginTop: '90px' }}>
        <Title />
        <Hero />
        <Features />
        
        <CtaSection />
        <Tasks />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
