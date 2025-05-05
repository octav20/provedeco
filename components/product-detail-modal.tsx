"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Plus, Minus, ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

interface ProductDetailModalProps {
  product: {
    id: number
    name: string
    price: number
    discountPrice?: number
    rating?: number
    description: string
    category: string
    dimensions?: string
    tags?: string[]
    isNew?: boolean
    isFeatured?: boolean
    isOnSale?: boolean
    stock?: number
    images: string[]
  }
}

export default function ProductDetailModal({ product }: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Negro")
  const [selectedSize, setSelectedSize] = useState("M")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const colors = ["Negro", "Blanco", "Azul", "Rojo"]
  const sizes = ["XS", "S", "M", "L", "XL"]

/*   const incrementQuantity = () =>product.stock? setQuantity((prev) => (prev < product.stock ? prev + 1 : prev)): setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
 */
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  // Renderizar estrellas de valoración
  const renderRatingStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${star <= Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
        <span className="ml-2 text-sm text-muted-foreground">({rating.toFixed(1)})</span>
      </div>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="default">
          Ver Detalles
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Detalles del Producto</DialogTitle>
          <DialogDescription>Información detallada sobre el producto seleccionado.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4 md:grid-cols-2">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="aspect-square"
                >
                  <Image
                    src={product.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${product.name} - Imagen ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {product.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full opacity-70 hover:opacity-100"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Imagen anterior</span>
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full opacity-70 hover:opacity-100"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Imagen siguiente</span>
                  </Button>
                </>
              )}

              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">Nuevo</Badge>}
                {product.isOnSale && <Badge className="bg-red-500 hover:bg-red-600">Oferta</Badge>}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-md border cursor-pointer transition-all ${
                    currentImageIndex === index ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <div className="relative aspect-square">
                    <Image src={image || "/placeholder.svg"} alt={`Vista ${index + 1}`} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold">{product.name} {product.dimensions}</h3>
                {/* <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Añadir a favoritos</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Compartir</span>
                  </Button>
                </div> */}
              </div>
           {/*    <div className="mt-2">{renderRatingStars(product.rating)}</div> */}
              <div className="mt-4 flex items-baseline gap-2">
                {product.discountPrice ? (
                  <>
                    <span className="text-3xl font-bold text-primary">${product.discountPrice.toFixed(2)}</span>
                    <span className="text-lg line-through text-muted-foreground">${product.price.toFixed(2)}</span>
                    <Badge variant="outline" className="ml-2 text-red-500 border-red-200">
                      {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% descuento
                    </Badge>
                  </>
                ) : (
                  <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                )}
              </div>
           {/*    <p className="mt-2 text-sm text-muted-foreground">Impuestos incluidos. Envío calculado en el checkout.</p>
            */} </div>

            {/* <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Color</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <Button
                      key={color}
                      type="button"
                      variant={selectedColor === color ? "default" : "outline"}
                      className="h-9 px-3"
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Talla</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      type="button"
                      variant={selectedSize === size ? "default" : "outline"}
                      className="h-9 w-9 p-0"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Cantidad</label>
                <div className="mt-2 flex items-center">
                  <Button type="button" variant="outline" size="icon" className="h-9 w-9" onClick={decrementQuantity}>
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Disminuir cantidad</span>
                  </Button>
                  <span className="mx-3 w-8 text-center">{quantity}</span>
                  <Button type="button" variant="outline" size="icon" className="h-9 w-9" onClick={incrementQuantity}>
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Aumentar cantidad</span>
                  </Button>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {product.stock > 10
                    ? "Disponible en stock"
                    : product.stock > 0
                      ? `¡Solo quedan ${product.stock} unidades!`
                      : "Producto agotado"}
                </p>
              </div>
            </div> */}

         {/*    <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="flex-1" size="lg" disabled={product.stock === 0}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Añadir al Carrito
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Añadir a Favoritos
              </Button>
            </div> */}

            <div className="space-y-2 border-t pt-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Categoría:</span>
                <Badge variant="secondary">{product.category}</Badge>
              </div>
              {/* <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium">Etiquetas:</span>
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div> */}
            </div>
          </div>
        </div>

       {/*  <Tabs defaultValue="descripcion" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="descripcion">Descripción</TabsTrigger>
            <TabsTrigger value="especificaciones">Especificaciones</TabsTrigger>
            <TabsTrigger value="opiniones">Opiniones</TabsTrigger>
          </TabsList>
          <TabsContent value="descripcion" className="mt-4 space-y-4">
            <p>{product.description}</p>
            <p>Características principales:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Material de alta calidad</li>
              <li>Diseño ergonómico</li>
              <li>Fácil de usar y mantener</li>
              <li>Garantía de 2 años</li>
            </ul>
          </TabsContent>
          <TabsContent value="especificaciones" className="mt-4">
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 border-b py-2">
                <span className="font-medium">Material</span>
                <span>Premium</span>
              </div>
              <div className="grid grid-cols-2 gap-2 border-b py-2">
                <span className="font-medium">Dimensiones</span>
                <span>30 x 20 x 10 cm</span>
              </div>
              <div className="grid grid-cols-2 gap-2 border-b py-2">
                <span className="font-medium">Peso</span>
                <span>500g</span>
              </div>
              <div className="grid grid-cols-2 gap-2 border-b py-2">
                <span className="font-medium">País de origen</span>
                <span>España</span>
              </div>
              <div className="grid grid-cols-2 gap-2 border-b py-2">
                <span className="font-medium">Garantía</span>
                <span>2 años</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="opiniones" className="mt-4 space-y-4">
            <div className="space-y-4">
              {[1, 2, 3].map((review) => (
                <div key={review} className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Usuario {review}</p>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= 5 - (review % 2) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">Hace {review} días</span>
                  </div>
                  <p className="mt-2">
                    {review === 1
                      ? "Excelente producto, cumple con todas mis expectativas. Lo recomiendo ampliamente."
                      : review === 2
                        ? "Buena relación calidad-precio. Llegó antes de lo esperado y en perfectas condiciones."
                        : "Me gusta mucho el diseño y la calidad. Podría mejorar en algunos detalles pero estoy satisfecho con la compra."}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs> */}
      </DialogContent>
    </Dialog>
  )
}
