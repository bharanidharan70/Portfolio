'use client'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>bm<span>✦</span></a>
      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <div className={styles.badge}><div className={styles.pulse} />Open to work</div>
      </div>
    </nav>
  )
}
