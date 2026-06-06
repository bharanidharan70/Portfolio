'use client'
import { useEffect, useRef } from 'react'
import styles from '@/styles/Contact.module.css'

const socials = [
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/bharanidharan-m', color: '#4C6EF5' },
  { icon: '⌥', label: 'GitHub', href: 'https://github.com/bharanidharan70', color: '#eeeae4' },
  { icon: '✉', label: 'Email', href: 'mailto:bharanid134@gmail.com', color: '#b8b0f0' },
  { icon: '📞', label: '+91 7010644408', href: 'tel:+917010644408', color: '#5dcaa5' },
  { icon: '🌐', label: 'Live Project', href: 'https://gaminghubstore.ct.ws/', color: '#f0a840' },
]

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add(styles.visible)
          videoRef.current?.play()
        }
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
    if (ref.current) observer.observe(ref.current)
  }, [])

  return (
    <section className={styles.section} id="contact" ref={ref}>
      {/* Walking video background */}
      <div className={styles.videoBg}>
        <video
          ref={videoRef}
          className={styles.walkVideo}
          src="/assets/walk.mp4"
          muted loop playsInline autoPlay
        />
        <div className={styles.videoOverlay} />
        <div className={styles.videoGradTop} />
        <div className={styles.videoGradBottom} />
      </div>

      <div className={styles.inner}>
        {/* Available badge */}
        <div className={`${styles.availBadge} ${styles.reveal}`}>
          <span className={styles.availDot} />
          Available for UI/UX Designer, WordPress Developer & Front-End Developer Roles
        </div>

        {/* Heading */}
        <h2 className={`${styles.heading} ${styles.reveal}`}>
          Let&apos;s build<br />
          <span>something great.</span>
        </h2>

        <p className={`${styles.sub} ${styles.reveal}`}>
          Open to UI/UX Designer, WordPress Developer and Front-End Developer Opportunities.<br />
          Based in Dharmapuri, Tamil Nadu — available across India & Remote.
        </p>

        {/* Social links */}
        <div className={`${styles.socials} ${styles.reveal}`}>
          {socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={styles.socialBtn}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <span className={styles.socialIcon}>{s.icon}</span>
              <span className={styles.socialLabel}>{s.label}</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className={`${styles.footerDivider} ${styles.reveal}`} />
        <div className={`${styles.footerName} ${styles.reveal}`}>BHARANIDHARAN</div>
        <p className={`${styles.footerCopy} ${styles.reveal}`}>
          © 2026 Bharanidharan M · WordPress Developer & UI/UX Designer · Built with precision ✺
        </p>
      </div>
    </section>
  )
}
