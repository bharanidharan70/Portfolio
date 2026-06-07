'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/CaseStudy.module.css'

/* ─── PIZZA DATA ─── */
const pizzaScreens = [
  { src: '/assets/pizza/login.png',   label: 'Login Screen',      step: '01', desc: 'Phone-based OTP login — minimal auth with Pizza Hut branding.' },
  { src: '/assets/pizza/signup.png',  label: 'Sign Up',           step: '02', desc: 'Simple account creation with Name + Phone. Frictionless onboarding.' },
  { src: '/assets/pizza/otp.png',     label: 'OTP Verification',  step: '03', desc: '4-digit OTP with auto-read support and countdown resend timer.' },
  { src: '/assets/pizza/home.png',    label: 'Home Screen',       step: '04', desc: 'Location-aware home — Delivery/Takeaway selector + hot deals carousel.' },
  { src: '/assets/pizza/deals.png',   label: 'Deals Page',        step: '05', desc: 'Tabbed menu: Deals / Pizzas / Melts. Card-based offer layout.' },
  { src: '/assets/pizza/menu.png',    label: 'Menu & Offers',     step: '06', desc: 'Buy 1 Get 3 Free offer — clear imagery, pricing and CTA hierarchy.' },
  { src: '/assets/pizza/account.png', label: 'My Account',        step: '07', desc: 'Clean account management: offers, tracking, settings and logout.' },
]
const pizzaProcess = [
  { num:'01', icon:'🎯', color:'#f0a840', title:'Problem Statement', desc:'Existing food apps were cluttered with high cart drop-off. Users needed a simpler, faster mobile ordering experience.' },
  { num:'02', icon:'👥', color:'#b8b0f0', title:'User Research',     desc:'Analysed Pizza Hut, Swiggy and Zomato. Target: 18–35 mobile users. Key insight: speed and visual clarity drive conversion.' },
  { num:'03', icon:'✏️', color:'#5dcaa5', title:'Wireframing',       desc:'Mapped 7 screens covering the full ordering flow. 3-tab bottom nav. Card-based layout for quick scannability.' },
  { num:'04', icon:'🎨', color:'#e06eaa', title:'Visual Design',     desc:'Brand orange (#F47920) for appetite appeal. Inter typography. Consistent component system: buttons, cards, inputs.' },
  { num:'05', icon:'▶',  color:'#4cc9f0', title:'Prototype',         desc:'Interactive Figma prototype. Full flow: Login → OTP → Home → Deals → Menu → Account.' },
]

/* ─── FAVEO DATA ─── */
const faveoScreens = [
  { src: '/assets/faveo/tickets.png',       label: 'My Tickets',     step: '01', desc: 'Ticket list with priority badges (High/Medium/Low), status indicators and colour-coded strips.' },
  { src: '/assets/faveo/ticket-detail.png', label: 'Ticket Detail',  step: '02', desc: 'Full ticket view — reply composer with AI assist, metadata panel and status tracker.' },
  { src: '/assets/faveo/design-system.png', label: 'Design System',  step: '03', desc: 'Complete colour palette (Primary, Blue, Success, Danger, Warning, Neutral) + Inter typography scale.' },
]
const faveoProcess = [
  { num:'01', icon:'🔍', color:'#4C6EF5', title:'Problem Analysis',      desc:'Faveo\'s UI lacked visual hierarchy for ticket priority. Agents struggled to quickly identify overdue vs open tickets.' },
  { num:'02', icon:'🗂️', color:'#b8b0f0', title:'Information Architecture', desc:'Mapped core journeys: agent → ticket → reply → resolve. Colour-coded ticket status for instant recognition.' },
  { num:'03', icon:'🎨', color:'#5dcaa5', title:'Design System',         desc:'Full colour palette across 6 semantic categories. Typography: Inter at 7 levels from Heading 1 to Helper.' },
  { num:'04', icon:'🖥️', color:'#f0a840', title:'UI Redesign',           desc:'Clean ticket list, detail page with reply composer, metadata panel and consistent spacing/shadow system.' },
  { num:'05', icon:'✅', color:'#4cc9f0', title:'Outcome',               desc:'Professional enterprise UI ready for handoff. Design system enables consistent future feature development.' },
]

const cases = [
  {
    id: 'pizza', label: '🍕 Pizza Delivery App',
    eyebrow: '🍕 Mobile App · UI/UX Design',
    title: 'Pizza Delivery App',
    sub: 'A complete mobile UI/UX design — from problem discovery to interactive prototype in Figma.',
    color: '#f0a840', colorDim: 'rgba(240,168,64,0.08)', colorBorder: 'rgba(240,168,64,0.22)',
    proto: 'https://www.figma.com/proto/CbVIWK5mpyKuDI570u2MUW/Pizza-app?node-id=6-28&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A28&page-id=0%3A1',
    chips: ['📱 Mobile App','🎨 Figma','✅ 7 Screens'],
    screens: pizzaScreens,
    process: pizzaProcess,
    tools: ['Figma','Auto Layout','Components','Prototyping','User Research','Mobile UX','Visual Design'],
  },
  {
    id: 'faveo', label: '🖥️ Faveo IT Service Desk',
    eyebrow: '🖥️ Enterprise Web App · UI/UX Redesign',
    title: 'Faveo IT Service Desk',
    sub: 'Enterprise helpdesk UI/UX redesign — improved ticket management, visual hierarchy and a complete design system.',
    color: '#4C6EF5', colorDim: 'rgba(76,110,245,0.08)', colorBorder: 'rgba(76,110,245,0.22)',
    proto: 'https://www.figma.com/proto/E3KE7ReBy4z0uOrqFotOmr/desk?node-id=59-2&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=40%3A50&page-id=37%3A45',
    chips: ['🌐 Web App','🎨 Figma','✅ Design System'],
    screens: faveoScreens,
    process: faveoProcess,
    tools: ['Figma','Design System','Color Palette','Typography','Components','Enterprise UX','B2B UI'],
  },
]

