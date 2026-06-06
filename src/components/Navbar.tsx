'use client'
import { useState, useEffect } from 'react'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#work', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#home" className={styles.logo}>bm<span>✦</span></a>
      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <div className={styles.badge}><div className={styles.pulse} />Open to Work</div>
      </div>
      <button className={styles.burger} onClick={() => setMenuOpen(m => !m)} aria-label="menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
