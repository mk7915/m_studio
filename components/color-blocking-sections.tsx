"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowUpRight, ArrowRight, Play } from "lucide-react"

// ─── California Stripe Sections (Godly-style color blocking) ──────────────
// Standalone drop-in sections. Colors are hard-coded (not theme tokens) so
// the stripe identity stays consistent regardless of light/dark mode.
// Motion: scroll-reveal (`.reveal` from globals.css), parallax drift on the
// oversized straddling type, marquee ticker band, image zoom on hover, and
// a looping video card. Swap placeholder copy/media for real content.

const palette = {
  sand:        "#F5EFE3",
  sandBorder:  "#E6DCC8",
  sandInk:     "#2E2118",
  terracotta:  "#C16B43",
  terraBorder: "#A85B36",
  terraInk:    "#FBF3EA",
  navy:        "#1C2A3A",
  navyBorder:  "#34465B",
  navyInk:     "#F3ECE0",
  close:       "#EDE3D2",
  closeBorder: "#DCD0BC",
}

// ─── Scroll reveal (mirrors the hook used on the main page) ───────────────

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
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

// ─── Parallax drift for the oversized straddling type ──────────────────────

function useParallax<T extends HTMLElement>(speed: number) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const offset = (rect.top - window.innerHeight / 2) * speed
        el.style.transform = `translate3d(0, ${offset}px, 0)`
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [speed])
  return ref
}

// ─── Marquee ticker band (uses .marquee-wrap / .marquee-track from globals.css) ─

