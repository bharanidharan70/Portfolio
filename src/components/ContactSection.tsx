'use client'
import { useEffect, useRef } from 'react'
import styles from '@/styles/Sections.module.css'

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)), { threshold: 0.1 })
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
  }, [])

  return (
    <section className={styles.section} id="contact" ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.contactBox} ${styles.reveal}`}>
          <div className={styles.contactGlow} />
          <h2 className={styles.contactH2}>Let&apos;s build<br />something great.</h2>
          <p className={styles.contactP}>
            Open to fresher roles, internships & freelance projects.<br />
            Based in Dharmapuri, Tamil Nadu — available across India.
          </p>
          <div className={styles.contactLinks}>
            <a className={styles.cBtn} href="mailto:bharanid134@gmail.com">✉ bharanid134@gmail.com</a>
            <a className={styles.cBtn} href="tel:+917010644408">📞 +91 7010644408</a>
            <a className={styles.cBtn} href="https://github.com/bharanidharan70" target="_blank" rel="noreferrer">⌥ GitHub</a>
            <a className={styles.cBtn} href="https://gaminghubstore.ct.ws/" target="_blank" rel="noreferrer">🌐 Live Project</a>
          </div>
        </div>

        <div className={styles.footerInfo}>
          <div className={styles.footerLocation}>📍 1/9C, Pagalahalli, Dharmapuri, Tamilnadu – 636807</div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerName}>BHARANIDHARAN</div>
          <p className={styles.footerCopy}>© 2026 Bharanidharan M · WordPress Developer & UI/UX Designer · Built with precision ✺</p>
        </footer>
      </div>
    </section>
  )
}
