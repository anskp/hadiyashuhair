import React from 'react'
import { Calendar, MapPin, Clock } from 'lucide-react'

export const ProgramSection: React.FC = () => {
  const nikahCalUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nikah+-+Hadiya+%26+Shuhair&dates=20260902T160000/20260902T180000&details=Nikah+ceremony+of+Hadiya+and+Shuhair&location=Hydrose+Juma+Masjid,+Vadikkal'

  const receptionCalUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception+-+Hadiya+%26+Shuhair&dates=20260903T120000/20260903T160000&details=Wedding+reception+of+Hadiya+and+Shuhair&location=Kareem+Haji+Stop,+Madayi'

  const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Vadikkal+Madayi'

  return (
    <section id="program" className="program-section">
      <div className="section-header">
        <span className="section-tag">Save The Date</span>
        <h2 className="section-title">Wedding Events &amp; Venue</h2>
      </div>

      <div className="events-grid">
        {/* Nikah Event Card */}
        <div className="event-card">
          <div className="event-badge">NIKAH</div>
          <h3 className="event-title">Nikah Ceremony</h3>
          
          <div className="event-detail-item">
            <Calendar size={18} className="event-icon" />
            <span>2 September 2026</span>
          </div>

          <div className="event-detail-item">
            <Clock size={18} className="event-icon" />
            <span>4:00 PM</span>
          </div>

          <div className="event-detail-item">
            <MapPin size={18} className="event-icon" />
            <span>Hydrose Juma Masjid, Vadikkal</span>
          </div>

          <a
            href={nikahCalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="event-action-btn"
          >
            <Calendar size={15} /> Add to calendar
          </a>
        </div>

        {/* Reception Event Card */}
        <div className="event-card">
          <div className="event-badge">RECEPTION</div>
          <h3 className="event-title">Wedding Reception</h3>

          <div className="event-detail-item">
            <Calendar size={18} className="event-icon" />
            <span>3 September 2026</span>
          </div>

          <div className="event-detail-item">
            <Clock size={18} className="event-icon" />
            <span>12:00 PM onwards</span>
          </div>

          <div className="event-detail-item">
            <MapPin size={18} className="event-icon" />
            <span>Kareem Haji Stop, Madayi</span>
          </div>

          <a
            href={receptionCalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="event-action-btn"
          >
            <Calendar size={15} /> Add to calendar
          </a>
        </div>

        {/* Bride's Home Card */}
        <div className="event-card venue-card">
          <div className="event-badge gold">VENUE</div>
          <h3 className="event-title">Bride&rsquo;s Home</h3>

          <div className="event-detail-item" style={{ marginTop: '12px' }}>
            <MapPin size={22} className="event-icon" />
            <span style={{ fontWeight: 600, fontSize: '16px' }}>Vadikkal, Madayi</span>
          </div>

          <p className="venue-note">
            Join us at Vadikkal, Madayi to share your blessings and prayers.
          </p>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="event-action-btn map-btn"
          >
            <MapPin size={15} /> Open in Maps
          </a>
        </div>
      </div>
    </section>
  )
}
