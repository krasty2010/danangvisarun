import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from './components/en/SEOHead';
import Header from './components/en/Header';
import Hero from './components/en/Hero';
import Process from './components/en/Process';
import Transport from './components/en/Transport';
import Guides from './components/en/Guides';
import Services from './components/en/Services';
import Booking from './components/en/Booking';
import Map from './components/en/Map';
import Checklist from './components/en/Checklist';
import TrustGuarantees from './components/en/TrustGuarantees';
import Reviews from './components/en/Reviews';
import Faq from './components/en/Faq';
import Contact from './components/en/Contact';
import Footer from './components/en/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEOHead />
        <Header />
        <Hero />
        <Process />
        <Transport />
        <Services />
        <Booking />
        <Map />
        <Checklist />
        <Guides />
        <TrustGuarantees />
        <Reviews />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;