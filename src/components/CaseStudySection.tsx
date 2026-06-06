'use client'
import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/CaseStudy.module.css'

const caseStudies = [
  {
    id: 'pizza',
    emoji: '🍕',
    tag: 'Mobile App · UI/UX Design',
    title: 'Pizza Delivery App',
    tagline: 'From zero to delicious — a full mobile ordering experience.',
    color: '#f0a840',
    colorDim: 'rgba(240,168,64,0.08)',
    colorBorder: 'rgba(240,168,64,0.2)',
    proto: 'https://www.figma.com/proto/CbVIWK5mpyKuDI570u2MUW/Pizza-app?node-id=6-28&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A28&page-id=0%3A1',
    screens: [
      { icon: '🔐', label: 'Login' },
      { icon: '📱', label: 'OTP Verify' },
      { icon: '🏠', label: 'Home' },
      { icon: '🍕', label: 'Menu' },
      { icon: '🎁', label: 'Deals' },
      { icon: '👤', label: 'Account' },
    ],
    overview: 'Designed a complete mobile UI/UX for a pizza delivery platform — covering the full user journey from authentication to order placement, with a clean and appetising visual design.',
    steps: [
      { num: '01', icon: '🎯', title: 'Problem Statement', color: '#f0a840', points: ['Existing food apps were cluttered and hard to navigate', 'High cart drop-off due to complex multi-step checkout', 'Poor visual hierarchy — deals and menu items competed for attention'] },
      { num: '02', icon: '👥', title: 'User Research', color: '#b8b0f0', points: ['Analysed Pizza Hut, Swiggy and Zomato UX patterns', 'Identified key pain points: slow load, cluttered UI, unclear CTAs', 'Target users: 18–35 age group ordering via mobile daily'] },
      { num: '03', icon: '✏️', title: 'Wireframing', color: '#5dcaa5', points: ['Mapped 6 core screens across the full ordering flow', 'Simplified navigation with a 3-tab bottom bar', 'Card-based layout for deals and menu items for scannability'] },
      { num: '04', icon: '🎨', title: 'Visual Design', color: '#e06eaa', points: ['Brand colour: Orange (#F47920) for energy and appetite appeal', 'Clean Inter typography for readability at small sizes', 'Consistent component system: buttons, cards, input fields, badges'] },
      { num: '05', icon: '▶', title: 'Prototype & Outcome', color: '#4cc9f0', points: ['Interactive Figma prototype with smooth screen transitions', 'Complete flow: Login → OTP → Home → Menu → Deals → Account', 'Minimal, branded UI matching Pizza Hut visual identity'] },
    ],
    tools: ['Figma', 'Auto Layout', 'Components', 'Prototyping', 'User Research', 'Mobile UX'],
    metrics: [
      { val: '6', label: 'Screens Designed' },
      { val: '3', label: 'Tab Navigation' },
      { val: '100%', label: 'Figma Prototype' },
    ],
  },
  {
    id: 'faveo',
    emoji: '🖥️',
    tag: 'Enterprise Web App · UI/UX Redesign',
    title: 'Faveo IT Service Desk',
    tagline: 'Redesigning enterprise helpdesk UX for clarity and speed.',
    color: '#4C6EF5',
    colorDim: 'rgba(76,110,245,0.08)',
    colorBorder: 'rgba(76,110,245,0.2)',
    proto: 'https://www.figma.com/proto/E3KE7ReBy4z0uOrqFotOmr/desk?node-id=59-2&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=40%3A50&page-id=37%3A45',
    screens: [
      { icon: '🎫', label: 'My Tickets' },
      { icon: '📋', label: 'Ticket Details' },
      { icon: '↩️', label: 'Reply Flow' },
      { icon: '🎨', label: 'Design System' },
      { icon: '🔵', label: 'Color Palette' },
      { icon: 'Aa', label: 'Typography' },
    ],
    overview: 'Recreated and enhanced the Faveo Helpdesk web interface — a B2B IT service management tool. Focused on improving ticket management clarity, information hierarchy and introducing a structured design system.',
    steps: [
      { num: '01', icon: '🔍', title: 'Problem Analysis', color: '#4C6EF5', points: ['Faveo\'s existing UI lacked clear visual hierarchy for ticket priority', 'Support agents struggled to quickly identify overdue vs open tickets', 'No consistent design system — components varied across screens'] },
      { num: '02', icon: '🗂️', title: 'Information Architecture', color: '#b8b0f0', points: ['Mapped core user journeys: agent → ticket → reply → resolve', 'Prioritised ticket status (Overdue / Open / Resolved) with colour coding', 'Structured sidebar navigation for quick context switching'] },
      { num: '03', icon: '🎨', title: 'Design System', color: '#5dcaa5', points: ['Built a full colour palette: Primary, Blue, Success, Danger, Warning, Neutral', 'Typography scale with Inter — Heading 1–3, Body Large/Medium/Small', 'Reusable components: ticket cards, badges, buttons, reply composer'] },
      { num: '04', icon: '🖥️', title: 'UI Redesign', color: '#f0a840', points: ['Clean ticket list with priority badges (High / Medium / Low) and colour strips', 'Ticket detail page with reply composer, metadata panel and status tracker', 'Consistent spacing, border radius and shadow system throughout'] },
      { num: '05', icon: '✅', title: 'Outcome', color: '#4cc9f0', points: ['Structured, professional enterprise UI ready for developer handoff', 'Full design system enables consistent future feature development', 'Improved agent efficiency through clear visual hierarchy and quick actions'] },
    ],
    tools: ['Figma', 'Design System', 'Color Palette', 'Typography', 'Components', 'Enterprise UX', 'B2B UI'],
    metrics: [
      { val: '6+', label: 'Screens Designed' },
      { val: '1', label: 'Design System' },
      { val: 'B2B', label: 'Enterprise App' },
    ],
  },
]

