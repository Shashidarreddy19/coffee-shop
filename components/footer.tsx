import { Coffee, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-coffee-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8 text-amber" />
              <span className="text-xl font-serif font-semibold">Coffee Shop</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Crafting exceptional coffee experiences since 2010. We source the finest beans and brew them with passion.
            </p>
          </div>

          {/* About Us Links */}
          <div>
            <h3 className="font-serif text-xl mb-4">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/80 hover:text-amber transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-amber transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-amber transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-amber transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-amber mt-0.5 flex-shrink-0" />
                <span className="text-white/80">123 Coffee Street, Bean City, BC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-amber flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/80 hover:text-amber transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber flex-shrink-0" />
                <a href="mailto:info@coffeeshop.com" className="text-white/80 hover:text-amber transition-colors">
                  info@coffeeshop.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-serif text-xl mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-amber rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-amber rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-amber rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">© {new Date().getFullYear()} Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}