'use client'
import { useEffect, useRef } from 'react'
import styles from '@/styles/Sections.module.css'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)), { threshold: 0.1 })
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
  }, [])

  const skills = [
    { cat: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], color: '#b8b0f0' },
    { cat: 'Backend', items: ['PHP', 'Python'], color: '#5dcaa5' },
    { cat: 'Database', items: ['MySQL'], color: '#f0c060' },
    { cat: 'CMS', items: ['WordPress'], color: '#f4a261' },
    { cat: 'Tools', items: ['Git & GitHub', 'VS Code', 'cPanel', 'Figma'], color: '#4cc9f0' },
    { cat: 'UI/UX Design', items: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'UI Design', 'User Research'], color: '#e06eaa' },
    { cat: 'Others', items: ['AWS Cloud', 'Responsive Design', 'SEO Optimization'], color: '#7dc95e' },
  ]

  return (
    <section className={styles.section} id="about" ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.eyebrow} ${styles.reveal}`}>About Me</div>
        <div className={`${styles.heading} ${styles.reveal}`}>Who I Am</div>
        <p className={`${styles.aboutBio} ${styles.reveal}`}>
          Passionate WordPress Developer and UI/UX Designer with hands-on experience in building responsive, SEO-friendly websites and designing intuitive, user-centered interfaces. Skilled in front-end development, WordPress theme customization, and creating seamless user experiences that drive engagement and results.
        </p>

        <div className={`${styles.skillsWrap} ${styles.reveal}`}>
          {skills.map((s, i) => (
            <div key={s.cat} className={styles.skillGroup} style={{ animationDelay: `${i * 0.07}s` }}>
              <div className={styles.skillCat} style={{ color: s.color }}>{s.cat}</div>
              <div className={styles.skillItems}>
                {s.items.map(item => (
                  <span key={item} className={styles.skillChip}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
