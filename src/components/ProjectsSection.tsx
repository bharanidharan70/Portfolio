'use client'
import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/Sections.module.css'

const projects = [
  {
  idx: '01',
  emoji: '🏋️',
  title: 'Fitness Tracker App',
  subtitle: 'AI Generated UI/UX Design',
  desc: 'Designed a modern fitness tracking application using Google Stitch. Covers authentication, workout tracking, activity monitoring, HIIT sessions and user engagement flows.',
  tags: ['Google Stitch', 'UI Design', 'Mobile UX', 'Prototype', 'Fitness App'],
  type: 'UI/UX Case Study',
  color: '#22C55E',
  figma: 'https://stitch.withgoogle.com/preview/6539113076398028289?node-id=2d4e9f5f3b1945598b7c7f53bfe3af93',
  live: null,
  screens: ['🔐 Login','🏠 Home','🏃 Activity','💪 Workout'],
  highlight: true,
},
  {
    idx: '02',
    emoji: '🍕',
    title: 'Pizza Delivery App',
    subtitle: 'UI/UX Case Study',
    desc: 'End-to-end mobile app UI/UX design for a pizza delivery platform. Covers user research, wireframing, high-fidelity design and interactive prototype.',
    tags: ['Figma', 'UI Design', 'Prototyping', 'User Research', 'Mobile UX'],
    type: 'UI/UX Case Study',
    color: '#f0a840',
    figma: 'https://www.figma.com/proto/CbVIWK5mpyKuDI570u2MUW/Pizza-app?node-id=6-28&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A28&page-id=0%3A1',
    live: null,
    screens: ['🔐 Login / OTP', '🏠 Home Screen', '🍕 Menu & Deals', '👤 My Account'],
    highlight: true,
  },
  {
    idx: '03',
    emoji: '🖥️',
    title: 'Faveo IT Service Desk',
    subtitle: 'Enterprise UI/UX Redesign',
    desc: 'Recreated and enhanced the Faveo Helpdesk web interface. Focused on ticket management clarity, information hierarchy and a full structured design system.',
    tags: ['Figma', 'Design System', 'Enterprise UX', 'B2B UI', 'Typography'],
    type: 'UI/UX Case Study',
    color: '#4C6EF5',
    figma: 'https://www.figma.com/proto/E3KE7ReBy4z0uOrqFotOmr/desk?node-id=59-2&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=40%3A50&page-id=37%3A45',
    live: null,
    screens: ['🎫 My Tickets', '📋 Ticket Details', '↩️ Reply Flow', '🎨 Design System'],
    highlight: true,
  },
  {
    idx: '04',
    emoji: '🛍️',
    title: 'E-Commerce Store',
    subtitle: 'WordPress Development',
    desc: 'Built using WordPress + Elementor with customized theme and product pages. Implemented SEO optimization and fully responsive design.',
    tags: ['WordPress', 'Elementor', 'SEO', 'Responsive Design'],
    type: 'WordPress',
    color: '#b8b0f0',
    figma: null,
    live: 'https://stylebazaar.ct.ws/',
    screens: [],
    highlight: false,
  },
  {
    idx: '05',
    emoji: '🎮',
    title: 'Gaming Community Platform',
    subtitle: 'Full Stack Web App',
    desc: 'Full-stack web application built with HTML, CSS, Bootstrap, PHP & MySQL. Features user-based interactions and data storage.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
    type: 'Web App',
    color: '#5dcaa5',
    figma: null,
    live: 'https://gaminghubstore.ct.ws/',
    screens: [],
    highlight: false,
  },
  {
    idx: '06',
    emoji: '🍽️',
    title: 'Restaurant Management Website',
    subtitle: 'Frontend Development',
    desc: 'Fully responsive restaurant UI built with HTML & CSS. Clean layout with user-friendly navigation and appealing food presentation.',
    tags: ['HTML', 'CSS', 'Responsive UI'],
    type: 'Website',
    color: '#f4a261',
    figma: null,
    live: null,
    screens: [],
    highlight: false,
  },
]

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number|null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)),
      { threshold: 0.06 }
    )
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
  }, [])

  return (
    <section className={styles.section} id="work" ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.eyebrow} ${styles.reveal}`}>Selected Work</div>
        <div className={`${styles.heading} ${styles.reveal}`}>Projects & Case Studies</div>
        <p className={`${styles.sub} ${styles.reveal}`}>Real-world projects — from UI/UX design to full-stack development.</p>

        <div className={styles.projCards}>
          {projects.map((p, i) => (
            <div
              key={p.idx}
              className={`${styles.projCard} ${p.highlight ? styles.projCardFeatured : ''} ${styles.reveal}`}
              style={{
                transitionDelay: `${i * 0.08}s`,
                borderColor: active === i ? p.color : '',
                background: active === i ? `rgba(${p.color},0.04)` : '',
              }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {p.highlight && (
                <div className={styles.featuredTag} style={{ color: p.color, background: `${p.color}15`, border: `0.5px solid ${p.color}35` }}>
                  ✦ Featured UI/UX Project
                </div>
              )}

              <div className={styles.projCardTop}>
                <div className={styles.projEmoji} style={{ background: `${p.color}15` }}>{p.emoji}</div>
                <div className={styles.projCardMeta}>
                  <div className={styles.projType} style={{ color: p.color }}>{p.type}</div>
                  <div className={styles.projIdx}>{p.idx}</div>
                </div>
              </div>

              <div className={styles.projCardTitle}>{p.title}</div>
              <div className={styles.projCardSub}>{p.subtitle}</div>
              <div className={styles.projCardDesc}>{p.desc}</div>

              {p.screens.length > 0 && (
                <div className={styles.projScreens}>
                  {p.screens.map(s => (
                    <span key={s} className={styles.projScreen} style={{ color: p.color, background: `${p.color}10`, border: `0.5px solid ${p.color}30` }}>{s}</span>
                  ))}
                </div>
              )}

              <div className={styles.projChips}>
                {p.tags.map(t => <span key={t} className={styles.projChip}>{t}</span>)}
              </div>

              <div className={styles.projBtns}>
                {p.figma && (
                  <a href={p.figma} target="_blank" rel="noreferrer"
                    className={styles.projBtnPrimary}
                    style={{ background: p.color, color: '#09090a' }}>
                    View Prototype ↗
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className={styles.projBtnOutline}
                    style={{ borderColor: p.color, color: p.color }}>
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
