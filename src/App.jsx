import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import AIChatWidget from './components/AIChatWidget.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import ContactBooking from './pages/ContactBooking.jsx';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactBooking />} />
          <Route path="/booking" element={<ContactBooking />} />
        </Routes>
      </main>
      <Footer />
      <AIChatWidget />
    </Router>
  );
}
