import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Package, Hammer, Truck, TrendingUp, Globe, ShieldCheck,
  ArrowUpRight, Phone, Mail, MapPin, Menu, X, CheckCircle2,
  Upload, ChevronRight, Award, Clock, Star, MessageSquare,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const NAV_LINKS = [
  { label: 'Home', zh: '首页', href: '#home' },
  { label: 'Services', zh: '服务', href: '#services' },
  { label: 'About', zh: '关于', href: '#about' },
  { label: 'Process', zh: '流程', href: '#process' },
  { label: 'Contact', zh: '联系', href: '#contact' },
]

const SERVICES = [
  {
    icon: Package,
    title: 'Material Sourcing',
    zh: '原材料采购',
    text: 'Rubber soles, webbing, fabrics, and trims sourced from verified manufacturers across China and Southeast Asia.',
  },
  {
    icon: Hammer,
    title: 'OEM / ODM Manufacturing',
    zh: 'OEM/ODM 代工生产',
    text: 'Full shoe development and production — from last design to finished pair, under your brand or ours.',
  },
  {
    icon: Truck,
    title: 'Supply Chain Management',
    zh: '供应链管理',
    text: 'End-to-end logistics, supplier auditing, and cross-border coordination across China, Indonesia, and the Philippines.',
  },
  {
    icon: TrendingUp,
    title: 'Brand Development',
    zh: '品牌建设',
    text: 'Positioning, product roadmap, and go-to-market strategy for footwear brands entering Asian markets.',
  },
  {
    icon: Globe,
    title: 'B2B Trade & Export',
    zh: '国际贸易出口',
    text: 'Connecting international buyers with trusted Chinese manufacturers — pricing, MOQs, and documentation handled.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control',
    zh: '质量管控',
    text: 'Rigorous factory audits, material testing, and pre-shipment inspections to protect your brand.',
  },
]

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-black/10' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-display font-bold text-sm shadow-md shadow-primary/40">
              HFS
            </span>
            <span className={`font-display font-bold text-sm hidden sm:block transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}>
              华丰盛
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`lift-on-hover px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  scrolled ? 'text-ink/70 hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="magnetic-btn hidden sm:inline-flex items-center gap-1.5 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md shadow-primary/30"
            >
              Get a Quote <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-deep/90 backdrop-blur-2xl flex flex-col transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-6">
          <span className="font-display font-bold text-white text-lg">华丰盛 · HFS</span>
          <button onClick={() => setOpen(false)} className="p-2 text-white/60 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6 mt-12">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-4 border-b border-white/10 text-white font-display font-semibold text-2xl hover:text-primary transition-colors"
            >
              <span>{l.label}</span>
              <span className="text-white/30 font-mono text-sm">{l.zh}</span>
            </a>
          ))}
        </div>
        <div className="px-6 mt-10">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="magnetic-btn flex items-center justify-center gap-2 bg-primary text-white font-semibold py-4 rounded-2xl w-full"
          >
            Get a Quote <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

