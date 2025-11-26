"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"

export default function AdminProducts() {
  const [isAddingProduct, setIsAddingProduct] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Products</h1>
          <p className="text-muted-foreground">Manage your product inventory</p>
        </div>
        <Button
          onClick={() => setIsAddingProduct(true)}
          className="bg-primary text-primary-foreground hover:scale-105 rounded-xl flex items-center gap-2 h-10 px-6 font-semibold"
        >
          <Plus size={20} />
          Add Product
        </Button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-3 bg-card rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
      />

      {/* Products Table */}
      <Card className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Product</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Rating</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-border hover:bg-secondary transition-all duration-300 ease-in-out"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{product.name}</p>
                        <p className="text-xs text-muted-foreground">SKU: {product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-foreground capitalize">{product.category}</td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-accent">${product.price}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                      {product.rating} / 5
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-secondary rounded transition-all duration-300 ease-in-out text-muted-foreground hover:text-foreground">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 hover:bg-secondary rounded transition-all duration-300 ease-in-out text-muted-foreground hover:text-foreground">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 hover:bg-destructive/20 rounded transition-all duration-300 ease-in-out text-muted-foreground hover:text-destructive">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
