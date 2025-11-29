"use client"

import { Coffee, ShoppingCart, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white">
            <Coffee className="h-8 w-8" />
            <span className="text-xl font-serif font-semibold">Coffee Shop</span>
          </Link>

          {/* Navigation Links - Desktop Only */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-white hover:text-amber transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-amber transition-colors">
              About Us
            </Link>
            <Link href="#service" className="text-white hover:text-amber transition-colors">
              Service
            </Link>
            <Link href="#shop" className="text-white hover:text-amber transition-colors">
              Shop
            </Link>
            <Link href="#blog" className="text-white hover:text-amber transition-colors">
              Blog
            </Link>
            <Link href="#page" className="text-white hover:text-amber transition-colors">
              Page
            </Link>
            <Link href="#shortcode" className="text-white hover:text-amber transition-colors">
              Shortcode
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:text-amber transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Cart Icon */}
            <button className="relative text-white hover:text-amber transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-amber text-coffee-brown text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-coffee-brown shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMobileMenu}
              className="text-white hover:text-amber transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-6 px-6 py-4">
            <Link
              href="#home"
              onClick={closeMobileMenu}
              className="text-white hover:text-amber transition-colors text-lg font-medium"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={closeMobileMenu}
              className="text-white hover:text-amber transition-colors text-lg font-medium"
            >
              About Us
            </Link>
            <Link
              href="#service"
              onClick={closeMobileMenu}
              className="text-white hover:text-amber transition-colors text-lg font-medium"
            >
              Service
            </Link>
            <Link
              href="#shop"
              onClick={closeMobileMenu}
              className="text-white hover:text-amber transition-colors text-lg font-medium"
            >
              Shop
            </Link>
            <Link
              href="#blog"
              onClick={closeMobileMenu}
              className="text-white hover:text-amber transition-colors text-lg font-medium"
            >
              Blog
            </Link>
            <Link
              href="#page"
              onClick={closeMobileMenu}
              className="text-white hover:text-amber transition-colors text-lg font-medium"
            >
              Page
            </Link>
            <Link
              href="#shortcode"
              onClick={closeMobileMenu}
              className="text-white hover:text-amber transition-colors text-lg font-medium"
            >
              Shortcode
            </Link>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMobileMenu} />
      )}
    </nav>
  )
}