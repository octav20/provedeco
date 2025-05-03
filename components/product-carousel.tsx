"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselItem {
  id: number
  title: string
  description: string
  price: number
  image: string
}

export default function ProductCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: "Producto Destacado 1",
      description: "Descubre nuestra nueva colección con un 20% de descuento",
      price: 99.99,
      image: "/placeholder.svg?height=500&width=1200&text=Producto+Destacado+1",
    },
    {
      id: 2,
      title: "Producto Destacado 2",
      description: "Edición limitada - Disponible por tiempo limitado",
      price: 149.99,
      image: "/placeholder.svg?height=500&width=1200&text=Producto+Destacado+2",
    },
    {
      id: 3,
      title: "Producto Destacado 3",
      description: "Lo más vendido de la temporada con envío gratuito",
      price: 79.99,
      image: "/placeholder.svg?height=500&width=1200&text=Producto+Destacado+3",
    },
  ]

  const next = () => {
    setCurrent((current + 1) % carouselItems.length)
  }

  const prev = () => {
    setCurrent((current - 1 + carouselItems.length) % carouselItems.length)
  }

  // Autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        next()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [current, autoplay])

  // Pausar autoplay al hacer hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="relative w-full flex-shrink-0">
            <div className="relative aspect-[21/9] w-full">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
                <p className="text-xl mb-4 max-w-md">{item.description}</p>
                <p className="text-2xl font-bold mb-6">${item.price.toFixed(2)}</p>
                <Button className="w-fit">Ver Oferta</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full opacity-70 hover:opacity-100"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Anterior</span>
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full opacity-70 hover:opacity-100"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Siguiente</span>
      </Button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-colors ${index === current ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
