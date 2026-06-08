'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/CaseStudy.module.css'

const pizzaScreens = [
  { src: '/assets/pizza/login.png',   label: 'Login Screen',     step: '01', desc: 'Phone-based OTP login — minimal auth with Pizza Hut branding.' },
  { src: '/assets/pizza/signup.png',  label: 'Sign Up',          step: '02', desc: 'Simple account creation with Name + Phone. Frictionless onboarding.' },
  { src: '/assets/pizza/otp.png',     label: 'OTP Verification', step: '03', desc: '4-digit OTP with auto-read support and countdown resend timer.' },
  { src: '/assets/pizza/home.png',    label: 'Home Screen',      step: '04', desc: 'Location-aware home — Delivery/Takeaway selector + hot deals carousel.' },
  { src: '/assets/pizza/deals.png',   label: 'Deals Page',       step: '05', desc: 'Tabbed menu: Deals / Pizzas / Melts. Card-based offer layout.' },
  { src: '/assets/pizza/menu.png',    label: 'Menu & Offers',    step: '06', desc: 'Buy 1 Get 3 Free offer — clear imagery, pricing and CTA hierarchy.' },
  { src: '/assets/pizza/account.png', label: 'My Account',       step: '07', desc: 'Clean account management: offers, tracking, settings and logout.' },
]
const pizzaProcess = [
  { num:'01', icon:'🎯', color:'#f0a840', title:'Problem',     desc:'Cluttered apps with high cart drop-off. Users needed a faster mobile ordering experience.' },
  { num:'02', icon:'👥', color:'#b8b0f0', title:'Research',    desc:'Analysed Pizza Hut, Swiggy, Zomato. Target: 18–35 mobile users. Speed drives conversion.' },
  { num:'03', icon:'✏️', color:'#5dcaa5', title:'Wireframe',   desc:'7 screens, 3-tab bottom nav. Card-based layout for quick scannability.' },
  { num:'04', icon:'🎨', color:'#e06eaa', title:'Visual',      desc:'Brand orange (#F47920). Inter typography. Consistent component system.' },
  { num:'05', icon:'▶',  color:'#4cc9f0', title:'Prototype',   desc:'Full Figma flow: Login → OTP → Home → Deals → Menu → Account.' },
]

const faveoScreens = [
  { src: '/assets/faveo/tickets.png',       label: 'My Tickets',    step: '01', desc: 'Ticket list with priority badges (High/Medium/Low), status and colour-coded strips for quick scanning.' },
  { src: '/assets/faveo/ticket-detail.png', label: 'Ticket Detail', step: '02', desc: 'Full ticket view — reply composer with AI assist, metadata panel and status tracker on the right.' },
  { src: '/assets/faveo/design-system.png', label: 'Design System', step: '03', desc: 'Complete colour palette (Primary, Blue, Success, Danger, Warning, Neutral) + Inter typography scale.' },
]
const faveoProcess = [
  { num:'01', icon:'🔍', color:'#4C6EF5', title:'Analysis',    desc:'Faveo\'s UI lacked hierarchy. Agents struggled to identify overdue vs open tickets quickly.' },
  { num:'02', icon:'🗂️', color:'#b8b0f0', title:'Architecture', desc:'Mapped core journeys: agent → ticket → reply → resolve. Colour-coded status for instant recognition.' },
  { num:'03', icon:'🎨', color:'#5dcaa5', title:'Design System', desc:'6 semantic colour categories. Inter typography at 7 levels. Reusable component library.' },
  { num:'04', icon:'🖥️', color:'#f0a840', title:'UI Redesign',  desc:'Clean ticket list, detail page with reply composer, metadata panel and consistent spacing.' },
  { num:'05', icon:'✅', color:'#4cc9f0', title:'Outcome',      desc:'Professional enterprise UI ready for developer handoff with full design system.' },
]

