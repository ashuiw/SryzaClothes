"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Save } from "lucide-react"

export default function AdminSettings() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your store settings</p>
      </div>

      {/* Store Settings */}
      <Card className="bg-card rounded-2xl p-8 border border-border space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Store Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Store Name</label>
            <input
              type="text"
              defaultValue="StyleHub"
              className="w-full px-4 py-3 bg-background rounded-xl border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
            <input
              type="email"
              defaultValue="hello@stylehub.com"
              className="w-full px-4 py-3 bg-background rounded-xl border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-foreground mb-2">Description</label>
            <textarea
              defaultValue="Premium, sustainable fashion for the modern wardrobe."
              rows={4}
              className="w-full px-4 py-3 bg-background rounded-xl border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        <Button className="bg-primary text-primary-foreground hover:scale-105 rounded-xl flex items-center gap-2 h-10 px-6 font-semibold">
          <Save size={18} />
          Save Changes
        </Button>
      </Card>

      {/* Payment Settings */}
      <Card className="bg-card rounded-2xl p-8 border border-border space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Payment Methods</h2>

        <div className="space-y-4">
          <label className="flex items-center gap-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-secondary transition-all duration-300 ease-in-out">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <span className="text-foreground font-semibold">Credit Card</span>
          </label>
          <label className="flex items-center gap-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-secondary transition-all duration-300 ease-in-out">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <span className="text-foreground font-semibold">PayPal</span>
          </label>
          <label className="flex items-center gap-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-secondary transition-all duration-300 ease-in-out">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-foreground font-semibold">Apple Pay</span>
          </label>
        </div>
      </Card>
    </div>
  )
}
