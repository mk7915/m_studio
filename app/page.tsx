"use client"

import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

type Lang = "en" | "jp"

// ─── Content ──────────────────────────────────────────────────────────────────

const content = {
  en: {
    nav: {
      timeline: "TIMELINE",
      services: "SERVICES",
      tools: "TOOLS",
      contact: "CONTACT",
    },
    hero: {
      kicker: "Strategy × Technology · Asia",
      headline:
        "Intersecting Business Strategy and Technology to Solve Corporate Challenges End-to-End.",
      cta: "Get in Touch",
      scroll: "Scroll ↓",
      caption: "Web · Video · CX · Strategy",
      side: {
        capabilities: {
          label: "CAPABILITIES",
          items: ["Web Development", "Video Production", "CX Architecture", "Strategy"],
        },
        location: { label: "LOCATION", value: "Asia / Remote" },
        status: { label: "STATUS", value: "Available" },
      },
    },
    timeline: {
      label: "CAREER",
      index: "02",
      count: "2 entries",
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
      label: "CAPABILITIES",
      index: "03",
      count: "3 services",
      items: [
        {
          number: "01",
          title: "CX & Operations Architecture",
          description:
            "Optimizing user journeys, kintone ecosystem management, GAS automation, and spreadsheet data analytics.",
          tags: ["UX Journey Design", "kintone", "GAS Automation", "Data Analytics"],
        },
        {
          number: "02",
          title: "Digital Content Creation",
          description:
            "High-end corporate video production, cinematic editing using Adobe Premiere Pro / After Effects, and vertical SNS content optimization.",
          tags: ["Premiere Pro", "After Effects", "SNS Video", "Corporate Film"],
        },
        {
          number: "03",
          title: "Web Development & Engineering",
          description:
            "Building scalable apps and systems using HTML5/CSS3, JavaScript, PHP, and Laravel 10.",
          tags: ["Laravel 10", "PHP", "JavaScript", "HTML5 / CSS3"],
        },
      ],
    },
    tools: {
      label: "TECH STACK",
      index: "04",
      count: "14 tools",
    },
    contact: {
      label: "CONTACT",
      index: "05",
      headline: ["Ready to solve", "your next challenge."],
      email: "contact@example.com",
      tagline: "Open to freelance · Asia & Remote",
      avail_label: "AVAILABILITY",
    },
    footer: { copy: "© 2026 Studio M" },
  },

  jp: {
    nav: {
      timeline: "キャリア",
      services: "サービス",
      tools: "ツール",
      contact: "お問い合わせ",
    },
    hero: {
      kicker: "戦略 × テクノロジー・アジア",
      headline:
        "ビジネスの視点と、テクノロジーの技術を掛け合わせ、法人の課題をワンストップで解決する。",
      cta: "お問い合わせ",
      scroll: "スクロール ↓",
      caption: "Web · 映像 · CX · 戦略",
      side: {
        capabilities: {
          label: "主要領域",
          items: ["Web開発", "映像制作", "CX設計", "戦略立案"],
        },
        location: { label: "拠点", value: "アジア / リモート" },
        status: { label: "ステータス", value: "案件受付中" },
      },
    },
    timeline: {
      label: "キャリア",
      index: "02",
      count: "2件",
      items: [
        {
          period: "2018 — 2023",
          role: "採用コンサルタント・グローバル営業",
          org: "国内外の企業",
          description:
            "国内外の企業にて国際商談・オペレーションを主導し、英語コミュニケーションを担当。約3年の海外経験を持ち、複数のマーケットでビジネスを展開。",
          tags: ["国際ビジネス", "B2B営業", "採用支援"],
        },
        {
          period: "2023 — 現在",
          role: "独立フリーランス・アジア拠点",
          org: "AI・デジタル戦略領域",
          description:
            "エンタープライズAIトレーニングプラットフォームのCX/CSアーキテクチャを主導し、ブランド動画マーケティングと独自Webアプリケーション開発を推進。",
          tags: ["CXアーキテクチャ", "動画マーケティング", "Web開発"],
        },
      ],
    },
    services: {
      label: "サービス",
      index: "03",
      count: "3サービス",
      items: [
        {
          number: "01",
          title: "CX & オペレーション設計",
          description:
            "ユーザージャーニー最適化、kintoneエコシステム管理、GAS自動化、スプレッドシートデータ分析。",
          tags: ["UXジャーニー設計", "kintone", "GAS自動化", "データ分析"],
        },
        {
          number: "02",
          title: "デジタルコンテンツ制作",
          description:
            "ハイエンド企業動画制作、Adobe Premiere Pro / After Effectsによる映像編集、SNS縦型コンテンツ最適化。",
          tags: ["Premiere Pro", "After Effects", "SNS動画", "企業PV"],
        },
        {
          number: "03",
          title: "Web開発 & エンジニアリング",
          description:
            "HTML5/CSS3、JavaScript、PHP、Laravel 10を用いたスケーラブルなアプリケーション・システム構築。",
          tags: ["Laravel 10", "PHP", "JavaScript", "HTML5 / CSS3"],
        },
      ],
    },
    tools: {
      label: "技術スタック",
      index: "04",
      count: "14ツール",
    },
    contact: {
      label: "お問い合わせ",
      index: "05",
      headline: ["次の課題を、", "共に解決しましょう。"],
      email: "contact@example.com",
      tagline: "フリーランス案件受付中・アジア & リモート対応",
      avail_label: "受付状況",
    },
    footer: { copy: "© 2026 Studio M" },
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

// ─── Shared primitives ────────────────────────────────────────────────────────

/** Tiny uppercase section label */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[9px] tracking-[0.35em] text-muted-foreground uppercase select-none">
      {children}
    </span>
  )
}

