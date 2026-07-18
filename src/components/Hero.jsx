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
        backgroundColor: '#EBEBEB',
        overflow: 'hidden',
      }}
    >
      <Navbar />

      {/* ── Hand image — centered, anchored to top, fills viewport height ── */}
      <motion.div
        {...fadeIn(0.05)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/bg.png"
          alt="Expressive hand — ANY digital agency"
          draggable={false}
          style={{
            height: '100%',
            width: 'auto',
            maxWidth: 'none',
            objectFit: 'contain',
            objectPosition: 'top center',
            userSelect: 'none',
          }}
        />
      </motion.div>

      {/* ── Text content — sits over the hand ───────────────────────────── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: 'clamp(140px, 28vh, 260px)',
          paddingBottom: '80px',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
      >

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontFamily: 'Barlow, sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(9px, 0.9vw, 12px)',
            letterSpacing: '0.38em',
            color: 'rgba(255,255,255,0.85)',
            textTransform: 'uppercase',
            marginBottom: '10px',
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
            fontSize: 'clamp(100px, 18.5vw, 230px)',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
            color: '#ffffff',
            userSelect: 'none',
            margin: 0,
          }}
        >
          ANY
        </motion.h1>

        {/* WE BUILD / ANYTHING. */}
        <motion.div
          {...fadeUp(0.5)}
          style={{
            fontFamily: 'Barlow, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(40px, 7.2vw, 92px)',
            lineHeight: 0.92,
            letterSpacing: '-0.01em',
            color: '#ffffff',
            userSelect: 'none',
            marginTop: 'clamp(2px, 0.3vw, 6px)',
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
            fontSize: 'clamp(12px, 1.1vw, 14px)',
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.78)',
            maxWidth: 'clamp(220px, 24vw, 300px)',
            marginTop: 'clamp(14px, 1.6vw, 22px)',
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
            gap: 'clamp(10px, 1vw, 14px)',
            marginTop: 'clamp(18px, 2vw, 26px)',
          }}
        >
          {/* Primary — filled white */}
          <button
            id="cta-start-project"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(9px, 0.82vw, 11px)',
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: '#111',
              backgroundColor: '#fff',
              border: '1.5px solid #fff',
              borderRadius: '999px',
              padding: 'clamp(11px, 1.05vw, 14px) clamp(22px, 2.4vw, 30px)',
              cursor: 'pointer',
              transition: 'background 0.25s, color 0.25s, border-color 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#eaeaea'
              e.currentTarget.style.borderColor = '#eaeaea'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#fff'
              e.currentTarget.style.borderColor = '#fff'
            }}
          >
            START YOUR PROJECT
          </button>

          {/* Secondary — outlined white */}
          <button
            id="cta-view-work"
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(9px, 0.82vw, 11px)',
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: '#fff',
              backgroundColor: 'transparent',
              border: '1.5px solid #fff',
              borderRadius: '999px',
              padding: 'clamp(11px, 1.05vw, 14px) clamp(22px, 2.4vw, 30px)',
              cursor: 'pointer',
              transition: 'background 0.25s, color 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#fff'
              e.currentTarget.style.color = '#111'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#fff'
            }}
          >
            VIEW OUR WORK
          </button>
        </motion.div>
      </div>
    </section>
  )
}
