'use client'
import { useEffect, useRef } from 'react'
import styles from '@/styles/Sections.module.css'
import Image from "next/image";

const projects = [
  {
    idx: '01',
    title: 'Pizza Ordering Mobile App',
    desc: 'Modern food delivery mobile app designed in Figma with delivery, takeaway and promotional experiences.',
    tags: ['Figma', 'UI/UX', 'Prototype'],
    type: 'Case Study',
    image: '/projects/pizza-app.png',
    link: 'https://www.figma.com/design/CbVIWK5mpyKuDI570u2MUW/Pizza-app?node-id=0-1&t=UPSInMRJcRuBFDmc-1',
  },

  {
    idx: '02',
    title: 'GamingHub Web Application',
    desc: 'Full-stack gaming marketplace built using PHP & MySQL.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    type: 'Web Application',
    image: '/projects/gaminghub.png',
    link: 'https://gaminghubstore.ct.ws/',
  },

  {
    idx: '03',
    title: 'StylBazaar E-Commerce',
    desc: 'WordPress ecommerce website with SEO and Elementor customization.',
    tags: ['WordPress', 'SEO', 'Elementor'],
    type: 'WordPress',
    image: '/projects/stylebazaar.png',
    link: 'https://stylebazaar.ct.ws/',
  },

  {
    idx: '04',
    title: 'SpicyHub Restaurant',
    desc: 'Responsive restaurant website with modern UI.',
    tags: ['HTML', 'CSS'],
    type: 'Frontend',
    image: '/projects/spicyhub.png',
    link: null,
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
              <div className={styles.card}>
  <div className={styles.thumb}>
    <Image
      src={p.image}
      alt={p.title}
      width={600}
      height={400}
      className={styles.projectImg}
    />
  </div>

  <div className={styles.cardContent}>
    <div className={styles.projTitle}>{p.title}</div>

    <div className={styles.projDesc}>
      {p.desc}
    </div>

    <div className={styles.projChips}>
      {p.tags.map((t) => (
        <span key={t} className={styles.projChip}>
          {t}
        </span>
      ))}
    </div>

    <div className={styles.cardFooter}>
      <span className={styles.projType}>
        {p.type}
      </span>

      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className={styles.viewBtn}
        >
          View Project →
        </a>
      )}
    </div>
  </div>
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
