"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X, Zap, Film, Monitor, MessageSquare, Instagram, Github, Briefcase } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export type Lang = "en" | "jp"
type IconName = "Zap" | "Film" | "Monitor"

// ─── Bilingual Content ────────────────────────────────────────────────────────

const content = {
  en: {
    nav: { works: "WORKS", timeline: "TIMELINE", services: "SERVICES", contact: "CONTACT" },
    hero: {
      lines: ["WORKFLOWS.", "VIDEOS.", "INTERFACES."],
      tagline: "Designing seamless automation and cinematic stories from scratch.",
      cta: "Get in Touch",
      cards: {
        status:   { label: "STATUS",      value: "Open for Work", sub: "Accepting new projects" },
        location: { label: "LOCATION",    value: "Asia / Remote" },
      },
    },
    works: {
      label: "SELECTED WORKS",
      count: "4 projects",
      items: [
        {
          id: "01", type: "sales" as const, year: "",
          category: "Global Recruitment Consulting",
          title: "Cross-Border Talent Acquisition",
          description:
            "Experienced recruitment consultant operating in Japan and international markets. Specializing in end-to-end consulting from high-volume staffing operations to executive healthcare and biotech roles.",
          tags: ["Talent Acquisition", "B2B Sales", "Global Operations", "Negotiation"],
        },
        {
          id: "02", type: "video" as const, year: "",
          category: "Video Marketing & Production",
          title: "Social Media Strategy & Content Creation",
          description:
            "Delivering strategic video production and marketing solutions. Experienced in short-form SNS growth for major firms, global ad campaigns, and customized high-end Motion Graphics.",
          tags: ["Premiere Pro", "After Effects", "SNS Strategy", "Motion Graphics"],
        },
        {
          id: "03", type: "web" as const, year: "",
          category: "Web Development",
          title: "Web Applications & WordPress Development",
          description:
            "Developing functional web applications and custom websites. Experienced in building responsive user interfaces, data-driven dashboards, and managing end-to-end deployment.",
          tags: ["React", "Next.js", "WordPress", "Tailwind CSS"],
        },
        {
          id: "04", type: "cx" as const, year: "",
          category: "BtoB Customer Success",
          title: "Customer Success & Operations",
          description:
            "Managing end-to-end BtoB customer success for an AI training platform. Supporting corporate clients and streamlining operations, including a smooth CRM system migration to Notion to improve communication.",
          tags: ["Customer Success", "BtoB Support", "Notion", "Client Care"],
        },
      ] as WorkItem[],
    },
    timeline: {
      label: "CAREER", count: "2 roles",
      items: [
        {
          period: "2023 — Present",
          role: "Operations Architect, Web Developer & Video Marketer",
          org: "Freelance Professional · M-Studio",
          description:
            "Providing multi-disciplinary client solutions. Leading BtoB customer success and system migration projects for AI training platforms, developing custom web applications (Next.js/WordPress), and producing high-end video marketing content/motion graphics for global brands.",
          tags: ["CX Architecture", "Video Marketing", "Web Development"],
        },
        {
          period: "2017 — 2023",
          role: "Recruitment Consultant / Overseas Recruiting Advisor",
          org: "Corporate Career · Global Recruiting & HR Consulting",
          description:
            "Built a strong foundation in corporate sales, executive search, and cross-border consulting. Experienced in 360-degree recruitment for global agencies in Japan, managing high-level placements in the healthcare/lifescience sectors, and supporting Japanese enterprises with overseas talent acquisition and organizational scaling while based in the Philippines and Thailand.",
          tags: ["International Business", "B2B Sales", "Recruitment"],
        },
      ],
    },
    services: {
      label: "CAPABILITIES", subtitle: "What I Can Do", count: "3 services",
      items: [
        {
          number: "01", icon: "Zap" as IconName,
          title: "Growth & Sales Consultation",
          catch:
            "A hands-on partner deeply committed to driving business growth, from strategy to execution.",
          href: "/services/growth-sales-consultation",
        },
        {
          number: "02", icon: "Film" as IconName,
          title: "High-End Motion & Brand Identity",
          catch:
            "High-end visual storytelling utilizing After Effects to move hearts, inspired by Apple's iconic style.",
          href: "/services/motion-brand-identity",
        },
        {
          number: "03", icon: "Monitor" as IconName,
          title: "Application & Operations Development",
          catch:
            "Bringing ideas to life beautifully with technology, leveraging PHP/Laravel, JavaScript, and GAS.",
          href: "/services/app-operations-development",
        },
      ],
    },
    contact: {
      label: "CONTACT",
      headline: ["Ready to solve", "your next challenge."],
      email: "sub.mk.work@outlook.com",
      tagline: "Open to freelance · Asia & Remote",
      hint: "Tap this 'tiny' button to start a project  =)",
    },
    footer: { copy: "© 2026 Studio M" },
  },

  jp: {
    nav: { works: "実績", timeline: "キャリア", services: "サービス", contact: "お問い合わせ" },
    hero: {
      lines: ["仕組みを築く", "心を動かす", "繋がりをデザインする"],
      tagline: "無駄のない自動化の仕組みと、心を動かす映像をゼロからデザインする。",
      cta: "お問い合わせ",
      cards: {
        status:   { label: "STATUS",   value: "Open for Work", sub: "新規案件受付中！" },
        location: { label: "LOCATION", value: "Asia / Remote" },
      },
    },
    works: {
      label: "実績", count: "4件",
      items: [
        {
          id: "01", type: "sales" as const, year: "",
          category: "人材採用コンサルティング",
          title: "グローバル人材採用コンサルティング",
          description:
            "日本および海外市場における人材採用コンサルタント。派遣領域から、専門性の高い外資ハイクラス・ヘルスケア領域まで、企業と求職者の双方から組織の課題解決を支援。",
          tags: ["採用コンサルティング", "法人営業", "グローバル環境", "折衝力"],
        },
        {
          id: "02", type: "video" as const, year: "",
          category: "動画マーケティング・制作",
          title: "SNS動画戦略 ＆ クリエイティブ制作",
          description:
            "ビジネスの成約や認知拡大を見据えた動画制作・マーケティング。大手法律事務所のSNS運用支援、海外大手メディアの広告制作に加え、After Effectsを用いた高品質なモーショングラフィックス制作を展開。",
          tags: ["Premiere Pro", "After Effects", "SNSマーケティング", "動画編集"],
        },
        {
          id: "03", type: "web" as const, year: "",
          category: "Web開発・プログラミング",
          title: "Webアプリケーション開発 ＆ カスタムサイト構築",
          description:
            "モダンなフレームワークを用いたWebアプリ開発から、WordPressによるコーポレートサイト構築まで幅広く担当。デザインの実装、データベース連携、Vercel等へのデプロイまで一貫して対応可能。",
          tags: ["React", "Next.js", "WordPress", "Tailwind CSS"],
        },
        {
          id: "04", type: "cx" as const, year: "",
          category: "BtoB カスタマーサクセス",
          title: "カスタマーサクセス ＆ 伴走支援",
          description:
            "法人向けAI人材育成プラットフォームにおけるカスタマーサクセス業務。企業の受講サポートから運営まで幅広く担当し、よりスムーズな顧客対応のためにNotionへの案件管理移行なども並行して推進。",
          tags: ["カスタマーサクセス", "法人サポート", "Notion", "顧客対応"],
        },
      ] as WorkItem[],
    },
    timeline: {
      label: "キャリア", count: "2件",
      items: [
        {
          period: "2023年 〜 現在",
          role: "CXインフラ設計・Web開発・動画マーケティング",
          org: "フリーランス · M-Studio",
          description:
            "複数領域での複合的なクライアントワークを展開。法人向けAI人材育成プラットフォームにおけるカスタマーサクセスやシステム移管プロジェクトをはじめ、Next.jsやWordPressを用いたWeb開発、大手・グローバル企業の動画マーケティングやAfter Effectsによるモーショングラフィックス制作まで一貫して手掛ける。",
          tags: ["CXインフラ設計", "動画マーケティング", "Web開発"],
        },
        {
          period: "2017年 〜 2023年",
          role: "人材採用コンサルタント / 法人営業 / 海外リクルーティングアドバイザー",
          org: "会社員時代 · グローバル人材紹介・HRコンサルティング",
          description:
            "国内の大手HR企業から外資系・日系のグローバル人材紹介会社にてキャリアを構築。日本国内でのハイクラス領域（ヘルスケア・ライフサイエンス部門）における両面型コンサルティングに加え、東南アジアの海外法人を拠点に、日系企業の海外進出に伴う現地採用支援や組織基盤づくりなど、一貫してハイレベルな折衝と課題解決に従事。",
          tags: ["国際ビジネス", "B2B営業", "採用支援"],
        },
      ],
    },
    services: {
      label: "CAPABILITIES", subtitle: "提供価値", count: "3サービス",
      items: [
        {
          number: "01", icon: "Zap" as IconName,
          title: "Growth & Sales Consultation",
          catch:
            "戦略立案から現場の実行まで、事業成長に深くコミットする伴走型パートナー。",
          href: "/services/growth-sales-consultation",
        },
        {
          number: "02", icon: "Film" as IconName,
          title: "High-End Motion & Brand Identity",
          catch:
            "After Effectsを駆使し、AppleのCMのように見る人の感情を動かすハイエンドな映像表現。",
          href: "/services/motion-brand-identity",
        },
        {
          number: "03", icon: "Monitor" as IconName,
          title: "Application & Operations Development",
          catch:
            "PHP/Laravel、JavaScript、GASを用い、課題をテクノロジーで美しく形に。",
          href: "/services/app-operations-development",
        },
      ],
    },
    contact: {
      label: "お問い合わせ",
      headline: ["次の課題を、", "共に解決しましょう。"],
      email: "sub.mk.work@outlook.com",
      tagline: "フリーランス案件受付中 · リモート対応",
      hint: "Let's start your project! =)",
    },
    footer: { copy: "© 2026 Studio M" },
  },
} as const

