import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">SryzaClothes</h3>
            <p className="text-muted-foreground text-sm">
              Curated collections of premium, sustainable fashion for the modern wardrobe.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 ease-in-out"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=men"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 ease-in-out"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=women"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 ease-in-out"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=new"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 ease-in-out"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 ease-in-out"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 ease-in-out"
                >
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">Subscribe for new arrivals and exclusive offers.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-2 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl font-medium hover:scale-105 transition-all duration-300 ease-in-out">
                Sign up
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">© 2025 SryzaClothes. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="p-2 bg-background rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out"
            >
              <Facebook size={20} className="text-muted-foreground hover:text-accent" />
            </a>
            <a
              href="#"
              className="p-2 bg-background rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out"
            >
              <Instagram size={20} className="text-muted-foreground hover:text-accent" />
            </a>
            <a
              href="#"
              className="p-2 bg-background rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out"
            >
              <Twitter size={20} className="text-muted-foreground hover:text-accent" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
