'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/CaseStudy.module.css'

const fitnessScreens = [
  { src: '/assets/fitness/login.png', label: 'Login', step: '01', desc: 'Welcome and authentication screen.' },
  { src: '/assets/fitness/otp.png', label: 'OTP Verification', step: '02', desc: 'Secure OTP verification flow.' },
  { src: '/assets/fitness/home.png', label: 'Home Dashboard', step: '03', desc: 'Daily activity overview.' },
  { src: '/assets/fitness/activity.png', label: 'Activity', step: '04', desc: 'Activity tracking and insights.' },
  { src: '/assets/fitness/activity1.png', label: 'Activity Details', step: '05', desc: 'Performance analytics.' },
  { src: '/assets/fitness/workout.png', label: 'Workout', step: '06', desc: 'Workout plans and routines.' },
  { src: '/assets/fitness/hiit.png', label: 'HIIT Training', step: '07', desc: 'High intensity training session.' },
  { src: '/assets/fitness/inbox.png', label: 'Inbox', step: '08', desc: 'Notifications and updates.' },
]

const pizzaScreens = [
  { src: '/assets/pizza/login.png', label: 'Login Screen', step: '01', desc: 'Phone-based OTP login — minimal auth with Pizza Hut branding.' },
  { src: '/assets/pizza/signup.png', label: 'Sign Up', step: '02', desc: 'Simple account creation with Name + Phone. Frictionless onboarding.' },
  { src: '/assets/pizza/otp.png', label: 'OTP Verification', step: '03', desc: '4-digit OTP with auto-read support and countdown resend timer.' },
  { src: '/assets/pizza/home.png', label: 'Home Screen', step: '04', desc: 'Location-aware home — Delivery/Takeaway selector + hot deals carousel.' },
  { src: '/assets/pizza/deals.png', label: 'Deals Page', step: '05', desc: 'Tabbed menu: Deals / Pizzas / Melts. Card-based offer layout.' },
  { src: '/assets/pizza/menu.png', label: 'Menu & Offers', step: '06', desc: 'Buy 1 Get 3 Free offer — clear imagery, pricing and CTA hierarchy.' },
  { src: '/assets/pizza/account.png', label: 'My Account', step: '07', desc: 'Clean account management: offers, tracking, settings and logout.' },
]

const faveoScreens = [
  { src: '/assets/faveo/tickets.png', label: 'My Tickets', step: '01', desc: 'Ticket list with priority badges (High/Medium/Low), status indicators and colour-coded strips for quick scanning.' },
  { src: '/assets/faveo/ticket-detail.png', label: 'Ticket Detail', step: '02', desc: 'Full ticket view — reply composer with AI assist, metadata panel and status tracker on the right.' },
  { src: '/assets/faveo/design-system.png', label: 'Design System', step: '03', desc: 'Complete colour palette across 6 semantic categories + Inter typography scale from Heading 1 to Helper.' },
]

const fitnessProcess = [
  {
    num:'01',
    icon:'🔍',
    title:'Research',
    desc:'Studied user needs, fitness goals and activity tracking requirements.',
    color:'#22C55E'
  },
  {
    num:'02',
    icon:'📝',
    title:'User Flow',
    desc:'Created onboarding, workout and activity tracking user journeys.',
    color:'#22C55E'
  },
  {
    num:'03',
    icon:'🎨',
    title:'UI Design',
    desc:'Designed clean and modern mobile interfaces using Google Stitch.',
    color:'#22C55E'
  },
  {
    num:'04',
    icon:'⚡',
    title:'Prototype',
    desc:'Built interactive screens for workouts, progress tracking and engagement.',
    color:'#22C55E'
  },
  {
    num:'05',
    icon:'🚀',
    title:'Testing',
    desc:'Reviewed usability, navigation clarity and overall user experience.',
    color:'#22C55E'
  }
]

