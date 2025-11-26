"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">About SryzaClothes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting premium, sustainable fashion with a commitment to quality and style
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative w-full h-96 bg-secondary rounded-2xl overflow-hidden">
            <Image
              src="/premium-fashion-collection.jpg"
              alt="SryzaClothes Story"
              width={500}
              height={400}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SryzaClothes was founded on the belief that quality fashion should be accessible to everyone. We started
              with a simple mission: create timeless pieces that look good and feel good to wear.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every garment in our collection is carefully curated and produced with sustainable practices. We partner
              with ethical manufacturers and use premium, eco-friendly materials.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, thousands of customers trust SryzaClothes for their everyday essentials and special occasion
              pieces. We continue to innovate while staying true to our core values.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 border-t border-b border-border">
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">50k+</div>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">500+</div>
            <p className="text-muted-foreground">Premium Items</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">100%</div>
            <p className="text-muted-foreground">Sustainable</p>
          </div>
        </div>

        <section className="py-20">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Each piece is designed and manufactured to the highest standards.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to sustainable fashion practices that care for our planet and its people.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Style</h3>
              <p className="text-muted-foreground">
                Timeless design meets contemporary aesthetics. We create pieces that transcend trends.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-border">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Choose SryzaClothes?</h2>

          <div className="space-y-6">
            {[
              "Premium quality materials sourced responsibly",
              "Sustainable production and ethical manufacturing",
              "Timeless designs that work for any occasion",
              "Expert customer service and support",
              "Easy returns and exchanges",
              "Fast, free shipping on orders over $100",
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm font-bold">✓</span>
                </div>
                <p className="text-foreground text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <Footer />
    </div>
  )
}
