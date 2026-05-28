"use client"

import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

type Lang = "en" | "jp"

// ─── Content dictionary ───────────────────────────────────────────────────────

const content = {
  en: {
    nav: {
      timeline: "TIMELINE",
      services: "SERVICES",
      tools: "TOOLS",
      contact: "CONTACT",
    },
    hero: {
      label: "Strategy × Technology · Asia",
      lines: [
        "Intersecting Business Strategy",
        "and Technology to Solve",
        "Corporate Challenges",
        "End-to-End.",
      ],
      cta: "Get in Touch",
      scroll: "Scroll to explore",
      caption: "Web · Video · CX · Strategy",
    },
    timeline: {
      label: "Career",
      title: "Timeline",
      items: [
        {
          period: "2018 — 2023",
          role: "Recruitment Consultant · Global Sales",
          org: "Domestic & Foreign-Affiliated Firms",
          description:
            "Handled international business negotiations, operations, and English communications across domestic and foreign-affiliated firms. Nearly three years of overseas experience spanning multiple markets.",
          tags: ["International Business", "B2B Sales", "Recruitment"],
        },
        {
          period: "2023 — Present",
          role: "Independent Freelancer · Asia",
          org: "AI & Digital Strategy Sector",
          description:
            "Leading CX/CS operations for a leading AI talent development startup, driving video marketing strategy, and architecting bespoke web systems for enterprise clients.",
          tags: ["CX/CS Operations", "Video Marketing", "Web Architecture"],
        },
      ],
    },
    services: {
      label: "What I Do",
      title: "Core Services",
      items: [
        {
          number: "01",
          title: "CX & Operations",
          subtitle: "Customer Experience Design",
          description:
            "End-to-end UX journey design, workflow automation via kintone & Google Apps Script, and data analytics to optimise the full customer lifecycle and drive measurable growth.",
          tags: ["UX Journey Design", "kintone", "GAS Automation", "Data Analytics"],
        },
        {
          number: "02",
          title: "Digital Content Creation",
          subtitle: "Video Production · Social",
          description:
            "Corporate video production using Adobe Premiere Pro & After Effects, and platform-optimised SNS short-form vertical video — from concept through final delivery.",
          tags: ["Premiere Pro", "After Effects", "SNS Video", "Corporate Film"],
        },
        {
          number: "03",
          title: "Web Development",
          subtitle: "Full-Stack Engineering",
          description:
            "Custom system architecture and development across the full stack — from pixel-precise frontends to backend logic and database design, built on modern, maintainable foundations.",
          tags: ["Laravel 10", "PHP", "JavaScript", "HTML5 / CSS3"],
        },
      ],
    },
    tools: {
      label: "Skills",
      title: "Tools & Technologies",
    },
    contact: {
      label: "Contact",
      lines: ["Ready to solve", "your next challenge."],
      email: "contact@example.com",
      tagline: "Open to freelance engagements · Asia & Remote",
    },
    footer: {
      copy: "© 2026 Studio M",
    },
  },

  jp: {
    nav: {
      timeline: "キャリア",
      services: "サービス",
      tools: "ツール",
      contact: "お問い合わせ",
    },
    hero: {
      label: "戦略 × テクノロジー・アジア",
      lines: [
        "ビジネスの視点と、",
        "テクノロジーの技術を掛け合わせ、",
        "法人の課題を",
        "ワンストップで解決する。",
      ],
      cta: "お問い合わせ",
      scroll: "スクロールして探索",
      caption: "Web · 映像 · CX · 戦略",
    },
    timeline: {
      label: "キャリア",
      title: "タイムライン",
      items: [
        {
          period: "2018 — 2023",
          role: "採用コンサルタント・グローバル営業",
          org: "国内外の企業",
          description:
            "国内外の企業にて国際商談・オペレーション・英語コミュニケーションを担当。約3年の海外経験を持ち、複数のマーケットでビジネスを展開。",
          tags: ["国際ビジネス", "B2B営業", "採用支援"],
        },
        {
          period: "2023 — 現在",
          role: "独立フリーランス・アジア拠点",
          org: "AI・デジタル戦略領域",
          description:
            "AIスタートアップのCX/CS運用を主導し、動画マーケティング戦略の推進および法人向けWebシステムの設計・構築を担当。",
          tags: ["CX/CS運用", "動画マーケティング", "Webシステム"],
        },
      ],
    },
    services: {
      label: "サービス内容",
      title: "コアサービス",
      items: [
        {
          number: "01",
          title: "CX & オペレーション",
          subtitle: "カスタマーエクスペリエンス設計",
          description:
            "UXジャーニー設計、kintone & GASによるワークフロー自動化、データ分析を通じてカスタマーライフサイクル全体を最適化し、成長を定量化する。",
          tags: ["UXジャーニー設計", "kintone", "GAS自動化", "データ分析"],
        },
        {
          number: "02",
          title: "デジタルコンテンツ制作",
          subtitle: "動画制作・SNSコンテンツ",
          description:
            "Adobe Premiere Pro & After Effectsによる企業動画制作、プラットフォーム最適化されたSNS縦型ショート動画を企画から納品まで一貫して対応。",
          tags: ["Premiere Pro", "After Effects", "SNS動画", "企業PV"],
        },
        {
          number: "03",
          title: "Web開発",
          subtitle: "フルスタックエンジニアリング",
          description:
            "フロントエンドからバックエンド・データベース設計まで、モダンで保守性の高い基盤によるカスタムシステムの設計・開発を担当。",
          tags: ["Laravel 10", "PHP", "JavaScript", "HTML5 / CSS3"],
        },
      ],
    },
    tools: {
      label: "スキル",
      title: "ツール & テクノロジー",
    },
    contact: {
      label: "お問い合わせ",
      lines: ["次の課題を、", "共に解決しましょう。"],
      email: "contact@example.com",
      tagline: "フリーランス案件受付中・アジア & リモート対応",
    },
    footer: {
      copy: "© 2026 Studio M",
    },
  },
} as const

