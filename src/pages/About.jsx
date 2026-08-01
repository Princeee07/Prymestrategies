import React from 'react';

export default function About() {
  return (
    <div className="about-page">
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>About Us</h1>

      <section className="card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Leadership & Background</h2>
        <p style={{ marginBottom: '1rem' }}>
          Face To Face Marketing is owned and operated by Vicki Morris, a recognized leader in the Huntsville small business and entrepreneurial ecosystem.
        </p>
        <p>
          Leveraging a background that combines a degree in marketing with engineering experience, Vicki brings technical precision and strategic clarity to every communication and marketing blueprint.
        </p>
      </section>

      <section className="card">
        <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Mission Statement</h2>
        <p style={{ marginBottom: '1rem' }}>
          Our mission at Face To Face Marketing is to create highly effective marketing and communication strategies that empower our clients to achieve their corporate sales and growth goals.
        </p>
        <p>
          Through innovative approaches and tailored solutions, we position our clients as industry leaders while driving sustainable success and measurable ROI in today's competitive marketplace.
        </p>
      </section>
    </div>
  );
}
