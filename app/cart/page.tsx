"use client"

import Link from "next/link"
import Image from "next/image"
import { Trash2, ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()
  const total = getTotal()
  const shipping = total > 100 ? 0 : 10
  const subtotal = total
  const tax = Math.round(subtotal * 0.1 * 100) / 100
  const finalTotal = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/shop" className="flex items-center gap-2 text-accent hover:underline font-semibold mb-4">
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Shopping Cart</h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-6">Your cart is empty</p>
            <Link href="/shop">
              <Button className="bg-primary text-primary-foreground hover:scale-105 rounded-2xl h-12 px-8 font-semibold">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-card rounded-2xl p-6 border border-border flex gap-6 items-start">
                  {/* Item Image */}
                  <div className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span>
                        Size: <span className="text-foreground font-medium">{item.size}</span>
                      </span>
                      <span>
                        Color: <span className="text-foreground font-medium">{item.color}</span>
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
                        >
                          −
                        </button>
                        <span className="px-4 py-2 text-foreground font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="flex-grow text-right">
                        <p className="text-sm text-muted-foreground line-through">
                          ${Math.round(item.price * item.quantity * 1.2) / 100}
                        </p>
                        <p className="text-2xl font-bold text-accent">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-destructive hover:bg-destructive/20 rounded-lg transition-all duration-300 ease-in-out"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-8 border border-border sticky top-24 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Order Summary</h2>

                <div className="space-y-4 pb-6 border-b border-border">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground font-semibold">
                      {shipping === 0 ? <span className="text-accent">Free</span> : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-foreground font-semibold">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">Total</span>
                  <span className="text-3xl font-bold text-accent">${finalTotal.toFixed(2)}</span>
                </div>

                <Link href="/checkout">
                  <Button className="w-full bg-primary text-primary-foreground hover:scale-105 rounded-2xl h-12 text-base font-semibold">
                    Proceed to Checkout
                  </Button>
                </Link>

                <button className="w-full px-6 py-3 border border-border rounded-2xl text-foreground font-semibold hover:bg-secondary transition-all duration-300 ease-in-out">
                  Continue Shopping
                </button>

                {shipping === 0 && (
                  <div className="bg-accent/20 rounded-lg p-4 text-sm text-accent border border-accent/30">
                    ✓ Free shipping on orders over $100
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