const toolsList = [
  "Laravel 10",
  "PHP",
  "JavaScript",
  "HTML5 / CSS3",
  "Google Apps Script",
  "kintone",
  "Adobe Premiere Pro",
  "After Effects",
  "Canva",
  "Slack",
  "Discord",
  "Microsoft Teams",
  "Zoom",
  "Spreadsheet Analytics",
]

// ─── Language Toggle ──────────────────────────────────────────────────────────

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center divide-x divide-border border border-border">
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-3 py-1.5 text-[10px] tracking-[0.2em] transition-colors duration-200 ${
          lang === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("jp")}
        aria-pressed={lang === "jp"}
        className={`px-3 py-1.5 text-[10px] tracking-[0.2em] transition-colors duration-200 ${
          lang === "jp"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        JP
      </button>
    </div>
  )
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

function MobileMenu({
  isOpen,
  onClose,
  lang,
  setLang,
}: {
  isOpen: boolean
  onClose: () => void
  lang: Lang
  setLang: (l: Lang) => void
}) {
  const t = content[lang].nav

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [onClose])

  return (
    <>
      <div
        className={`fixed inset-0 bg-background/90 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-xs bg-background border-l border-border z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <LangToggle lang={lang} setLang={setLang} />
            <button onClick={onClose} className="p-1.5 text-muted-foreground hover:text-foreground transition-colors" aria-label="Close menu">
              <X className="w-4 h-4" />
            </button>
          </div>
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-0">
              {[
                { href: "#timeline", label: t.timeline },
                { href: "#services", label: t.services },
                { href: "#tools", label: t.tools },
                { href: "#contact", label: t.contact },
              ].map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-5 text-xl font-light text-muted-foreground hover:text-foreground border-b border-border transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] tracking-widest text-muted-foreground">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-6 py-6 border-t border-border">
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header({
  lang,
  setLang,
  onMenuOpen,
}: {
  lang: Lang
  setLang: (l: Lang) => void
  onMenuOpen: () => void
}) {
  const t = content[lang].nav
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/98 backdrop-blur-md border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 lg:px-16 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-7 h-7 border border-foreground/60 group-hover:border-foreground flex items-center justify-center transition-colors">
              <span className="text-[10px] font-medium tracking-wider">M</span>
            </div>
            <span className="text-xs font-light tracking-[0.25em] hidden sm:block text-foreground/80 group-hover:text-foreground transition-colors">
              STUDIO M
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center divide-x divide-border border border-border">
            <a href="#timeline" className="px-5 py-2.5 text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors">
              {t.timeline}
            </a>
            <a href="#services" className="px-5 py-2.5 text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors">
              {t.services}
            </a>
            <a href="#tools" className="px-5 py-2.5 text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors">
              {t.tools}
            </a>
            <a href="#contact" className="px-5 py-2.5 text-[10px] tracking-[0.2em] bg-foreground text-background hover:bg-foreground/85 transition-colors">
              {t.contact}
            </a>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <LangToggle lang={lang} setLang={setLang} />
            <ThemeToggle />
            <button
              onClick={onMenuOpen}
              className="md:hidden w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection({ lang }: { lang: Lang }) {
  const t = content[lang].hero
  const isJp = lang === "jp"

  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-28 pb-12">
        <div className="max-w-5xl">
          <p className="text-[10px] tracking-[0.45em] text-muted-foreground mb-14 uppercase">
            {t.label}
          </p>

          <h1
            className={`leading-[1.15] tracking-tight mb-14 ${
              isJp
                ? "text-4xl sm:text-5xl md:text-6xl font-light"
                : "text-[clamp(2.4rem,4.5vw,4rem)] font-extralight"
            }`}
          >
            {t.lines.map((line, i) =>
              i === t.lines.length - 1 ? (
                <span key={i} className="text-muted-foreground">
                  {line}
                </span>
              ) : (
                <span key={i}>
                  {line}
                  <br />
                </span>
              )
            )}
          </h1>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 border border-foreground/50 px-7 py-3.5 text-[11px] tracking-[0.2em] hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
          >
            {t.cta}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-6 md:px-12 lg:px-16 py-4">
        <div className="flex justify-between items-center text-[10px] text-muted-foreground tracking-[0.25em]">
          <span>{t.caption}</span>
          <span>{t.scroll}</span>
        </div>
      </div>
    </section>
  )
}

