'use client'
import { useEffect, useRef } from 'react'
import styles from '@/styles/Sections.module.css'

const socials = [
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/bharanidharan-m', color: '#0A66C2' },
  { icon: '⌥', label: 'GitHub', href: 'https://github.com/bharanidharan70', color: '#eeeae4' },
  { icon: '✉', label: 'Email', href: 'mailto:bharanid134@gmail.com', color: '#b8b0f0' },
  { icon: '📞', label: '+91 7010644408', href: 'tel:+917010644408', color: '#5dcaa5' },
  { icon: '🌐', label: 'Live Project', href: 'https://gaminghubstore.ct.ws/', color: '#f0a840' },
]

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
  }, [])

  return (
    <section className={styles.section} id="contact" ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.contactBox} ${styles.reveal}`}>
          <div className={styles.contactGlow} />
          <div className={styles.contactAvailBadge}>🟢 Available for UI/UX Designer, WordPress Developer & Front-End Developer Roles</div>
          <h2 className={styles.contactH2}>Let&apos;s build<br />something great.</h2>
          <p className={styles.contactP}>
            Open to UI/UX Designer, WordPress Developer and Front-End Developer Opportunities.<br />
            Based in Dharmapuri, Tamil Nadu — available across India & Remote.
          </p>
          <div className={styles.contactLinks}>
            {socials.map(s => (
              <a key={s.label} className={styles.cBtn} href={s.href} target="_blank" rel="noreferrer"
                style={{ '--hover-color': s.color } as React.CSSProperties}>
                <span>{s.icon}</span> {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerInfo}>
          <div className={styles.footerLocation}>📍 Dharmapuri, Tamil Nadu – 636807</div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerName}>BHARANIDHARAN</div>
          <p className={styles.footerCopy}>© 2026 Bharanidharan M · WordPress Developer & UI/UX Designer · Built with precision ✺</p>
        </footer>
      </div>
    </section>
  )
}
