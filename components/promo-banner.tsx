import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function PromoBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground rounded-lg overflow-hidden">
      <div className="container px-4 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">¡Oferta Especial!</h2>
          <p className="text-lg md:max-w-md">
            Compra 2 productos y obtén un 30% de descuento en tu tercera compra. Oferta válida hasta fin de mes.
          </p>
        </div>
        <Button size="lg" variant="secondary" className="group">
          Ver Promociones
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  )
}
