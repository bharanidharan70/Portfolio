'use client'
import { useEffect, useRef } from 'react'
import styles from '@/styles/Sections.module.css'

const steps = [
  {
    num: '01',
    icon: '🔍',
    title: 'Problem Statement',
    color: '#f0a840',
    points: [
      'Users found existing food apps complex and confusing to navigate',
      'Checkout process had high drop-off due to too many steps',
      'No clear hierarchy between deals, menu and ordering flow',
    ],
  },
  {
    num: '02',
    icon: '👥',
    title: 'User Research',
    color: '#b8b0f0',
    points: [
      'Analysed Pizza Hut, Swiggy and Zomato app patterns',
      'Identified pain points: slow load, cluttered UI, unclear CTAs',
      'Target users: 18–35 age group ordering via mobile',
    ],
  },
  {
    num: '03',
    icon: '✏️',
    title: 'Wireframing',
    color: '#5dcaa5',
    points: [
      'Mapped 6 key screens: Login, OTP, Home, Menu, Deals, Account',
      'Simplified navigation with bottom tab bar (Home / Menu / Account)',
      'Clean card-based layout for deals and menu items',
    ],
  },
  {
    num: '04',
    icon: '🎨',
    title: 'High-Fidelity Design',
    color: '#f4a261',
    points: [
      'Brand colour: Orange (#F47920) with white & light grey background',
      'Clean typography — readable at small sizes on mobile',
      'Consistent component library: buttons, cards, input fields',
    ],
  },
  {
    num: '05',
    icon: '📱',
    title: 'Prototype & Result',
    color: '#e06eaa',
    points: [
      'Interactive prototype built in Figma with smooth transitions',
      'Complete user flow: Login → OTP → Home → Menu → Order',
      'Clean, minimal design that matches Pizza Hut brand identity',
    ],
  },
]

export default function CaseStudySection() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)),
      { threshold: 0.07 }
    )
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
  }, [])

  return (
    <section className={styles.section} id="casestudy" ref={ref} style={{ background: 'rgba(240,168,64,0.02)' }}>
      <div className={styles.inner}>
        <div className={`${styles.eyebrow} ${styles.reveal}`} style={{ color: '#f0a840' }}>UI/UX Case Study</div>
        <div className={`${styles.heading} ${styles.reveal}`}>🍕 Pizza Delivery App</div>
        <p className={`${styles.sub} ${styles.reveal}`}>
          A complete mobile UI/UX design case study — from problem discovery to interactive prototype.
        </p>

        {/* Preview link */}
        <div className={`${styles.casePreview} ${styles.reveal}`}>
          <div className={styles.casePreviewInner}>
            <div className={styles.casePreviewScreens}>
              <div className={styles.caseScreen} style={{ background: 'linear-gradient(135deg,#fff5eb,#ffe0c0)' }}>🔐<span>Login</span></div>
              <div className={styles.caseScreen} style={{ background: 'linear-gradient(135deg,#fff5eb,#ffd9a0)' }}>📱<span>OTP</span></div>
              <div className={styles.caseScreen} style={{ background: 'linear-gradient(135deg,#fef3e2,#ffc870)' }}>🏠<span>Home</span></div>
              <div className={styles.caseScreen} style={{ background: 'linear-gradient(135deg,#fff0d6,#ffb347)' }}>🍕<span>Menu</span></div>
              <div className={styles.caseScreen} style={{ background: 'linear-gradient(135deg,#ffecd1,#ffa040)' }}>👤<span>Account</span></div>
            </div>
            <a
              href="https://www.figma.com/proto/CbVIWK5mpyKuDI570u2MUW/Pizza-app?node-id=6-28&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A28&page-id=0%3A1"
              target="_blank" rel="noreferrer"
              className={styles.caseProtoBtn}
            >
              ▶ View Live Prototype on Figma
            </a>
          </div>
        </div>

        {/* Case study steps */}
        <div className={styles.caseSteps}>
          {steps.map((s, i) => (
            <div key={s.num} className={`${styles.caseStep} ${styles.reveal}`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className={styles.caseStepNum} style={{ color: s.color }}>{s.num}</div>
              <div className={styles.caseStepIcon}>{s.icon}</div>
              <div className={styles.caseStepTitle} style={{ color: s.color }}>{s.title}</div>
              <ul className={styles.caseStepPoints}>
                {s.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools used */}
        <div className={`${styles.caseTools} ${styles.reveal}`}>
          <div className={styles.caseToolsTitle}>Tools Used</div>
          <div className={styles.caseToolsList}>
            {['Figma', 'Prototyping', 'Auto Layout', 'Components', 'UI Design', 'User Research'].map(t => (
              <span key={t} className={styles.caseToolChip}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
