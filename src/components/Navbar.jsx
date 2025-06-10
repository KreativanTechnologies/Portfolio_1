"use client"

import { useState, memo, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

// Memoized NavItem component
const NavItem = memo(({ number, label, isMobile }) => {
  const location = useLocation()
  const path = label === "Home" ? "/" : "/" + label.toLowerCase().replace(/\s+/g, "_")
  const isActive = location.pathname === path
  const baseClasses = isActive ? "text-gray-900" : "text-gray-400"

  return isMobile ? (
    <Link
      to={path}
      className={`flex items-center space-x-3 px-4 py-2 transition-colors hover:text-gray-900 ${baseClasses}`}
    >
      <span className="text-xs font-medium w-6">{number}</span>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  ) : (
    <Link
      to={path}
      className={`flex flex-col items-center space-y-1 transition-colors hover:text-gray-900 ${baseClasses}`}
    >
      <span className="text-xs font-medium">{number}</span>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  )
})

NavItem.displayName = "NavItem"

// Memoized MobileMenu component
const MobileMenu = memo(({ isOpen, navItems }) => {
  if (!isOpen) return null

  return (
    <div className="md:hidden border-t border-gray-100">
      <div className="py-4 space-y-4">
        {navItems.map((item) => (
          <NavItem
            key={item.number}
            number={item.number}
            label={item.label}
            isMobile={true}
          />
        ))}
      </div>
    </div>
  )
})

MobileMenu.displayName = "MobileMenu"

// Main Navbar component
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const navItems = [
    { number: "01", label: "Home" },
    { number: "02", label: "My Visions" },
    { number: "03", label: "Industrialist" },
    { number: "04", label: "Builder" },
    { number: "05", label: "Social Worker" },
    { number: "06", label: "Contact me" },
  ]

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-16 flex-1 justify-center">
            {navItems.map((item) => (
              <NavItem
                key={item.number}
                number={item.number}
                label={item.label}
                isMobile={false}
              />
            ))}
          </div>

          {/* Spacer for layout */}
          <div className="hidden md:block w-8" aria-hidden="true"></div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} navItems={navItems} />
      </div>
    </nav>
  )
}
