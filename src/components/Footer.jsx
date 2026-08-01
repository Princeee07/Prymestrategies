import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <p><strong>Face To Face Marketing LLC</strong></p>
          <p>📍 Physical Address: 515 Sparkman Drive, Huntsville, AL 35816</p>
          <p>✉️ Email: <a href="mailto:hello@facetoface-marketing.com">hello@facetoface-marketing.com</a></p>
        </div>

        <div className="social-links">
          <span>Follow Us:</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Facebook"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
