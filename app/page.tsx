"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"

export default function Home() {
  const featuredProducts = products.slice(0, 6)
  const collections = [
    { name: "Men", category: "men", image: "/placeholder.svg?key=ivzij" },
    { name: "Women", category: "women", image: "/placeholder.svg?key=f8wh9" },
    { name: "New Arrivals", category: "new", image: "/placeholder.svg?key=sfmiy" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                  <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:scale-105 rounded-2xl h-12 px-8 text-base font-semibold">
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

            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
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
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Featured Collections</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections designed for every style and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, idx) => (
            <Link key={idx} href={`/shop?category=${collection.category}`}>
              <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <div className="absolute inset-0 flex items-end justify-start p-6 z-20">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{collection.name}</h3>
                    <div className="flex items-center gap-2 text-accent font-semibold group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                      Shop Now <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Best Sellers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Handpicked products loved by our community</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="group bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
                <div className="relative h-64 bg-secondary overflow-hidden rounded-2xl mx-4 mt-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category === "new" ? "New" : "Featured"}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-2 capitalize">{product.category}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>

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

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">${product.price}</span>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-xl font-semibold hover:scale-110 transition-all duration-300 ease-in-out">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop">
            <Button className="bg-primary text-primary-foreground hover:scale-105 rounded-2xl h-12 px-8 text-base font-semibold">
              View All Products
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Anderson",
              role: "Fashion Designer",
              image: "/placeholder.svg?key=test1",
              text: "SryzaClothes offers the best quality pieces. Every item in my collection is timeless and sustainable.",
            },
            {
              name: "Marcus Johnson",
              role: "Business Professional",
              image: "/placeholder.svg?key=test2",
              text: "I've found everything I need for my professional wardrobe. The attention to detail is incredible.",
            },
            {
              name: "Emily Chen",
              role: "Creative Director",
              image: "/placeholder.svg?key=test3",
              text: "SryzaClothes combines quality with sustainability. I feel good about every purchase I make here.",
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full"></div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-secondary to-card rounded-2xl p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Ready to Elevate Your Wardrobe?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of customers who trust SryzaClothes for premium, sustainable fashion
          </p>
          <Link href="/shop">
            <Button className="bg-accent text-accent-foreground hover:scale-105 rounded-2xl h-12 px-8 text-base font-semibold">
              Start Shopping
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
