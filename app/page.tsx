"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, Menu, X, Play, Zap, Film, Monitor, MessageSquare, Code2, Instagram, Github } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

type Lang = "en" | "jp"
type IconName = "Zap" | "Film" | "Monitor"

// ─── Bilingual Content ────────────────────────────────────────────────────────

const content = {
  en: {
    nav: { works: "WORKS", timeline: "TIMELINE", services: "SERVICES", contact: "CONTACT" },
    hero: {
      kicker: "OPERATIONS × IMAGINATION",
      lines: ["WORKFLOWS.", "VIDEOS.", "INTERFACES."],
      tagline: "Designing seamless automation and cinematic stories from scratch.",
      cta: "Get in Touch",
      cards: {
        status:   { label: "STATUS",    value: "Available",      sub: "Open to projects" },
        location: { label: "BASED IN",  value: "Asia / Remote" },
        focus:    { label: "FOCUS",     items: ["CX Architecture", "Video Marketing", "Web Development", "Strategy"] },
      },
    },
    works: {
      label: "SELECTED WORKS",
      count: "4 projects",
      items: [
        {
          id: "01", type: "cx" as const, year: "2024",
          category: "CX Architecture",
          title: "Enterprise AI CX System",
          description:
            "Architected full-cycle CX/CS infrastructure for an enterprise AI training platform, reducing ticket resolution time by 40% and improving NPS across the entire support funnel.",
          tags: ["kintone", "GAS", "Automation", "UX Design"],
        },
        {
          id: "02", type: "video" as const, year: "2024",
          category: "Video Production",
          title: "Corporate Brand Film",
          description:
            "Multi-episode cinematic brand campaign driving 3× organic engagement growth for a global tech brand.",
          tags: ["Premiere Pro", "After Effects", "Brand Direction"],
        },
        {
          id: "03", type: "video" as const, year: "2023",
          category: "Content Creation",
          title: "Vertical SNS Series",
          description:
            "Monthly vertical video content strategy and production for a SaaS brand's social channels.",
          tags: ["SNS Video", "After Effects", "Strategy"],
        },
        {
          id: "04", type: "cx" as const, year: "2023",
          category: "Operations",
          title: "Automation Suite",
          description:
            "kintone + GAS workflows eliminating 15+ hours of manual operations per week across sales and support.",
          tags: ["kintone", "GAS", "Analytics"],
        },
      ] as WorkItem[],
    },
    timeline: {
      label: "CAREER", count: "2 roles",
      items: [
        {
          period: "2018 — 2023",
          role: "Recruitment Consultant · Global Sales",
          org: "Domestic & Foreign-Affiliated Firms",
          description:
            "Managed high-stakes international business negotiations and operations at both domestic and foreign-affiliated firms, with nearly 3 years of overseas experience.",
          tags: ["International Business", "B2B Sales", "Recruitment"],
        },
        {
          period: "2023 — Present",
          role: "Independent Freelancer · Asia",
          org: "AI & Digital Strategy Sector",
          description:
            "Leading CX/CS architecture for an enterprise AI training platform, driving brand video marketing campaigns, and building tailored web applications.",
          tags: ["CX Architecture", "Video Marketing", "Web Development"],
        },
      ],
    },
    services: {
      label: "CAPABILITIES", count: "3 services",
      items: [
        {
          number: "01", icon: "Zap" as IconName,
          title: "CX & Operations Architecture",
          description:
            "Optimizing user journeys, kintone ecosystem management, GAS automation, and spreadsheet data analytics.",
          tags: ["UX Journey Design", "kintone", "GAS Automation", "Data Analytics"],
        },
        {
          number: "02", icon: "Film" as IconName,
          title: "Digital Content Creation",
          description:
            "High-end corporate video production, cinematic editing using Premiere Pro / After Effects, and vertical SNS content optimization.",
          tags: ["Premiere Pro", "After Effects", "SNS Video", "Corporate Film"],
        },
        {
          number: "03", icon: "Monitor" as IconName,
          title: "Web Development",
          description:
            "Building scalable apps and systems using HTML5/CSS3, JavaScript, PHP, and Laravel 10.",
          tags: ["Laravel 10", "PHP", "JavaScript", "HTML5 / CSS3"],
        },
      ],
    },
    tools: { label: "TECH STACK", count: "14 tools" },
    contact: {
      label: "CONTACT",
      headline: ["Ready to solve", "your next challenge."],
      email: "contact@example.com",
      tagline: "Open to freelance · Asia & Remote",
      hint: "Tap this 'tiny' button to start a project  =)",
    },
    footer: { copy: "© 2026 Studio M" },
  },

  jp: {
    nav: { works: "実績", timeline: "キャリア", services: "サービス", contact: "お問い合わせ" },
    hero: {
      kicker: "OPERATIONS × IMAGINATION",
      lines: ["WORKFLOW", "VIDEO", "INTERFACES"],
      tagline: "無駄のない自動化の仕組みと、心を動かす映像をゼロからデザインする。",
      cta: "お問い合わせ",
      cards: {
        status:   { label: "ステータス", value: "受付中",         sub: "案件お受けします" },
        location: { label: "拠点",       value: "アジア / リモート" },
        focus:    { label: "専門領域",   items: ["CX設計", "動画マーケティング", "Web開発", "戦略立案"] },
      },
    },
    works: {
      label: "制作実績", count: "4件",
      items: [
        {
          id: "01", type: "cx" as const, year: "2024",
          category: "CXインフラ設計",
          title: "エンタープライズAI CXシステム",
          description:
            "エンタープライズAIトレーニングプラットフォームのCX/CSインフラを一気通貫で設計・構築。チケット解決時間40%短縮・NPS向上を実現。",
          tags: ["kintone", "GAS", "自動化", "UX設計"],
        },
        {
          id: "02", type: "video" as const, year: "2024",
          category: "映像制作",
          title: "コーポレートブランドフィルム",
          description:
            "グローバルテック企業のマルチエピソード型ブランドキャンペーン。オーガニックエンゲージメント3倍増を達成。",
          tags: ["Premiere Pro", "After Effects", "ブランド演出"],
        },
        {
          id: "03", type: "video" as const, year: "2023",
          category: "コンテンツ制作",
          title: "縦型SNSシリーズ",
          description:
            "SaaSブランドのSNSチャンネル向け、月次縦型映像コンテンツの戦略策定から制作まで一貫担当。",
          tags: ["SNS動画", "After Effects", "コンテンツ戦略"],
        },
        {
          id: "04", type: "cx" as const, year: "2023",
          category: "オペレーション",
          title: "業務プロセス自動化",
          description:
            "kintone + GASによるワークフロー自動化で、営業・サポート横断の手動作業を週15時間以上削減。",
          tags: ["kintone", "GAS", "データ分析"],
        },
      ] as WorkItem[],
    },
    timeline: {
      label: "キャリア", count: "2件",
      items: [
        {
          period: "2018 — 2023",
          role: "グローバルセールス / 採用コンサルタント",
          org: "グローバルマーケット / 企業支援",
          description:
            "国内外の企業において、商談やグローバルオペレーションを主導。約3年の海外拠点をベースとしたキャリアの中で、複数マーケットのビジネス拡大に貢献。",
          tags: ["国際ビジネス", "B2B営業", "採用支援"],
        },
        {
          period: "2023 — 現在",
          role: "独立フリーランス · アジア拠点",
          org: "AI · デジタル戦略領域",
          description:
            "エンタープライズAIプラットフォームにおけるCX/CSインフラの設計を主導。同時に、ブランディング動画のマーケティング戦略や、独自のWebアプリケーション開発を推進。",
          tags: ["CXインフラ設計", "動画マーケティング", "Web開発"],
        },
      ],
    },
    services: {
      label: "サービス", count: "3サービス",
      items: [
        {
          number: "01", icon: "Zap" as IconName,
          title: "CX & オペレーション設計",
          description:
            "ユーザージャーニー最適化、kintoneエコシステム管理、GAS自動化、スプレッドシートデータ分析。",
          tags: ["UXジャーニー設計", "kintone", "GAS自動化", "データ分析"],
        },
        {
          number: "02", icon: "Film" as IconName,
          title: "デジタルコンテンツ制作",
          description:
            "ハイエンド企業動画制作、Adobe Premiere Pro / After Effectsによる映像編集、SNS縦型コンテンツ最適化。",
          tags: ["Premiere Pro", "After Effects", "SNS動画", "企業PV"],
        },
        {
          number: "03", icon: "Monitor" as IconName,
          title: "Web開発 & エンジニアリング",
          description:
            "HTML5/CSS3、JavaScript、PHP、Laravel 10を用いたスケーラブルなアプリケーション・システム構築。",
          tags: ["Laravel 10", "PHP", "JavaScript", "HTML5 / CSS3"],
        },
      ],
    },
    tools: { label: "技術スタック", count: "14ツール" },
    contact: {
      label: "お問い合わせ",
      headline: ["次の課題を、", "共に解決しましょう。"],
      email: "contact@example.com",
      tagline: "フリーランス案件受付中 · アジア & リモート対応",
      hint: "Let's start your project! =)",
    },
    footer: { copy: "© 2026 Studio M" },
  },
} as const

