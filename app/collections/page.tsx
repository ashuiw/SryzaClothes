"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Collections() {
  const collections = [
    {
      id: "men",
      name: "Men's Collection",
      description: "Premium essentials and statement pieces designed for the modern man",
      image: "/placeholder.svg?key=men_col",
      featured: ["Classic Fit Shirts", "Premium Denim", "Tailored Blazers"],
    },
    {
      id: "women",
      name: "Women's Collection",
      description: "Timeless elegance meets contemporary style for every occasion",
      image: "/placeholder.svg?key=women_col",
      featured: ["Silk Dresses", "Tailored Trousers", "Statement Jackets"],
    },
    {
      id: "new",
      name: "New Arrivals",
      description: "Fresh releases featuring the latest trends and exclusive designs",
      image: "/placeholder.svg?key=new_col",
      featured: ["Limited Edition", "Seasonal Pieces", "Collaborations"],
    },
    {
      id: "accessories",
      name: "Accessories",
      description: "Carefully curated accessories to complete your look",
      image: "/placeholder.svg?key=acc_col",
      featured: ["Leather Belts", "Premium Scarves", "Designer Bags"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">Our Collections</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore curated collections designed for every lifestyle and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link key={collection.id} href={`/shop?category=${collection.id}`}>
              <div className="group h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-300 ease-in-out cursor-pointer">
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-all duration-300 ease-in-out">
                    {collection.name}
                  </h2>
                  <p className="text-muted-foreground mb-6">{collection.description}</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-accent mb-3">Featured Items:</p>
                    <ul className="space-y-2">
                      {collection.featured.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-center gap-2">
                          <span className="w-1 h-1 bg-accent rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                    Explore Collection <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="bg-gradient-to-r from-secondary to-card rounded-2xl p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Seasonal Sale Now Live</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get up to 30% off selected items from all collections
          </p>
          <Link href="/shop">
            <Button className="bg-accent text-accent-foreground hover:scale-105 rounded-2xl h-12 px-8 text-base font-semibold">
              Shop Sale
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
