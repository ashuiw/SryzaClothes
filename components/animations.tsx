"use client"

import type { ReactNode } from "react"

export function FadeInUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function ScaleIn({ children }: { children: ReactNode }) {
  return <div className="animate-in zoom-in duration-300">{children}</div>
}

export function SlideInLeft({ children }: { children: ReactNode }) {
  return <div className="animate-in slide-in-from-left duration-500">{children}</div>
}
