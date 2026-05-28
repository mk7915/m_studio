"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { href: "#", label: "Home" },
  { href: "#works", label: "Works" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  // ESCキーで閉じる
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* オーバーレイ */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* サイドバー */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="ナビゲーションメニュー"
      >
        <div className="flex flex-col h-full">
          {/* ヘッダー */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className="text-lg font-bold tracking-tight">STUDIO M</span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="メニューを閉じる"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ナビゲーション */}
          <nav className="flex-1 p-6">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-4 text-2xl font-medium text-muted-foreground hover:text-foreground border-b border-border transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* フッター */}
          <div className="p-6 border-t border-border space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground tracking-widest uppercase">Theme</span>
              <ThemeToggle />
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>contact@example.com</p>
              <p>Tokyo, Japan</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
