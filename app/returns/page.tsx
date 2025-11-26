"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle, Clock, Mail, Package, RefreshCw } from "lucide-react"

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">Return & Exchange Policy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Shop with confidence knowing returns and exchanges are hassle-free
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">30-Day Return Guarantee</h2>
          <p className="text-lg text-muted-foreground mb-4">
            We want you to absolutely love your SryzaClothes purchase. If for any reason you're not satisfied, we offer
            a hassle-free 30-day return window from the date of purchase.
          </p>
          <div className="bg-secondary rounded-lg p-6 border border-border">
            <p className="text-foreground font-semibold">
              ✓ 30 days from purchase to return • ✓ Free return shipping • ✓ Full refund
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <Package className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">1. Prepare</h3>
            <p className="text-sm text-muted-foreground">Ensure items are unworn and in original condition with tags</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">2. Request</h3>
            <p className="text-sm text-muted-foreground">Submit a return request with your order number</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <RefreshCw className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">3. Ship</h3>
            <p className="text-sm text-muted-foreground">Use the provided prepaid label to ship your return</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <CheckCircle className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">4. Confirm</h3>
            <p className="text-sm text-muted-foreground">We'll verify your return and process your refund</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <Clock className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">5. Refund</h3>
            <p className="text-sm text-muted-foreground">Refund issued within 5-7 business days</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Return Eligibility</h2>
            <ul className="space-y-4">
              {[
                "Item purchased within the last 30 days",
                "Item is unworn and unwashed",
                "Item has original tags attached",
                "Item is in original packaging",
                "Item shows no signs of wear or damage",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Items Not Eligible</h2>
            <ul className="space-y-4">
              {[
                "Items purchased over 30 days ago",
                "Worn, washed, or damaged items",
                "Items without original tags",
                "Items damaged by customer misuse",
                "Final sale or clearance items",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-900 bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-400 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Exchanges</h2>
            <p className="text-muted-foreground mb-4">
              Need a different size or color? We make exchanges easy! Simply include a note with your return specifying
              your preferred size or color, and we'll ship your replacement at no additional cost.
            </p>
            <p className="text-muted-foreground">
              Exchanges typically process within 10 business days from when we receive your return.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Sale & Clearance Items</h2>
            <p className="text-muted-foreground mb-4">
              Final sale and clearance items marked as such are not eligible for return or exchange. However, if you
              receive a defective item, we'll replace it at no cost.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">How to Initiate a Return</h2>
            <ol className="space-y-4 ml-4">
              <li className="text-muted-foreground">
                <span className="font-semibold text-foreground">1.</span> Email support@sryzaclothes.com with your order
                number and reason for return
              </li>
              <li className="text-muted-foreground">
                <span className="font-semibold text-foreground">2.</span> We'll send you a prepaid return shipping label
              </li>
              <li className="text-muted-foreground">
                <span className="font-semibold text-foreground">3.</span> Pack your item securely and use the label to
                ship
              </li>
              <li className="text-muted-foreground">
                <span className="font-semibold text-foreground">4.</span> Once we receive and inspect your item, your
                refund will be processed
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Refund Status</h2>
            <p className="text-muted-foreground mb-2">
              Refunds are typically issued within 5-7 business days after we receive and verify your return. Depending
              on your bank or payment provider, it may take an additional 1-2 business days for the credit to appear on
              your account.
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Returns?</h2>
          <p className="text-muted-foreground mb-6">Our support team is here to help you with any return questions.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