export default function CaseStudySection() {
  const ref = useRef<HTMLDivElement>(null)
  const [tab, setTab] = useState(0)
  const [pizzaScreen, setPizzaScreen] = useState(0)
  const [faveoScreen, setFaveoScreen] = useState(0)
  const pizzaTimer = useRef<NodeJS.Timeout|null>(null)
  const faveoTimer = useRef<NodeJS.Timeout|null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
  }, [])

  // Pizza auto-rotate (only when tab=0)
  useEffect(() => {
    if (pizzaTimer.current) clearInterval(pizzaTimer.current)
    pizzaTimer.current = setInterval(() => setPizzaScreen(s => (s + 1) % pizzaScreens.length), 2800)
    return () => { if (pizzaTimer.current) clearInterval(pizzaTimer.current) }
  }, [])

  // Faveo auto-rotate (only when tab=1)
  useEffect(() => {
    if (faveoTimer.current) clearInterval(faveoTimer.current)
    faveoTimer.current = setInterval(() => setFaveoScreen(s => (s + 1) % faveoScreens.length), 3000)
    return () => { if (faveoTimer.current) clearInterval(faveoTimer.current) }
  }, [])

  return (
    <section className={styles.section} id="casestudy" ref={ref}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={`${styles.header} ${styles.reveal}`}>
          <div className={styles.eyebrow}>UI/UX Case Studies</div>
          <h2 className={styles.heading}>Design Thinking in Action</h2>
          <p className={styles.sub}>Real problems. Research-driven solutions. Pixel-perfect execution.</p>
        </div>

        {/* Tabs */}
        <div className={`${styles.tabs} ${styles.reveal}`}>
          <button onClick={() => setTab(0)} className={`${styles.tab} ${tab===0 ? styles.tabPizza : ''}`}>🍕 Pizza Delivery App</button>
          <button onClick={() => setTab(1)} className={`${styles.tab} ${tab===1 ? styles.tabFaveo : ''}`}>🖥️ Faveo IT Service Desk</button>
        </div>

        {/* ── PIZZA CASE STUDY ── */}
        {tab === 0 && (
          <div className={`${styles.csCard} ${styles.pizzaCard} ${styles.reveal}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardEyebrow} style={{color:'#f0a840'}}>🍕 Mobile App · UI/UX Design</div>
              <div className={styles.cardTitle}>Pizza Delivery App</div>
              <div className={styles.cardSub}>A complete mobile UI/UX — from problem discovery to interactive Figma prototype.</div>
              <div className={styles.cardChips}>
                <span className={styles.chipPizza}>📱 Mobile App</span>
                <span className={styles.chipPizza}>🎨 Figma</span>
                <span className={styles.chipPizza}>✅ 7 Screens</span>
                <a href="https://www.figma.com/proto/CbVIWK5mpyKuDI570u2MUW/Pizza-app?node-id=6-28&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A28&page-id=0%3A1" target="_blank" rel="noreferrer" className={styles.protoBtnPizza}>▶ Live Prototype</a>
              </div>
            </div>

            {/* Pizza showcase — phone LEFT, thumbs RIGHT (vertical) */}
            <div className={styles.pizzaShowcase}>
              {/* Phone mockup */}
              <div className={styles.pizzaPhoneWrap}>
                <div className={styles.phoneFrame}>
                  <div className={styles.phoneNotch} />
                  <div className={styles.phoneScreen}>
                    {pizzaScreens.map((s,i) => (
                      <div key={s.src} className={`${styles.screenImg} ${pizzaScreen===i ? styles.screenActive : ''}`}>
                        <Image src={s.src} alt={s.label} fill style={{objectFit:'cover',objectPosition:'center top'}} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.screenInfo}>
                  <div className={styles.screenStep} style={{color:'#f0a840'}}>{pizzaScreens[pizzaScreen].step} / 07</div>
                  <div className={styles.screenLabel}>{pizzaScreens[pizzaScreen].label}</div>
                  <div className={styles.screenDesc}>{pizzaScreens[pizzaScreen].desc}</div>
                </div>
              </div>

              {/* Vertical thumbnails */}
              <div className={styles.pizzaThumbs}>
                {pizzaScreens.map((s,i) => (
                  <button key={s.src} onClick={() => setPizzaScreen(i)}
                    className={`${styles.thumb} ${pizzaScreen===i ? styles.thumbActivePizza : ''}`}>
                    <div className={styles.thumbImg}>
                      <Image src={s.src} alt={s.label} fill style={{objectFit:'cover',objectPosition:'center top'}} />
                      {pizzaScreen===i && <div className={styles.thumbOverlayPizza} />}
                    </div>
                    <span className={`${styles.thumbLabel} ${pizzaScreen===i ? styles.thumbLabelPizza : ''}`}>{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className={styles.processTitle}>Design Process</div>
            <div className={styles.processGrid}>
              {pizzaProcess.map(s => (
                <div key={s.num} className={styles.processCard}>
                  <div className={styles.processNum} style={{color:s.color}}>{s.num}</div>
                  <div className={styles.processIcon}>{s.icon}</div>
                  <div className={styles.processCardTitle} style={{color:s.color}}>{s.title}</div>
                  <div className={styles.processCardDesc}>{s.desc}</div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className={styles.cardFooter}>
              <div>
                <div className={styles.toolsLabel}>Tools Used</div>
                <div className={styles.tools}>
                  {['Figma','Auto Layout','Components','Prototyping','User Research','Mobile UX'].map(t=>(
                    <span key={t} className={styles.toolPizza}>{t}</span>
                  ))}
                </div>
              </div>
              <a href="https://www.figma.com/proto/CbVIWK5mpyKuDI570u2MUW/Pizza-app?node-id=6-28&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A28&page-id=0%3A1" target="_blank" rel="noreferrer" className={styles.ctaBtnPizza}>▶ View Full Prototype ↗</a>
            </div>
          </div>
        )}

        {/* ── FAVEO CASE STUDY ── */}
        {tab === 1 && (
          <div className={`${styles.csCard} ${styles.faveoCard} ${styles.reveal}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardEyebrow} style={{color:'#4C6EF5'}}>🖥️ Enterprise Web App · UI/UX Redesign</div>
              <div className={styles.cardTitle}>Faveo IT Service Desk</div>
              <div className={styles.cardSub}>Enterprise helpdesk UI/UX redesign — improved ticket management, visual hierarchy and a complete design system.</div>
              <div className={styles.cardChips}>
                <span className={styles.chipFaveo}>🌐 Web App</span>
                <span className={styles.chipFaveo}>🎨 Figma</span>
                <span className={styles.chipFaveo}>✅ Design System</span>
                <a href="https://www.figma.com/proto/E3KE7ReBy4z0uOrqFotOmr/desk?node-id=59-2&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=40%3A50&page-id=37%3A45" target="_blank" rel="noreferrer" className={styles.protoBtnFaveo}>▶ Live Prototype</a>
              </div>
            </div>

            {/* Faveo showcase — Mac frames HORIZONTAL */}
            <div className={styles.faveoShowcase}>
              {faveoScreens.map((s,i) => (
                <button key={s.src} onClick={() => setFaveoScreen(i)}
                  className={`${styles.faveoScreen} ${faveoScreen===i ? styles.faveoScreenActive : ''}`}>
                  {/* Mac frame */}
                  <div className={styles.macFrame}>
                    <div className={styles.macBar}>
                      <span className={styles.macDot} style={{background:'#FF5F56'}} />
                      <span className={styles.macDot} style={{background:'#FFBD2E'}} />
                      <span className={styles.macDot} style={{background:'#27C93F'}} />
                      <div className={styles.macUrl}>faveo-helpdesk.com</div>
                    </div>
                    <div className={styles.macScreen}>
                      <Image src={s.src} alt={s.label} fill style={{objectFit:'cover',objectPosition:'top center'}} />
                    </div>
                  </div>
                  <div className={styles.faveoLabel} style={faveoScreen===i ? {color:'#4C6EF5'} : {}}>{s.step}. {s.label}</div>
                  {faveoScreen===i && <div className={styles.faveoDesc}>{s.desc}</div>}
                </button>
              ))}
            </div>

            {/* Process */}
            <div className={styles.processTitle}>Design Process</div>
            <div className={styles.processGrid}>
              {faveoProcess.map(s => (
                <div key={s.num} className={styles.processCard}>
                  <div className={styles.processNum} style={{color:s.color}}>{s.num}</div>
                  <div className={styles.processIcon}>{s.icon}</div>
                  <div className={styles.processCardTitle} style={{color:s.color}}>{s.title}</div>
                  <div className={styles.processCardDesc}>{s.desc}</div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className={styles.cardFooter}>
              <div>
                <div className={styles.toolsLabel}>Tools Used</div>
                <div className={styles.tools}>
                  {['Figma','Design System','Color Palette','Typography','Enterprise UX','B2B UI'].map(t=>(
                    <span key={t} className={styles.toolFaveo}>{t}</span>
                  ))}
                </div>
              </div>
              <a href="https://www.figma.com/proto/E3KE7ReBy4z0uOrqFotOmr/desk?node-id=59-2&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=40%3A50&page-id=37%3A45" target="_blank" rel="noreferrer" className={styles.ctaBtnFaveo}>▶ View Full Prototype ↗</a>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
