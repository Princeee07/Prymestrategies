import React from 'react';

export default function Services() {
  const servicesList = [
    {
      title: 'Website Services',
      description: 'Custom website design and development tailored to client needs across modern frameworks, CMS platforms, and custom builds.'
    },
    {
      title: 'Content Creation',
      description: 'Engaging, persuasive copywriting and verbiage designed to resonate directly with your ideal target buyers.'
    },
    {
      title: 'Social Media Management',
      description: 'End-to-end B2B and B2C social media strategies, including graphics creation, copy generation, and content scheduling.'
    },
    {
      title: 'Marketing Collateral',
      description: 'Professional design of physical and digital assets including flyers, brochures, rack cards, roll-up banners, and business cards.'
    },
    {
      title: 'Corporate Training',
      description: 'Guided workshops and course series covering marketing systems, social media strategy, and brand development.'
    },
    {
      title: 'Fractional CMO Consulting',
      description: 'Executive-level strategic marketing leadership for scaling businesses requiring part-time high-level strategy (12-36 month roadmaps).'
    }
  ];

  return (
    <div className="services-page">
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Our Services</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        Comprehensive marketing and communication solutions tailored for business growth.
      </p>

      <div className="grid">
        {servicesList.map((service, index) => (
          <div className="card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
