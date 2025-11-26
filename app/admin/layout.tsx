"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { LayoutDashboard, Package, ShoppingBag, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 lg:static lg:flex lg:w-64 bg-sidebar border-r border-sidebar-border transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col w-full h-full p-6 space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-sidebar-primary rounded-xl flex items-center justify-center">
                <span className="text-sidebar-primary-foreground font-bold">S</span>
              </div>
              <span className="text-xl font-bold text-sidebar-foreground">StyleHub</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 hover:bg-sidebar-accent rounded-lg transition-all duration-300 ease-in-out"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            <NavLink href="/admin" icon={<LayoutDashboard size={20} />}>
              Dashboard
            </NavLink>
            <NavLink href="/admin/products" icon={<Package size={20} />}>
              Products
            </NavLink>
            <NavLink href="/admin/orders" icon={<ShoppingBag size={20} />}>
              Orders
            </NavLink>
            <NavLink href="/admin/settings" icon={<Settings size={20} />}>
              Settings
            </NavLink>
          </nav>

          {/* Logout */}
          <Button
            variant="outline"
            className="w-full rounded-xl border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent flex items-center justify-center gap-2 bg-transparent"
          >
            <LogOut size={20} />
            Logout
          </Button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-all duration-300 ease-in-out"
          >
            <Menu size={20} />
          </button>
          <div>
            <p className="text-sm text-muted-foreground">Welcome back, Admin</p>
          </div>
          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">A</span>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  )
}

function NavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-300 ease-in-out group"
    >
      <span className="text-sidebar-accent-foreground group-hover:text-sidebar-primary">{icon}</span>
      {children}
    </Link>
  )
}
