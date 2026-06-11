"use client"

import { Suspense, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { NAV_H, Tag, SectionLabel, LangToggle, type Lang } from "@/app/page"

type VideoProject = {
  title: string
  descriptionLabel: string
  description: string
  videoSrc: string
}

type WorkVideoProjectsDetail = {
  label: string
  title: string
  overview: string
  subheading: string
  projects: readonly VideoProject[]
  tags: readonly string[]
  back: string
}

type WorkVideoProjectsDetailData = {
  en: WorkVideoProjectsDetail
  jp: WorkVideoProjectsDetail
}

function WorkDetailVideoProjectsContent({ detail, basePath }: { detail: WorkVideoProjectsDetailData; basePath: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [lang, setLang] = useState<Lang>(searchParams.get("lang") === "jp" ? "jp" : "en")

  const handleSetLang = (l: Lang) => {
    setLang(l)
    router.replace(`${basePath}?lang=${l}`, { scroll: false })
  }

  const t = detail[lang]
  const isJp = lang === "jp"

  return (
    <main className={`min-h-screen bg-background text-foreground ${isJp ? "lang-jp" : "lang-en"}`}>
      <header
        style={{ height: NAV_H }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center px-5 lg:px-12 bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mr-auto"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t.back}
        </Link>
        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={handleSetLang} />
          <ThemeToggle />
        </div>
      </header>

      <div style={{ paddingTop: NAV_H }} className="px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>{t.label}</SectionLabel>
          <h1 className="font-display font-black tracking-tighter text-[clamp(1.75rem,5vw,2.75rem)] leading-tight mt-3 mb-8">
            {t.title}
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-10 text-base">
            {t.overview}
          </p>

          <h2 className="text-[12px] tracking-[0.2em] uppercase font-semibold text-primary mb-4">
            {t.subheading}
          </h2>
          <ul className="space-y-5 mb-10">
            {t.projects.map((project, i) => (
              <li key={project.title} className="bento-card rounded-2xl bg-card p-5">
                <p className="font-bold mb-3 text-base">
                  {i + 1}. {project.title}
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  <span className="font-semibold text-foreground">{project.descriptionLabel}</span>{" "}
                  {project.description}
                </p>
                <video
                  className="w-full rounded-lg shadow-md bg-muted aspect-video"
                  src={project.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {t.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
        </div>
      </div>
    </main>
  )
}

export function WorkDetailVideoProjectsPage({ detail, basePath }: { detail: WorkVideoProjectsDetailData; basePath: string }) {
  return (
    <Suspense fallback={null}>
      <WorkDetailVideoProjectsContent detail={detail} basePath={basePath} />
    </Suspense>
  )
}
