import { useRef } from 'react'
import { motion } from 'framer-motion'

// ─── Project data ────────────────────────────────────────────────────────────
const projects = [
  {
    number: '01',
    title: 'JUICY',
    image: '/juicy.png',
    categories: ['Retail Website', 'Website Design', 'Development'],
    scale: 1.2,
    x: 0,
    y: -1,
    link: null,
  },
  {
    number: '02',
    title: 'INTERVIEWCOACH AI',
    image: '/interviewcoach.png',
    categories: ['AI Platform', 'Web Application', 'Aditya University'],
    scale: 1,
    x: 23,
    y: 0,
    link: 'https://interview-coach-nu-coral.vercel.app/',
  },
  {
    number: '03',
    title: 'TOURGO',
    image: '/tourgo.png',
    categories: ['UI/UX Design', 'Mobile App Design', 'Travel Startup'],
    scale: 1.0,
    x: 0,
    y: 0,
    link: 'https://tour-go-dun.vercel.app/',
  },
]

// ─── Arrow icon ──────────────────────────────────────────────────────────────
function ArrowIcon({ size = 16, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M3 13L13 3M13 3H6M13 3V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Project Card ────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  // Arrow rotation variant propagating from card hover
  const arrowVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 45, transition: { type: 'spring', stiffness: 300, damping: 15 } }
  }

  // Image zoom variant propagating from card hover
  const imageVariants = {
    initial: { 
      scale: project.scale ?? 1,
      x: project.x ?? 0,
      y: project.y ?? 0
    },
    hover: { 
      scale: (project.scale ?? 1) * 1.05,
      x: project.x ?? 0,
      y: project.y ?? 0,
      transition: { duration: 0.45, ease: 'easeOut' }
    }
  }

  return (
    <motion.article
      initial="initial"
      whileHover="hover"
      viewport={{ once: true, margin: '-60px' }}
      style={{
        backgroundColor: '#fff',
        border: '1px solid rgba(17, 17, 17, 0.08)',
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: project.link ? 'pointer' : 'default',
        flex: '1 1 0',
        minWidth: 0,
        position: 'relative',
      }}
      variants={{
        initial: {
          y: 0,
          boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
        },
        hover: {
          y: -8,
          boxShadow: '0 20px 48px rgba(0,0,0,0.06)',
          borderColor: 'rgba(17, 17, 17, 0.16)',
          transition: { duration: 0.3, ease: 'easeOut' },
        }
      }}
      onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
    >
      {/* Card header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 18px 12px',
        }}
      >
        <span
          style={{
            fontFamily: 'Barlow, sans-serif',
            fontWeight: 700,
            fontSize: '13px',
            color: '#111',
            letterSpacing: '0.02em',
          }}
        >
          {project.number}
        </span>
        {/* Dash decorators */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span style={{ display: 'block', width: '14px', height: '1.5px', backgroundColor: '#bbb', borderRadius: '2px' }} />
          <span style={{ display: 'block', width: '14px', height: '1.5px', backgroundColor: '#bbb', borderRadius: '2px' }} />
        </div>
      </div>

      {/* Project image */}
      <div
        style={{
          width: '100%',
          aspectRatio: '4/3',
          overflow: 'hidden',
          flexShrink: 0,
          position: 'relative',
        }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          draggable={false}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transformOrigin: 'center center',
          }}
          variants={imageVariants}
        />
      </div>

      {/* Card footer */}
      <div
        style={{
          padding: '16px 18px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          flexGrow: 1,
        }}
      >
        {/* Title */}
        <motion.span
          style={{
            fontFamily: 'Barlow, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(13px, 1.1vw, 15px)',
            color: '#111',
            letterSpacing: '0.01em',
            transition: 'color 0.25s',
          }}
          variants={{
            initial: { color: '#111' },
            hover: { color: '#000' }
          }}
        >
          {project.title}
        </motion.span>

        {/* Categories + Arrow */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '8px',
          }}
        >
          <div
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(10px, 0.85vw, 12px)',
              color: 'rgba(17,17,17,0.55)',
              lineHeight: 1.55,
            }}
          >
            {project.categories.map((cat, i) => (
              <span key={cat}>
                {cat}
                {i < project.categories.length - 1 && (
                  <span style={{ margin: '0 5px', opacity: 0.5 }}>•</span>
                )}
              </span>
            ))}
          </div>

          {/* Arrow */}
          <motion.div
            variants={arrowVariants}
            style={{
              flexShrink: 0,
              color: '#111',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ArrowIcon size={15} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Projects Section ────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section
      id="projects"
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
          display: 'flex',
          gap: 'clamp(32px, 4vw, 64px)',
          alignItems: 'center',
        }}
      >
        {/* ── LEFT COLUMN ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            flexShrink: 0,
            width: 'clamp(180px, 20vw, 250px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}
        >
          {/* SELECTED label */}
          <p
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(9px, 0.75vw, 11px)',
              letterSpacing: '0.32em',
              color: 'rgba(17,17,17,0.6)',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}
          >
            SELECTED
          </p>

          {/* PROJECTS heading */}
          <h2
            style={{
              fontFamily: '"Barlow Condensed", Barlow, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(42px, 5.5vw, 72px)',
              lineHeight: 0.92,
              letterSpacing: '-0.01em',
              color: '#111',
              margin: '0 0 16px 0',
            }}
          >
            PROJECTS
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(12px, 1vw, 14px)',
              color: 'rgba(17,17,17,0.65)',
              lineHeight: 1.6,
              marginBottom: '24px',
            }}
          >
            A selection of work<br />we&apos;re proud of.
          </p>

          {/* VIEW ALL PROJECTS button */}
          <motion.button
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(9px, 0.78vw, 11px)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#111',
              backgroundColor: 'transparent',
              border: '1.5px solid #111',
              borderRadius: '999px',
              padding: 'clamp(10px, 1vw, 13px) clamp(18px, 2vw, 24px)',
              cursor: 'pointer',
              alignSelf: 'flex-start',
              marginBottom: 'clamp(40px, 8vw, 80px)',
            }}
          >
            <span>VIEW ALL PROJECTS</span>
            <motion.div
              variants={{
                initial: { x: 0, y: 0 },
                hover: { x: 3, y: -3 }
              }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <ArrowIcon size={13} />
            </motion.div>
          </motion.button>

          {/* Bottom tagline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
            }}
          >
            <span
              style={{
                fontFamily: 'Barlow, sans-serif',
                fontSize: '6px',
                color: '#111',
                marginTop: '3px',
                flexShrink: 0,
              }}
            >
              •
            </span>
            <p
              style={{
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(9px, 0.75vw, 11px)',
                letterSpacing: '0.08em',
                color: '#111',
                textTransform: 'uppercase',
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              BUILT WITH PURPOSE.<br />DESIGNED TO LAST.
            </p>
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN — Cards ─────────────────────────────────────── */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            gap: 'clamp(10px, 1.2vw, 16px)',
            minWidth: 0,
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