type WorkItem = {
  id: string
  type: "cx" | "video"
  year: string
  category: string
  title: string
  description: string
  tags: readonly string[]
}

const toolsList = [
  "Laravel 10", "PHP", "JavaScript", "HTML5 / CSS3",
  "Google Apps Script", "kintone", "Adobe Premiere Pro",
  "After Effects", "Canva", "Slack", "Discord",
  "Microsoft Teams", "Zoom", "Spreadsheet Analytics",
]

const NAV_H = 60

// ─── Scroll reveal hook ───────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible")
          obs.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

// ─── Primitives ───────────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] tracking-wide px-2.5 py-1 rounded-full border border-border text-muted-foreground">
      {children}
    </span>
  )
}

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <span
      className={`text-[10px] tracking-[0.32em] uppercase font-semibold ${
        light ? "text-primary-foreground/60" : "text-primary"
      }`}
    >
      {children}
    </span>
  )
}

// ─── Language Toggle ──────────────────────────────────────────────────────────

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-0.5 bg-muted rounded-full p-0.5">
      {(["en", "jp"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-3 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-200 ${
            lang === l
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

// ─── Mobile Drawer ────────────────────────────────────────────────────────────

function MobileDrawer({
  isOpen, onClose, lang, setLang,
}: {
  isOpen: boolean; onClose: () => void; lang: Lang; setLang: (l: Lang) => void
}) {
  const t = content[lang].nav
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", h)
    return () => document.removeEventListener("keydown", h)
  }, [onClose])

  const links = [
    { href: "#works",    label: t.works },
    { href: "#timeline", label: t.timeline },
    { href: "#services", label: t.services },
    { href: "#contact",  label: t.contact },
  ]

  return (
    <>
      <div
        className={`fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full w-72 bg-background shadow-2xl z-50 flex flex-col rounded-l-3xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <nav className="flex-1 p-5 space-y-1">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {item.label}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
            </a>
          ))}
        </nav>
        <div className="p-5 border-t border-border flex items-center justify-between">
          <span className="text-[10px] tracking-widest text-muted-foreground uppercase">Theme</span>
          <ThemeToggle />
        </div>
      </aside>
    </>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header({
  lang, setLang, onMenuOpen,
}: {
  lang: Lang; setLang: (l: Lang) => void; onMenuOpen: () => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const t = content[lang].nav
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  return (
    <header
      style={{ height: NAV_H }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center px-5 lg:px-8 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2.5 mr-auto">
        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
          <span className="text-[11px] font-black text-primary-foreground leading-none">M</span>
        </div>
        <span className="text-[11px] tracking-[0.25em] font-semibold hidden sm:block">
          STUDIO M
        </span>
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1 mr-4">
        {[
          { href: "#works",    label: t.works },
          { href: "#timeline", label: t.timeline },
          { href: "#services", label: t.services },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="px-4 py-2 rounded-full text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="px-4 py-2 rounded-full text-[10px] tracking-[0.2em] bg-primary text-primary-foreground hover:bg-primary/90 transition-colors ml-2"
        >
          {t.contact}
        </a>
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <LangToggle lang={lang} setLang={setLang} />
        <ThemeToggle />
      </div>

      <button
        onClick={onMenuOpen}
        className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-4 h-4" />
      </button>
    </header>
  )
}

// ─── Studio Hero — Giant STUDIO M with cursor-tracking image popup ────────────

const HOVER_IMAGES = {
  studio: [
    "https://picsum.photos/seed/studio1/400/260",
    "https://picsum.photos/seed/creative/400/260",
    "https://picsum.photos/seed/workspace/400/260",
  ],
  m: [
    "https://picsum.photos/seed/california/400/260",
    "https://picsum.photos/seed/ocean/400/260",
    "https://picsum.photos/seed/design/400/260",
  ],
} as const

function StudioHeroSection({ lang }: { lang: Lang }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [popup, setPopup] = useState({ visible: false, src: "", rotation: -3 })
  const [isTouch, setIsTouch] = useState(true)

  useEffect(() => {
    setIsTouch(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el || isTouch) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
    el.addEventListener("mousemove", onMove, { passive: true })
    return () => el.removeEventListener("mousemove", onMove)
  }, [isTouch])

  const showPopup = (zone: "studio" | "m", rotation: number) => {
    if (isTouch) return
    const pool = HOVER_IMAGES[zone]
    setPopup({ visible: true, src: pool[Math.floor(Math.random() * pool.length)], rotation })
  }

  const hidePopup = () => setPopup((p) => ({ ...p, visible: false }))

  const tapPreview = (zone: "studio" | "m") => {
    if (!isTouch) return
    const pool = HOVER_IMAGES[zone]
    setPopup({ visible: true, src: pool[Math.floor(Math.random() * pool.length)], rotation: 0 })
    setTimeout(() => setPopup((p) => ({ ...p, visible: false })), 2500)
  }

  const isJp = lang === "jp"
  const subcopy = isJp
    ? "Creative Partner for Your Business"
    : "Howdy — meet your trusted creative partner"

  const imgY = Math.max(pos.y - 220, 72)

  return (
    <section
      ref={sectionRef}
      id="studio-hero"
      style={{ background: "#F4EFEA" }}
      className={`relative px-5 sm:px-8 lg:px-10 pt-8 pb-2 ${!isTouch ? "cursor-crosshair" : ""}`}
    >
      <p
        className={`font-hint text-base md:text-lg italic text-muted-foreground/70 mb-1 select-none ${
          isJp ? "tracking-wide" : ""
        }`}
      >
        {subcopy}
      </p>

      <h1 className="select-none leading-none font-display font-black uppercase tracking-[-0.04em] text-ocean text-[clamp(3rem,15vw,15rem)]" aria-label="STUDIO M">
        <span
          role="presentation"
          className={`transition-colors duration-300 ${!isTouch ? "hover:text-primary" : ""}`}
          onMouseEnter={() => showPopup("studio", -5)}
          onMouseLeave={hidePopup}
          onClick={() => tapPreview("studio")}
        >
          STUDIO
        </span>
        {" "}
        <span
          role="presentation"
          className={`transition-colors duration-300 ${!isTouch ? "hover:text-primary" : ""}`}
          onMouseEnter={() => showPopup("m", 4)}
          onMouseLeave={hidePopup}
          onClick={() => tapPreview("m")}
        >
          M
        </span>
      </h1>

      <div
        aria-hidden="true"
        className="pointer-events-none"
        style={{
          position: "absolute",
          left: isTouch ? "50%" : pos.x + 20,
          top: isTouch ? "40%" : imgY,
          width: 340,
          zIndex: 45,
          transform: isTouch
            ? `translate(-50%,-50%) scale(${popup.visible ? 1 : 0.85})`
            : `rotate(${popup.rotation}deg) scale(${popup.visible ? 1 : 0.85})`,
          opacity: popup.visible ? 1 : 0,
          transition: "opacity 0.4s ease, transform 0.45s cubic-bezier(0.34,1.15,0.64,1)",
          willChange: "transform, opacity",
        }}
      >
        {popup.src && (
          <div className="rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.18)] ring-1 ring-black/8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={popup.src}
              alt=""
              width={340}
              height={216}
              className="w-full h-[216px] object-cover block"
            />
          </div>
        )}
      </div>
    </section>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection({ lang }: { lang: Lang }) {
  const t = content[lang].hero
  const isJp = lang === "jp"
  const ref = useReveal()

  return (
    <section
      style={{ minHeight: `calc(100svh - ${NAV_H}px)`, background: "#F4EFEA" }}
      className="flex items-center px-4 lg:px-8 pt-4 pb-8"
    >
      <div
        ref={ref}
        className="reveal w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_210px] gap-4 lg:gap-5"
      >
        {/* ── Main hero card ── */}
        <div className="bento-card rounded-[2rem] bg-card p-8 md:p-12 flex flex-col justify-between min-h-[420px] lg:min-h-[520px]">
          <SectionLabel>{t.kicker}</SectionLabel>

          <div className="my-8">
            <h1
              className="leading-[1.05] mb-6 font-display font-black tracking-tighter text-[clamp(3rem,7vw,6rem)]"
            >
              {t.lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p
              className={`text-muted-foreground leading-relaxed max-w-md ${
                isJp ? "text-sm tracking-wide" : "text-[15px] font-light"
              }`}
            >
              {t.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-[11px] tracking-[0.15em] font-semibold hover:bg-primary/90 transition-all duration-200"
            >
              {t.cta}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-[11px] tracking-[0.15em] text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all duration-200"
            >
              {content[lang].works.label}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ── Right info cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5">
          <div className="bento-card rounded-[1.5rem] bg-primary p-5 flex flex-col justify-between">
            <SectionLabel light>{t.cards.status.label}</SectionLabel>
            <div className="mt-3">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground shrink-0" />
                <span className="text-sm font-bold text-primary-foreground">{t.cards.status.value}</span>
              </div>
              <p className="text-[11px] text-primary-foreground/65 mt-1">{t.cards.status.sub}</p>
            </div>
          </div>

          <div className="bento-card rounded-[1.5rem] bg-surf-blue/20 p-5 flex flex-col justify-between">
            <SectionLabel>{t.cards.location.label}</SectionLabel>
            <p className="text-sm font-semibold mt-3">{t.cards.location.value}</p>
          </div>

          <div className="hidden lg:flex bento-card rounded-[1.5rem] bg-mustard/25 p-5 flex-col">
            <SectionLabel>{t.cards.focus.label}</SectionLabel>
            <ul className="mt-3 space-y-1.5">
              {t.cards.focus.items.map((item, i) => (
                <li key={i} className="text-[11px] font-medium flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-foreground/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Works — individual card components ───────────────────────────────────────

function VideoWorkCard({ item, featured }: { item: WorkItem; featured?: boolean }) {
  const ref = useReveal()
  const gradient =
    item.id === "02"
      ? "bg-gradient-to-br from-terracotta to-mustard"
      : "bg-gradient-to-br from-surf-blue to-terracotta/70"

  return (
    <div
      ref={ref}
      className={`reveal bento-card rounded-[1.75rem] overflow-hidden bg-card flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out ${
        featured ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className={`relative flex items-center justify-center aspect-[4/3] ${gradient}`}>
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
        </div>
        <span className="absolute top-4 left-4 text-[9px] tracking-[0.3em] uppercase text-white/75">
          {item.category}
        </span>
        <span className="absolute top-4 right-4 text-[9px] text-white/60">{item.year}</span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        {/* Title row with Play icon badge */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-base leading-snug flex-1">{item.title}</h3>
          <span className="shrink-0 w-7 h-7 rounded-full bg-terracotta/10 flex items-center justify-center mt-0.5">
            <Play className="w-3.5 h-3.5 text-terracotta fill-terracotta ml-0.5" />
          </span>
        </div>
        <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">{item.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      </div>
    </div>
  )
}

function CXWorkCard({ item, featured }: { item: WorkItem; featured?: boolean }) {
  const ref = useReveal()
  const isOps = item.category.toLowerCase().includes("operat") ||
                item.category === "オペレーション"
  const Icon = isOps ? Code2 : MessageSquare
  const iconColor = isOps ? "text-mustard bg-mustard/15" : "text-surf-blue bg-surf-blue/15"

  return (
    <div
      ref={ref}
      className={`reveal bento-card rounded-[1.75rem] bg-card p-6 lg:p-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out ${
        featured ? "sm:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* Header row: category + year left, icon right */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <SectionLabel>{item.category}</SectionLabel>
          <p className="text-[10px] text-muted-foreground mt-1">{item.year}</p>
        </div>
        <span className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${iconColor}`}>
          <Icon className="w-4 h-4" />
        </span>
      </div>
      <h3
        className={`font-black leading-tight mb-3 ${
          featured ? "text-2xl lg:text-[2rem]" : "text-xl"
        }`}
      >
        {item.title}
      </h3>
      <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">{item.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-5">
        {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
    </div>
  )
}

// ─── Works Section ────────────────────────────────────────────────────────────

function WorksSection({ lang }: { lang: Lang }) {
  const t = content[lang].works
  const headRef = useReveal()

  return (
    <section id="works" className="px-4 lg:px-8 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal flex items-baseline justify-between mb-8">
          <SectionLabel>{t.label}</SectionLabel>
          <span className="text-[10px] text-muted-foreground tracking-widest">{t.count}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <CXWorkCard   item={t.items[0]} featured />
          <VideoWorkCard item={t.items[1]} />
          <VideoWorkCard item={t.items[2]} />
          <CXWorkCard   item={t.items[3]} />
        </div>
      </div>
    </section>
  )
}

// ─── Timeline — individual card ───────────────────────────────────────────────

function TimelineCard({
  item, isJp, delay,
}: {
  item: (typeof content.en.timeline.items)[number]
  isJp: boolean
  delay: number
}) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal bento-card rounded-[1.75rem] bg-card p-6 lg:p-8 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-5"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div>
        <p className="text-[10px] tracking-widest text-muted-foreground uppercase mb-2">{item.period}</p>
        <p className="text-[11px] text-primary font-semibold">{item.org}</p>
      </div>
      <div>
        <h3 className={`mb-3 ${isJp ? "text-base font-black tracking-normal" : "text-base font-bold tracking-wide"}`}>
          {item.role}
        </h3>
        <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      </div>
    </div>
  )
}

function TimelineSection({ lang }: { lang: Lang }) {
  const t = content[lang].timeline
  const headRef = useReveal()

  return (
    <section id="timeline" className="px-4 lg:px-8 py-20 lg:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal flex items-baseline justify-between mb-8">
          <SectionLabel>{t.label}</SectionLabel>
          <span className="text-[10px] text-muted-foreground tracking-widest">{t.count}</span>
        </div>
        <div className="space-y-4">
          {t.items.map((item, i) => (
            <TimelineCard key={i} item={item} isJp={lang === "jp"} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Services — individual card ───────────────────────────────────────────────

const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  Zap, Film, Monitor,
}

const serviceBg = ["bg-card", "bg-mustard/20", "bg-surf-blue/15"]

function ServiceCard({
  svc, index, isJp,
}: {
  svc: (typeof content.en.services.items)[number]
  index: number
  isJp: boolean
}) {
  const ref = useReveal()
  const Icon = iconMap[svc.icon]

  return (
    <div
      ref={ref}
      className={`reveal bento-card rounded-[1.75rem] ${serviceBg[index]} p-7 flex flex-col`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <span className="text-[10px] tracking-widest text-muted-foreground">{svc.number}</span>
      </div>
      <h3 className={`text-base mb-3 ${isJp ? "font-black tracking-normal" : "font-bold tracking-wide"}`}>{svc.title}</h3>
      <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">{svc.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-5">
        {svc.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
    </div>
  )
}

function ServicesSection({ lang }: { lang: Lang }) {
  const t = content[lang].services
  const headRef = useReveal()

  return (
    <section id="services" className="px-4 lg:px-8 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal flex items-baseline justify-between mb-8">
          <SectionLabel>{t.label}</SectionLabel>
          <span className="text-[10px] text-muted-foreground tracking-widest">{t.count}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {t.items.map((svc, i) => (
            <ServiceCard key={i} svc={svc} index={i} isJp={lang === "jp"} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Tools Section ────────────────────────────────────────────────────────────

function ToolsSection({ lang }: { lang: Lang }) {
  const t = content[lang].tools
  const ref = useReveal()

  return (
    <section id="tools" className="px-4 lg:px-8 py-20 lg:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal flex items-baseline justify-between mb-8">
          <SectionLabel>{t.label}</SectionLabel>
          <span className="text-[10px] text-muted-foreground tracking-widest">{t.count}</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {toolsList.map((tool, i) => (
            <span
              key={i}
              className="bento-card px-4 py-2.5 rounded-full bg-card border border-border/60 text-[12px] font-medium cursor-default hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Threads SVG Icon ────────────────────────────────────────────────────────

function ThreadsIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 192 192" fill="white" aria-hidden="true">
      <path d="M141.537 88.988c-.827-.394-1.667-.775-2.518-1.14-1.482-27.303-16.403-42.936-41.457-43.096h-.316c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.549 21.347-10.549h.075c8.25.052 14.475 2.451 18.504 7.128 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.625-23.68-1.14-23.82 1.372-39.134 15.265-38.105 34.569.52 9.792 5.398 18.216 13.733 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.487 16.351-22.81-.17-40.06-7.484-51.276-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.631-43.966 16.132-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.521 52.171 21.847 5.71 7.026 10.015 15.861 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.607-16.219-32.668-14.929-18.374-36.763-27.785-64.896-27.98H96.957C68.882.195 47.292 9.642 32.788 28.079 19.882 44.486 13.224 67.316 13.001 95.933L13 96l.001.068c.223 28.617 6.88 51.447 19.787 67.853 14.504 18.437 36.094 27.885 64.169 28.08h.112c25.96-.173 43.554-6.708 58.048-21.189 18.963-18.945 18.392-42.692 12.142-57.27-4.484-10.454-13.033-18.945-25.723-24.554Zm-43.097 40.52c-10.44.587-21.286-4.098-21.821-14.135-.396-7.442 5.296-15.745 22.462-16.735 1.966-.113 3.895-.168 5.79-.168 6.235 0 12.068.606 17.371 1.765-1.978 24.702-13.58 28.713-23.802 29.273Z" />
    </svg>
  )
}

// ─── Footer / Contact ─────────────────────────────────────────────────────────

function Footer({ lang }: { lang: Lang }) {
  const tc = content[lang].contact
  const tf = content[lang].footer
  const isJp = lang === "jp"
  const ref = useReveal()

  return (
    <footer id="contact" className="px-4 lg:px-8 pt-8 pb-14 lg:pb-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center">

        {/* Section label */}
        <div className="mb-4">
          <SectionLabel>{tc.label}</SectionLabel>
        </div>

        {/* Hint text — handwriting font */}
        <p
          className={`font-hint text-lg text-muted-foreground/60 italic mb-7 text-center ${
            isJp ? "tracking-wide text-base" : ""
          }`}
        >
          {tc.hint}
        </p>

        {/* ── Giant 3D Connect Button ── */}
        <div ref={ref} className="reveal w-full mb-10">
          <a
            href={`mailto:${tc.email}`}
            className={`
              btn-connect block w-full rounded-[2rem] text-center cursor-pointer
              bg-[#1a1a1a] text-white
              dark:bg-[#f5f0e8] dark:text-[#1a1a1a]
            `}
          >
            <span
              className={`
                block py-10 md:py-14 lg:py-16 px-6
                font-black leading-none tracking-tighter
                text-[clamp(3.5rem,12vw,9rem)]
              `}
            >
              Connect
            </span>
          </a>
        </div>

        {/* ── Bottom nav bar ── */}
        <div className="w-full max-w-3xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-muted/70 border border-border/50 rounded-2xl px-5 py-3.5 backdrop-blur-sm">

            {/* Email */}
            <a
              href={`mailto:${tc.email}`}
              className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {tc.email}
              <ArrowUpRight className="w-3 h-3 opacity-50" />
            </a>

            {/* SNS Icons */}
            <div className="flex items-center gap-2.5">

              {/* Instagram — gradient badge */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="sns-icon-btn w-10 h-10 rounded-[14px]"
                style={{
                  background:
                    "linear-gradient(135deg,#405de6 0%,#833ab4 30%,#e1306c 60%,#fd1d1d 80%,#fcaf45 100%)",
                }}
                aria-label="Instagram"
              >
                <Instagram className="w-[18px] h-[18px] text-white" />
              </a>

              {/* Threads */}
              <a
                href="https://threads.net"
                target="_blank"
                rel="noopener noreferrer"
                className="sns-icon-btn w-10 h-10 rounded-[14px] bg-[#101010]"
                aria-label="Threads"
              >
                <ThreadsIcon size={18} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="sns-icon-btn w-10 h-10 rounded-[14px] bg-[#24292e]"
                aria-label="GitHub"
              >
                <Github className="w-[18px] h-[18px] text-white" />
              </a>

            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-[10px] text-muted-foreground/50 mt-5 tracking-[0.25em] uppercase">
            {tf.copy}
          </p>
        </div>

      </div>
    </footer>
  )
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [lang, setLang] = useState<Lang>("en")
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <main
      className={`min-h-screen bg-background text-foreground ${
        lang === "jp" ? "lang-jp" : "lang-en"
      }`}
    >
      <Header lang={lang} setLang={setLang} onMenuOpen={() => setMobileOpen(true)} />
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        lang={lang}
        setLang={setLang}
      />
      <div style={{ paddingTop: NAV_H }}>
        <StudioHeroSection lang={lang} />
        <HeroSection lang={lang} />
        <WorksSection  lang={lang} />
        <TimelineSection lang={lang} />
        <ServicesSection lang={lang} />
        <ToolsSection  lang={lang} />
        <Footer        lang={lang} />
      </div>
    </main>
  )
}
