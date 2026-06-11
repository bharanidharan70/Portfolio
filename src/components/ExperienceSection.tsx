'use client'
import { useEffect, useRef } from 'react'
import styles from '@/styles/Experience.module.css'

const experience = [
  {
    role: 'WordPress Developer Intern',
    company: 'Faveo IT Solutions',
    period: 'Feb 2026 – May 2026',
    points: [
      'Developed and customized WordPress themes for client projects',
      'Configured and integrated plugins for extended functionality',
      'Handled real-time website updates, UI improvements and bug fixes',
      'Worked on Figma designs and translated them into WordPress layouts',
      'Applied CSS, HTML and JavaScript for front-end customizations',
      'Used Git & GitHub for version control and code collaboration',
      'Assisted in Bootstrap-based responsive layout implementation',
      'Conducted UI/UX improvements using Adobe XD and Figma wireframes',
    ],
    color: '#b8b0f0',
  },
  {
    role: 'Web Developer Intern',
    company: 'NEOWEP Software Technology',
    period: 'Jun 2024 – Jul 2024',
    points: [
      'Built fully responsive websites using HTML, CSS and JavaScript',
      'Designed UI mockups and wireframes using Figma and Adobe XD',
      'Implemented Bootstrap for mobile-first responsive layouts',
      'Worked on WordPress projects including landing pages and portfolios',
      'Applied UI/UX principles for improved user experience and flow',
      'Learned SEO optimization techniques and performance tuning',
    ],
    color: '#5dcaa5',
  },
]

const education = [
  { degree: 'Master of Computer Applications (MCA)', year: '2024 – 2026 (Pursuing)', college: 'Alagappa University, Karaikudi, Tamilnadu' },
  { degree: 'B.Sc. Computer Science', year: '2021 – 2024', college: "Govt Art's College, Dharmapuri, Tamilnadu" },
]

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add(styles.visible)
          if (e.target === ref.current) videoRef.current?.play()
        }
      }),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
    if (ref.current) observer.observe(ref.current)
  }, [])

  return (
    <section className={styles.section} id="experience" ref={ref}>
      <div className={styles.inner}>

        {/* Left column */}
        <div className={styles.leftCol}>
          <div className={`${styles.eyebrow} ${styles.reveal}`}>Career</div>
          <div className={`${styles.heading} ${styles.reveal}`}>Experience</div>
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

          <div className={`${styles.eyebrow} ${styles.reveal}`} style={{ marginTop: '2.5rem' }}>Education</div>
          <div className={`${styles.heading} ${styles.reveal}`}>Academic Background</div>
          <div className={styles.timeline}>
            {education.map((e, i) => (
              <div key={e.degree} className={`${styles.timelineItem} ${styles.reveal}`} style={{ transitionDelay: `${i * 0.1 + 0.2}s` }}>
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

        {/* Right side — hi.mp4 video */}
        <div className={`${styles.rightCol} ${styles.reveal}`}>
          <div className={styles.videoWrap}>
            <video
              ref={videoRef}
              className={styles.hiVideo}
              src="/assets/hi.mp4"
              muted loop playsInline
            />
            <div className={styles.videoGlow} />
            <div className={styles.videoLabel}>
              <span className={styles.videoLabelDot} />
              Bharanidharan M
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
