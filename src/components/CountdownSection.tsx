import React, { useState, useEffect } from 'react'

export const CountdownSection: React.FC = () => {
  // Target wedding date (Nikah: 2 September 2026 at 4:00 PM)
  const targetDate = new Date('2026-09-02T16:00:00')

  const [timeLeft, setTimeLeft] = useState({
    days: 341,
    hours: 0,
    mins: 22,
    secs: 58,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
        const mins = Math.floor((diff / 1000 / 60) % 60)
        const secs = Math.floor((diff / 1000) % 60)
        setTimeLeft({ days, hours, mins, secs })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`)

  const items = [
    { label: 'Days', value: formatNumber(timeLeft.days) },
    { label: 'Hours', value: formatNumber(timeLeft.hours) },
    { label: 'Mins', value: formatNumber(timeLeft.mins) },
    { label: 'Secs', value: formatNumber(timeLeft.secs) },
  ]

  return (
    <section className="countdown-section">
      <div className="countdown-grid">
        {items.map((item, idx) => (
          <div key={idx} className="countdown-card">
            {/* Floral Corner Accent SVG */}
            <svg
              className="countdown-decor"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="10" r="8" fill="#e89cb8" opacity="0.8" />
              <circle cx="24" cy="14" r="5" fill="#c4628a" opacity="0.85" />
              <circle cx="34" cy="16" r="4" fill="#f4c2d5" />
              <path d="M12 25 C 20 18, 25 12, 30 10" stroke="#8cb890" strokeWidth="2" fill="none" />
            </svg>
            <div className="countdown-number">{item.value}</div>
            <div className="countdown-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