type WorkItem = {
  id: string
  type: "cx" | "video" | "sales" | "web"
  year: string
  category: string
  title: string
  description: string
  tags: readonly string[]
}

const MARQUEE_ITEMS = [
  "DESIGN. AUTOMATE. CAPTIVATE.",
  "OPERATIONS × IMAGINATION",
  "CX × VIDEO × WEB DEVELOPMENT",
  "AVAILABLE FOR FREELANCE PROJECTS",
]

export const NAV_H = 60

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

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[12px] tracking-wide px-2.5 py-1 rounded-full border border-border text-muted-foreground">
      {children}
    </span>
  )
}

export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <span
      className={`text-[15px] tracking-[0.28em] uppercase font-semibold ${
        light ? "text-primary-foreground/60" : "text-primary"
      }`}
    >
      {children}
    </span>
  )
}

// ─── Language Toggle ──────────────────────────────────────────────────────────

export function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-0.5 bg-muted rounded-full p-0.5">
      {(["en", "jp"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-3 py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase font-semibold transition-all duration-200 ${
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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center px-5 lg:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#" className="group flex items-center gap-2.5 mr-auto">
        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-terracotta">
          <span className="text-[11px] font-black text-primary-foreground leading-none">M</span>
        </div>
        <span className="text-[11px] tracking-[0.25em] font-semibold hidden sm:block transition-colors duration-200 group-hover:text-primary">
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
            className="px-4 py-2 rounded-full text-[12px] tracking-[0.2em] text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="px-4 py-2 rounded-full text-[12px] tracking-[0.2em] bg-primary text-primary-foreground hover:bg-terracotta transition-colors duration-200 ml-2"
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

function StudioHeroSection() {
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

  const subcopy = "Howdy — meet your trusted creative partner"

  const imgY = Math.max(pos.y - 220, 72)

  return (
    <section
      ref={sectionRef}
      id="studio-hero"
      className={`relative bg-background px-5 sm:px-10 lg:px-14 pt-8 pb-2 ${!isTouch ? "cursor-crosshair" : ""}`}
    >
      <p className="font-hint text-base md:text-lg italic text-muted-foreground/70 mb-1 select-none">
        {subcopy}
      </p>

      <h1 className="select-none leading-none font-display font-black uppercase tracking-[-0.04em] text-[clamp(3rem,15vw,15rem)]" aria-label="STUDIO M">
        <span
          role="presentation"
          className={`text-transparent transition-all duration-300 ${!isTouch ? "hover:text-ocean" : ""}`}
          style={{ WebkitTextStroke: "0.025em var(--ocean)" }}
          onMouseEnter={() => showPopup("studio", -5)}
          onMouseLeave={hidePopup}
          onClick={() => tapPreview("studio")}
        >
          {"STUDIO".split("").map((ch, i) => (
            <span
              key={i}
              className="letter-drop transition-colors duration-300"
              style={{ animationDelay: `${i * 220}ms` }}
            >
              {ch}
            </span>
          ))}
        </span>
        {" "}
        <span
          role="presentation"
          className={`text-ocean transition-colors duration-300 ${!isTouch ? "hover:text-primary" : ""}`}
          onMouseEnter={() => showPopup("m", 4)}
          onMouseLeave={hidePopup}
          onClick={() => tapPreview("m")}
        >
          <span className="letter-drop transition-colors duration-300" style={{ animationDelay: "1320ms" }}>
            M
          </span>
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
      style={{ minHeight: `calc(100svh - ${NAV_H}px)` }}
      className="flex items-center bg-background px-5 sm:px-8 lg:px-12 pt-4 pb-8"
    >
      <div
        ref={ref}
        className="reveal w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-4 lg:gap-5"
      >
        {/* ── Main hero card ── */}
        <div className="bento-card rounded-[2rem] bg-card p-8 md:p-12 flex flex-col justify-between min-h-[420px] lg:min-h-[520px] min-w-0">
          <div className="marquee-wrap overflow-hidden -mx-8 md:-mx-12 px-8 md:px-12">
            <div className="marquee-track">
              {[0, 1].map((i) => (
                <div key={i} className="flex items-center shrink-0 pr-10">
                  {MARQUEE_ITEMS.map((item, j) => (
                    <span key={j} className="flex items-center pr-10">
                      <SectionLabel>{item}</SectionLabel>
                      <span
                        className={`mx-10 w-1.5 h-1.5 rounded-full shrink-0 ${
                          ["bg-primary/50", "bg-surf-blue/60", "bg-mustard/60"][j % 3]
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="my-8">
            <h1
              className={`leading-[1.05] mb-6 font-display font-black tracking-tighter ${
                isJp
                  ? "text-[clamp(1.5rem,8vw,4rem)] sm:text-[clamp(2rem,5vw,4.25rem)]"
                  : "text-[clamp(2rem,11vw,6rem)] sm:text-[clamp(3rem,7vw,6rem)]"
              }`}
            >
              {t.lines.map((line, i) => {
                const word = line.slice(0, -1)
                const dot = line.slice(-1)
                const dotColor = i === 0 ? "text-primary" : i === 2 ? "text-mustard" : ""
                return (
                  <span key={i} className="headline-line">
                    <span
                      className={`inline-block ${i === 1 ? "headline-outline" : ""}`}
                      style={{ transitionDelay: `${i * 110}ms` }}
                    >
                      {word}
                      <span className={dotColor}>{dot}</span>
                    </span>
                  </span>
                )
              })}
            </h1>
            <p
              className={`reveal-tagline text-[15px] text-muted-foreground leading-relaxed max-w-md flex items-start gap-3 ${
                isJp ? "tracking-wide" : "font-light"
              }`}
            >
              <span className="mt-2 h-px w-6 shrink-0 bg-gradient-to-r from-primary via-mustard to-surf-blue" aria-hidden="true" />
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
          <div className="bento-card rounded-[1.5rem] bg-primary p-5 flex flex-col justify-between min-h-[150px] lg:min-h-[160px]">
            <div className="flex items-center justify-between">
              <SectionLabel light>{t.cards.status.label}</SectionLabel>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground" />
              </span>
            </div>
            <div>
              <p className="text-2xl font-black tracking-tight text-primary-foreground">{t.cards.status.value}</p>
              <p className="text-[11px] text-primary-foreground/65 mt-1">{t.cards.status.sub}</p>
            </div>
          </div>

          <div className="bento-card rounded-[1.5rem] bg-surf-blue/20 p-5 flex flex-col justify-between min-h-[150px] lg:min-h-[160px]">
            <SectionLabel>{t.cards.location.label}</SectionLabel>
            <p className="text-2xl font-black tracking-tight">{t.cards.location.value}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Works — individual card components ───────────────────────────────────────

// ─── Work Video Link Card — playable video preview that links to a detail page ─

function WorkVideoLinkCard({
  item, lang, featured, href, videoSrc,
}: {
  item: WorkItem
  lang: Lang
  featured?: boolean
  href: string
  videoSrc: string
}) {
  const ref = useReveal()
  const isJp = lang === "jp"

  return (
    <div
      ref={ref}
      className={`reveal ${featured ? "sm:col-span-2 lg:col-span-1" : ""}`}
    >
      <Link
        href={`${href}?lang=${lang}`}
        className="bento-card rounded-[1.75rem] overflow-hidden bg-card flex flex-col h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out"
      >
        <div className="relative aspect-[4/3] bg-muted">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 text-[9px] tracking-[0.3em] uppercase text-white/75">
            {item.category}
          </span>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-black text-base leading-tight mb-2">{item.title}</h3>
          <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">{item.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
          <span className="inline-flex items-center gap-1 mt-4 text-[11px] font-semibold text-primary">
            {isJp ? "詳細を見る" : "View Details"}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </div>
  )
}

// ─── Work Link Card — links through to a dedicated detail page ────────────────

function WorkLinkCard({
  item, lang, featured, href, icon: Icon, iconColor,
}: {
  item: WorkItem
  lang: Lang
  featured?: boolean
  href: string
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
}) {
  const ref = useReveal()
  const isJp = lang === "jp"

  return (
    <div ref={ref} className={`reveal ${featured ? "sm:col-span-2 lg:col-span-2" : ""}`}>
      <Link
        href={`${href}?lang=${lang}`}
        className="bento-card rounded-[1.75rem] bg-card p-6 lg:p-8 flex flex-col h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out"
      >
        <div className="flex items-start justify-between mb-5">
          <SectionLabel>{item.category}</SectionLabel>
          <span className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${iconColor}`}>
            <Icon className="w-4 h-4" />
          </span>
        </div>
        <h3 className="font-black leading-tight mb-3 text-base">
          {item.title}
        </h3>
        <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">{item.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-5">
          {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
        <span className="inline-flex items-center gap-1 mt-5 text-[11px] font-semibold text-primary">
          {isJp ? "詳細を見る" : "View Details"}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </Link>
    </div>
  )
}

// ─── Works Section ────────────────────────────────────────────────────────────

function WorksSection({ lang }: { lang: Lang }) {
  const t = content[lang].works
  const headRef = useReveal()

  return (
    <section id="works" className="px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <div ref={headRef} className="reveal flex items-baseline justify-between mb-8">
          <SectionLabel>{t.label}</SectionLabel>
          <span className="text-[10px] text-muted-foreground tracking-widest">{t.count}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <WorkLinkCard
            item={t.items[0]} lang={lang} featured
            href="/works/recruitment-consulting"
            icon={Briefcase} iconColor="text-terracotta bg-terracotta/15"
          />
          <WorkVideoLinkCard
            item={t.items[1]} lang={lang}
            href="/works/video-marketing"
            videoSrc="/videos/video-marketing-reel.mp4"
          />
          <WorkVideoLinkCard
            item={t.items[2]} lang={lang}
            href="/works/web-development"
            videoSrc="/videos/web-dev-reel.mp4"
          />
          <WorkLinkCard
            item={t.items[3]} lang={lang} featured
            href="/works/customer-success"
            icon={MessageSquare} iconColor="text-surf-blue bg-surf-blue/15"
          />
        </div>
      </div>
    </section>
  )
}

// ─── Timeline — individual card ───────────────────────────────────────────────

type TimelineItem = {
  period: string
  role: string
  org: string
  description: string
  tags: readonly string[]
}

function TimelineCard({
  item, isJp, delay,
}: {
  item: TimelineItem
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
    <section id="timeline" className="px-5 sm:px-8 lg:px-12 py-20 lg:py-28 bg-muted/40">
      <div className="max-w-6xl mx-auto">
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

type ServiceItem = {
  number: string
  icon: IconName
  title: string
  catch: string
  href: string
}

function ServiceCard({
  svc, index, lang, isJp,
}: {
  svc: ServiceItem
  index: number
  lang: Lang
  isJp: boolean
}) {
  const ref = useReveal()
  const Icon = iconMap[svc.icon]

  return (
    <div ref={ref} className="reveal h-full" style={{ transitionDelay: `${index * 90}ms` }}>
      <Link
        href={`${svc.href}?lang=${lang}`}
        className={`bento-card rounded-[1.75rem] ${serviceBg[index]} p-7 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-[10px] tracking-widest text-muted-foreground">{svc.number}</span>
        </div>
        <h3 className={`text-base mb-3 ${isJp ? "font-black tracking-normal" : "font-bold tracking-wide"}`}>{svc.title}</h3>
        <p className="text-[15px] text-muted-foreground leading-relaxed flex-1">{svc.catch}</p>
        <span className="inline-flex items-center gap-1 mt-5 text-[11px] font-semibold text-primary">
          {isJp ? "詳細を見る" : "View Details"}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </Link>
    </div>
  )
}

function ServicesSection({ lang }: { lang: Lang }) {
  const t = content[lang].services
  const headRef = useReveal()
  const isJp = lang === "jp"

  return (
    <section id="services" className="px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <div ref={headRef} className="reveal flex items-baseline justify-between mb-8">
          <div>
            <SectionLabel>{t.label}</SectionLabel>
            <p className="text-[12px] text-muted-foreground tracking-wide mt-1.5">{t.subtitle}</p>
          </div>
          <span className="text-[10px] text-muted-foreground tracking-widest">{t.count}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {t.items.map((svc, i) => (
            <ServiceCard key={i} svc={svc} index={i} lang={lang} isJp={isJp} />
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
    <footer id="contact" className="px-5 sm:px-8 lg:px-12 pt-8 pb-14 lg:pb-20">
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
        <div ref={ref} className="reveal w-full mb-10 flex justify-center">
          <a
            href={`mailto:${tc.email}`}
            className={`
              btn-connect inline-block rounded-[2rem] text-center cursor-pointer text-[#1a1a1a]
              bg-gradient-to-br from-surf-blue via-mustard to-terracotta
            `}
          >
            <span
              className={`
                block py-8 md:py-12 lg:py-14 px-10 md:px-16 lg:px-20
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
              className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-primary transition-colors duration-200"
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

  useEffect(() => {
    const saved = localStorage.getItem("lang")
    if (saved === "jp" || saved === "en") setLang(saved)
  }, [])

  const handleSetLang = (l: Lang) => {
    setLang(l)
    localStorage.setItem("lang", l)
  }

  return (
    <main
      className={`min-h-screen bg-background text-foreground ${
        lang === "jp" ? "lang-jp" : "lang-en"
      }`}
    >
      <Header lang={lang} setLang={handleSetLang} onMenuOpen={() => setMobileOpen(true)} />
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        lang={lang}
        setLang={handleSetLang}
      />
      <div style={{ paddingTop: NAV_H }}>
        <StudioHeroSection />
        <HeroSection lang={lang} />
        <WorksSection  lang={lang} />
        <TimelineSection lang={lang} />
        <ServicesSection lang={lang} />
        <Footer        lang={lang} />
      </div>
    </main>
  )
}
