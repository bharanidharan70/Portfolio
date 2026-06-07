'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/CaseStudy.module.css'

const pizzaScreens = [
  { src: '/assets/pizza/login.png', label: 'Login Screen', step: '01', desc: 'Phone-based OTP login — clean, minimal auth flow with Pizza Hut branding.' },
  { src: '/assets/pizza/signup.png', label: 'Sign Up', step: '02', desc: 'Simple account creation with Name + Phone fields. Frictionless onboarding.' },
  { src: '/assets/pizza/otp.png', label: 'OTP Verification', step: '03', desc: '4-digit OTP verification with auto-read support and resend timer.' },
  { src: '/assets/pizza/home.png', label: 'Home Screen', step: '04', desc: 'Location-aware home — Delivery/Takeaway selector + hot deals carousel.' },
  { src: '/assets/pizza/deals.png', label: 'Deals Page', step: '05', desc: 'Tabbed menu: Deals / Pizzas / Melts. Card-based layout with offer banners.' },
  { src: '/assets/pizza/menu.png', label: 'Menu & Offers', step: '06', desc: 'Buy 1 Get 3 Free offer — clear imagery, pricing and CTA hierarchy.' },
  { src: '/assets/pizza/account.png', label: 'My Account', step: '07', desc: 'Clean account management: offers, tracking, settings and logout.' },
]

const processSteps = [
  { num: '01', icon: '🎯', color: '#f0a840', title: 'Problem Statement', desc: 'Existing food apps were cluttered with high cart drop-off due to complex navigation and unclear CTAs. Users needed a simpler, faster ordering experience.' },
  { num: '02', icon: '👥', color: '#b8b0f0', title: 'User Research', desc: 'Analysed Pizza Hut, Swiggy and Zomato UX patterns. Target users: 18–35 age group. Key insight: speed and visual clarity drive conversion.' },
  { num: '03', icon: '✏️', color: '#5dcaa5', title: 'Wireframing', desc: 'Mapped 7 screens covering the full ordering flow. Simplified to 3-tab bottom navigation. Card-based layout for scannability.' },
  { num: '04', icon: '🎨', color: '#e06eaa', title: 'Visual Design', desc: 'Brand orange (#F47920) for energy and appetite appeal. Clean Inter typography. Consistent components: buttons, cards, inputs, badges.' },
  { num: '05', icon: '▶', color: '#4cc9f0', title: 'Prototype', desc: 'Interactive Figma prototype with smooth transitions. Complete flow: Login → OTP → Home → Deals → Menu → Account.' },
]

export default function CaseStudySection() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeScreen, setActiveScreen] = useState(0)
  const [activeStep, setActiveStep] = useState<number|null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el))
  }, [])

  // Auto-rotate screens
  useEffect(() => {
    const t = setInterval(() => setActiveScreen(s => (s + 1) % pizzaScreens.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className={styles.section} id="casestudy" ref={ref}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={`${styles.header} ${styles.reveal}`}>
          <div className={styles.eyebrow}>🍕 UI/UX Case Study</div>
          <h2 className={styles.heading}>Pizza Delivery App</h2>
          <p className={styles.sub}>A complete mobile UI/UX design — from problem discovery to interactive prototype built in Figma.</p>
          <div className={styles.headerMeta}>
            <span className={styles.metaChip} style={{ background: 'rgba(240,168,64,0.1)', borderColor: 'rgba(240,168,64,0.25)', color: '#f0a840' }}>📱 Mobile App</span>
            <span className={styles.metaChip} style={{ background: 'rgba(184,176,240,0.1)', borderColor: 'rgba(184,176,240,0.25)', color: '#b8b0f0' }}>🎨 Figma</span>
            <span className={styles.metaChip} style={{ background: 'rgba(93,202,165,0.1)', borderColor: 'rgba(93,202,165,0.25)', color: '#5dcaa5' }}>✅ 7 Screens</span>
            <a href="https://www.figma.com/proto/CbVIWK5mpyKuDI570u2MUW/Pizza-app?node-id=6-28&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A28&page-id=0%3A1" target="_blank" rel="noreferrer" className={styles.protoBtn}>▶ Live Prototype</a>
          </div>
        </div>

        {/* Main showcase — big screen + thumbnails */}
        <div className={`${styles.showcase} ${styles.reveal}`}>

          {/* Big preview */}
          <div className={styles.bigPreview}>
            <div className={styles.bigPhoneFrame}>
              <div className={styles.bigPhoneNotch} />
              <div className={styles.bigPhoneScreen}>
                {pizzaScreens.map((s, i) => (
                  <div key={s.src} className={`${styles.bigScreenImg} ${activeScreen === i ? styles.bigScreenActive : ''}`}>
                    <Image src={s.src} alt={s.label} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.bigPreviewInfo}>
              <div className={styles.bigPreviewStep} style={{ color: '#f0a840' }}>{pizzaScreens[activeScreen].step} / 07</div>
              <div className={styles.bigPreviewLabel}>{pizzaScreens[activeScreen].label}</div>
              <div className={styles.bigPreviewDesc}>{pizzaScreens[activeScreen].desc}</div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className={styles.thumbsCol}>
            {pizzaScreens.map((s, i) => (
              <button
                key={s.src}
                className={`${styles.thumb} ${activeScreen === i ? styles.thumbActive : ''}`}
                onClick={() => setActiveScreen(i)}
              >
                <div className={styles.thumbImgWrap}>
                  <Image src={s.src} alt={s.label} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                  {activeScreen === i && <div className={styles.thumbOverlay} />}
                </div>
                <div className={styles.thumbLabel}>{s.label}</div>
              </button>
            ))}
          </div>

        </div>

        {/* Process steps */}
        <div className={`${styles.processTitle} ${styles.reveal}`}>Design Process</div>
        <div className={styles.processGrid}>
          {processSteps.map((s, i) => (
            <div
              key={s.num}
              className={`${styles.processCard} ${styles.reveal} ${activeStep === i ? styles.processCardActive : ''}`}
              style={{ transitionDelay: `${i * 0.08}s`, '--step-color': s.color } as React.CSSProperties}
              onMouseEnter={() => setActiveStep(i)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className={styles.processNum} style={{ color: s.color }}>{s.num}</div>
              <div className={styles.processIcon}>{s.icon}</div>
              <div className={styles.processCardTitle} style={{ color: s.color }}>{s.title}</div>
              <div className={styles.processCardDesc}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Tools + CTA */}
        <div className={`${styles.footer} ${styles.reveal}`}>
          <div className={styles.toolsWrap}>
            <div className={styles.toolsLabel}>Tools & Skills Used</div>
            <div className={styles.tools}>
              {['Figma', 'Auto Layout', 'Components', 'Prototyping', 'User Research', 'Mobile UX', 'Visual Design'].map(t => (
                <span key={t} className={styles.tool}>{t}</span>
              ))}
            </div>
          </div>
          <a href="https://www.figma.com/proto/CbVIWK5mpyKuDI570u2MUW/Pizza-app?node-id=6-28&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A28&page-id=0%3A1" target="_blank" rel="noreferrer" className={styles.ctaBtn}>
            ▶ View Full Prototype on Figma ↗
          </a>
        </div>

      </div>
    </section>
  )
}
