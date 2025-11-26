"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"

const orders = [
  { id: "#STH-2025001", customer: "Sarah Anderson", total: "$349.99", status: "completed", date: "2025-01-20" },
  { id: "#STH-2025002", customer: "Marcus Johnson", total: "$129.99", status: "pending", date: "2025-01-19" },
  { id: "#STH-2025003", customer: "Emily Chen", total: "$589.98", status: "completed", date: "2025-01-18" },
  { id: "#STH-2025004", customer: "James Wilson", total: "$199.99", status: "cancelled", date: "2025-01-17" },
  { id: "#STH-2025005", customer: "Lisa Brown", total: "$249.99", status: "pending", date: "2025-01-16" },
]

export default function AdminOrders() {
  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      completed: "bg-accent/20 text-accent",
      pending: "bg-yellow-500/20 text-yellow-400",
      cancelled: "bg-destructive/20 text-destructive",
    }
    const icons: Record<string, React.ReactNode> = {
      completed: <CheckCircle size={16} />,
      pending: <Clock size={16} />,
      cancelled: <AlertCircle size={16} />,
    }

    return (
      <div
        className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${styles[status] || styles.pending}`}
      >
        {icons[status]}
        <span className="capitalize">{status}</span>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Orders</h1>
        <p className="text-muted-foreground">Track and manage customer orders</p>
      </div>

      {/* Orders Table */}
      <Card className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Total</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-border hover:bg-secondary transition-all duration-300 ease-in-out"
                >
                  <td className="px-6 py-4 text-foreground font-semibold">{order.id}</td>
                  <td className="px-6 py-4 text-foreground">{order.customer}</td>
                  <td className="px-6 py-4 text-foreground">{order.date}</td>
                  <td className="px-6 py-4 text-accent font-bold">{order.total}</td>
                  <td className="px-6 py-4">{getStatusBadge(order.status)}</td>
                  <td className="px-6 py-4">
                    <button className="text-accent hover:underline font-semibold text-sm">View Details</button>
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
