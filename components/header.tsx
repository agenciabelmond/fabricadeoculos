"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Início", href: "#" },
  { label: "Coleções", href: "#categorias" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-3 md:py-4 border-b border-[#C9A227]/10"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">

            <div className="w-9 h-9 md:w-10 md:h-10 bg-[#C9A227] flex items-center justify-center rounded-sm">
              <span className="text-black font-black text-lg md:text-xl">F</span>
            </div>

            <div className="hidden sm:block">
              <p className="font-black text-white text-base md:text-lg leading-none tracking-tight">
                FÁBRICA
              </p>
              <p className="text-[#C9A227] text-[10px] md:text-xs font-bold tracking-[0.15em]">
                DE ÓCULOS
              </p>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide group"
              >
                {item.label}

                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C9A227] group-hover:w-full transition-all duration-300" />

              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">

            <Button
              className="bg-[#C9A227] hover:bg-[#B8931F] text-black px-6 font-semibold rounded-full"
            >
              Agendar Consulta
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 border-t border-white/10 pt-6 bg-black">

            <div className="flex flex-col gap-4">

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/70 hover:text-white transition-colors text-lg font-medium"
                >
                  {item.label}
                </Link>
              ))}

              <Button
                className="bg-[#C9A227] hover:bg-[#B8931F] text-black mt-4 w-full font-semibold rounded-full"
              >
                Agendar Consulta
              </Button>

            </div>

          </nav>
        )}

      </div>
    </header>
  )
}