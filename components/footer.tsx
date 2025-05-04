import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com", label: "YouTube" },
  ]

  return (
    <footer className="bg-gradient-to-b from-background to-muted">
      {/* Newsletter Section */}
      {/* <div className="container py-12">
        <div className="rounded-xl bg-primary/5 p-6 md:p-8 lg:p-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold">Suscríbete a nuestro boletín</h3>
              <p className="mt-2 text-muted-foreground">
                Recibe las últimas noticias, ofertas y actualizaciones directamente en tu bandeja de entrada.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-[240px]"
                />
                <Button className="group">
                  Suscribirse
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
 */}
      {/* Main Footer */}
      <div className="border-t">
        <div className="container py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="text-2xl font-bold">
                MiEmpresa
              </Link>
              <p className="mt-4 text-muted-foreground">
                Ofreciendo productos de calidad desde 2010. Nuestra misión es proporcionar soluciones innovadoras y
                confiables para nuestros clientes.
              </p>
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="text-muted-foreground transition-colors hover:text-primary">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-muted-foreground transition-colors hover:text-primary">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    Política de Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    Aviso Legal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold">Contacto</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Calle Principal 123, Ciudad, País</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  <a href="tel:+34123456789" className="text-muted-foreground transition-colors hover:text-primary">
                    +34 123 456 789
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary" />
                  <a
                    href="mailto:info@miempresa.com"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    info@miempresa.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} MiEmpresa. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Mapa del Sitio
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Accesibilidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
