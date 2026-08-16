import React, { useState } from 'react'
import confetti from 'canvas-confetti'

export const RsvpSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'attending',
    guests: '1',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Confetti celebration effect
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d687a7', '#b85c82', '#f4c2d7', '#ffd700'],
      })
    } catch {
      // ignore
    }
  }

  return (
    <section id="rsvp" className="rsvp-section">
      <div className="rsvp-card">
        <div className="section-header" style={{ marginBottom: 0 }}>
          <span className="section-tag">Are You Attending?</span>
          <h2 className="section-title">RSVP For Our Wedding</h2>
        </div>

        {submitted ? (
          <div className="rsvp-success-message">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--rose-deep)' }}>
              Thank You, {formData.name || 'Dear Guest'}!
            </h3>
            <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
              We have received your response. We can&rsquo;t wait to celebrate our special day with you!
            </p>
          </div>
        ) : (
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. John Doe"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                required
                placeholder="e.g. john@example.com"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Will You Attend?</label>
              <select
                className="form-select"
                value={formData.attendance}
                onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
              >
                <option value="attending">Accepts With Pleasure</option>
                <option value="declining">Regretfully Declines</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Number of Guests</label>
              <select
                className="form-select"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              >
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3+ Persons</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Wishes / Dietary Requirements</label>
              <textarea
                rows={3}
                placeholder="Share your warm wishes or any dietary needs..."
                className="form-textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="rsvp-submit-btn">
              Send RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
