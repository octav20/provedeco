import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeCustomizer } from "@/components/theme-customizer"
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section con diseño mejorado */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-5">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
                <span className="font-medium">Nuevo lanzamiento</span>
                <ChevronRight className="ml-1 h-3.5 w-3.5" />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Soluciones de <span className="text-primary">Calidad</span> para tu Negocio
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Ofrecemos los mejores productos con la más alta calidad para satisfacer todas tus necesidades
                  empresariales.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/productos">
                  <Button size="lg" className="group">
                    Ver Productos
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" size="lg">
                    Contáctanos
                  </Button>
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Envío gratuito</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Garantía de 2 años</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Soporte 24/7</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/40 opacity-75 blur-xl"></div>
                <div className="relative overflow-hidden rounded-2xl border bg-background p-2 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=550&width=550"
                    width={550}
                    height={550}
                    alt="Hero Image"
                    className="rounded-xl object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 backdrop-blur-md"></div>
                <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-primary/30 backdrop-blur-md"></div>
              </div>
            </div>
          </div>

          {/* Logos de marcas */}
          <div className="mt-16 border-t pt-8">
            <p className="mb-4 text-center text-sm text-muted-foreground">CONFÍAN EN NOSOTROS</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="grayscale transition-all duration-200 hover:grayscale-0 hover:scale-110">
                  <Image
                    src={`/placeholder.svg?height=40&width=120&text=MARCA+${i}`}
                    alt={`Marca ${i}`}
                    width={120}
                    height={40}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Por qué elegirnos" con diseño mejorado */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm">
                <span>Nuestras ventajas</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">¿Por qué elegirnos?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Descubre por qué somos la mejor opción para ti y tu negocio
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-3 rounded-xl border bg-background p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 2v20" />
                  <path d="m17 5-5-3-5 3" />
                  <path d="m17 19-5 3-5-3" />
                  <path d="M12 10v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Calidad Superior</h3>
              <p className="text-muted-foreground">
                Todos nuestros productos pasan por rigurosos controles de calidad para garantizar su excelencia.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 rounded-xl border bg-background p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Atención Personalizada</h3>
              <p className="text-muted-foreground">
                Nuestro equipo está siempre disponible para ayudarte con lo que necesites, ofreciendo soluciones a
                medida.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 rounded-xl border bg-background p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Innovación Constante</h3>
              <p className="text-muted-foreground">
                Nos mantenemos a la vanguardia con las últimas tendencias y tecnologías para ofrecerte lo mejor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de estadísticas */}
      <section className="w-full bg-primary/5 py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-bold text-primary">10+</span>
              <span className="mt-2 text-sm text-muted-foreground">Años de experiencia</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-bold text-primary">5000+</span>
              <span className="mt-2 text-sm text-muted-foreground">Clientes satisfechos</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-bold text-primary">200+</span>
              <span className="mt-2 text-sm text-muted-foreground">Productos</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-bold text-primary">15+</span>
              <span className="mt-2 text-sm text-muted-foreground">Países</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/80 via-primary to-primary/90 px-6 py-12 text-primary-foreground shadow-lg md:px-12">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="max-w-md text-center md:text-left">
                <h2 className="text-2xl font-bold md:text-3xl">¿Listo para comenzar?</h2>
                <p className="mt-4">
                  Descubre cómo nuestros productos pueden transformar tu negocio. Contáctanos hoy mismo para una
                  consulta personalizada.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/productos">
                  <Button size="lg" variant="secondary" className="min-w-[150px]">
                    Ver Productos
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="min-w-[150px] bg-transparent border-white text-white hover:bg-white/20"
                  >
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
          </div>
        </div>
      </section>

      <ThemeCustomizer />
    </>
  )
}
