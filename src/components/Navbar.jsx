import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand-logo">
          Face To Face Marketing
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                Contact & Booking
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
