"use client"

import { Play, Pause, ArrowUpRight, Film, Code2, Users, Instagram, Github } from "lucide-react"
import { useState, useRef } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sidebar } from "@/components/sidebar"

// ヘッダー（ナビゲーション）
function Header({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-6 md:px-12 lg:px-16 py-6">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <a href="#" className="group flex items-center gap-3">
            <div className="w-8 h-8 border border-foreground flex items-center justify-center">
              <span className="text-xs font-bold">M</span>
            </div>
            <span className="text-sm font-medium tracking-wide hidden sm:block">
              STUDIO M
            </span>
          </a>

          {/* ナビゲーション */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center border border-border divide-x divide-border">
              <a href="#works" className="px-5 py-2.5 text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors">
                WORKS
              </a>
              <a href="#services" className="px-5 py-2.5 text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors">
                SERVICES
              </a>
              <a href="#contact" className="px-5 py-2.5 text-xs tracking-wider bg-foreground text-background hover:bg-foreground/80 transition-colors">
                CONTACT
              </a>
            </div>
          </nav>

          {/* 右側 */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={onMenuOpen}
              className="md:hidden w-10 h-10 border border-border flex flex-col items-center justify-center gap-1.5 hover:bg-foreground hover:text-background transition-colors"
              aria-label="メニューを開く"
            >
              <div className="w-4 h-px bg-current" />
              <div className="w-4 h-px bg-current" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

// ヒーローセクション - 大胆なタイポグラフィ
function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-1 grid lg:grid-cols-2">
        {/* 左側: タイポグラフィ */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-32 lg:py-0">
          <div className="space-y-8">
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">
              Creative Studio / Tokyo
            </p>
            <h1 className="text-[12vw] md:text-[8vw] lg:text-[5vw] font-black leading-[0.9] tracking-tighter">
              つくる、
              <br />
              届ける、
              <br />
              <span className="text-muted-foreground">動かす。</span>
            </h1>
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#works"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
              >
                View Works
              </a>
            </div>
          </div>
        </div>

        {/* 右側: 動画エリア */}
        <div className="relative bg-muted min-h-[50vh] lg:min-h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/mp4"
            />
          </video>
          {/* コントロール */}
          <button
            onClick={togglePlay}
            className="absolute bottom-6 right-6 w-12 h-12 bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            aria-label={isPlaying ? "停止" : "再生"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </button>
          {/* ラベル */}
          <div className="absolute bottom-6 left-6">
            <span className="text-xs tracking-widest text-white/80 bg-black/50 px-3 py-1.5">
              SHOWREEL 2024
            </span>
          </div>
        </div>
      </div>

      {/* ボトムバー */}
      <div className="border-t border-border px-6 md:px-12 lg:px-16 py-4">
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>Web / Video / CX</span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

// サービスカード
const services = [
  {
    icon: Film,
    number: "01",
    title: "映像制作",
    subtitle: "Video Production",
    description:
      "企画から編集まで一貫対応。企業PV、プロモーション動画、SNSコンテンツなど。",
    tags: ["企画構成", "編集", "Premiere Pro", "After Effects"],
  },
  {
    icon: Code2,
    number: "02",
    title: "WEB開発",
    subtitle: "Web Development",
    description:
      "モダンな技術スタックでビジネスに最適なソリューションを構築。",
    tags: ["Laravel", "React", "Next.js", "TypeScript"],
  },
  {
    icon: Users,
    number: "03",
    title: "CX運用改善",
    subtitle: "Customer Experience",
    description:
      "データドリブンなアプローチで顧客体験を最適化し、LTV向上を実現。",
    tags: ["CX設計", "マーケティング", "データ分析"],
  },
]

function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              What I Do
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            WEB開発、映像制作、CX運用改善。
            ビジネスの課題を解決する、統合的なクリエイティブサービス。
          </p>
        </div>

        {/* サービスリスト */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-t border-border py-12 md:py-16"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="md:col-span-1">
                  <span className="text-xs text-muted-foreground">
                    {service.number}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-muted-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 tracking-wider">
                    {service.subtitle}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="md:col-span-3 flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1.5 border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 実績データ
const works = [
  {
    title: "Brand Movie",
    category: "Video",
    year: "2024",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=1000&fit=crop",
  },
  {
    title: "E-Commerce Platform",
    category: "Web",
    year: "2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Recruitment Film",
    category: "Video",
    year: "2023",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=800&fit=crop",
  },
  {
    title: "Booking System",
    category: "Web",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Product Showcase",
    category: "Video",
    year: "2023",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=1000&fit=crop",
  },
  {
    title: "CX Optimization",
    category: "Strategy",
    year: "2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
]

function WorksSection() {
  return (
    <section id="works" className="py-32 px-6 md:px-12 lg:px-16 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Selected Works
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              Projects
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm hover-line"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* グリッド */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-muted aspect-[4/3]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover img-scale"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium tracking-tight group-hover:text-muted-foreground transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {work.category}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {work.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// フッター / お問い合わせ
function Footer() {
  return (
    <footer id="contact" className="py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* CTA */}
        <div className="mb-32">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-8">
            Contact
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-12 max-w-4xl leading-[1.1]">
            プロジェクトの
            <br />
            ご相談はこちら
          </h2>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            contact@example.com
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* ボトム */}
        <div className="border-t border-border pt-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <p className="text-2xl font-black tracking-tight">
              STUDIO M
            </p>
            <div className="flex items-center gap-6 md:justify-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm hover-line"
              >
                Instagram
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm hover-line"
              >
                GitHub
              </a>
            </div>
            <p className="text-xs text-muted-foreground md:text-right">
              © 2026 Maki
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// メインページ
export default function PortfolioPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header onMenuOpen={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <HeroSection />
      <ServicesSection />
      <WorksSection />
      <Footer />
    </main>
  )
}
