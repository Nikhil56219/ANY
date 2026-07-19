import { useState } from 'react'
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

// Checkmark icon for successful submission
function CheckIcon() {
  return (
    <motion.svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </motion.svg>
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

// ─── Reusable custom inputs with focus-sliding border animation ─────────────────
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

function FormInput({ label, id, value, onChange, placeholder, type = 'text', required = true }) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div>
      <label htmlFor={id} style={fieldLabel}>{label}</label>
      <div style={{ position: 'relative', width: '100%' }}>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={fieldInput}
        />
        <motion.div
          animate={{ scaleX: isFocused ? 1 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            backgroundColor: '#111',
            transformOrigin: 'center center',
          }}
        />
      </div>
    </div>
  )
}

function FormSelect({ label, id, value, onChange, options, required = true }) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div>
      <label htmlFor={id} style={fieldLabel}>{label}</label>
      <div style={{ position: 'relative', width: '100%' }}>
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            ...fieldInput,
            cursor: 'pointer',
            paddingRight: '28px',
          }}
        >
          <option value="" disabled>Select {label.toLowerCase()}</option>
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {/* Dropdown arrow */}
        <svg
          style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#111' }}
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
        <motion.div
          animate={{ scaleX: isFocused ? 1 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            backgroundColor: '#111',
            transformOrigin: 'center center',
          }}
        />
      </div>
    </div>
  )
}

// ─── Custom textarea with sliding border ───
function FormTextarea({ label, id, value, onChange, placeholder, rows = 4, required = true }) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div>
      <label htmlFor={id} style={fieldLabel}>{label}</label>
      <div style={{ position: 'relative', width: '100%' }}>
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            ...fieldInput,
            resize: 'vertical',
            minHeight: '90px',
            lineHeight: 1.6,
          }}
        />
        <motion.div
          animate={{ scaleX: isFocused ? 1 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            backgroundColor: '#111',
            transformOrigin: 'center center',
          }}
        />
      </div>
    </div>
  )
}

// ─── Contact Section ──────────────────────────────────────────────────────────
export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projectType, setProjectType] = useState('')
  const [budget, setBudget] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (status !== 'idle') return

    setStatus('sending')
    // Mock submission delay
    setTimeout(() => {
      setStatus('success')
      // Reset form
      setName('')
      setEmail('')
      setProjectType('')
      setBudget('')
      setMessage('')
      // Clear success feedback after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }, 1200)
  }

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
              width: '8px', height: '8px',
              borderRadius: '50%',
              backgroundColor: '#111',
              flexShrink: 0,
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
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
          >
            {/* NAME */}
            <FormInput
              label="NAME"
              id="contact-name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your name"
            />

            {/* EMAIL */}
            <FormInput
              label="EMAIL"
              id="contact-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
            />

            {/* PROJECT TYPE */}
            <FormSelect
              label="PROJECT TYPE"
              id="contact-project-type"
              value={projectType}
              onChange={e => setProjectType(e.target.value)}
              options={[
                'Website Design',
                'Mobile App',
                'AI Platform',
                'Branding',
                'Custom Software'
              ]}
            />

            {/* BUDGET */}
            <FormSelect
              label="BUDGET"
              id="contact-budget"
              value={budget}
              onChange={e => setBudget(e.target.value)}
              options={[
                'Under ₹50,000',
                '₹50,000 – ₹1,50,000',
                '₹1,50,000 – ₹5,00,000',
                '₹5,00,000+'
              ]}
            />

            {/* MESSAGE */}
            <FormTextarea
              label="TELL US ABOUT YOUR PROJECT"
              id="contact-message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Write your message here..."
            />

            {/* SEND REQUEST BUTTON */}
            <div>
              <motion.button
                type="submit"
                id="contact-submit"
                disabled={status === 'sending'}
                whileHover={status === 'success' ? {} : { backgroundColor: '#333' }}
                whileTap={status === 'success' ? {} : { scale: 0.98 }}
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
                  backgroundColor: status === 'success' ? '#10B981' : '#111',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '18px 28px',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
              >
                {status === 'idle' && (
                  <>
                    SEND REQUEST
                    <ArrowRightIcon />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    SENDING...
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: '#ffffff',
                      }}
                    />
                  </>
                )}
                {status === 'success' && (
                  <>
                    REQUEST SENT! THANK YOU
                    <CheckIcon />
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontWeight: 500,
                      fontSize: '13px',
                      color: '#10B981',
                      textAlign: 'center',
                      marginTop: '12px',
                    }}
                  >
                    We have successfully received your details and will reply within 24 hours.
                  </motion.p>
                )}
              </AnimatePresence>

              {status !== 'success' && (
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
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
