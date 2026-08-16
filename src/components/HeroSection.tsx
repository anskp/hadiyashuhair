import React from 'react'
import heroImage from '../assets/ChatGPT Image Aug 16, 2026, 11_04_59 PM.png'

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-banner-wrap">
        <img
          src={heroImage}
          alt="Hadiya &amp; Shuhair Wedding Illustration"
          className="hero-composite-img"
        />
      </div>
    </section>
  )
}
