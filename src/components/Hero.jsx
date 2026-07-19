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
        {/* Logo with letter-spacing animation on hover */}
        <motion.a
          href="/"
          id="nav-logo"
          whileHover={{ letterSpacing: '0.15em' }}
          transition={{ duration: 0.3 }}
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
        </motion.a>

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
            {/* Backdrop with elegant blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(17, 17, 17, 0.3)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
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
                width: 'clamp(290px, 38vw, 420px)',
                backgroundColor: '#ffffff',
                borderLeft: '1px solid rgba(17, 17, 17, 0.08)',
                boxShadow: '-15px 0 45px rgba(0, 0, 0, 0.08)',
                zIndex: 101,
                display: 'flex',
                flexDirection: 'column',
                padding: '40px 36px',
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
                  background: 'none',
                  border: 'none',
                  padding: 0,
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
                <motion.svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  whileHover={{ rotate: 90 }}
                  transition={{ type: 'spring', damping: 12 }}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </motion.svg>
              </button>

              {/* Menu Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {menuItems.map((item, idx) => (
                  <motion.button
                    key={item.target}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 + 0.1, ease }}
                    onClick={() => handleScroll(item.target)}
                    style={{
                      textAlign: 'left',
                      fontFamily: '"Barlow Condensed", Barlow, sans-serif',
                      fontWeight: 900,
                      fontSize: 'clamp(28px, 3.5vw, 44px)',
                      color: '#111',
                      letterSpacing: '-0.01em',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#777'
                      e.currentTarget.style.paddingLeft = '12px'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#111'
                      e.currentTarget.style.paddingLeft = '0px'
                    }}
                  >
                    <span style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                      color: 'rgba(17, 17, 17, 0.35)',
                      marginRight: '16px',
                      marginTop: '8px',
                    }}>
                      0{idx + 1}
                    </span>
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Footer info in Sidebar */}
              <div style={{ marginTop: 'auto' }}>
                <div style={{ height: '1px', backgroundColor: 'rgba(17, 17, 17, 0.08)', marginBottom: '20px' }} />
                <span style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 600,
                  fontSize: '9px',
                  letterSpacing: '0.14em',
                  color: 'rgba(17, 17, 17, 0.45)',
                  textTransform: 'uppercase',
                  display: 'block',
                }}>
                  ANY AGENCY
                </span>
                <span style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  color: 'rgba(17, 17, 17, 0.55)',
                  marginTop: '4px',
                  display: 'block',
                }}>
                  Limited only by imagination.
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// ─── Hero Section ────────────────────────────────────────────────────────────
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
            fontFamily: '"Neue Montreal", sans-serif',
            fontWeight: 500,
            fontSize: '15px',
            letterSpacing: '0.42em',
            color: 'rgba(17, 17, 17, 0.72)',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          LIMITED ONLY BY IMAGINATION
        </motion.p>

        {/* Giant ANY */}
        <motion.h1
          {...fadeUp(0.35)}
          style={{
            fontFamily: '"Neue Montreal", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(170px, 13vw, 210px)',
            lineHeight: 0.82,
            letterSpacing: '-0.06em',
            color: '#111111',
            textAlign: 'center',
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
            fontFamily: '"Neue Montreal", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(82px, 6vw, 110px)',
            lineHeight: 0.86,
            letterSpacing: '-0.055em',
            color: '#111',
            textAlign: 'center',
            userSelect: 'none',
            marginTop: '26px',
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
            color: 'rgba(17, 17, 17, 0.68)',
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
          {/* Primary — filled black */}
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
              color: '#fff',
              backgroundColor: '#111',
              border: '1.5px solid #111',
              borderRadius: '999px',
              padding: 'clamp(11px, 1.05vw, 14px) clamp(22px, 2.4vw, 30px)',
              cursor: 'pointer',
              transition: 'background 0.25s, color 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#333'
              e.currentTarget.style.borderColor = '#333'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#111'
              e.currentTarget.style.borderColor = '#111'
            }}
          >
            START YOUR PROJECT
          </button>

          {/* Secondary — outlined */}
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
              color: '#111',
              backgroundColor: 'transparent',
              border: '1.5px solid #111',
              borderRadius: '999px',
              padding: 'clamp(11px, 1.05vw, 14px) clamp(22px, 2.4vw, 30px)',
              cursor: 'pointer',
              transition: 'background 0.25s, color 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#111'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#111'
            }}
          >
            VIEW OUR WORK
          </button>
        </motion.div>
      </div>

      {/* ── Scroll Down Indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{
          fontFamily: 'Barlow, sans-serif',
          fontWeight: 600,
          fontSize: '9px',
          letterSpacing: '0.22em',
          color: 'rgba(17, 17, 17, 0.45)',
          textTransform: 'uppercase',
        }}>
          SCROLL DOWN
        </span>
        {/* Animated Mouse indicator */}
        <div style={{
          width: '18px',
          height: '28px',
          borderRadius: '9px',
          border: '1.5px solid rgba(17, 17, 17, 0.3)',
          position: 'relative',
        }}>
          <motion.div
            animate={{
              y: [3, 14, 3],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: '3px',
              height: '5px',
              backgroundColor: 'rgba(17, 17, 17, 0.6)',
              borderRadius: '50%',
              position: 'absolute',
              top: '4px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
