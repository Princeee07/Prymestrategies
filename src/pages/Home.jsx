import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Face To Face Marketing</h1>
        <p>
          We create high-impact marketing and communication strategies tailored to help your business reach corporate sales and growth goals.
        </p>
        <Link to="/contact" className="btn">
          Book a Consultation
        </Link>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>
          Our Approach Sets Us Apart
        </h2>
        <div className="grid">
          <div className="card">
            <h3>Tailored Consultation</h3>
            <p>Custom plans built specifically for your business model and target audience purchase decisions.</p>
          </div>
          <div className="card">
            <h3>48-Hour Response Policy</h3>
            <p>Every client gets direct access to their specialist with guaranteed 48-hour turnarounds on requests.</p>
          </div>
          <div className="card">
            <h3>Research Driven Strategy</h3>
            <p>Data-backed marketing collateral, website builds, and social media campaigns designed to generate ROI.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
