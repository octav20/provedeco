"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Home, Users, ShoppingBag, Mail, ShoppingCart, Search, Phone } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Cerrar el menú cuando se presiona la tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevenir el scroll del body cuando el menú está abierto
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  const menuItems = [
    { href: "/", label: "Inicio", icon: <Home className="h-5 w-5" /> },
    { href: "/about", label: "Nosotros", icon: <Users className="h-5 w-5" /> },
    { href: "/productos", label: "Productos", icon: <ShoppingBag className="h-5 w-5" /> },
    { href: "/contacto", label: "Contacto", icon: <Mail className="h-5 w-5" /> },
  ]

  if (!isOpen) return null

  return (
    <>
      {/* Overlay con opacidad */}
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden" onClick={onClose} />

      {/* Menú móvil con fondo sólido */}
      <div
        className="fixed inset-y-0 right-0 z-50 w-full max-w-xs border-l bg-background shadow-lg md:hidden overflow-y-auto"
        style={{ transition: "transform 0.3s ease" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold" onClick={onClose}>
              <span className="text-primary">Mi</span>Empresa
            </Link>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-primary/10">
              <X className="h-6 w-6" />
              <span className="sr-only">Cerrar menú</span>
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-between border-b pb-4">
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2 px-2">
              <Search className="h-4 w-4" />
              <span>Buscar</span>
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2 px-2">
              <ShoppingCart className="h-4 w-4" />
              <span>Carrito (3)</span>
            </Button>
          </div>

          <div className="mt-8 flex flex-col space-y-1">
            {menuItems.map((item, index) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-4 text-lg font-medium transition-all hover:bg-primary/10 hover:text-primary active:scale-95"
                  onClick={onClose}
                >
                  <span className="text-primary">{item.icon}</span>
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium">¿Necesitas ayuda?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Nuestro equipo de atención al cliente está disponible para ayudarte con cualquier consulta.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+34123456789" className="text-sm hover:text-primary">
                  +34 123 456 789
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MiEmpresa
          </div>
        </div>
      </div>
    </>
  )
}
