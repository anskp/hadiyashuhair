import React, { useState } from 'react'
import { Volume2, VolumeX, RefreshCw, ShoppingBag, Search, Menu, X } from 'lucide-react'

interface HeaderProps {
  onReplayCurtain: () => void
}

export const Header: React.FC<HeaderProps> = ({ onReplayCurtain }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleAudio = () => {
    setIsPlaying((prev) => !prev)
    const audioEl = document.getElementById('wedding-bg-music') as HTMLAudioElement
    if (audioEl) {
      if (!isPlaying) {
        audioEl.play().catch(() => {})
      } else {
        audioEl.pause()
      }
    }
  }

  return (
    <header className="sukun-header">
      <a href="#home" className="sukun-logo">
        Sukun<span style={{ color: 'var(--rose-primary)', fontSize: '28px' }}>.</span>
      </a>

      {/* Desktop Navigation */}
      <nav className="sukun-nav">
        <a href="#home" className="nav-link active">
          HOME
        </a>
        <a href="#story" className="nav-link">
          OUR STORY
        </a>
        <a href="#profiles" className="nav-link">
          PROFILES
        </a>
        <a href="#gallery" className="nav-link">
          GALLERY
        </a>
        <a href="#program" className="nav-link">
          PROGRAM
        </a>
        <a href="#rsvp" className="nav-link">
          RSVP
        </a>
      </nav>

      {/* Header Actions & Icons */}
      <div className="header-actions">
        <button
          className="icon-btn"
          onClick={toggleAudio}
          title={isPlaying ? 'Mute Background Music' : 'Play Background Music'}
        >
          {isPlaying ? <Volume2 size={19} color="var(--rose-primary)" /> : <VolumeX size={19} />}
        </button>

        <button
          className="icon-btn"
          onClick={onReplayCurtain}
          title="Replay Curtain Entrance"
        >
          <RefreshCw size={18} />
        </button>

        <button className="icon-btn" title="Search">
          <Search size={18} />
        </button>

        <button className="icon-btn" title="Wishlist Bag">
          <ShoppingBag size={18} />
          <span className="cart-badge">0</span>
        </button>

        <button
          className="icon-btn mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          title="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <a href="#home" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            HOME
          </a>
          <a href="#story" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            OUR STORY
          </a>
          <a href="#profiles" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            PROFILES
          </a>
          <a href="#gallery" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            GALLERY
          </a>
          <a href="#program" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            PROGRAM
          </a>
          <a href="#rsvp" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            RSVP
          </a>
        </div>
      )}

      <audio
        id="wedding-bg-music"
        loop
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-waltz-112836.mp3"
      />
    </header>
  )
}