/* ─── Hero ─── */
function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, delay: 0.5, ease: 'power3.out' })
      gsap.from('.hero-meta', { y: 24, opacity: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' })
      gsap.from('.hero-cta', { y: 24, opacity: 0, duration: 0.8, delay: 0.9, stagger: 0.12, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])

  const particles = [
    { size: 10, top: '12%', right: '8%', delay: '0s', opacity: 0.6 },
    { size: 6, top: '20%', right: '15%', delay: '0.8s', opacity: 0.4 },
    { size: 14, top: '8%', right: '22%', delay: '1.6s', opacity: 0.3 },
    { size: 8, top: '28%', right: '6%', delay: '2.4s', opacity: 0.5 },
  ]

  return (
    <section id="home" ref={ref} className="relative min-h-[100dvh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80"
        alt="Premium athletic footwear"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.45]"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-deep/85 via-deep/45 to-deep/75" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-deep to-transparent" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary animate-float"
          style={{
            width: p.size, height: p.size,
            top: p.top, right: p.right,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20 min-h-[100dvh] flex flex-col justify-end">
        <p className="hero-meta font-mono text-xs uppercase tracking-[0.25em] text-white/60 mb-6">
          Est. 2008 · 晋江 Jinjiang, China · 泉州市华丰盛鞋材有限公司
        </p>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.95] max-w-5xl">
          <span className="hero-line-1 block">Premium Shoe Materials,</span>
          <span className="hero-line-2 block font-serif italic font-medium text-primary-light">
            Sourced from the Source.
          </span>
        </h1>
        <p className="hero-meta mt-8 max-w-xl text-white/65 text-base sm:text-lg leading-relaxed">
          Connecting global footwear brands with China's best manufacturers.
          OEM/ODM production, material sourcing, and supply chain solutions — direct from Jinjiang.
        </p>
        <div className="mt-3 max-w-xl">
          <p className="text-white/40 font-mono text-xs tracking-wider">
            全球品牌的鞋材采购与代工生产专家
          </p>
        </div>
        <div className="hero-cta mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/40 text-sm"
          >
            Get a Quote <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/639766304431"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 glass-dark text-white px-7 py-3.5 rounded-full font-semibold border border-white/15 text-sm"
          >
            <Phone className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}

/* ─── Brand Partners ─── */
const BRANDS = [
  { name: 'Lamborghini', src: 'https://logo.clearbit.com/lamborghini.com?size=160' },
  { name: 'Jeep',        src: 'https://logo.clearbit.com/jeep.com?size=160' },
  { name: 'FILA',        src: 'https://logo.clearbit.com/fila.com?size=160' },
  { name: 'Spotec',      src: null },
  { name: 'Ando',        src: null },
  { name: 'North Sails', src: 'https://logo.clearbit.com/northsails.com?size=160' },
  { name: 'Hey Dude',    src: 'https://logo.clearbit.com/heydude.com?size=160' },
  { name: 'Ducati Corse',src: 'https://logo.clearbit.com/ducati.com?size=160' },
]

function BrandLogo({ name, src }) {
  const [imgOk, setImgOk] = useState(true)
  return (
    <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-2xl px-8 py-5 h-[88px] min-w-[160px] shadow-sm">
      {src && imgOk ? (
        <img
          src={src}
          alt={name}
          className="h-10 max-w-[130px] w-auto object-contain"
          onError={() => setImgOk(false)}
        />
      ) : (
        <span className="font-display font-bold text-[#0F1A2E] text-base tracking-tight">{name}</span>
      )}
    </div>
  )
}

function BrandPartners() {
  const doubled = [...BRANDS, ...BRANDS]
  return (
    <section className="py-16 sm:py-20 bg-deep overflow-hidden border-y border-white/[0.06]">
      <div className="text-center mb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary mb-2">Trusted by · 合作品牌</p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Brand Partners</h2>
      </div>
      <div className="relative">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-deep to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-deep to-transparent" />
        <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((b, i) => (
            <BrandLogo key={i} name={b.name} src={b.src} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Signature animation: Stitch/Thread Drop ─── */
function StitchAnim() {
  const statuses = ['Sourcing materials', 'Sampling in progress', 'In production', 'QC passed ✓']
  const [statusIdx, setStatusIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStatusIdx((i) => (i + 1) % statuses.length), 2300)
    return () => clearInterval(id)
  }, [])

  const drops = [
    { left: '18%', delay: '0s', dur: '1.6s', size: 10 },
    { left: '32%', delay: '0.4s', dur: '1.4s', size: 8 },
    { left: '47%', delay: '0.9s', dur: '1.8s', size: 11 },
    { left: '58%', delay: '0.2s', dur: '1.5s', size: 7 },
    { left: '70%', delay: '1.1s', dur: '1.7s', size: 9 },
    { left: '82%', delay: '0.6s', dur: '1.6s', size: 8 },
    { left: '26%', delay: '1.4s', dur: '1.9s', size: 6 },
  ]

  return (
    <div className="h-44 rounded-3xl relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #0D1F3C 0%, #091629 60%, #0A1628 100%)',
    }}>
      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.8; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Atmo blobs */}
      <div className="absolute w-24 h-24 rounded-full bg-primary/20 blur-2xl" style={{ top: '-10%', left: '20%' }} />
      <div className="absolute w-16 h-16 rounded-full bg-accent/15 blur-xl" style={{ top: '10%', right: '15%' }} />

      {/* Header strip */}
      <div className="absolute top-0 left-0 right-0 px-4 py-2.5 flex items-center justify-between border-b border-white/10">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
          Production Floor · 生产线
        </span>
        <span className="font-mono text-[9px] text-primary/70">{drops.length} active lines</span>
      </div>

      {/* Stitching machine bar (source element) */}
      <div className="absolute top-9 left-6 right-6 h-2 rounded-full bg-white/10" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)' }}>
        {[20, 35, 50, 65, 80].map((pct) => (
          <div
            key={pct}
            className="absolute top-full w-px h-2 bg-white/30"
            style={{ left: `${pct}%`, transform: 'translateX(-50%)' }}
          />
        ))}
      </div>

      {/* Falling thread drops (eyelet shape) */}
      {drops.map((d, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: d.left,
            top: '2.75rem',
            width: d.size,
            height: d.size * 1.3,
            animation: `rain-fall ${d.dur} ${d.delay} infinite`,
          }}
        >
          <svg viewBox="0 0 12 16" width={d.size} height={d.size * 1.3}>
            <defs>
              <linearGradient id={`tg${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A80F0" />
                <stop offset="100%" stopColor="#1240A8" />
              </linearGradient>
            </defs>
            {/* Shoe sole / teardrop silhouette */}
            <path d="M6 1 C3 4 1 8 1 11 a5 5 0 0 0 10 0 C11 8 9 4 6 1 Z" fill={`url(#tg${i})`} />
            <ellipse cx="6" cy="11" rx="2.5" ry="1.5" fill="rgba(255,255,255,0.25)" />
          </svg>
        </div>
      ))}

      {/* Sole profile surface */}
      <svg
        className="absolute bottom-8 left-0 right-0 w-full"
        height="18"
        viewBox="0 0 400 18"
        preserveAspectRatio="none"
      >
        <path
          d="M0 12 Q50 6 100 12 Q150 18 200 12 Q250 6 300 12 Q350 18 400 12"
          fill="none"
          stroke="rgba(26,86,219,0.3)"
          strokeWidth="1.5"
        />
        <path
          d="M0 14 Q50 8 100 14 Q150 20 200 14 Q250 8 300 14 Q350 20 400 14"
          fill="none"
          stroke="rgba(26,86,219,0.12)"
          strokeWidth="1"
        />
      </svg>

      {/* Ripples */}
      {[22, 50, 78].map((pct, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            bottom: '2rem',
            left: `${pct}%`,
            width: 16,
            height: 6,
            borderRadius: '50%',
            border: '1px solid rgba(26,86,219,0.5)',
            animation: `rain-ripple 1.8s ${i * 0.6}s infinite`,
          }}
        />
      ))}

      {/* Status footer */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2.5 flex items-center gap-2 border-t border-white/10">
        <span className="w-1.5 h-1.5 rounded-full bg-primary ring-pulse shrink-0" />
        <span
          key={statusIdx}
          className="font-mono text-[9px] text-white/60 uppercase tracking-wider"
          style={{ animation: 'rain-fadein 0.3s ease' }}
        >
          {statuses[statusIdx]}
        </span>
      </div>
    </div>
  )
}