function TickerBand({
  items,
  bg,
  fg,
}: {
  items: string[]
  bg: string
  fg: string
}) {
  const doubled = [...items, ...items]
  return (
    <div
      className="marquee-wrap relative overflow-hidden border-y py-4"
      style={{ backgroundColor: bg, borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 font-display text-sm font-semibold uppercase tracking-[0.25em] whitespace-nowrap md:text-base"
            style={{ color: fg }}
          >
            {item}
            <span aria-hidden="true" style={{ opacity: 0.4 }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ColorBlockingSections() {
  const workflowsRef = useParallax<HTMLHeadingElement>(0.12)
  const productionRef = useParallax<HTMLHeadingElement>(-0.1)
  const interfacesRef = useParallax<HTMLHeadingElement>(0.1)

  const headRef1 = useReveal<HTMLDivElement>()
  const headRef2 = useReveal<HTMLDivElement>()
  const headRef3 = useReveal<HTMLDivElement>()
  const headRef4 = useReveal<HTMLDivElement>()
  const gridRef1 = useReveal<HTMLDivElement>()
  const gridRef2 = useReveal<HTMLDivElement>()
  const gridRef3 = useReveal<HTMLDivElement>()

  return (
    <div className="w-full">
      {/* ─── 01 · SAND — Process ───────────────────────────────────────── */}
      <section
        className="relative isolate overflow-hidden border-b py-24 md:py-32"
        style={{ backgroundColor: palette.sand, borderColor: palette.sandBorder }}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <span
            className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: palette.terracotta }}
          >
            01 · Process
          </span>

          <div ref={headRef1} className="reveal mt-6 grid gap-12 md:grid-cols-2 md:gap-20">
            <h2
              className="font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl"
              style={{ color: palette.sandInk }}
            >
              Crafted, end&#8209;to&#8209;end —
              <br />
              from first sketch to shipped product.
            </h2>
            <p
              className="self-end text-base leading-relaxed md:text-lg"
              style={{ color: palette.sandInk, opacity: 0.7 }}
            >
              Every project moves through a tight loop of discovery, design,
              and delivery — refined through years of cross-border consulting,
              video production, and full-stack development.
            </p>
          </div>

          <div
            ref={gridRef1}
            className="reveal mt-20 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-3"
            style={{ borderColor: palette.sandBorder }}
          >
            {[
              { n: "01", t: "Discover", d: "Audit goals, audiences, and constraints before a single pixel moves." },
              { n: "02", t: "Design",   d: "Systemize the visual language — color, type, motion, structure." },
              { n: "03", t: "Deliver",  d: "Ship, measure, and iterate with production-ready code and assets." },
            ].map((s, i) => (
              <div
                key={s.n}
                className={`group relative bg-transparent p-8 transition-colors duration-300 hover:bg-white/40 md:p-10 reveal-d${i + 1}`}
              >
                <span
                  className="font-mono text-sm"
                  style={{ color: palette.terracotta }}
                >
                  {s.n}
                </span>
                <h3
                  className="mt-4 text-xl font-semibold md:text-2xl"
                  style={{ color: palette.sandInk }}
                >
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: palette.sandInk, opacity: 0.65 }}>
                  {s.d}
                </p>
                <ArrowUpRight
                  className="mt-6 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ color: palette.terracotta }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Oversized type, straddling into the next (terracotta) block — parallax drift */}
        <h2
          ref={workflowsRef}
          aria-hidden
          className="pointer-events-none absolute -bottom-[6vw] left-0 right-0 z-20 select-none whitespace-nowrap text-center font-display text-[18vw] font-bold uppercase leading-none tracking-tighter transition-transform duration-300 ease-out will-change-transform md:text-[13vw]"
          style={{
            color: "transparent",
            WebkitTextStroke: `1.5px ${palette.sandInk}`,
            opacity: 0.18,
          }}
        >
          Workflows
        </h2>
      </section>

      {/* ─── Ticker — scrolling marquee divider ────────────────────────── */}
      <TickerBand
        bg={palette.terraBorder}
        fg={palette.terraInk}
        items={["Video Production", "CX Strategy", "Web Development", "Motion Design", "Brand Systems"]}
      />

      {/* ─── 02 · TERRACOTTA — Capabilities ────────────────────────────── */}
      <section
        className="relative isolate overflow-hidden border-b py-24 md:py-32"
        style={{ backgroundColor: palette.terracotta, borderColor: palette.terraBorder }}
      >
        <div className="relative z-30 mx-auto max-w-6xl px-6 md:px-10">
          <span
            className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: palette.terraInk, opacity: 0.7 }}
          >
            02 · Capabilities
          </span>

          <h2
            ref={headRef2}
            className="reveal mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl"
            style={{ color: palette.terraInk }}
          >
            Production-grade work,
            <br />
            wherever the brief points.
          </h2>

          <div ref={gridRef2} className="reveal mt-20 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "CX & Operations",
                d: "Journey mapping, kintone ecosystems, GAS automation, and data-driven ops.",
                img: "/placeholder.jpg",
              },
              {
                t: "Video & Motion",
                d: "Cinematic edits, SNS growth content, and high-end motion graphics.",
                img: "/placeholder.jpg",
              },
              {
                t: "Web Development",
                d: "Responsive interfaces, dashboards, and end-to-end Next.js deployments.",
                img: "/placeholder.jpg",
              },
            ].map((c, i) => (
              <div
                key={c.t}
                className={`group overflow-hidden rounded-2xl border bg-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl reveal-d${i + 1}`}
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.t}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                    style={{ backgroundColor: palette.terracotta, opacity: 0.45 }}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold md:text-2xl" style={{ color: palette.terraInk }}>
                    {c.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: palette.terraInk, opacity: 0.75 }}>
                    {c.d}
                  </p>
                  <div
                    className="mt-6 flex items-center gap-2 text-sm font-medium"
                    style={{ color: palette.terraInk }}
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Oversized type, straddling into the next (navy) block — parallax drift */}
        <h2
          ref={productionRef}
          aria-hidden
          className="pointer-events-none absolute -bottom-[6vw] left-0 right-0 z-20 select-none whitespace-nowrap text-center font-display text-[18vw] font-bold uppercase leading-none tracking-tighter transition-transform duration-300 ease-out will-change-transform md:text-[13vw]"
          style={{
            color: "transparent",
            WebkitTextStroke: `1.5px ${palette.terraInk}`,
            opacity: 0.18,
          }}
        >
          Production
        </h2>
      </section>

      {/* ─── 03 · NAVY — Selected Work ─────────────────────────────────── */}
      <section
        className="relative isolate overflow-hidden border-b py-24 md:py-32"
        style={{ backgroundColor: palette.navy, borderColor: palette.navyBorder }}
      >
        <div className="relative z-30 mx-auto max-w-6xl px-6 md:px-10">
          <span
            className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: palette.navyInk, opacity: 0.6 }}
          >
            03 · Selected Work
          </span>

          <div ref={headRef3} className="reveal mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2
              className="max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl"
              style={{ color: palette.navyInk }}
            >
              Interfaces built to feel
              <br />
              effortless.
            </h2>
            <a
              href="#works"
              className="group flex items-center gap-2 text-sm font-medium"
              style={{ color: palette.navyInk }}
            >
              View all projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div ref={gridRef3} className="reveal mt-20 grid gap-6 md:grid-cols-2">
            {/* Looping video card */}
            <div
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1"
              style={{ borderColor: palette.navyBorder }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/videos/web-dev-reel.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(28,42,58,0.85) 0%, rgba(28,42,58,0.05) 55%)" }}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <span
                  className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase"
                  style={{ color: palette.navyInk, opacity: 0.6 }}
                >
                  <Play className="h-3.5 w-3.5" /> Web Development
                </span>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-semibold md:text-3xl" style={{ color: palette.navyInk }}>
                    Dashboard &amp; CRM Migration
                  </h3>
                  <ArrowUpRight
                    className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
                    style={{ color: palette.terracotta }}
                  />
                </div>
              </div>
            </div>

            {/* Image card with zoom-on-hover */}
            <div
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1"
              style={{ borderColor: palette.navyBorder }}
            >
              <Image
                src="/placeholder.jpg"
                alt="Global Campaign Series"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(28,42,58,0.85) 0%, rgba(28,42,58,0.05) 55%)" }}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <span
                  className="font-mono text-xs tracking-[0.25em] uppercase"
                  style={{ color: palette.navyInk, opacity: 0.6 }}
                >
                  Video Marketing
                </span>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-semibold md:text-3xl" style={{ color: palette.navyInk }}>
                    Global Campaign Series
                  </h3>
                  <ArrowUpRight
                    className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
                    style={{ color: palette.terracotta }}
                  />
                </div>
              </div>
              <div
                className="absolute inset-0 -z-10 scale-100 transition-transform duration-700 group-hover:scale-105"
                style={{
                  background: `radial-gradient(120% 100% at 80% 0%, ${palette.terracotta}22, transparent 60%)`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Oversized type, straddling into the final (closing) block — parallax drift */}
        <h2
          ref={interfacesRef}
          aria-hidden
          className="pointer-events-none absolute -bottom-[6vw] left-0 right-0 z-20 select-none whitespace-nowrap text-center font-display text-[18vw] font-bold uppercase leading-none tracking-tighter transition-transform duration-300 ease-out will-change-transform md:text-[13vw]"
          style={{
            color: "transparent",
            WebkitTextStroke: `1.5px ${palette.navyInk}`,
            opacity: 0.12,
          }}
        >
          Interfaces
        </h2>
      </section>

      {/* ─── Ticker — scrolling marquee divider (reverse-feel via opposite tone) ─ */}
      <TickerBand
        bg={palette.closeBorder}
        fg={palette.sandInk}
        items={["Open for Work", "Asia / Remote", "Let's Talk", "Available 2026"]}
      />

      {/* ─── 04 · CLOSING — CTA ────────────────────────────────────────── */}
      <section
        className="relative isolate overflow-hidden py-24 md:py-32"
        style={{ backgroundColor: palette.close }}
      >
        <div ref={headRef4} className="reveal relative z-30 mx-auto flex max-w-6xl flex-col items-start gap-10 px-6 md:px-10">
          <span
            className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: palette.terracotta }}
          >
            04 · Get in Touch
          </span>
          <h2
            className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
            style={{ color: palette.sandInk }}
          >
            Got a project in mind?
            <br />
            Let&apos;s build it together.
          </h2>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            style={{ backgroundColor: palette.terracotta, color: palette.terraInk }}
          >
            Contact Me
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </section>
    </div>
  )
}
