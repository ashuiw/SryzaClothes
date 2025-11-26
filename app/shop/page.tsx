"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Sliders, Star, ChevronDown } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { products } from "@/lib/products"

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState([0, 500])
  const [isFilterOpen, setIsFilterOpen] = useState(true)
  const [sortBy, setSortBy] = useState("featured")

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

      return matchesSearch && matchesCategory && matchesPrice
    })

    // Apply sorting
    if (sortBy === "price-asc") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [searchQuery, selectedCategory, priceRange, sortBy])

  const categories = ["men", "women", "new"]
  const pricePoints = [49, 89, 129, 189, 249, 349]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Shop Our Collection</h1>
        <p className="text-lg text-muted-foreground">Discover premium, sustainable fashion for every style</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className={`${isFilterOpen ? "block" : "hidden"} lg:block`}>
            <div className="sticky top-20 space-y-6">
              {/* Search */}
              <div className="bg-card rounded-2xl p-4 border border-border">
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-background rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-4">Category</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
                      selectedCategory === null
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    All Items
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ease-in-out capitalize ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">${priceRange[0]}</span>
                    <span className="text-foreground font-semibold">${priceRange[1]}</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {pricePoints.map((price) => (
                    <button
                      key={price}
                      onClick={() => setPriceRange([0, price])}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ease-in-out text-sm ${
                        priceRange[1] === price
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      Up to ${price}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory || priceRange[1] !== 500 || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null)
                    setPriceRange([0, 500])
                    setSearchQuery("")
                  }}
                  className="w-full px-4 py-2 bg-destructive text-destructive-foreground rounded-lg font-medium hover:opacity-90 transition-all duration-300 ease-in-out"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-8 gap-4">
              <p className="text-muted-foreground">
                Showing <span className="text-accent font-semibold">{filteredProducts.length}</span> products
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl text-foreground hover:bg-border transition-all duration-300 ease-in-out"
                >
                  <Sliders size={18} />
                  Filters
                </button>

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-secondary text-foreground rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out appearance-none pr-10"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-3 top-3 pointer-events-none text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`}>
                    <div className="group bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer border border-border h-full flex flex-col">
                      {/* Product Image */}
                      <div className="relative h-72 bg-secondary overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
                        />
                        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          {product.category === "new" ? "New" : `${Math.round(Math.random() * 30 + 10)}% Off`}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6 flex flex-col flex-grow">
                        <p className="text-muted-foreground text-sm mb-2 capitalize">{product.category}</p>
                        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 flex-grow">
                          {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">({product.reviews})</span>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-xl font-bold text-accent">${product.price}</span>
                          <button className="bg-primary text-primary-foreground px-3 py-2 rounded-lg font-semibold hover:scale-110 transition-all duration-300 ease-in-out text-sm">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground mb-4">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory(null)
                    setPriceRange([0, 500])
                    setSearchQuery("")
                  }}
                  className="text-accent hover:underline font-semibold"
                >
                  Clear filters and try again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
