import React, { useState } from 'react'
import { Camera, X, ZoomIn, Heart } from 'lucide-react'

interface GalleryItem {
  id: number
  category: 'ceremony' | 'moments' | 'reception'
  title: string
  image: string
}

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ceremony' | 'moments' | 'reception'>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const items: GalleryItem[] = [
    {
      id: 1,
      category: 'ceremony',
      title: 'Sacred Vows & Blessing',
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      category: 'moments',
      title: 'Sweet Proposal',
      image:
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      category: 'reception',
      title: 'Grand Banquet Celebration',
      image:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      category: 'ceremony',
      title: 'Ring Exchange',
      image:
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      category: 'moments',
      title: 'Golden Sunset Walks',
      image:
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      category: 'reception',
      title: 'Joyful Moments',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    },
  ]

  const filteredItems =
    activeFilter === 'all'
      ? items
      : items.filter((item) => item.category === activeFilter)

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-header">
        <span className="section-tag">Sweet Memories</span>
        <h2 className="section-title">Our Captured Moments</h2>
      </div>

      {/* Filter Tabs */}
      <div className="gallery-filters">
        <button
          className={`gallery-filter-btn${activeFilter === 'all' ? ' active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button
          className={`gallery-filter-btn${activeFilter === 'ceremony' ? ' active' : ''}`}
          onClick={() => setActiveFilter('ceremony')}
        >
          Ceremony
        </button>
        <button
          className={`gallery-filter-btn${activeFilter === 'moments' ? ' active' : ''}`}
          onClick={() => setActiveFilter('moments')}
        >
          Moments
        </button>
        <button
          className={`gallery-filter-btn${activeFilter === 'reception' ? ' active' : ''}`}
          onClick={() => setActiveFilter('reception')}
        >
          Reception
        </button>
      </div>

      {/* Photo Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="gallery-card"
            onClick={() => setSelectedImage(item)}
            role="button"
            tabIndex={0}
          >
            <img src={item.image} alt={item.title} className="gallery-img" />
            <div className="gallery-overlay">
              <ZoomIn size={24} color="#ffffff" />
              <span className="gallery-overlay-title">{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="lightbox-modal"
          onClick={() => setSelectedImage(null)}
          role="button"
          tabIndex={0}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedImage(null)}
              title="Close"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              <Camera size={16} color="var(--rose-primary)" />
              <span>{selectedImage.title}</span>
              <Heart size={16} color="var(--rose-primary)" style={{ marginLeft: 'auto' }} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