export default function CaseStudySection() {
  const ref = useRef<HTMLDivElement>(null)
  const [tab, setTab] = useState(0)
  const [activeScreen, setActiveScreen] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
  }, [])

  // Auto-rotate screens
  useEffect(() => {
    setActiveScreen(0)
    const t = setInterval(() => setActiveScreen(s => (s + 1) % cases[tab].screens.length), 2800)
    return () => clearInterval(t)
  }, [tab])

  const cs = cases[tab]

  return (
    <section className={styles.section} id="casestudy" ref={ref}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={`${styles.header} ${styles.reveal}`}>
          <div className={styles.eyebrow} style={{ color: cs.color }}>UI/UX Case Studies</div>
          <h2 className={styles.heading}>Design Thinking in Action</h2>
          <p className={styles.sub}>Real problems. Research-driven solutions. Pixel-perfect execution.</p>
        </div>

        {/* Tab switcher */}
        <div className={`${styles.tabs} ${styles.reveal}`}>
          {cases.map((c, i) => (
            <button key={c.id} onClick={() => setTab(i)}
              className={`${styles.tab} ${tab === i ? styles.tabActive : ''}`}
              style={tab === i ? { borderColor: c.color, color: c.color, background: c.colorDim } : {}}>
              {c.label}
            </button>
          ))}
        </div>

        {/* Case study content */}
        <div className={`${styles.csCard} ${styles.reveal}`} style={{ borderColor: cs.colorBorder, background: `linear-gradient(135deg, ${cs.colorDim} 0%, #141416 55%)` }}>

          {/* Card header */}
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardEyebrow} style={{ color: cs.color }}>{cs.eyebrow}</div>
              <div className={styles.cardTitle}>{cs.title}</div>
              <div className={styles.cardSub}>{cs.sub}</div>
              <div className={styles.cardChips}>
                {cs.chips.map(c2 => (
                  <span key={c2} className={styles.cardChip} style={{ background: cs.colorDim, borderColor: cs.colorBorder, color: cs.color }}>{c2}</span>
                ))}
                <a href={cs.proto} target="_blank" rel="noreferrer" className={styles.protoBtn} style={{ background: cs.color }}>▶ Live Prototype</a>
              </div>
            </div>
          </div>

          {/* Showcase — phone + thumbnails */}
          <div className={styles.showcase}>

            {/* Big phone */}
            <div className={styles.bigPreview}>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScreen}>
                  {cs.screens.map((s, i) => (
                    <div key={s.src} className={`${styles.screenImg} ${activeScreen === i ? styles.screenActive : ''}`}>
                      <Image src={s.src} alt={s.label} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.screenInfo}>
                <div className={styles.screenStep} style={{ color: cs.color }}>{cs.screens[activeScreen].step} / 0{cs.screens.length}</div>
                <div className={styles.screenLabel}>{cs.screens[activeScreen].label}</div>
                <div className={styles.screenDesc}>{cs.screens[activeScreen].desc}</div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className={styles.thumbsCol}>
              {cs.screens.map((s, i) => (
                <button key={s.src} onClick={() => setActiveScreen(i)}
                  className={`${styles.thumb} ${activeScreen === i ? styles.thumbActive : ''}`}
                  style={activeScreen === i ? { '--tc': cs.color } as React.CSSProperties : {}}>
                  <div className={styles.thumbImg}>
                    <Image src={s.src} alt={s.label} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                    {activeScreen === i && <div className={styles.thumbOverlay} style={{ background: `${cs.color}18` }} />}
                  </div>
                  <span className={styles.thumbLabel} style={activeScreen === i ? { color: cs.color } : {}}>{s.label}</span>
                </button>
              ))}
            </div>

          </div>

          {/* Process */}
          <div className={styles.processTitle}>Design Process</div>
          <div className={styles.processGrid}>
            {cs.process.map((s, i) => (
              <div key={s.num} className={styles.processCard} style={{ '--pc': s.color } as React.CSSProperties}>
                <div className={styles.processNum} style={{ color: s.color }}>{s.num}</div>
                <div className={styles.processIcon}>{s.icon}</div>
                <div className={styles.processCardTitle} style={{ color: s.color }}>{s.title}</div>
                <div className={styles.processCardDesc}>{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className={styles.cardFooter}>
            <div>
              <div className={styles.toolsLabel}>Tools Used</div>
              <div className={styles.tools}>
                {cs.tools.map(t => (
                  <span key={t} className={styles.tool} style={{ background: cs.colorDim, borderColor: cs.colorBorder, color: cs.color }}>{t}</span>
                ))}
              </div>
            </div>
            <a href={cs.proto} target="_blank" rel="noreferrer" className={styles.ctaBtn} style={{ background: cs.color }}>
              ▶ View Full Prototype ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
