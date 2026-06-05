'use client'
import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/HeroSection.module.css'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const bgVideoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  const [showBadge, setShowBadge] = useState(true)

  useEffect(() => {
    let animId: number
    const canvas = canvasRef.current
    if (!canvas) return
    import('three').then((THREE) => {
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setSize(window.innerWidth, window.innerHeight)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
      camera.position.z = 3
      const count = 1800
      const positions = new Float32Array(count * 3)
      const phases = new Float32Array(count)
      for (let i = 0; i < count; i++) {
        positions[i*3]   = (Math.random()-0.5)*14
        positions[i*3+1] = (Math.random()-0.5)*14
        positions[i*3+2] = (Math.random()-0.5)*8
        phases[i] = Math.random()*Math.PI*2
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const mat = new THREE.PointsMaterial({ color: 0xf0a840, size: 0.022, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.45, depthWrite: false })
      const points = new THREE.Points(geo, mat)
      scene.add(points)
      let mx = 0, my = 0, t = 0
      const onMouse = (e: MouseEvent) => { mx=(e.clientX/window.innerWidth-0.5)*0.6; my=(e.clientY/window.innerHeight-0.5)*0.6 }
      window.addEventListener('mousemove', onMouse)
      const onResize = () => { camera.aspect=window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight) }
      window.addEventListener('resize', onResize)
      const pos = geo.attributes.position as THREE.BufferAttribute
      const orig = new Float32Array(positions)
      const tick = () => {
        animId = requestAnimationFrame(tick); t += 0.004
        for (let i=0;i<count;i++) {
          pos.array[i*3+1] = orig[i*3+1]+Math.sin(t+phases[i])*0.16
          pos.array[i*3]   = orig[i*3]+Math.cos(t*0.7+phases[i])*0.07
        }
        pos.needsUpdate = true
        points.rotation.y += 0.0005
        camera.position.x += (mx-camera.position.x)*0.032
        camera.position.y += (-my-camera.position.y)*0.032
        renderer.render(scene, camera)
      }
      tick()
      return () => { window.removeEventListener('mousemove', onMouse); window.removeEventListener('resize', onResize); cancelAnimationFrame(animId); renderer.dispose() }
    })
  }, [])

  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo(`.${styles.eyebrow}`,{opacity:0,y:20},{opacity:1,y:0,duration:0.8,ease:'power3.out'})
        .fromTo(`.${styles.line1}`,{opacity:0,y:55},{opacity:1,y:0,duration:1,ease:'power3.out'},'-=0.5')
        .fromTo(`.${styles.line2}`,{opacity:0,y:55},{opacity:1,y:0,duration:1,ease:'power3.out'},'-=0.72')
        .fromTo(`.${styles.line3}`,{opacity:0,y:28},{opacity:1,y:0,duration:0.85,ease:'power3.out'},'-=0.65')
        .fromTo(`.${styles.desc}`,{opacity:0,y:18},{opacity:1,y:0,duration:0.75,ease:'power3.out'},'-=0.55')
        .fromTo(`.${styles.actions}`,{opacity:0,y:16},{opacity:1,y:0,duration:0.7,ease:'power3.out'},'-=0.5')
        .fromTo(`.${styles.stats}`,{opacity:0},{opacity:1,duration:0.6},'-=0.3')
    })
  }, [])

  useEffect(() => { const t = setTimeout(()=>setShowBadge(false),4500); return ()=>clearTimeout(t) }, [])

  const toggleMute = () => {
    if (videoRef.current) videoRef.current.muted = !muted
    if (bgVideoRef.current) bgVideoRef.current.muted = !muted
    setMuted(m=>!m)
  }
  const togglePlay = () => {
    if (videoRef.current) playing ? videoRef.current.pause() : videoRef.current.play()
    if (bgVideoRef.current) playing ? bgVideoRef.current.pause() : bgVideoRef.current.play()
    setPlaying(p=>!p)
  }

  return (
    <section className={styles.hero} id="home">
      <canvas ref={canvasRef} className={styles.canvas} />
      <video ref={bgVideoRef} className={styles.bgVideo} src="/assets/hero.mp4" autoPlay muted loop playsInline />
      <div className={styles.bgOverlay} />
      <video ref={videoRef} className={styles.fgVideo} src="/assets/hero.mp4" autoPlay muted loop playsInline />
      <div className={styles.gradLeft} />
      <div className={styles.gradBottom} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>WordPress Developer & UI/UX Designer · Tamil Nadu · 2026</div>
        <h1 className={styles.h1}>
          <span className={styles.line1}>BHARANI</span>
          <span className={styles.line2}>DHARAN<em>M</em></span>
          <span className={styles.line3}>Building digital experiences<br />that feel alive.</span>
        </h1>
        <p className={styles.desc}>
          Passionate WordPress Developer & UI/UX Designer crafting responsive, SEO-friendly websites and intuitive interfaces.
        </p>
        <div className={styles.actions}>
          <a href="#work"><button className={styles.btnPrimary}>View my work ↓</button></a>
          <a href="#contact"><button className={styles.btnSecondary}>Get in touch</button></a>
          <a
            href="/assets/Bharanidharan_Resume.pdf"
            download="Bharanidharan_M_Resume.pdf"
            className={styles.btnResume}
          >
            ↓ Download CV
          </a>
        </div>
        <div className={styles.stats}>
          <div><span className={styles.statNum}>3+</span><span className={styles.statLabel}>Projects</span></div>
          <div className={styles.statDivider} />
          <div><span className={styles.statNum}>2</span><span className={styles.statLabel}>Internships</span></div>
          <div className={styles.statDivider} />
          <div><span className={styles.statNum}>MCA</span><span className={styles.statLabel}>Pursuing</span></div>
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.ctrlBtn} onClick={togglePlay}>{ playing ? '⏸' : '▶' }</button>
        <button className={styles.ctrlBtn} onClick={toggleMute}>{ muted ? '🔇' : '🔊' }</button>
      </div>
      {showBadge && <div className={styles.soundBadge}>🔇 Tap for sound</div>}
      <div className={styles.scrollIndicator} onClick={()=>document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  )
}
