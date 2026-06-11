'use client'

import { useEffect } from 'react'

/**
 * Observes every `.fade-in-up` element on the page and adds `.is-visible`
 * once it scrolls into view. Mount once in the root layout so it applies
 * to all pages (including ones added later) without per-page setup.
 */
export function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        }
      },
      {
        // Trigger slightly before the element fully enters the viewport,
        // and ignore the bottom 10% so it doesn't fire too late.
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15,
      }
    )

    const observe = () => {
      document
        .querySelectorAll('.fade-in-up:not(.is-visible)')
        .forEach((el) => observer.observe(el))
    }

    observe()

    // Re-scan on DOM changes so elements added by client-side
    // navigation or dynamic rendering get observed too.
    const mutationObserver = new MutationObserver(observe)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null
}
