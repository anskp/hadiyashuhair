import React from 'react'

export const ProgramSection: React.FC = () => {
  const nikahCalUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nikah+-+Hadiya+%26+Shuhair&dates=20260902T160000/20260902T180000&details=Nikah+ceremony+of+Hadiya+and+Shuhair&location=Hydrose+Juma+Masjid,+Vadikkal'

  const receptionCalUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception+-+Hadiya+%26+Shuhair&dates=20260903T120000/20260903T160000&details=Wedding+reception+of+Hadiya+and+Shuhair&location=Kareem+Haji+Stop,+Madayi'

  const mapUrl = 'https://maps.google.com/?q=Vadikkal,Madayi'

  return (
    <section id="program" className="program-section">
      <div className="invitation-card">
        <i className="fa-solid fa-spa decor-flower flower-top-left"></i>
        <i className="fa-solid fa-spa decor-flower flower-mid-right"></i>
        <i className="fa-solid fa-spa decor-flower flower-bottom-left"></i>

        <div className="script-subtitle">Celebrate with us</div>
        <h1 className="main-title">Wedding Schedule</h1>

        <div className="arch-container">
          <div className="timeline">
            {/* Nikah */}
            <div className="timeline-item">
              <div className="timeline-node">
                <i className="fa-solid fa-hands-praying"></i>
              </div>
              <span className="event-tag">Nikah</span>
              <h2 className="event-title">Nikah Ceremony</h2>
              <p className="event-meta">
                <strong>2 September 2026</strong> &bull; 4:00 PM<br />
                Hydrose Juma Masjid, Vadikkal
              </p>
              <a
                href={nikahCalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action"
              >
                <i className="fa-regular fa-calendar-plus"></i> Add to calendar
              </a>
            </div>

            {/* Dashed Connector */}
            <div className="timeline-divider"></div>

            {/* Reception */}
            <div className="timeline-item">
              <div className="timeline-node">
                <i className="fa-solid fa-champagne-glasses"></i>
              </div>
              <span className="event-tag">Reception</span>
              <h2 className="event-title">Wedding Reception</h2>
              <p className="event-meta">
                <strong>3 September 2026</strong> &bull; 12:00 PM onwards<br />
                Kareem Haji Stop, Madayi
              </p>
              <a
                href={receptionCalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action"
              >
                <i className="fa-regular fa-calendar-plus"></i> Add to calendar
              </a>
            </div>

            {/* Dashed Connector */}
            <div className="timeline-divider"></div>

            {/* Venue */}
            <div className="timeline-item">
              <div className="timeline-node">
                <i className="fa-solid fa-house-chimney-heart"></i>
              </div>
              <span className="event-tag">Venue</span>
              <h2 className="event-title">Bride&rsquo;s Home</h2>
              <p className="event-meta">
                Vadikkal, Madayi<br />
                <em>Join us at Vadikkal, Madayi to share your blessings and prayers.</em>
              </p>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action"
              >
                <i className="fa-solid fa-location-dot"></i> Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
