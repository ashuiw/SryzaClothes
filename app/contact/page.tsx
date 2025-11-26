"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question? We'd love to hear from you. Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border border-border rounded-2xl p-8">
            <Mail className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">Get in touch via email. We'll respond within 24 hours.</p>
            <a
              href="mailto:support@sryzaclothes.com"
              className="text-accent font-semibold hover:underline transition-all duration-300 ease-in-out"
            >
              support@sryzaclothes.com
            </a>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <Phone className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground mb-4">Call us Monday-Friday, 9am-6pm EST.</p>
            <a
              href="tel:+1-800-123-4567"
              className="text-accent font-semibold hover:underline transition-all duration-300 ease-in-out"
            >
              +1 (800) 123-4567
            </a>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <MapPin className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Office</h3>
            <p className="text-muted-foreground">
              SryzaClothes
              <br />
              123 Fashion District
              <br />
              New York, NY 10001
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-900 bg-opacity-20 border border-green-500 rounded-xl">
                <p className="text-green-400 font-semibold">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order & Shipping</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="product">Product Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Business Hours</h2>
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM EST" },
                  { day: "Saturday", time: "10:00 AM - 4:00 PM EST" },
                  { day: "Sunday", time: "Closed" },
                ].map((schedule, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-card border border-border rounded-xl p-4"
                  >
                    <span className="font-semibold text-foreground">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Need Quick Help?</h3>
              <p className="text-muted-foreground mb-6">
                Check out our FAQ page for answers to common questions about orders, shipping, and returns.
              </p>
              <a
                href="/faq"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300 ease-in-out"
              >
                View FAQ
              </a>
            </div>

            <div className="bg-secondary border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Response Time</h3>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us during
                business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
