"use client"

import { useState } from "react"
import { Mail, MapPin, LogOut, Heart, Package } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Login</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-all duration-300 ease-in-out"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-all duration-300 ease-in-out"
                  />
                </div>

                <Button
                  onClick={() => {
                    if (email && password) {
                      setIsLoggedIn(true)
                    }
                  }}
                  className="w-full bg-primary text-primary-foreground rounded-xl h-12 text-base font-semibold hover:scale-105"
                >
                  Sign In
                </Button>
              </div>

              <p className="text-center text-muted-foreground text-sm mt-6">
                Don't have an account? <button className="text-accent hover:underline font-semibold">Create one</button>
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Sign In?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Package className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Track your orders in real time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Save your favorite items to a wishlist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Get exclusive offers and updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Manage multiple delivery addresses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">J</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{email}</h3>
                <p className="text-sm text-muted-foreground">Joined 3 months ago</p>
              </div>

              <nav className="space-y-2">
                <button className="w-full text-left px-4 py-2 bg-secondary rounded-lg text-foreground font-semibold transition-all duration-300 ease-in-out">
                  Dashboard
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-secondary rounded-lg text-foreground transition-all duration-300 ease-in-out">
                  Orders
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-secondary rounded-lg text-foreground transition-all duration-300 ease-in-out">
                  Wishlist
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-secondary rounded-lg text-foreground transition-all duration-300 ease-in-out">
                  Reviews
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-secondary rounded-lg text-foreground transition-all duration-300 ease-in-out">
                  Addresses
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-secondary rounded-lg text-foreground transition-all duration-300 ease-in-out">
                  Settings
                </button>
              </nav>

              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full mt-6 px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-accent-foreground font-semibold transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
              >
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">Welcome back, User</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-6 border border-accent/30">
                  <Package className="text-accent mb-3" size={32} />
                  <p className="text-4xl font-bold text-foreground">3</p>
                  <p className="text-muted-foreground text-sm mt-2">Orders Placed</p>
                </div>
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-6 border border-primary/30">
                  <Heart className="text-primary mb-3" size={32} />
                  <p className="text-4xl font-bold text-foreground">8</p>
                  <p className="text-muted-foreground text-sm mt-2">Wishlist Items</p>
                </div>
                <div className="bg-gradient-to-br from-secondary to-border rounded-2xl p-6 border border-border">
                  <Mail className="text-muted-foreground mb-3" size={32} />
                  <p className="text-4xl font-bold text-foreground">12</p>
                  <p className="text-muted-foreground text-sm mt-2">Loyalty Points</p>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Recent Orders</h3>
                <div className="space-y-4">
                  {[
                    { id: 1, name: "Premium Linen Shirt", date: "Dec 15, 2024", status: "Delivered", price: 129 },
                    { id: 2, name: "Minimalist Tee", date: "Dec 10, 2024", status: "Delivered", price: 49 },
                    { id: 3, name: "Elegant Wrap Dress", date: "Dec 5, 2024", status: "Processing", price: 159 },
                  ].map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-all duration-300 ease-in-out"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{order.name}</p>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === "Delivered"
                              ? "bg-green-900/30 text-green-400"
                              : "bg-blue-900/30 text-blue-400"
                          }`}
                        >
                          {order.status}
                        </span>
                        <span className="font-bold text-accent">${order.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Account Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-secondary rounded-xl p-4">
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-2">Email</label>
                    <p className="text-foreground font-semibold">{email}</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-4">
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-2">Phone</label>
                    <p className="text-foreground font-semibold">+1 (555) 123-4567</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-4">
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-2">Country</label>
                    <p className="text-foreground font-semibold">United States</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-4">
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-2">
                      Member Since
                    </label>
                    <p className="text-foreground font-semibold">September 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
