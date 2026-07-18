import { motion } from 'framer-motion'

// ─── Testimonial data ─────────────────────────────────────────────────────────
const testimonials = [
  {
    initials: 'JR',
    client: 'Juicy',
    role: 'RETAIL BRAND',
    review:
      'ANY delivered a website that not only looks stunning but also performs flawlessly. Their attention to detail and clean design elevated our brand completely.',
  },
  {
    initials: 'AU',
    client: 'Aditya University',
    role: 'EDTECH PLATFORM',
    review:
      'The platform created by ANY has transformed how our students prepare for interviews. Smart, intuitive, and built exactly for our needs.',
  },
  {
    initials: 'TG',
    client: 'TourGo',
    role: 'TRAVEL STARTUP',
    review:
      'ANY designed a beautiful and user-friendly app that perfectly captures the spirit of travel. Our users love the experience!',
  },
]

// ─── Shared animation ease ────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1]

// ─── Single testimonial card ──────────────────────────────────────────────────
function TestimonialCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease, delay: 0.15 + index * 0.12 }}
      whileHover={{
        y: -8,
        boxShadow: '0 18px 48px rgba(0,0,0,0.10)',
        transition: { duration: 0.28, ease: 'easeOut' },
      }}
      style={{
        flex: '1 1 0',
        minWidth: 0,
        backgroundColor: '#fff',
        border: '1px solid #E5E5E5',
        borderRadius: '24px',
        padding: 'clamp(24px, 2.4vw, 32px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        cursor: 'default',
        willChange: 'transform, box-shadow',
      }}
    >
      {/* Large quotation mark */}
      <div
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '52px',
          lineHeight: 0.8,
          color: '#111',
          fontWeight: 700,
          userSelect: 'none',
          marginBottom: '4px',
        }}
      >
        ❝
      </div>

      {/* Review text */}
      <p
        style={{
          fontFamily: 'Barlow, sans-serif',
          fontWeight: 400,
          fontSize: 'clamp(13px, 1.05vw, 15px)',
          color: 'rgba(17,17,17,0.80)',
          lineHeight: 1.7,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {item.review}
      </p>

      {/* Divider */}
      <div
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#E5E5E5',
          marginTop: '4px',
        }}
      />

      {/* Avatar + client info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Circular avatar */}
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#111',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Barlow, sans-serif',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.04em',
            flexShrink: 0,
            userSelect: 'none',
          }}
        >
          {item.initials}
        </div>

        {/* Name + role */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(13px, 1vw, 15px)',
              color: '#111',
              lineHeight: 1,
            }}
          >
            {item.client}
          </span>
          <span
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(10px, 0.75vw, 11px)',
              letterSpacing: '0.10em',
              color: 'rgba(17,17,17,0.5)',
              textTransform: 'uppercase',
            }}
          >
            {item.role}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Testimonials Section ─────────────────────────────────────────────────────
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: '#EBEBEB',
        width: '100%',
        padding: 'clamp(60px, 8vw, 110px) clamp(24px, 5vw, 72px)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* ── Section heading ──────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
          {/* CLIENTS label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease }}
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(9px, 0.75vw, 11px)',
              letterSpacing: '0.32em',
              color: 'rgba(17,17,17,0.6)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            CLIENTS
          </motion.p>

          {/* OUR WORK. THEIR WORDS. */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.68, ease, delay: 0.08 }}
            style={{
              fontFamily: '"Barlow Condensed", Barlow, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(52px, 9vw, 120px)',
              lineHeight: 0.92,
              letterSpacing: '-0.01em',
              color: '#111',
              margin: 0,
            }}
          >
            OUR WORK.<br />THEIR WORDS.
          </motion.h2>
        </div>

        <div
          className="testimonials-grid"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(12px, 1.4vw, 20px)',
          }}
        >
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.initials} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
