import React from 'react'
import { Heart } from 'lucide-react'

export const ProfilesSection: React.FC = () => {
  return (
    <section id="profiles" className="profiles-section">
      <div className="section-header">
        <span className="section-tag">With Blessings Of Family</span>
        <h2 className="section-title">The Bride &amp; Groom</h2>
      </div>

      <div className="profiles-grid">
        {/* Bride Card */}
        <div className="profile-card family-card">
          <div className="profile-badge-icon">
            <Heart size={24} color="var(--rose-primary)" />
          </div>
          <h3 className="profile-name">Hadiya</h3>
          <div className="family-relation-label">Daughter of</div>
          <div className="parents-names">
            <p className="parent-name">Noorjahan B</p>
            <span className="parents-amp">&amp;</span>
            <p className="parent-name">Abdul Jamal MPP</p>
          </div>
          <div className="location-tag">Vadikkal, Madayi</div>
        </div>

        {/* Groom Card */}
        <div className="profile-card family-card">
          <div className="profile-badge-icon">
            <Heart size={24} color="var(--rose-primary)" />
          </div>
          <h3 className="profile-name">Shuhair</h3>
          <div className="family-relation-label">Son of</div>
          <div className="parents-names">
            <p className="parent-name">Hafsath KP</p>
            <span className="parents-amp">&amp;</span>
            <p className="parent-name">Shukhoor B</p>
          </div>
          <div className="location-tag">Vadikkal, Madayi</div>
        </div>
      </div>
    </section>
  )
}
