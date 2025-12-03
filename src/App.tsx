import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Transport from './components/Transport';
import Guides from './components/Guides';
import Services from './components/Services';
import Booking from './components/Booking';
import Map from './components/Map';
import Checklist from './components/Checklist';
import TrustGuarantees from './components/TrustGuarantees';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

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