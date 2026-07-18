import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Shared animation helpers ───────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.0, ease: 'easeOut', delay },
})

// ─── Navbar & Slide Menu ────────────────────────────────────────────────────
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'HOME', target: 'hero' },
    { label: 'PROJECTS', target: 'projects' },
    { label: 'TESTIMONIALS', target: 'testimonials' },
    { label: 'CONTACT', target: 'contact' },
  ]

  const handleScroll = (targetId) => {
    setIsOpen(false)
    // Wait slightly for sidebar exit animation before scrolling
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <>
      <motion.nav
        {...fadeIn(0)}
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between hero-nav"
      >
        {/* Logo */}
        <a
          href="/"
          id="nav-logo"
          style={{
            fontFamily: 'Barlow, sans-serif',
            fontWeight: 900,
            fontSize: '22px',
            letterSpacing: '-0.01em',
            color: '#111',
            lineHeight: 1,
            textDecoration: 'none',
            userSelect: 'none',
          }}
        >
          ANY
        </a>

        {/* Menu button */}
        <button
          id="nav-menu-btn"
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.17em',
              color: '#111',
              userSelect: 'none',
            }}
          >
            MENU
          </span>
          {/* 3-line hamburger */}
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              width: '24px',
            }}
          >
            <span style={{ display: 'block', width: '100%', height: '1.5px', background: '#111' }} />
            <span style={{ display: 'block', width: '100%', height: '1.5px', background: '#111' }} />
            <span style={{ display: 'block', width: '75%',  height: '1.5px', background: '#111' }} />
          </span>
        </button>
      </motion.nav>

      {/* Slide Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(17,17,17,0.3)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 100,
              }}
            />

            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'clamp(280px, 35vw, 400px)',
                backgroundColor: '#ffffff',
                borderLeft: '1px solid rgba(17,17,17,0.1)',
                boxShadow: '-10px 0 40px rgba(0,0,0,0.08)',
                zIndex: 101,
                display: 'flex',
                flexDirection: 'column',
                padding: '40px 32px',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  alignSelf: 'flex-end',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  marginBottom: '60px',
                }}
              >
                <span style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  color: '#111',
                }}>CLOSE</span>
                {/* Close X icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Menu Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {menuItems.map((item, idx) => (
                  <motion.button
                    key={item.target}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    onClick={() => handleScroll(item.target)}
                    style={{
                      textAlign: 'left',
                      fontFamily: '"Barlow Condensed", Barlow, sans-serif',
                      fontWeight: 900,
                      fontSize: 'clamp(28px, 3vw, 40px)',
                      color: '#111',
                      letterSpacing: '-0.01em',
                      cursor: 'pointer',
                      transition: 'color 0.2s, padding-left 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#777'
                      e.currentTarget.style.paddingLeft = '8px'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#111'
                      e.currentTarget.style.paddingLeft = '0px'
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#FAFAF8',
        overflow: 'hidden',
      }}
    >
      <Navbar />

      {/* Layer 2: The uploaded hand image */}
      <motion.div
        {...fadeIn(0.05)}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="/bg.png"
          alt="Expressive hand — ANY digital agency"
          draggable={false}
          style={{
            maxHeight: 'min(900px, 90vh)',
            maxWidth: '100%',
            objectFit: 'contain',
            userSelect: 'none',
          }}
        />
      </motion.div>

      {/* Layer 3: Hero content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          width: '100%',
          color: '#111111',
          textAlign: 'center',
          paddingTop: 'clamp(140px, 18vh, 180px)',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        {/* Tagline */}
        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontFamily: 'Barlow, sans-serif',
            fontSize: '14px',
            letterSpacing: '0.4em',
            fontWeight: 500,
            textTransform: 'uppercase',
            color: '#111111',
            marginBottom: '14px',
          }}
        >
          LIMITED ONLY BY IMAGINATION
        </motion.p>

        {/* Giant ANY */}
        <motion.h1
          {...fadeUp(0.35)}
          style={{
            fontFamily: 'Barlow, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(140px, 12vw, 240px)',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
            color: '#111111',
            userSelect: 'none',
            margin: 0,
          }}
        >
          ANY
        </motion.h1>

        {/* WE BUILD ANYTHING. */}
        <motion.div
          {...fadeUp(0.5)}
          style={{
            fontFamily: 'Barlow, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(72px, 6vw, 110px)',
            lineHeight: 0.95,
            color: '#111111',
            userSelect: 'none',
            marginTop: '10px',
          }}
        >
          <div>WE BUILD</div>
          <div>ANYTHING.</div>
        </motion.div>

        {/* Body paragraph */}
        <motion.p
          {...fadeUp(0.65)}
          style={{
            fontFamily: 'Barlow, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(18px, 2.2vw, 28px)',
            lineHeight: 1.5,
            color: '#111111',
            maxWidth: '620px',
            marginTop: '28px',
          }}
        >
          Whether it&apos;s a website, mobile app, AI solution,{' '}
          branding, or custom software—you imagine it,{' '}
          we build it with precision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.8)}
          className="hero-buttons"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(12px, 1.2vw, 18px)',
            marginTop: 'clamp(32px, 3.5vw, 48px)',
          }}
        >
          {/* Primary — filled black */}
          <button
            id="cta-start-project"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(11px, 0.9vw, 13px)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#FAFAF8',
              backgroundColor: '#111111',
              border: '1.5px solid #111111',
              borderRadius: '999px',
              padding: 'clamp(14px, 1.2vw, 18px) clamp(28px, 2.6vw, 36px)',
              cursor: 'pointer',
              transition: 'background 0.25s, color 0.25s, border-color 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#111111'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#111111'
              e.currentTarget.style.color = '#FAFAF8'
            }}
          >
            START YOUR PROJECT
          </button>

          {/* Secondary — outlined black */}
          <button
            id="cta-view-work"
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(11px, 0.9vw, 13px)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#111111',
              backgroundColor: 'transparent',
              border: '1.5px solid #111111',
              borderRadius: '999px',
              padding: 'clamp(14px, 1.2vw, 18px) clamp(28px, 2.6vw, 36px)',
              cursor: 'pointer',
              transition: 'background 0.25s, color 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#111111'
              e.currentTarget.style.color = '#FAFAF8'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#111111'
            }}
          >
            VIEW OUR WORK
          </button>
        </motion.div>
      </div>
    </section>
  )
}
