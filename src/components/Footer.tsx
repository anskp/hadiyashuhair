import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="sukun-footer">
      <div className="footer-logo">Sukun.</div>
      <p style={{ fontStyle: 'italic', fontSize: '15px', color: '#c7bacf' }}>
        &ldquo;Two souls with but a single thought, two hearts that beat as one.&rdquo;
      </p>

      <div className="footer-links">
        <a href="#home" className="footer-link">
          Home
        </a>
        <a href="#profiles" className="footer-link">
          Profiles
        </a>
        <a href="#story" className="footer-link">
          Story
        </a>
        <a href="#program" className="footer-link">
          Program
        </a>
        <a href="#rsvp" className="footer-link">
          RSVP
        </a>
      </div>

      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Hadiya &amp; Shuhair Wedding Invitation. All Rights Reserved.
      </div>
    </footer>
  )
}
