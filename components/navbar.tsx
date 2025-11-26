"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShoppingCart, Menu, X, User, Search } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const cartItems = useCartStore((state) => state.items)
  const cartCount = cartItems.length

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ease-in-out">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">SryzaClothes</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition-all duration-300 ease-in-out">
              Home
            </Link>
            <Link href="/shop" className="text-foreground hover:text-accent transition-all duration-300 ease-in-out">
              Shop
            </Link>
            <Link
              href="/collections"
              className="text-foreground hover:text-accent transition-all duration-300 ease-in-out"
            >
              Collections
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-all duration-300 ease-in-out">
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/shop")}
              className="p-2 hover:bg-secondary rounded-lg transition-all duration-300 ease-in-out"
            >
              <Search size={20} className="text-foreground" />
            </button>
            <button
              onClick={() => router.push("/cart")}
              className="p-2 hover:bg-secondary rounded-lg transition-all duration-300 ease-in-out relative"
            >
              <ShoppingCart size={20} className="text-foreground" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => router.push("/account")}
              className="p-2 hover:bg-secondary rounded-lg transition-all duration-300 ease-in-out"
            >
              <User size={20} className="text-foreground" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-all duration-300 ease-in-out"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border">
            <Link
              href="/"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-all duration-300 ease-in-out"
            >
              Shop
            </Link>
            <Link
              href="/collections"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-all duration-300 ease-in-out"
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-all duration-300 ease-in-out"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