// ─── Timeline ─────────────────────────────────────────────────────────────────

function TimelineSection({ lang }: { lang: Lang }) {
  const t = content[lang].timeline
  const isJp = lang === "jp"

  return (
    <section id="timeline" className="py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-card">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 md:mb-20">
          <p className="text-[10px] tracking-[0.45em] text-muted-foreground uppercase mb-5">
            {t.label}
          </p>
          <h2 className={`tracking-tight ${isJp ? "text-4xl md:text-5xl font-light" : "text-4xl md:text-5xl font-extralight"}`}>
            {t.title}
          </h2>
        </header>

        <div>
          {t.items.map((item, index) => (
            <div
              key={index}
              className="border-t border-border py-12 md:py-16 grid md:grid-cols-12 gap-6 md:gap-10"
            >
              <div className="md:col-span-3 lg:col-span-2">
                <p className="text-[10px] tracking-[0.15em] text-muted-foreground font-light leading-relaxed">
                  {item.period}
                </p>
              </div>
              <div className="md:col-span-9 lg:col-span-10">
                <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-2">
                  {item.org}
                </p>
                <h3 className={`mb-4 ${isJp ? "text-lg font-normal" : "text-lg font-light tracking-wide"}`}>
                  {item.role}
                </h3>
                <p className={`text-sm text-muted-foreground leading-[1.85] mb-5 ${isJp ? "font-light" : "font-light"}`}>
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] tracking-wider px-3 py-1 border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────

function ServicesSection({ lang }: { lang: Lang }) {
  const t = content[lang].services
  const isJp = lang === "jp"

  return (
    <section id="services" className="py-28 md:py-36 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 md:mb-20">
          <p className="text-[10px] tracking-[0.45em] text-muted-foreground uppercase mb-5">
            {t.label}
          </p>
          <h2 className={`tracking-tight ${isJp ? "text-4xl md:text-5xl font-light" : "text-4xl md:text-5xl font-extralight"}`}>
            {t.title}
          </h2>
        </header>

        <div>
          {t.items.map((service, index) => (
            <div
              key={index}
              className="border-t border-border py-12 md:py-16 group"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                <div className="md:col-span-1">
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
                    {service.number}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className={`mb-1 group-hover:text-muted-foreground transition-colors duration-300 ${
                    isJp ? "text-xl font-normal" : "text-xl font-light tracking-wide"
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-[10px] text-muted-foreground tracking-[0.15em]">
                    {service.subtitle}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm text-muted-foreground leading-[1.85] font-light">
                    {service.description}
                  </p>
                </div>
                <div className="md:col-span-3 flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] tracking-wider px-3 py-1 border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}

// ─── Tools ────────────────────────────────────────────────────────────────────

function ToolsSection({ lang }: { lang: Lang }) {
  const t = content[lang].tools
  const isJp = lang === "jp"

  return (
    <section id="tools" className="py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-card">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 md:mb-20">
          <p className="text-[10px] tracking-[0.45em] text-muted-foreground uppercase mb-5">
            {t.label}
          </p>
          <h2 className={`tracking-tight ${isJp ? "text-4xl md:text-5xl font-light" : "text-4xl md:text-5xl font-extralight"}`}>
            {t.title}
          </h2>
        </header>

        <div className="flex flex-wrap gap-3">
          {toolsList.map((tool, i) => (
            <span
              key={i}
              className="text-xs tracking-wider px-4 py-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact / Footer ─────────────────────────────────────────────────────────

function Footer({ lang }: { lang: Lang }) {
  const tc = content[lang].contact
  const tf = content[lang].footer
  const isJp = lang === "jp"

  return (
    <footer id="contact" className="py-28 md:py-36 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* CTA block */}
        <div className="mb-28 md:mb-32">
          <p className="text-[10px] tracking-[0.45em] text-muted-foreground uppercase mb-12">
            {tc.label}
          </p>
          <h2
            className={`leading-[1.2] tracking-tight mb-10 ${
              isJp
                ? "text-4xl md:text-6xl lg:text-7xl font-light"
                : "text-[clamp(2.8rem,5.5vw,5rem)] font-extralight"
            }`}
          >
            {tc.lines[0]}
            <br />
            {tc.lines[1]}
          </h2>

          <div className="space-y-5">
            <a
              href={`mailto:${tc.email}`}
              className="inline-flex items-center gap-3 text-sm font-light tracking-wider hover:opacity-55 transition-opacity duration-300"
            >
              {tc.email}
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
            <p className="text-[10px] tracking-[0.2em] text-muted-foreground">
              {tc.tagline}
            </p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs font-light tracking-[0.3em]">STUDIO M</p>
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors hover-line"
              >
                INSTAGRAM
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors hover-line"
              >
                GITHUB
              </a>
            </div>
            <p className="text-[10px] text-muted-foreground tracking-wider">{tf.copy}</p>
          </div>
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
    <main className={`min-h-screen bg-background text-foreground ${lang === "jp" ? "lang-jp" : "lang-en"}`}>
      <Header lang={lang} setLang={setLang} onMenuOpen={() => setMobileOpen(true)} />
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <TimelineSection lang={lang} />
      <ServicesSection lang={lang} />
      <ToolsSection lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}