/** Tag pill — adapts colour inside hover-inverted cells */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[9px] tracking-[0.08em] px-2.5 py-1 border border-border group-hover:border-primary/20 text-muted-foreground group-hover:text-primary/60 transition-colors">
      {children}
    </span>
  )
}

// ─── Language Toggle ──────────────────────────────────────────────────────────

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`flex items-center px-4 h-full border-r border-border text-[10px] tracking-[0.2em] transition-colors duration-150 ${
          lang === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("jp")}
        aria-pressed={lang === "jp"}
        className={`flex items-center px-4 h-full text-[10px] tracking-[0.2em] transition-colors duration-150 ${
          lang === "jp"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        }`}
      >
        JP
      </button>
    </>
  )
}

// ─── Mobile Drawer ────────────────────────────────────────────────────────────

function MobileDrawer({
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
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [onClose])

  const links = [
    { href: "#timeline", label: t.timeline, idx: "02" },
    { href: "#services", label: t.services, idx: "03" },
    { href: "#tools", label: t.tools, idx: "04" },
    { href: "#contact", label: t.contact, idx: "05" },
  ]

  return (
    <>
      {/* Scrim */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full w-full max-w-[320px] bg-background border-l border-border z-50 flex flex-col transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-stretch h-[52px] border-b border-border shrink-0">
          <div className="flex items-stretch flex-1 border-r border-border">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
          <button
            onClick={onClose}
            className="flex items-center px-4 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between px-5 py-5 border-b border-border text-sm font-light text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <span>{item.label}</span>
              <Label>{item.idx}</Label>
            </a>
          ))}
        </nav>

        {/* Theme toggle */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-border shrink-0">
          <Label>Theme</Label>
          <ThemeToggle />
        </div>
      </aside>
    </>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

const HEADER_H = 52 // px

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

  return (
    <header
      style={{ height: HEADER_H }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border flex items-stretch"
    >
      {/* Logo cell */}
      <a
        href="#"
        className="flex items-center gap-2.5 px-5 border-r border-border shrink-0 hover:bg-muted transition-colors"
      >
        <div className="w-[18px] h-[18px] border border-foreground/50 flex items-center justify-center shrink-0">
          <span className="text-[7px] font-medium leading-none">M</span>
        </div>
        <span className="text-[10px] tracking-[0.28em] hidden sm:block">STUDIO M</span>
      </a>

      {/* Index tag */}
      <div className="hidden md:flex items-center px-5 border-r border-border shrink-0">
        <Label>01</Label>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Desktop nav cells */}
      <nav className="hidden md:flex items-stretch">
        {[
          { href: "#timeline", label: t.timeline },
          { href: "#services", label: t.services },
          { href: "#tools", label: t.tools },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center px-5 border-l border-border text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="flex items-center px-5 border-l border-border text-[10px] tracking-[0.2em] bg-foreground text-background hover:bg-foreground/85 transition-colors"
        >
          {t.contact}
        </a>
      </nav>

      {/* Lang toggle cells */}
      <div className="flex items-stretch border-l border-border">
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      {/* Theme toggle — desktop only */}
      <div className="hidden md:flex items-center px-3.5 border-l border-border">
        <ThemeToggle />
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={onMenuOpen}
        className="md:hidden flex items-center px-4 border-l border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-3.5 h-3.5" />
      </button>
    </header>
  )
}

// ─── Section header row ───────────────────────────────────────────────────────

function SectionRow({
  label,
  index,
  meta,
}: {
  label: string
  index: string
  meta: string
}) {
  return (
    <div className="flex border-b border-border">
      <div className="px-5 py-3 border-r border-border shrink-0">
        <Label>{label}</Label>
      </div>
      <div className="px-5 py-3 border-r border-border shrink-0">
        <Label>{index}</Label>
      </div>
      <div className="flex-1" />
      <div className="px-5 py-3 border-l border-border shrink-0">
        <Label>{meta}</Label>
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection({ lang }: { lang: Lang }) {
  const t = content[lang].hero
  const isJp = lang === "jp"

  return (
    <section
      style={{ minHeight: `calc(100vh - ${HEADER_H}px)` }}
      className="flex flex-col border-b border-border"
    >
      {/* Top kicker bar */}
      <div className="flex border-b border-border shrink-0">
        <div className="px-5 py-3 border-r border-border">
          <Label>{t.kicker}</Label>
        </div>
        <div className="flex-1" />
        <div className="px-5 py-3 border-l border-border">
          <Label>01</Label>
        </div>
      </div>

      {/* Main row */}
      <div className="flex flex-1 min-h-0">
        {/* Left — headline */}
        <div className="flex-1 flex flex-col justify-end p-7 md:p-10 lg:p-14 border-r border-border">
          <h1
            className={`leading-[1.18] mb-9 ${
              isJp
                ? "text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-light"
                : "text-[clamp(2rem,3.8vw,3.4rem)] font-extralight tracking-tight"
            }`}
          >
            {t.headline}
          </h1>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 self-start border border-foreground/40 px-6 py-3 text-[10px] tracking-[0.2em] hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200"
          >
            {t.cta}
            <ArrowUpRight className="w-3 h-3 shrink-0" />
          </a>
        </div>

        {/* Right — info cells column (desktop) */}
        <div className="hidden lg:flex w-60 xl:w-72 flex-col shrink-0">
          {/* Capabilities */}
          <div className="flex-1 p-6 border-b border-border">
            <Label>{t.side.capabilities.label}</Label>
            <ul className="mt-4 space-y-2">
              {t.side.capabilities.items.map((item, i) => (
                <li key={i} className="text-[11px] font-light text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="flex-1 p-6 border-b border-border">
            <Label>{t.side.location.label}</Label>
            <p className="mt-4 text-[11px] font-light">{t.side.location.value}</p>
          </div>

          {/* Status */}
          <div className="flex-1 p-6">
            <Label>{t.side.status.label}</Label>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
              <p className="text-[11px] font-light">{t.side.status.value}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom caption bar */}
      <div className="flex border-t border-border shrink-0">
        <div className="px-5 py-3 border-r border-border">
          <Label>{t.caption}</Label>
        </div>
        <div className="flex-1" />
        <div className="px-5 py-3">
          <Label>{t.scroll}</Label>
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
    <section id="timeline" className="border-b border-border">
      <SectionRow label={t.label} index={t.index} meta={t.count} />

      {t.items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row border-b border-border last:border-b-0 group hover:bg-foreground hover:text-background cell-hover cursor-default"
        >
          {/* Period */}
          <div className="md:w-44 lg:w-52 px-5 py-7 border-b md:border-b-0 md:border-r border-border group-hover:border-primary/20 shrink-0 transition-colors">
            <Label>{item.period}</Label>
          </div>

          {/* Role + Org */}
          <div className="md:w-52 lg:w-64 px-5 py-7 border-b md:border-b-0 md:border-r border-border group-hover:border-primary/20 shrink-0 transition-colors">
            <p className="text-[9px] tracking-[0.3em] text-muted-foreground group-hover:text-primary/50 uppercase mb-3 transition-colors">
              {item.org}
            </p>
            <p
              className={`leading-snug ${
                isJp ? "text-sm font-light" : "text-sm font-light tracking-wide"
              }`}
            >
              {item.role}
            </p>
          </div>

          {/* Description */}
          <div className="flex-1 px-5 py-7">
            <p
              className={`text-sm leading-[1.82] text-muted-foreground group-hover:text-primary/65 mb-5 transition-colors ${
                isJp ? "font-light" : "font-light"
              }`}
            >
              {item.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag, j) => (
                <Tag key={j}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────

function ServicesSection({ lang }: { lang: Lang }) {
  const t = content[lang].services
  const isJp = lang === "jp"

  return (
    <section id="services" className="border-b border-border">
      <SectionRow label={t.label} index={t.index} meta={t.count} />

      {/* Three service cards in a row */}
      <div className="flex flex-col md:flex-row">
        {t.items.map((svc, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col p-7 lg:p-9 border-b md:border-b-0 md:border-r border-border last:border-b-0 last:border-r-0 group hover:bg-foreground hover:text-background cell-hover cursor-default"
          >
            {/* Number + arrow */}
            <div className="flex items-center justify-between mb-8">
              <Label>{svc.number}</Label>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary/50 opacity-0 group-hover:opacity-100 transition-all" />
            </div>

            {/* Title + description */}
            <div className="flex-1">
              <h3
                className={`mb-4 leading-snug ${
                  isJp ? "text-base font-normal" : "text-base font-light tracking-wide"
                }`}
              >
                {svc.title}
              </h3>
              <p className="text-[13px] text-muted-foreground group-hover:text-primary/60 leading-[1.82] font-light transition-colors">
                {svc.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-7">
              {svc.tags.map((tag, j) => (
                <Tag key={j}>{tag}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Tools ────────────────────────────────────────────────────────────────────

function ToolsSection({ lang }: { lang: Lang }) {
  const t = content[lang].tools

  return (
    <section id="tools" className="border-b border-border">
      <SectionRow label={t.label} index={t.index} meta={t.count} />

      {/* Tool cells — responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {toolsList.map((tool, i) => (
          <div
            key={i}
            className="px-5 py-5 border-r border-b border-border group hover:bg-foreground hover:text-background cell-hover cursor-default"
          >
            <p className="text-[11px] font-light tracking-wide group-hover:text-background transition-colors">
              {tool}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Contact + Footer ─────────────────────────────────────────────────────────

function Footer({ lang }: { lang: Lang }) {
  const tc = content[lang].contact
  const tf = content[lang].footer
  const isJp = lang === "jp"

  return (
    <footer id="contact">
      {/* Contact section */}
      <div className="border-b border-border">
        <SectionRow label={tc.label} index={tc.index} meta="" />

        {/* CTA + sidebar */}
        <div className="flex flex-col lg:flex-row">
          {/* Left: big headline + email */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-border">
            <h2
              className={`leading-[1.18] mb-10 ${
                isJp
                  ? "text-4xl md:text-5xl lg:text-6xl font-light"
                  : "text-[clamp(2.6rem,4.8vw,4.2rem)] font-extralight tracking-tight"
              }`}
            >
              {tc.headline[0]}
              <br />
              {tc.headline[1]}
            </h2>
            <a
              href={`mailto:${tc.email}`}
              className="inline-flex items-center gap-3 text-[13px] font-light tracking-wider hover:opacity-50 transition-opacity duration-300"
            >
              {tc.email}
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Right: availability + socials */}
          <div className="w-full lg:w-64 xl:w-72 p-7 flex flex-col justify-between gap-8">
            <div>
              <Label>{tc.avail_label}</Label>
              <p className="mt-4 text-[12px] font-light text-muted-foreground leading-relaxed">
                {tc.tagline}
              </p>
            </div>
            <div className="flex gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors uppercase"
              >
                Instagram
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors uppercase"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar — mirrors header height */}
      <div
        style={{ height: HEADER_H }}
        className="flex items-stretch"
      >
        <div className="flex items-center px-5 border-r border-border shrink-0">
          <span className="text-[10px] tracking-[0.28em]">STUDIO M</span>
        </div>
        <div className="flex items-center px-5 border-r border-border shrink-0">
          <Label>Web · Video · CX</Label>
        </div>
        <div className="flex-1" />
        <div className="flex items-center px-5 border-l border-border shrink-0">
          <Label>{tf.copy}</Label>
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

      <div style={{ paddingTop: HEADER_H }}>
        <HeroSection lang={lang} />
        <TimelineSection lang={lang} />
        <ServicesSection lang={lang} />
        <ToolsSection lang={lang} />
        <Footer lang={lang} />
      </div>
    </main>
  )
}