export default function CaseStudySection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)),
      { threshold: 0.06 }
    )
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
  }, [])

  const cs = caseStudies[active]

  return (
    <section className={styles.section} id="casestudy" ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.eyebrow} ${styles.reveal}`}>UI/UX Case Studies</div>
        <div className={`${styles.heading} ${styles.reveal}`}>Design Thinking in Action</div>
        <p className={`${styles.sub} ${styles.reveal}`}>Real problems. Research-driven solutions. Pixel-perfect execution.</p>

        {/* Tab switcher */}
        <div className={`${styles.tabs} ${styles.reveal}`}>
          {caseStudies.map((c, i) => (
            <button
              key={c.id}
              className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
              style={ active === i ? { borderColor: c.color, color: c.color, background: c.colorDim } : {} }
              onClick={() => setActive(i)}
            >
              {c.emoji} {c.title}
            </button>
          ))}
        </div>

        {/* Case study card */}
        <div className={`${styles.csCard} ${styles.reveal}`} style={{ borderColor: cs.colorBorder, background: `linear-gradient(135deg, ${cs.colorDim} 0%, #141416 50%)` }}>

          {/* Header */}
          <div className={styles.csHeader}>
            <div className={styles.csHeaderLeft}>
              <div className={styles.csEmoji} style={{ background: cs.colorDim, border: `0.5px solid ${cs.colorBorder}` }}>{cs.emoji}</div>
              <div>
                <div className={styles.csTag} style={{ color: cs.color }}>{cs.tag}</div>
                <div className={styles.csTitle}>{cs.title}</div>
                <div className={styles.csTagline}>{cs.tagline}</div>
              </div>
            </div>
            <div className={styles.csMetrics}>
              {cs.metrics.map(m => (
                <div key={m.label} className={styles.csMetric}>
                  <div className={styles.csMetricVal} style={{ color: cs.color }}>{m.val}</div>
                  <div className={styles.csMetricLabel}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className={styles.csOverview}>{cs.overview}</div>

          {/* Screens preview */}
          <div className={styles.csScreensRow}>
            <div className={styles.csScreensLabel} style={{ color: cs.color }}>Screens Covered</div>
            <div className={styles.csScreens}>
              {cs.screens.map(s => (
                <div key={s.label} className={styles.csScreen} style={{ background: cs.colorDim, border: `0.5px solid ${cs.colorBorder}` }}>
                  <span className={styles.csScreenIcon}>{s.icon}</span>
                  <span className={styles.csScreenLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process steps */}
          <div className={styles.csStepsTitle}>Design Process</div>
          <div className={styles.csSteps}>
            {cs.steps.map((s) => (
              <div key={s.num} className={styles.csStep} style={{ borderColor: `${s.color}25` }}>
                <div className={styles.csStepHead}>
                  <span className={styles.csStepNum} style={{ color: s.color }}>{s.num}</span>
                  <span className={styles.csStepIcon}>{s.icon}</span>
                  <span className={styles.csStepTitle} style={{ color: s.color }}>{s.title}</span>
                </div>
                <ul className={styles.csStepPoints}>
                  {s.points.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Tools + CTA */}
          <div className={styles.csFooter}>
            <div className={styles.csToolsWrap}>
              <div className={styles.csToolsLabel}>Tools Used</div>
              <div className={styles.csTools}>
                {cs.tools.map(t => (
                  <span key={t} className={styles.csTool} style={{ background: cs.colorDim, border: `0.5px solid ${cs.colorBorder}`, color: cs.color }}>{t}</span>
                ))}
              </div>
            </div>
            <a href={cs.proto} target="_blank" rel="noreferrer" className={styles.csProtoBtn} style={{ background: cs.color }}>
              ▶ View Prototype on Figma
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