const pizzaProcess = [
  { num: '01', icon: '🎯', color: '#f0a840', title: 'Problem', desc: 'Cluttered apps with high cart drop-off. Users needed a faster mobile ordering experience.' },
  { num: '02', icon: '👥', color: '#b8b0f0', title: 'Research', desc: 'Analysed Pizza Hut, Swiggy, Zomato. Target: 18–35 mobile users. Speed drives conversion.' },
  { num: '03', icon: '✏️', color: '#5dcaa5', title: 'Wireframe', desc: '7 screens, 3-tab bottom nav. Card-based layout for quick scannability.' },
  { num: '04', icon: '🎨', color: '#e06eaa', title: 'Visual', desc: 'Brand orange (#F47920). Inter typography. Consistent component system.' },
  { num: '05', icon: '▶', color: '#4cc9f0', title: 'Prototype', desc: 'Full Figma flow: Login → OTP → Home → Deals → Menu → Account.' },
]
const faveoProcess = [
  { num: '01', icon: '🔍', color: '#4C6EF5', title: 'Analysis', desc: 'Faveo\'s UI lacked hierarchy. Agents struggled to identify overdue vs open tickets quickly.' },
  { num: '02', icon: '🗂️', color: '#b8b0f0', title: 'Architecture', desc: 'Mapped core journeys: agent → ticket → reply → resolve. Colour-coded status.' },
  { num: '03', icon: '🎨', color: '#5dcaa5', title: 'Design System', desc: '6 semantic colour categories. Inter typography 7 levels. Reusable components.' },
  { num: '04', icon: '🖥️', color: '#f0a840', title: 'UI Redesign', desc: 'Clean ticket list, detail with reply composer, metadata panel.' },
  { num: '05', icon: '✅', color: '#4cc9f0', title: 'Outcome', desc: 'Professional enterprise UI ready for handoff with full design system.' },
]

