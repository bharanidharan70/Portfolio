'use client'
import { useEffect, useRef } from 'react'
import styles from '@/styles/Sections.module.css'

const projects = [
  {
    idx: '01',
    title: 'SpicyHub Restaurant Website',
    desc: 'Fully responsive restaurant UI built with HTML & CSS. Clean layout with user-friendly navigation and appealing food presentation.',
    tags: ['HTML', 'CSS', 'Responsive UI'],
    type: 'Website',
    link: null,
  },
  {
    idx: '02',
    title: 'GamingHub Web Application',
    desc: 'Full-stack web app built with HTML, CSS, Bootstrap, PHP & MySQL. Created user-based interactions and data storage.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
    type: 'Web App',
    link: 'https://gaminghubstore.ct.ws/',
  },
  {
    idx: '03',
    title: 'StylBazaar E-commerce Website',
    desc: 'Built using WordPress + Elementor with customized theme and product pages. Implemented SEO and responsive design.',
    tags: ['WordPress', 'Elementor', 'SEO'],
    type: 'E-commerce',
    link: 'https://stylebazaar.ct.ws/',
  },
]

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)), { threshold: 0.08 })
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
  }, [])

  return (
    <section className={styles.section} id="work" ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.eyebrow} ${styles.reveal}`}>Selected Work</div>
        <div className={`${styles.heading} ${styles.reveal}`}>Projects</div>
        <p className={`${styles.sub} ${styles.reveal}`}>Real projects built and deployed.</p>
        <div className={styles.projList}>
          {projects.map((p, i) => (
            <div key={p.idx} className={`${styles.projRow} ${styles.reveal}`} style={{ transitionDelay: `${i * 0.09}s` }}>
              <span className={styles.projIdx}>{p.idx}</span>
              <div className={styles.projContent}>
                <div className={styles.projTitle}>{p.title}</div>
                <div className={styles.projDesc}>{p.desc}</div>
                <div className={styles.projChips}>{p.tags.map(t => <span key={t} className={styles.projChip}>{t}</span>)}</div>
              </div>
              <div className={styles.projMeta}>
                <div className={styles.projType}>{p.type}</div>
                {p.link
                  ? <a href={p.link} target="_blank" rel="noreferrer" className={styles.projArrow}>↗</a>
                  : <span className={styles.projArrow} style={{ opacity: 0.3 }}>↗</span>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
