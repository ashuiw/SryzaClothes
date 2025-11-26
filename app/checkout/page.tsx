"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Lock, Check } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"

export default function CheckoutPage() {
  const { items, getTotal } = useCartStore()
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  const subtotal = getTotal()
  const shipping = subtotal > 100 ? 0 : 10
  const tax = Math.round(subtotal * 0.1 * 100) / 100
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("confirmation")
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
          <Link href="/shop" className="text-accent hover:underline font-semibold">
            Return to shopping
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-8 mb-12">
          {(["shipping", "payment", "confirmation"] as const).map((s, idx) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ease-in-out ${
                  step === s
                    ? "bg-primary text-primary-foreground"
                    : (["shipping", "payment", "confirmation"].indexOf(step) > idx)
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground"
                }`}
              >
                {["shipping", "payment", "confirmation"].indexOf(step) > idx ? <Check size={20} /> : idx + 1}
              </div>
              <span className="hidden sm:inline capitalize font-semibold text-foreground">{s}</span>
              {idx < 2 && <ChevronRight className="text-muted-foreground" size={20} />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === "shipping" && (
              <form onSubmit={handleShippingSubmit} className="space-y-8">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Shipping Information</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out sm:col-span-2"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out sm:col-span-2"
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out sm:col-span-2"
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State/Province"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                    />
                    <input
                      type="text"
                      name="zip"
                      placeholder="ZIP Code"
                      value={formData.zip}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:scale-105 rounded-2xl h-12 text-base font-semibold"
                >
                  Continue to Payment
                </Button>
              </form>
            )}

            {step === "payment" && (
              <form onSubmit={handlePaymentSubmit} className="space-y-8">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Lock size={24} className="text-accent" />
                    Payment Information
                  </h2>

                  <div className="space-y-6">
                    <input
                      type="text"
                      name="cardName"
                      placeholder="Cardholder Name"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                    />
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      maxLength={19}
                      className="w-full px-4 py-3 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiry"
                        placeholder="MM/YY"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        required
                        maxLength={5}
                        className="px-4 py-3 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        maxLength={4}
                        className="px-4 py-3 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/30 text-sm text-accent">
                    This is a demo checkout. No real payments will be processed.
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep("shipping")}
                    className="flex-1 px-6 py-3 border border-border rounded-2xl text-foreground font-semibold hover:bg-secondary transition-all duration-300 ease-in-out"
                  >
                    Back
                  </button>
                  <Button
                    type="submit"
                    className="flex-1 bg-primary text-primary-foreground hover:scale-105 rounded-2xl h-12 text-base font-semibold"
                  >
                    Complete Order
                  </Button>
                </div>
              </form>
            )}

            {step === "confirmation" && (
              <div className="bg-card rounded-2xl p-12 border border-border text-center space-y-6">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Check size={40} className="text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h2>
                  <p className="text-muted-foreground">Thank you for your purchase.</p>
                </div>

                <div className="bg-background rounded-lg p-4 text-left space-y-2">
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Order Number:</span> #STH-2025001
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Email:</span> {formData.email}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Estimated Delivery:</span> 3-5 business days
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <Link href="/">
                    <Button className="w-full bg-primary text-primary-foreground hover:scale-105 rounded-2xl h-12 font-semibold">
                      Return to Home
                    </Button>
                  </Link>
                  <Link href="/shop">
                    <Button
                      variant="outline"
                      className="w-full rounded-2xl h-12 font-semibold border-border hover:bg-secondary bg-transparent"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 border border-border sticky top-24 space-y-6">
              <h3 className="text-xl font-bold text-foreground">Order Summary</h3>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="text-foreground font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pb-6 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">
                    {shipping === 0 ? <span className="text-accent">Free</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-foreground">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-2xl font-bold text-accent">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