/* ─── Shuffler cards ─── */
function SupplierShuffler() {
  const cards = [
    { label: 'Rubber Sole Supplier', tag: 'Jinjiang', score: '98/100' },
    { label: 'Webbing Manufacturer', tag: 'Quanzhou', score: '95/100' },
    { label: 'Fabric Mill', tag: 'Guangzhou', score: '97/100' },
  ]
  const [front, setFront] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFront((f) => (f + 1) % cards.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="h-44 relative">
      {cards.map((c, i) => {
        const offset = ((i - front + cards.length) % cards.length)
        const scales = [1, 0.94, 0.88]
        const blurs = ['blur(0px)', 'blur(1px)', 'blur(2px)']
        const opacities = [1, 0.55, 0.3]
        const ys = [0, 10, 18]
        return (
          <div
            key={i}
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface to-accent/5 rounded-2xl border border-divider p-5 flex flex-col justify-between transition-all duration-700"
            style={{
              zIndex: cards.length - offset,
              transform: `scale(${scales[offset]}) translateY(${ys[offset]}px)`,
              filter: blurs[offset],
              opacity: opacities[offset],
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">{c.tag}</span>
              <span className="font-mono text-[9px] text-primary">{c.score}</span>
            </div>
            <div>
              <p className="font-display font-semibold text-ink text-sm">{c.label}</p>
              <div className="mt-2 h-1.5 bg-divider rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{ width: c.score }} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ─── Scheduler card ─── */
function OrderScheduler() {
  const steps = [
    { day: 'Mon', label: 'Submit spec' },
    { day: 'Wed', label: 'Samples ready' },
    { day: 'Fri', label: 'Approve & order' },
    { day: 'Day 30', label: 'Delivery' },
    { day: '✓', label: 'Done' },
  ]
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % steps.length), 1400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="h-44 rounded-2xl bg-gradient-to-br from-deep/5 to-accent/5 border border-divider p-5 flex flex-col justify-between relative overflow-hidden">
      <div className="flex items-center gap-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Order Timeline</span>
        <span className="font-mono text-[9px] text-primary">订单流程</span>
      </div>
      <div className="flex items-end gap-2 mt-2">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1 flex-1">
            <div
              className={`w-full rounded-md transition-all duration-500 ${
                i === step
                  ? 'bg-primary h-10 shadow-md shadow-primary/30'
                  : i < step
                  ? 'bg-primary/30 h-6'
                  : 'bg-divider h-4'
              }`}
            />
            <span className="font-mono text-[8px] text-muted text-center leading-tight">{s.day}</span>
          </div>
        ))}
      </div>
      <p className="font-body text-xs text-muted">
        <span className="text-primary font-medium">{steps[step].label}</span>
        {step < steps.length - 1 && ' — next step coming up'}
      </p>
    </div>
  )
}

/* ─── Features section ─── */
function Features() {
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-3">
            Why HFS · 为什么选择华丰盛
          </p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tighter text-balance">
            Built on the factory floor.<br />
            <span className="font-serif italic font-medium text-muted">Since 2008.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 — Shuffler */}
          <div className="feature-card rounded-3xl bg-surface border border-divider p-6 sm:p-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-1">Supplier Network</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mb-4">
              Vetted factories, real relationships.
            </h3>
            <SupplierShuffler />
            <p className="mt-5 text-sm text-muted leading-relaxed">
              15+ years of on-the-ground supplier relationships across Jinjiang and Quanzhou — China's shoe capital.
            </p>
          </div>

          {/* Card 2 — Signature anim */}
          <div className="feature-card rounded-3xl bg-surface border border-divider p-6 sm:p-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-1">Production · 生产</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mb-4">
              From material to finished shoe.
            </h3>
            <StitchAnim />
            <p className="mt-5 text-sm text-muted leading-relaxed">
              Started with shoe fabrics in 2008 — now capable of full OEM/ODM development and production of complete footwear.
            </p>
          </div>

          {/* Card 3 — Scheduler */}
          <div className="feature-card rounded-3xl bg-surface border border-divider p-6 sm:p-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-1">Lead Times · 交货期</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mb-4">
              Fast sampling. Clear timelines.
            </h3>
            <OrderScheduler />
            <p className="mt-5 text-sm text-muted leading-relaxed">
              Submit your specs Monday, have samples by Wednesday. Production orders typically ship within 30–45 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CountUp ─── */
function CountUp({ end, suffix = '', duration = 2000 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTs = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - startTs) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setValue(Math.round(end * eased))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end, duration])

  return <span ref={ref} className="tabular-nums">{value}{suffix}</span>
}

/* ─── Pillars ─── */
function Pillars() {
  const pillars = [
    { end: 15, suffix: '+', label: 'Years Experience', zh: '行业经验', desc: 'Founded in Jinjiang in 2008 — over a decade of trusted supplier relationships and footwear expertise.' },
    { end: 500, suffix: '+', label: 'Products Sourced', zh: '产品种类', desc: 'From rubber soles to performance webbing — a comprehensive catalog covering every shoe component category.' },
    { end: 3, suffix: '', label: 'Countries Covered', zh: '国家网络', desc: 'Active supply chain operations across China, Indonesia, and the Philippines.' },
  ]

  return (
    <section className="py-24 sm:py-32 grid-bg relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-3 lg:divide-x divide-divider">
          {pillars.map((p, i) => (
            <div key={i} className="px-0 lg:px-12 first:pl-0 last:pr-0 py-10 lg:py-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted mb-3">{p.label} · {p.zh}</p>
              <p className="font-display text-6xl sm:text-7xl font-bold gradient-text leading-none mb-4">
                <CountUp end={p.end} suffix={p.suffix} duration={2200} />
              </p>
              <p className="text-sm text-muted leading-relaxed mb-4">{p.desc}</p>
              <div className="h-px overflow-hidden relative">
                <div
                  className="absolute inset-y-0 w-full bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{ animation: 'pillar-sweep 3s ease-in-out infinite', animationDelay: `${i * 0.6}s` }}
                />
              </div>
              <style>{`
                @keyframes pillar-sweep {
                  0%   { transform: translateX(-100%); }
                  50%  { transform: translateX(100%); }
                  100% { transform: translateX(100%); }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Protocol ─── */
function Protocol() {
  const sectionRef = useRef(null)
  const card0Ref = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const cardRefs = [card0Ref, card1Ref, card2Ref]

  useEffect(() => {
    if (prefersReducedMotion) return
    cardRefs.slice(0, 2).forEach((ref) => {
      if (!ref.current) return
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top+=100',
          end: '+=500',
          scrub: 1,
        },
        scale: 0.92,
        filter: 'blur(6px) saturate(0.7)',
        opacity: 0.5,
        ease: 'none',
      })
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  const steps = [
    {
      num: '01',
      eyebrow: 'Inquiry',
      zh: '需求沟通',
      title: 'Share your specs & targets.',
      body: 'Send us your product specifications, target volumes, and pricing. Our team evaluates fit across our supplier network and responds within 24 hours.',
      bullets: ['Product specs & SKUs', 'Target FOB pricing', 'Volume & timeline'],
      img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80',
    },
    {
      num: '02',
      eyebrow: 'Sourcing',
      zh: '样品打样',
      title: 'Samples sourced. Prices negotiated.',
      body: 'We identify the best-fit factories from our vetted network, arrange physical samples, handle all price negotiations, and present you clear options.',
      bullets: ['Factory shortlisting', 'Sample coordination', 'Negotiation & comparison'],
      img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
    },
    {
      num: '03',
      eyebrow: 'Delivery',
      zh: '生产发货',
      title: 'Produced, inspected, delivered.',
      body: 'Materials are manufactured to your approved specs, pass our quality control inspection, and are coordinated for cross-border delivery — on time.',
      bullets: ['Production oversight', 'Pre-shipment QC', 'Cross-border logistics'],
      img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80',
    },
  ]

  return (
    <section id="process" ref={sectionRef} className="relative bg-background" style={{ minHeight: '300vh' }}>
      <div className="sticky top-0 pt-24 sm:pt-28 pb-6 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-3">How it works · 合作流程</p>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tighter mb-16">
          Three steps to your<br />
          <span className="font-serif italic font-medium text-muted">perfect supply partner.</span>
        </h2>
      </div>
      {steps.map((s, i) => (
        <div
          key={i}
          ref={cardRefs[i]}
          className="sticky top-24 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 mb-8"
        >
          <div className="bg-surface rounded-3xl border border-divider p-8 sm:p-10 grid lg:grid-cols-5 gap-8 sm:gap-12">
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-4xl font-bold gradient-text">{s.num}</span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">{s.eyebrow}</p>
                  <p className="font-mono text-[9px] text-primary/60">{s.zh}</p>
                </div>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">{s.title}</h3>
              <p className="text-muted leading-relaxed mb-6">{s.body}</p>
              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-ink/70">
                    <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <img
                src={s.img}
                alt={s.eyebrow}
                className="w-full h-48 sm:h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

/* ─── Services Grid ─── */
function ServicesGrid() {
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={ref} className="bg-deep text-white py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-3">
            What we do · 服务范围
          </p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter">
            Full-spectrum footwear<br />
            <span className="font-serif italic font-medium text-white/50">supply solutions.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {SERVICES.map((svc) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.title}
                className="svc-tile bg-deep p-8 sm:p-10 group hover:bg-white/[0.03] transition-colors duration-300"
              >
                <div className="mb-5">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-primary/15 group-hover:bg-primary/25 transition-colors">
                    <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" strokeWidth={2.2} />
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1">{svc.title}</h3>
                <p className="font-mono text-[9px] uppercase tracking-wider text-white/25 mb-3">{svc.zh}</p>
                <p className="text-sm text-white/55 leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Trust Signals ─── */
function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const badges = [
    {
      icon: Award,
      title: 'Industry Since 2008',
      zh: '2008年创立',
      sub: 'Born in Jinjiang — China\'s shoe capital — with deep roots in the local manufacturing ecosystem.',
    },
    {
      icon: Globe,
      title: 'Cross-Border Network',
      zh: '跨境供应链',
      sub: 'Established operations across China, Indonesia, and the Philippines for seamless trade flow.',
    },
    {
      icon: ShieldCheck,
      title: 'Full Production Capability',
      zh: '完整生产能力',
      sub: 'Evolved from single materials to full OEM/ODM shoe development and production.',
    },
  ]

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-14 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-3">
            Why trust us · 我们的优势
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink tracking-tighter">
            15 years building trust,<br />
            <span className="font-serif italic font-medium text-muted">one factory at a time.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {badges.map((b, i) => {
            const Icon = b.icon
            return (
              <div
                key={i}
                className="bg-surface rounded-2xl p-7 border border-divider shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`,
                }}
              >
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-primary/10 mb-4">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-base font-bold text-ink mb-0.5">{b.title}</h3>
                <p className="font-mono text-[9px] text-primary/60 uppercase tracking-wider mb-3">{b.zh}</p>
                <p className="text-sm text-muted leading-relaxed">{b.sub}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Form ─── */
function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [files, setFiles] = useState([])
  const [dragging, setDragging] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  const onDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const list = [...e.dataTransfer.files].slice(0, 5 - files.length)
    setFiles((prev) => [...prev, ...list])
  }

  const Field = ({ label, zh, textarea, ...props }) => (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {label} <span className="text-primary/50">{zh}</span>
      </label>
      {textarea ? (
        <textarea
          rows={5}
          {...props}
          className="w-full border border-divider rounded-xl px-4 py-3 text-sm text-ink bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
        />
      ) : (
        <input
          {...props}
          className="w-full border border-divider rounded-xl px-4 py-3 text-sm text-ink bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      )}
    </div>
  )

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left info col */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">
              Contact · 联系我们
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink tracking-tighter mb-6">
              Let's build your<br />
              <span className="font-serif italic font-medium text-muted">supply chain.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-10">
              Whether you need shoe materials, a manufacturing partner, or supply chain guidance — drop us a message and we'll respond within 24 hours.
            </p>
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'WhatsApp', value: '+63 976 630 4431', href: 'https://wa.me/639766304431' },
                { icon: MapPin, label: 'Location', value: 'Jinjiang, Quanzhou, Fujian, China', href: null },
                { icon: MessageSquare, label: 'WeChat / Line', value: 'Contact via WhatsApp first', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center mt-0.5">
                    <Icon className="h-4 w-4 text-primary" strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-muted">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-ink hover:text-primary transition-colors font-medium">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-ink font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form col */}
          <div className="lg:col-span-7">
            <div className="bg-surface rounded-3xl border border-divider p-8 sm:p-10 shadow-sm">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink">Message received!</h3>
                  <p className="text-muted max-w-xs">We'll be in touch within 24 hours. 我们将在24小时内与您联系。</p>
                  <button onClick={() => setStatus('idle')} className="magnetic-btn mt-4 text-sm text-primary font-medium lift-on-hover">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" zh="姓名" type="text" placeholder="Your full name" required />
                    <Field label="Email" zh="邮箱" type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="WhatsApp / Phone" zh="电话" type="tel" placeholder="+1 555 0123" />
                    <Field label="Country" zh="国家" type="text" placeholder="Philippines, USA…" />
                  </div>
                  <Field label="Message" zh="留言" textarea placeholder="Tell us about your product, volume requirements, and target pricing…" required />

                  {/* File drop zone */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-1.5">
                      Attachments <span className="text-primary/50">附件</span>
                    </p>
                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={onDrop}
                      className={`border-2 border-dashed rounded-xl p-5 flex flex-col items-center gap-2 cursor-pointer transition-colors ${
                        dragging ? 'border-primary bg-primary/5' : 'border-divider hover:border-primary/40'
                      }`}
                    >
                      <Upload className="h-5 w-5 text-muted" />
                      <p className="text-xs text-muted text-center">
                        Drag & drop product specs, images, or tech packs<br />
                        <span className="text-primary">or click to browse</span> — up to 5 files
                      </p>
                      <input type="file" multiple className="hidden" onChange={(e) => setFiles((p) => [...p, ...[...e.target.files].slice(0, 5 - p.length)])} />
                    </div>
                    {files.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {files.map((f, i) => (
                          <li key={i} className="flex items-center justify-between text-xs text-muted">
                            <span>{f.name}</span>
                            <button type="button" onClick={() => setFiles((p) => p.filter((_, j) => j !== i))} className="text-primary hover:text-primary-dark ml-2">×</button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="magnetic-btn w-full bg-primary text-white font-semibold py-3.5 rounded-full shadow-md shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />
                        Sending…
                      </>
                    ) : (
                      <>Send Message <ArrowUpRight className="h-4 w-4" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-display font-bold text-sm shadow-lg shadow-primary/30">
                HFS
              </span>
              <div>
                <p className="font-display font-bold text-white leading-tight">Huafengsheng</p>
                <p className="font-mono text-[9px] text-white/30 tracking-wider">泉州市华丰盛鞋材有限公司</p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              Premium shoe materials and OEM/ODM manufacturing from Jinjiang — China's footwear capital since 2008.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 ring-pulse" />
              <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider">Available for inquiries</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 mb-4">Services</p>
            <ul className="space-y-2.5">
              {['Material Sourcing', 'OEM/ODM Mfg', 'Supply Chain', 'Brand Dev', 'B2B Trade', 'Quality Control'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/55 hover:text-white lift-on-hover transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 mb-4">Company</p>
            <ul className="space-y-2.5">
              {[
                { label: 'About HFS', href: '#about' },
                { label: 'Our Process', href: '#process' },
                { label: 'Contact', href: '#contact' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
              ].map((l) => (
                <li key={l.label}>
                  {l.href.startsWith('/') ? (
                    <Link to={l.href} className="text-sm text-white/55 hover:text-white lift-on-hover transition-colors">{l.label}</Link>
                  ) : (
                    <a href={l.href} className="text-sm text-white/55 hover:text-white lift-on-hover transition-colors">{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 mb-4">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                <a href="https://wa.me/639766304431" className="text-sm text-white/55 hover:text-white transition-colors">
                  +63 976 630 4431
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-white/55">Jinjiang, Quanzhou<br />Fujian, China</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-white/55">Est. 2008</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[9px] text-white/25 uppercase tracking-wider">
            © 2025 Quanzhou Huafengsheng Shoe Material Co., Ltd · 泉州市华丰盛鞋材有限公司
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── Root ─── */
export default function App() {
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <BrandPartners />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
