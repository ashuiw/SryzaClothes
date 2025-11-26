"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeInUp } from "@/components/animations"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeInUp>
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-accent text-sm font-semibold tracking-widest uppercase">
                  Premium Fashion Collection
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-pretty">
                  Elevate Your Style
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover curated collections of premium, sustainable fashion for the modern wardrobe. Each piece is
                  carefully selected for quality and timeless design.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop">
                  <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:scale-105 rounded-2xl h-12 px-8 text-base font-semibold btn-glow">
                    Shop Now
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/collections">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto rounded-2xl h-12 px-8 text-base font-semibold border-border hover:bg-secondary bg-transparent"
                  >
                    View Collections
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div>
                  <p className="text-2xl font-bold text-accent">50k+</p>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <p className="text-2xl font-bold text-accent">100%</p>
                  <p className="text-muted-foreground">Sustainable</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Hero Image */}
          <FadeInUp delay={100}>
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl"></div>
              <div className="w-full h-full bg-card flex items-center justify-center rounded-2xl">
                <Image
                  src="/premium-linen-shirt.png"
                  alt="Premium Collection"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
