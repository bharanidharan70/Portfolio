'use client'
import { useEffect, useRef } from 'react'
import styles from '@/styles/Sections.module.css'

const experience = [
  {
    role: 'WordPress Developer and UI&UX design Intern',
    company: 'Faveo IT Solutions',
    period: 'Feb 2026 – May 2026',
    location: 'Tamil Nadu',
    points: [
      'Customized WordPress themes and managed plugins based on project requirements',
      'Handling real-time website updates and UI',
      'Developed and maintained websites using WordPress CMS.',
      'Used cPanel for website hosting, deployment, and management',
      'Created Low-Fidelity and High-Fidelity wireframes and prototype',
      'Developed reusable UI components and design systems',
      'Designed user-friendly interfaces using Figma',
    ],
    color: '#b8b0f0',
  },
  {
    role: 'Web Developement and Web design Intern',
    company: 'NEOWEP Software Technology',
    period: 'Jun 2024 – Jul 2024',
    location: 'Tamil Nadu',
    points: [
      'Built responsive websites using HTML, CSS, JS',
      'Worked on WordPress projects and landing pages',
      'Learned SEO optimization and performance tuning',
      'Designed responsive and user-friendly website layouts',
      'Improved website usability, navigation, and overall user experience',
      'Created visually appealing web pages using modern design principles',
    ],
    color: '#5dcaa5',
  },
]

const education = [
  { degree: 'Master of Computer Application', year: '2026 (Pursuing)', college: 'Alagappa University, Karaikudi, Tamilnadu' },
  { degree: 'B.Sc. Computer Science', year: '2024', college: "Govt Art's College, Dharmapuri, Tamilnadu" },
]

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)), { threshold: 0.08 })
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
  }, [])

  return (
    <section className={styles.section} id="experience" ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.eyebrow} ${styles.reveal}`}>Career</div>
        <div className={`${styles.heading} ${styles.reveal}`}>Experience & Education</div>

        <div className={styles.expGrid}>
          <div>
            <div className={`${styles.expColTitle} ${styles.reveal}`}>Work Experience</div>
            <div className={styles.timeline}>
              {experience.map((e, i) => (
                <div key={e.company} className={`${styles.timelineItem} ${styles.reveal}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className={styles.timelineDot} style={{ background: e.color }} />
                  <div className={styles.timelineContent}>
                    <div className={styles.expRole}>{e.role}</div>
                    <div className={styles.expCompany} style={{ color: e.color }}>{e.company}</div>
                    <div className={styles.expPeriod}>{e.period}</div>
                    <ul className={styles.expPoints}>
                      {e.points.map(p => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className={`${styles.expColTitle} ${styles.reveal}`}>Education</div>
            <div className={styles.timeline}>
              {education.map((e, i) => (
                <div key={e.degree} className={`${styles.timelineItem} ${styles.reveal}`} style={{ transitionDelay: `${i * 0.1 + 0.15}s` }}>
                  <div className={styles.timelineDot} style={{ background: '#f0c060' }} />
                  <div className={styles.timelineContent}>
                    <div className={styles.expRole}>{e.degree}</div>
                    <div className={styles.expCompany} style={{ color: '#f0c060' }}>{e.year}</div>
                    <div className={styles.expPeriod}>{e.college}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
