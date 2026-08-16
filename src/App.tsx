import { useState } from 'react'
import './App.css'
import backdropImg from './assets/background-curtain.png'
import leftCurtainImg from './assets/left-side-curtains-without-bg.png'
import rightCurtainImg from './assets/right-side-curtains-without-bg.png'

import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { IslamicVerses } from './components/IslamicVerses'
import { CountdownSection } from './components/CountdownSection'
import { ProfilesSection } from './components/ProfilesSection'
import { LoveStorySection } from './components/LoveStorySection'
import { GallerySection } from './components/GallerySection'
import { ProgramSection } from './components/ProgramSection'
import { RsvpSection } from './components/RsvpSection'
import { Footer } from './components/Footer'
import { RefreshCw } from 'lucide-react'

function App() {
  const [opened, setOpened] = useState(false)

  const handleOpenIntro = () => {
    setOpened(true)
  }

  const handleReplayIntro = () => {
    setOpened(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* INTRO CURTAIN STAGE OVERLAY */}
      <div
        className={`stage${opened ? ' opened' : ''}`}
        onClick={handleOpenIntro}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleOpenIntro()
        }}
        aria-label="Open the wedding invitation"
      >
        <img className="layer backdrop" src={backdropImg} alt="" draggable={false} />
        <div className="layer welcome">
          <p className="welcome-eyebrow">You are cordially invited</p>
          <h1 className="welcome-title">Hadiya &amp; Shuhair</h1>
          <p className="welcome-hint">Click anywhere to open invitation</p>
        </div>
        <img
          className="layer curtain-left"
          src={leftCurtainImg}
          alt=""
          draggable={false}
        />
        <img
          className="layer curtain-right"
          src={rightCurtainImg}
          alt=""
          draggable={false}
        />
      </div>

      {/* MAIN WEDDING APP UI */}
      <div className="app-container">
        <Header onReplayCurtain={handleReplayIntro} />
        <main>
          <HeroSection />
          <IslamicVerses />
          <CountdownSection />
          <ProfilesSection />
          <LoveStorySection />
          <GallerySection />
          <ProgramSection />
          <RsvpSection />
        </main>
        <Footer />

        {/* Floating Button to replay curtain entrance if opened */}
        {opened && (
          <button className="replay-curtain-btn" onClick={handleReplayIntro}>
            <RefreshCw size={15} /> Replay Intro
          </button>
        )}
      </div>
    </>
  )
}

export default App
