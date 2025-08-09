import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import Docs from './components/Docs';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Pricing />
        <Docs />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;