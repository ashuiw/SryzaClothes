"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { useCartStore } from "@/lib/cart-store"

interface PageProps {
  params: { id: string }
}

export default function ProductDetail({ params }: PageProps) {
  const [resolvedState, setResolvedState] = useState<{ id: string } | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [product, setProduct] = useState<any | null>(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [relatedProducts, setRelatedProducts] = useState<any[]>([])

  const colorMap: Record<string, string> = {
    Black: "bg-black",
    White: "bg-white",
    Navy: "bg-blue-900",
    Khaki: "bg-yellow-700",
    Gray: "bg-gray-500",
    Beige: "bg-yellow-100",
    Burgundy: "bg-red-900",
    Emerald: "bg-emerald-700",
    Charcoal: "bg-gray-700",
    Olive: "bg-green-700",
    Nude: "bg-yellow-200",
    Champagne: "bg-yellow-300",
    Camel: "bg-yellow-600",
  }

  useEffect(() => {
    setResolvedState(params)
  }, [params])

  useEffect(() => {
    if (resolvedState) {
      const p = products.find((p) => p.id === resolvedState.id)
      setProduct(p)
      setSelectedSize(p?.sizes[0] || "")
      setSelectedColor(p?.colors[0] || "")
    }
  }, [resolvedState])

  useEffect(() => {
    if (product) {
      const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
      setRelatedProducts(related)
    }
  }, [product])

  if (!resolvedState) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <p className="text-foreground">Loading...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
            <Link href="/shop" className="text-accent hover:underline">
              Back to shop
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Link href="/shop" className="hover:text-accent transition-all duration-300 ease-in-out">
            Shop
          </Link>
          <span>/</span>
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-accent transition-all duration-300 ease-in-out capitalize"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative w-full max-w-lg mx-auto aspect-square bg-secondary rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="object-contain w-full h-full"
                priority
              />
            </div>

            <div className="flex gap-4 overflow-x-auto">
              {[product.image, product.thumbnail, product.image, product.thumbnail].map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 ease-in-out ${
                    mainImage === idx ? "border-accent" : "border-border hover:border-accent"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} view ${idx + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-accent text-sm font-semibold uppercase mb-2">
                    {product.category === "new" ? "New Arrival" : "Bestseller"}
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">{product.name}</h1>
                </div>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-3 bg-secondary rounded-xl hover:bg-border transition-all duration-300 ease-in-out flex-shrink-0"
                >
                  <Heart size={24} className={isWishlisted ? "fill-accent text-accent" : "text-muted-foreground"} />
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}
                    />
                  ))}
                </div>
                <span className="text-foreground font-semibold">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-5xl font-bold text-accent">${product.price}</span>
                <span className="text-xl text-muted-foreground line-through">${Math.round(product.price * 1.2)}</span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Size</label>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-2 rounded-lg border-2 font-semibold transition-all duration-300 ease-in-out ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-foreground hover:border-accent"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Color</label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-3 rounded-lg border-2 font-semibold transition-all duration-300 ease-in-out ${
                        selectedColor === color ? "border-accent" : "border-border hover:border-accent"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className={`w-5 h-5 rounded-full border-2 border-current ${colorMap[color] || "bg-gray-400"}`}
                        ></span>
                        {color}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-border rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
                  >
                    −
                  </button>
                  <span className="px-6 py-3 text-foreground font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
                  >
                    +
                  </button>
                </div>

                <Button
                  onClick={() => {
                    useCartStore.getState().addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity,
                      size: selectedSize,
                      color: selectedColor,
                      image: product.image,
                    })
                  }}
                  className="flex-1 bg-primary text-primary-foreground hover:scale-105 rounded-2xl h-12 text-base font-semibold"
                >
                  Add to Cart
                </Button>
              </div>

              <Button
                onClick={() => {
                  useCartStore.getState().addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity,
                    size: selectedSize,
                    color: selectedColor,
                    image: product.image,
                  })
                }}
                className="w-full rounded-2xl h-12 text-base font-semibold border-accent hover:bg-accent hover:text-accent-foreground bg-transparent text-accent"
              >
                Buy Now
              </Button>
            </div>

            <div className="space-y-4 pt-6 border-t border-border">
              <div className="flex items-start gap-4">
                <Truck size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Free Shipping</h3>
                  <p className="text-muted-foreground text-sm">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Secure Checkout</h3>
                  <p className="text-muted-foreground text-sm">100% secure payment processing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <RotateCcw size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">30-Day Returns</h3>
                  <p className="text-muted-foreground text-sm">Hassle-free returns within 30 days</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-6 border-t border-border">
              <span className="text-muted-foreground">Share:</span>
              <button className="p-2 hover:bg-secondary rounded-lg transition-all duration-300 ease-in-out">
                <Share2 size={20} className="text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-24 border-t border-border pt-16">
            <h2 className="text-4xl font-bold text-foreground mb-12">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <Link key={relProduct.id} href={`/product/${relProduct.id}`}>
                  <div className="group bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer border border-border">
                    <div className="relative h-64 bg-secondary overflow-hidden">
                      <Image
                        src={relProduct.image || "/placeholder.svg"}
                        alt={relProduct.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{relProduct.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-accent">${relProduct.price}</span>
                        <div className="flex items-center gap-1">
                          <Star size={14} className="fill-accent text-accent" />
                          <span className="text-xs text-muted-foreground">{relProduct.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  )
}
