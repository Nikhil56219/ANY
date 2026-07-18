import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

// ─── Inline SVG icons ────────────────────────────────────────────────────────
function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1L6.6 10.8z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

// ─── Contact item row ─────────────────────────────────────────────────────────
function ContactItem({ icon, label, value, href }) {
  return (
    <div>
      {/* Divider above */}
      <div style={{ height: '1px', backgroundColor: 'rgba(17,17,17,0.12)', marginBottom: '16px' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
        {/* Icon circle */}
        <div style={{
          width: '38px', height: '38px', borderRadius: '50%',
          border: '1px solid rgba(17,17,17,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, color: '#111',
        }}>
          {icon}
        </div>

        {/* Label + value */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{
            fontFamily: 'Barlow, sans-serif', fontWeight: 700,
            fontSize: '10px', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#111',
          }}>
            {label}
          </span>
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'Barlow, sans-serif', fontWeight: 400,
              fontSize: 'clamp(12px, 0.95vw, 14px)', color: 'rgba(17,17,17,0.72)',
              textDecoration: 'none',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#111'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(17,17,17,0.72)'}
            >
              {value}
            </a>
          ) : (
            <span style={{
              fontFamily: 'Barlow, sans-serif', fontWeight: 400,
              fontSize: 'clamp(12px, 0.95vw, 14px)', color: 'rgba(17,17,17,0.72)',
            }}>
              {value}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Form field helpers ───────────────────────────────────────────────────────
const fieldLabel = {
  fontFamily: 'Barlow, sans-serif',
  fontWeight: 700,
  fontSize: '11px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#111',
  display: 'block',
  marginBottom: '8px',
}

const fieldInput = {
  fontFamily: 'Barlow, sans-serif',
  fontWeight: 400,
  fontSize: '14px',
  color: '#111',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(17,17,17,0.20)',
  outline: 'none',
  width: '100%',
  padding: '6px 0 10px',
  appearance: 'none',
}

// ─── Contact Section ──────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <section
      id="contact"
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
          gap: 'clamp(40px, 6vw, 100px)',
          alignItems: 'flex-start',
        }}
        className="contact-grid"
      >

        {/* ── LEFT COLUMN ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          style={{ flexShrink: 0, width: 'clamp(240px, 36%, 400px)' }}
        >
          {/* LET'S BUILD label */}
          <p style={{
            fontFamily: 'Barlow, sans-serif', fontWeight: 500,
            fontSize: 'clamp(9px, 0.75vw, 11px)', letterSpacing: '0.32em',
            color: 'rgba(17,17,17,0.65)', textTransform: 'uppercase',
            marginBottom: '10px',
          }}>
            LET&apos;S BUILD
          </p>

          {/* SOMETHING GREAT. */}
          <h2 style={{
            fontFamily: '"Barlow Condensed", Barlow, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(48px, 7vw, 88px)',
            lineHeight: 0.92,
            letterSpacing: '-0.01em',
            color: '#111',
            margin: '0 0 22px 0',
          }}>
            SOMETHING<br />GREAT.
          </h2>

          {/* Description */}
          <p style={{
            fontFamily: 'Barlow, sans-serif', fontWeight: 400,
            fontSize: 'clamp(13px, 1vw, 15px)', lineHeight: 1.65,
            color: 'rgba(17,17,17,0.68)', marginBottom: '20px',
            maxWidth: '300px',
          }}>
            Have an idea? Tell us about your project and we&apos;ll make it happen with precision.
          </p>

          {/* Available badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              backgroundColor: 'rgba(17,17,17,0.35)', flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'Barlow, sans-serif', fontWeight: 600,
              fontSize: '10px', letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'rgba(17,17,17,0.55)',
            }}>
              AVAILABLE FOR NEW PROJECTS
            </span>
          </div>

          {/* Contact items */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ContactItem icon={<EmailIcon />}    label="EMAIL"    value="any.agency@gmail.com"  href="mailto:any.agency@gmail.com" />
            <ContactItem icon={<PhoneIcon />}    label="PHONE"    value="+91 89775 41311" />
            <ContactItem icon={<LocationIcon />} label="LOCATION" value="Kakinada, India" />
            <ContactItem
              icon={<InstagramIcon />}
              label="SOCIALS"
              value="@dexteroperator"
              href="https://instagram.com/dexteroperator"
            />
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN — Contact form ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          style={{ flex: 1, minWidth: 0 }}
        >
          <form
            onSubmit={e => {
              e.preventDefault()
              const name = document.getElementById('contact-name')?.value || ''
              const email = document.getElementById('contact-email')?.value || ''
              const projectType = document.getElementById('contact-project-type')?.value || ''
              const budget = document.getElementById('contact-budget')?.value || ''
              const message = document.getElementById('contact-message')?.value || ''

              const subject = encodeURIComponent(`New Project Request from ${name}`)
              const body = encodeURIComponent(
                `Hi ANY Team,\n\n` +
                `I would like to submit a project inquiry:\n\n` +
                `• Name: ${name}\n` +
                `• Email: ${email}\n` +
                `• Project Type: ${projectType || 'Not specified'}\n` +
                `• Budget Range: ${budget || 'Not specified'}\n\n` +
                `• Message:\n${message}\n\n` +
                `Looking forward to hearing from you!`
              )

              window.location.href = `mailto:any.agency@gmail.com?subject=${subject}&body=${body}`
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
          >
            {/* NAME */}
            <div>
              <label style={fieldLabel}>NAME</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                style={{ ...fieldInput }}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label style={fieldLabel}>EMAIL</label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                style={{ ...fieldInput }}
              />
            </div>

            {/* PROJECT TYPE */}
            <div>
              <label style={fieldLabel}>PROJECT TYPE</label>
              <div style={{ position: 'relative' }}>
                <select
                  id="contact-project-type"
                  defaultValue=""
                  style={{
                    ...fieldInput,
                    cursor: 'pointer',
                    paddingRight: '28px',
                  }}
                >
                  <option value="" disabled>Select project type</option>
                  <option>Website Design</option>
                  <option>Mobile App</option>
                  <option>AI Platform</option>
                  <option>Branding</option>
                  <option>Custom Software</option>
                </select>
                {/* Dropdown arrow */}
                <svg
                  style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#111' }}
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* BUDGET */}
            <div>
              <label style={fieldLabel}>BUDGET</label>
              <div style={{ position: 'relative' }}>
                <select
                  id="contact-budget"
                  defaultValue=""
                  style={{
                    ...fieldInput,
                    cursor: 'pointer',
                    paddingRight: '28px',
                  }}
                >
                  <option value="" disabled>Select budget range</option>
                  <option>Under ₹50,000</option>
                  <option>₹50,000 – ₹1,50,000</option>
                  <option>₹1,50,000 – ₹5,00,000</option>
                  <option>₹5,00,000+</option>
                </select>
                <svg
                  style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#111' }}
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label style={fieldLabel}>TELL US ABOUT YOUR PROJECT</label>
              <textarea
                id="contact-message"
                placeholder="Write your message here..."
                rows={4}
                style={{
                  ...fieldInput,
                  resize: 'vertical',
                  minHeight: '90px',
                  lineHeight: 1.6,
                }}
              />
            </div>

            {/* SEND REQUEST */}
            <div>
              <motion.button
                type="submit"
                id="contact-submit"
                whileHover={{ backgroundColor: '#333' }}
                transition={{ duration: 0.2 }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(11px, 1vw, 13px)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  backgroundColor: '#111',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '18px 28px',
                  cursor: 'pointer',
                }}
              >
                SEND REQUEST
                <ArrowRightIcon />
              </motion.button>

              <p style={{
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 400,
                fontSize: '12px',
                color: 'rgba(17,17,17,0.45)',
                textAlign: 'center',
                marginTop: '12px',
              }}>
                We usually reply within 24 hours.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
