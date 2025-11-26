"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is SryzaClothes?",
      answer:
        "SryzaClothes is a premium fashion brand specializing in sustainable, high-quality clothing. We offer timeless pieces designed for the modern wardrobe with a commitment to ethical production and environmental responsibility.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Simply browse our shop, select your items, choose your size and color, and add them to your cart. When ready, proceed to checkout, enter your shipping and payment information, and complete your purchase.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All payments are processed securely through our encrypted payment gateway.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Domestic orders typically arrive within 5-7 business days. International orders may take 10-14 business days depending on the destination. You'll receive tracking information via email once your order ships.",
    },
    {
      question: "Do you offer free shipping?",
      answer:
        "Yes! We offer free shipping on all orders over $100 within the continental United States. For orders under $100, standard shipping is $9.99.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer hassle-free returns within 30 days of purchase. Items must be unworn, unwashed, and in original condition with tags attached. Visit our Returns page for detailed instructions.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order ships, you'll receive a confirmation email with a tracking number and link. You can use this to monitor your shipment in real-time.",
    },
    {
      question: "What if my item doesn't fit?",
      answer:
        "We want you to love what you wear! If something doesn't fit, we make returns easy. Return the item within 30 days for a full refund or exchange for a different size.",
    },
    {
      question: "Are your products sustainable?",
      answer:
        "Yes, sustainability is core to our mission. We use eco-friendly materials, work with ethical manufacturers, and minimize our environmental impact throughout production and shipping.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@sryzaclothes.com or visit our Contact page to send a message. We typically respond within 24 hours.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about SryzaClothes, shipping, returns, and more.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-all duration-300 ease-in-out"
              >
                <span className="text-lg font-semibold text-foreground text-left">{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`text-accent flex-shrink-0 transition-all duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-secondary">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card border border-border rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Didn't find your answer?</h2>
          <p className="text-muted-foreground mb-6">Our support team is ready to help. Reach out to us anytime.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Contact Support
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
