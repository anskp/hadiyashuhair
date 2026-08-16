import React from 'react'
import { Heart, Sparkles, Calendar } from 'lucide-react'

export const LoveStorySection: React.FC = () => {
  const stories = [
    {
      date: '14 Feb 2021',
      title: 'First Time We Met',
      desc: 'Our eyes met on a quiet evening. What started as a chance conversation quickly blossomed into a deep connection filled with laughter and shared dreams.',
      image:
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80',
      rotation: '-3deg',
    },
    {
      date: '20 Oct 2023',
      title: 'The Journey Together',
      desc: 'Exploring nature, sharing sunsets, supporting each other through every milestone, and knowing that we were meant to walk through life side by side.',
      image:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
      rotation: '2deg',
    },
    {
      date: '24 Dec 2024',
      title: 'The Sacred Promise',
      desc: 'Surrounded by warmth and prayers, we sealed our promise to unite our lives forever under Allah&rsquo;s divine blessings.',
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      rotation: '-2deg',
    },
  ]

  return (
    <section id="story" className="love-story-section">
      <div className="section-header">
        <span className="section-tag">Our Journey</span>
        <h2 className="section-title">Our Sweet Love Story</h2>
      </div>

      <div className="polaroid-stack-container">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="polaroid-card"
            style={{ transform: `rotate(${story.rotation})` }}
          >
            <div className="polaroid-pin">
              <Sparkles size={16} color="var(--rose-primary)" />
            </div>
            <div className="polaroid-img-wrap">
              <img src={story.image} alt={story.title} className="polaroid-img" />
            </div>
            <div className="polaroid-body">
              <div className="polaroid-date">
                <Calendar size={13} /> {story.date}
              </div>
              <h3 className="polaroid-title">{story.title}</h3>
              <p className="polaroid-desc">{story.desc}</p>
              <div className="polaroid-footer">
                <Heart size={14} color="var(--rose-primary)" fill="var(--rose-primary)" />
                <span className="polaroid-names">Hadiya &amp; Shuhair</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
