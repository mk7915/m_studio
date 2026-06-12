"use client"

import { Suspense, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { NAV_H, Tag, SectionLabel, LangToggle, type Lang } from "@/app/page"

type ServiceDetail = {
  label: string
  title: string
  tagline: string
  overview: string
  tags: readonly string[]
  back: string
}

type ServiceDetailData = {
  en: ServiceDetail
  jp: ServiceDetail
}

function ServiceDetailContent({ detail, basePath }: { detail: ServiceDetailData; basePath: string }) {
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
          <h1 className="font-display font-black tracking-tighter text-[clamp(1.75rem,5vw,2.75rem)] leading-tight mt-3 mb-6">
            {t.title}
          </h1>

          <p
            className={`text-base leading-relaxed mb-8 flex items-start gap-3 ${isJp ? "tracking-wide" : "font-light"}`}
          >
            <span className="mt-2 h-px w-6 shrink-0 bg-gradient-to-r from-primary via-mustard to-surf-blue" aria-hidden="true" />
            {t.tagline}
          </p>

          <p className="text-muted-foreground leading-relaxed text-[15px] mb-8">
            {t.overview}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {t.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
        </div>
      </div>
    </main>
  )
}

export function ServiceDetailPage({ detail, basePath }: { detail: ServiceDetailData; basePath: string }) {
  return (
    <Suspense fallback={null}>
      <ServiceDetailContent detail={detail} basePath={basePath} />
    </Suspense>
  )
}
