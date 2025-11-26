"use client"

import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div
        className={`group bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer card-hover stagger-item ${className}`}
      >
        {/* Product Image */}
        <div className="relative h-64 bg-secondary overflow-hidden rounded-2xl mx-4 mt-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold pulse-badge">
            {product.category === "new" ? "New" : "Featured"}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <p className="text-muted-foreground text-sm mb-2 capitalize">{product.category}</p>
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-accent">${product.price}</span>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-xl font-semibold hover:scale-110 transition-all duration-300 ease-in-out btn-glow">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
