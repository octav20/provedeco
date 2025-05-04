"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ColorThemeSwitcher } from "@/components/color-theme-switcher"
import { Menu, ShoppingCart, Search } from "lucide-react"
import MobileMenu from "./mobile-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Detectar scroll para cambiar el estilo de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-background/95 border-b 
      `}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold flex items-center">
       {/*      <span className="text-primary mr-1">Mi</span>Empresa */}
          <Image src={'/logo/logo.png'} width={100} height={50} alt="Logo" className="" />

          </Link>

        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Inicio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Nosotros
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/productos" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Productos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Contacto
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          {/* <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button> */}
          {/* <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              3
            </span>
            <span className="sr-only">Carrito</span>
          </Button> */}
          <Link href="/contacto" className="hidden md:block">
            <Button
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contáctanos
            </Button>
          </Link>
          <ThemeToggle />
         {/*  <ColorThemeSwitcher /> */}
          <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </div>
      </div>

      {/* Menú móvil */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  )
}