export default function CaseStudySection() {
  const ref = useRef<HTMLDivElement>(null)
  const [tab, setTab] = useState(0)
  const [fitnessIdx, setFitnessIdx] = useState(0)
  const [pizzaIdx, setPizzaIdx] = useState(0)
  const [faveoIdx, setFaveoIdx] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setVisible(true) }),
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])



  const cls = visible ? `${styles.card} ${styles.cardVisible}` : styles.card

  return (
    <section className={styles.section} id="casestudy" ref={ref}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={visible ? `${styles.hdr} ${styles.hdrVisible}` : styles.hdr}>
          <div className={styles.eyebrow}>UI/UX Case Studies</div>
          <h2 className={styles.heading}>Design Thinking in Action</h2>
          <p className={styles.sub}>Real problems. Research-driven solutions. Pixel-perfect execution.</p>
        </div>

        {/* Tabs */}
        <div className={visible ? `${styles.tabs} ${styles.tabsVisible}` : styles.tabs}>
          <button onClick={() => setTab(0)}
            className={tab === 0 ? `${styles.tab} ${styles.tabFitnessActive}` : styles.tab}>
            🏋️ Fitness Tracker App
          </button>
          <button onClick={() => setTab(1)}
            className={tab === 1 ? `${styles.tab} ${styles.tabPizzaActive}` : styles.tab}>
            🍕 Pizza Delivery App
          </button>
          <button onClick={() => setTab(2)}
            className={tab === 2 ? `${styles.tab} ${styles.tabFaveoActive}` : styles.tab}>
            🖥️ Faveo IT Service Desk
          </button>
        </div>

        {/* ══ Fitness Tracker App ══ */}
        <div className={tab === 0 ? `${cls} ${styles.pizzaBg}` : styles.hidden}>
          <div className={styles.cardTop}>
            <div className={styles.cardEyebrow} style={{ color: '#22C55E' }}>
              🏋️ Fitness App · UI/UX Design
            </div>

            <div className={styles.cardTitle}>
              Fitness Tracker App
            </div>

            <div className={styles.cardSub}>
              A modern fitness tracking application designed using Google Stitch. Covers onboarding, activity tracking, workout management, HIIT sessions and user engagement flows.
            </div>

            <div className={styles.chips}>
              <span className={styles.chipO}>📱 Mobile App</span>
              <span className={styles.chipO}>🎨 Google Stitch</span>
              <span className={styles.chipO}>✅ 8 Screens</span>

              <a
                href="https://stitch.withgoogle.com/preview/6539113076398028289?node-id=2d4e9f5f3b1945598b7c7f53bfe3af93"
                target="_blank"
                rel="noreferrer"
                className={styles.protoO}
              >
                ▶ Live Prototype
              </a>
            </div>
          </div>

          {/* Phone + vertical thumbs */}
          <div className={styles.pizzaLayout}>
            <div className={styles.phoneCol}>
              <div className={styles.phone}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScreen}>
                  {fitnessScreens.map((s, i) => (
                    <div
                      key={i}
                      className={
                        i === fitnessIdx
                          ? `${styles.slide} ${styles.slideOn}`
                          : styles.slide
                      }
                    >
                      <Image
                        src={s.src}
                        alt={s.label}
                        fill
                        quality={100}
                        sizes="320px"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'top center'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.slideInfo}>
                <span
                  className={styles.slideStep}
                  style={{ color: '#22C55E' }}
                >
                  {fitnessScreens[fitnessIdx].step}/08
                </span>

                <span className={styles.slideName}>
                  {fitnessScreens[fitnessIdx].label}
                </span>

                <span className={styles.slideDesc}>
                  {fitnessScreens[fitnessIdx].desc}
                </span>
              </div>
            </div>

            {/* Vertical thumbnails */}
            <div className={styles.vThumbs}>
              {fitnessScreens.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setFitnessIdx(i)}
                  className={
                    i === fitnessIdx
                      ? `${styles.vThumb} ${styles.vThumbOn}`
                      : styles.vThumb
                  }
                >
                  <div className={styles.vThumbImg}>
                    <Image
                      src={s.src}
                      alt={s.label}
                      fill
                      quality={100}
                      sizes="300px"
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                    />

                    {i === fitnessIdx && (
                      <div className={styles.vThumbGlow} />
                    )}
                  </div>

                  <span
                    className={
                      i === fitnessIdx
                        ? `${styles.vThumbTxt} ${styles.vThumbTxtOn}`
                        : styles.vThumbTxt
                    }
                  >
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className={styles.procLabel}>Design Process</div>

          <div className={styles.procGrid}>
            {fitnessProcess.map(p => (
              <div key={p.num} className={styles.proc}>
                <div
                  style={{
                    color: p.color,
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    marginBottom: '4px'
                  }}
                >
                  {p.num}
                </div>

                <div
                  style={{
                    fontSize: '1.2rem',
                    marginBottom: '4px'
                  }}
                >
                  {p.icon}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: p.color,
                    marginBottom: '4px'
                  }}
                >
                  {p.title}
                </div>

                <div
                  style={{
                    fontSize: '11px',
                    color: '#636360',
                    lineHeight: 1.55
                  }}
                >
                  {p.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className={styles.cardFoot}>
            <div>
              <div className={styles.toolLabel}>
                Tools Used
              </div>

              <div className={styles.toolRow}>
                {[
                  'Google Stitch',
                  'Mobile UX',
                  'User Flow',
                  'Workout Planning',
                  'Activity Tracking',
                  'Prototyping'
                ].map(t => (
                  <span
                    key={t}
                    className={styles.toolO}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://stitch.withgoogle.com/preview/6539113076398028289?node-id=2d4e9f5f3b1945598b7c7f53bfe3af93"
              target="_blank"
              rel="noreferrer"
              className={styles.ctaO}
            >
              ▶ View Full Prototype ↗
            </a>
          </div>
        </div>

        {/* ══ PIZZA ══ */}
        <div className={tab === 1 ? `${cls} ${styles.pizzaBg}` : styles.hidden}>
          <div className={styles.cardTop}>
            <div className={styles.cardEyebrow} style={{ color: '#f0a840' }}>🍕 Mobile App · UI/UX Design</div>
            <div className={styles.cardTitle}>Pizza Delivery App</div>
            <div className={styles.cardSub}>A complete mobile UI/UX design — from problem discovery to interactive Figma prototype.</div>
            <div className={styles.chips}>
              <span className={styles.chipO}>📱 Mobile App</span>
              <span className={styles.chipO}>🎨 Figma</span>
              <span className={styles.chipO}>✅ 7 Screens</span>
              <a href="https://www.figma.com/proto/CbVIWK5mpyKuDI570u2MUW/Pizza-app?node-id=6-28&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A28&page-id=0%3A1"
                target="_blank" rel="noreferrer" className={styles.protoO}>▶ Live Prototype</a>
            </div>
          </div>

          {/* Phone + vertical thumbs */}
          <div className={styles.pizzaLayout}>
            {/* Phone */}
            <div className={styles.phoneCol}>
              <div className={styles.phone}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScreen}>
                  {pizzaScreens.map((s, i) => (
                    <div key={i} className={i === pizzaIdx ? `${styles.slide} ${styles.slideOn}` : styles.slide}>
                      <Image src={s.src} alt={s.label} fill sizes="240px" style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.slideInfo}>
                <span className={styles.slideStep} style={{ color: '#f0a840' }}>{pizzaScreens[pizzaIdx].step}/07</span>
                <span className={styles.slideName}>{pizzaScreens[pizzaIdx].label}</span>
                <span className={styles.slideDesc}>{pizzaScreens[pizzaIdx].desc}</span>
              </div>
            </div>

            {/* Vertical thumbnails */}
            <div className={styles.vThumbs}>
              {pizzaScreens.map((s, i) => (
                <button key={i} onClick={() => setPizzaIdx(i)}
                  className={i === pizzaIdx ? `${styles.vThumb} ${styles.vThumbOn}` : styles.vThumb}>
                  <div className={styles.vThumbImg}>
                    <Image src={s.src} alt={s.label} fill sizes="120px" style={{ objectFit: 'contain', objectPosition: 'center' }} />
                    {i === pizzaIdx && <div className={styles.vThumbGlow} />}
                  </div>
                  <span className={i === pizzaIdx ? `${styles.vThumbTxt} ${styles.vThumbTxtOn}` : styles.vThumbTxt}>{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className={styles.procLabel}>Design Process</div>
          <div className={styles.procGrid}>
            {pizzaProcess.map(p => (
              <div key={p.num} className={styles.proc}>
                <div style={{ color: p.color, fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '4px' }}>{p.num}</div>
                <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{p.icon}</div>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 700, color: p.color, marginBottom: '4px' }}>{p.title}</div>
                <div style={{ fontSize: '11px', color: '#636360', lineHeight: 1.55 }}>{p.desc}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className={styles.cardFoot}>
            <div>
              <div className={styles.toolLabel}>Tools Used</div>
              <div className={styles.toolRow}>
                {['Figma', 'Auto Layout', 'Components', 'Prototyping', 'User Research', 'Mobile UX'].map(t => (
                  <span key={t} className={styles.toolO}>{t}</span>
                ))}
              </div>
            </div>
            <a href="https://www.figma.com/proto/CbVIWK5mpyKuDI570u2MUW/Pizza-app?node-id=6-28&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A28&page-id=0%3A1"
              target="_blank" rel="noreferrer" className={styles.ctaO}>▶ View Full Prototype ↗</a>
          </div>
        </div>

        {/* ══ FAVEO ══ */}
        <div className={tab === 2 ? `${cls} ${styles.faveoBg}` : styles.hidden}>
          <div className={styles.cardTop}>
            <div className={styles.cardEyebrow} style={{ color: '#4C6EF5' }}>🖥️ Enterprise Web App · UI/UX Redesign</div>
            <div className={styles.cardTitle}>Faveo IT Service Desk</div>
            <div className={styles.cardSub}>Enterprise helpdesk redesign — improved ticket management, visual hierarchy and a complete design system.</div>
            <div className={styles.chips}>
              <span className={styles.chipB}>🌐 Web App</span>
              <span className={styles.chipB}>🎨 Figma</span>
              <span className={styles.chipB}>✅ Design System</span>
              <a href="https://www.figma.com/proto/E3KE7ReBy4z0uOrqFotOmr/desk?node-id=59-2&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=40%3A50&page-id=37%3A45"
                target="_blank" rel="noreferrer" className={styles.protoB}>▶ Live Prototype</a>
            </div>
          </div>

          {/* Mac frames — vertical stack, full width */}
          <div className={styles.macStack}>
            {faveoScreens.map((s, i) => (
              <div key={i} onClick={() => setFaveoIdx(i)}
                className={i === faveoIdx ? `${styles.macCard} ${styles.macCardOn}` : styles.macCard}>
                <div className={styles.macWin}>
                  <div className={styles.macBar}>
                    <span className={styles.dot} style={{ background: '#FF5F56' }} />
                    <span className={styles.dot} style={{ background: '#FFBD2E' }} />
                    <span className={styles.dot} style={{ background: '#27C93F' }} />
                    <div className={styles.macAddr}>faveo-helpdesk.com</div>
                  </div>
                  <div className={styles.macImgWrap}>
                    <Image src={s.src} alt={s.label} fill sizes="900px" style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                  </div>
                </div>
                <div className={styles.macMeta}>
                  <span className={styles.macStep} style={i === faveoIdx ? { color: '#4C6EF5' } : {}}>{s.step}. {s.label}</span>
                  {i === faveoIdx && <span className={styles.macDesc}>{s.desc}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className={styles.procLabel}>Design Process</div>
          <div className={styles.procGrid}>
            {faveoProcess.map(p => (
              <div key={p.num} className={styles.proc}>
                <div style={{ color: p.color, fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '4px' }}>{p.num}</div>
                <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{p.icon}</div>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 700, color: p.color, marginBottom: '4px' }}>{p.title}</div>
                <div style={{ fontSize: '11px', color: '#636360', lineHeight: 1.55 }}>{p.desc}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className={styles.cardFoot}>
            <div>
              <div className={styles.toolLabel}>Tools Used</div>
              <div className={styles.toolRow}>
                {['Figma', 'Design System', 'Color Palette', 'Typography', 'Enterprise UX', 'B2B UI'].map(t => (
                  <span key={t} className={styles.toolB}>{t}</span>
                ))}
              </div>
            </div>
            <a href="https://www.figma.com/proto/E3KE7ReBy4z0uOrqFotOmr/desk?node-id=59-2&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=40%3A50&page-id=37%3A45"
              target="_blank" rel="noreferrer" className={styles.ctaB}>▶ View Full Prototype ↗</a>
          </div>
        </div>

      </div>
    </section>
  )
}
