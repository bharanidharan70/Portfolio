'use client'
import { useEffect, useRef } from 'react'
import styles from '@/styles/Sections.module.css'

const steps = [
  { num: '01 — DISCOVER', icon: '🔍', title: 'Research & Empathy', desc: 'Understanding users, pain points and business goals before touching any design tool.' },
  { num: '02 — DEFINE', icon: '✏️', title: 'Wireframe & Structure', desc: 'Low-fidelity sketches and information architecture to map out the full user experience.' },
  { num: '03 — DESIGN', icon: '🎨', title: 'Visual Design', desc: 'High-fidelity UI with consistent design systems, thoughtful typography and purposeful colour.' },
  { num: '04 — DELIVER', icon: '🚀', title: 'Prototype & Test', desc: 'Interactive prototypes, user testing and iterating based on real feedback.' },
]

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
  }, [])

  return (
    <section className={styles.section} id="process" ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.eyebrow} ${styles.reveal}`}>How I Work</div>
        <div className={`${styles.heading} ${styles.reveal}`}>Design Process</div>
        <p className={`${styles.sub} ${styles.reveal}`}>A structured, human-centered approach to every challenge.</p>
        <div className={styles.procGrid}>
          {steps.map((s, i) => (
            <div key={s.num} className={`${styles.procCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className={styles.procStep}>{s.num}</div>
              <span className={styles.procEmoji}>{s.icon}</span>
              <div className={styles.procTitle}>{s.title}</div>
              <div className={styles.procDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
