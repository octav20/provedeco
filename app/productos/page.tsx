"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Star, ChevronDown } from "lucide-react"
import ProductCarousel from "@/components/product-carousel"
import PromoBanner from "@/components/promo-banner"
import ProductDetailModal from "@/components/product-detail-modal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { products } from "@/data/products"

// Tipos
type Category = {
  id: string
  name: string
}

type Product = {
  id: number
  name: string
  description: string
  price: number
  discountPrice?: number
  dimensions?: string
  rating?: number
  category: string
  tags?: string[]
  isNew?: boolean
  isFeatured?: boolean
  isOnSale?: boolean
  stock?: number
  images: string[]
  boxPrice?: number
boxQuantity?: number
}

export default function ProductosPage() {
  // Categorías
  const categories: Category[] = [
    { id: "all", name: "Todos" },
    {id: "placas", name: "Placas"},
    {id:'lambrin', name: "Lambrin"},
    {id:'piedras', name: "Piedras"},
  ]

  // Datos de ejemplo para los productos
  const allProducts: Product[] = products
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [sortOption, setSortOption] = useState<string>("featured")

  // Filtrar productos cuando cambia la categoría o la búsqueda
  useEffect(() => {
    let result = allProducts

    // Filtrar por categoría
    if (selectedCategory !== "all") {
      result = result.filter((product) => product.category === selectedCategory)
    }

    // Filtrar por búsqueda
   /*  if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }
 */
    // Ordenar productos
    /* switch (sortOption) {
      case "price-low":
        result = [...result].sort((a, b) => {
          const priceA = a.discountPrice || a.price
          const priceB = b.discountPrice || b.price
          return priceA - priceB
        })
        break
      case "price-high":
        result = [...result].sort((a, b) => {
          const priceA = a.discountPrice || a.price
          const priceB = b.discountPrice || b.price
          return priceB - priceA
        })
        break
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        result = [...result].sort((a, b) => (a.isNew ? -1 : b.isNew ? 1 : 0))
        break
      case "featured":
      default:
        result = [...result].sort((a, b) => (a.isFeatured ? -1 : b.isFeatured ? 1 : 0))
        break
    } */

    setFilteredProducts(result)
  }, [selectedCategory, searchQuery, sortOption])

  // Función para renderizar las estrellas de valoración
  const renderRatingStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
        <span className="ml-1 text-sm text-muted-foreground">{rating.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        {/* Carrusel de productos destacados */}
        <ProductCarousel />

        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros Productos</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre nuestra amplia gama de productos diseñados para satisfacer tus necesidades.
            </p>
          </div>
        </div>

        {/* Filtros y búsqueda */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

          {/*   <div className="flex flex-col gap-2 sm:flex-row">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar productos..."
                  className="pl-8 w-full sm:w-[200px] md:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Filter className="h-4 w-4 mr-1" />
                    Ordenar por
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSortOption("featured")}>Destacados</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortOption("price-low")}>Precio: Menor a Mayor</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortOption("price-high")}>Precio: Mayor a Menor</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortOption("rating")}>Mejor Valorados</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortOption("newest")}>Más Recientes</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div> */}
          </div>
        </div>

        {/* Banner promocional */}
      {/*   <div className="my-12">
          <PromoBanner />
        </div> */}

        {/* Productos */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative">
                    <CardHeader className="p-0">
                      <div className="overflow-hidden">
                        <Image
                          src={product.images[0] || "/placeholder.svg"}
                          width={300}
                          height={300}
                          alt={product.name}
                          className="h-[250px] w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </CardHeader>
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">Nuevo</Badge>}
                      {product.isOnSale && <Badge className="bg-red-500 hover:bg-red-600">Oferta</Badge>}
                      {product.isFeatured && <Badge className="bg-purple-500 hover:bg-purple-600">Destacado</Badge>}
                    </div>
                  </div>
                  <CardContent className="p-4">
                  {/*   <div className="mb-2">{renderRatingStars(product.rating)}</div> */}
                    <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                    <CardDescription className="mt-2 line-clamp-2">{product.description}</CardDescription>
                    <div className="mt-3 flex items-center">
                     {/*  {product.discountPrice ? (
                        <>
                          <span className="text-lg font-bold text-primary">${product.discountPrice.toFixed(2)}</span>
                          <span className="ml-2 text-sm line-through text-muted-foreground">
                            ${product.price.toFixed(2)}
                          </span>
                          <Badge variant="outline" className="ml-auto text-red-500 border-red-200">
                            {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% dto.
                          </Badge>
                        </>
                      ) : (
                   
                      )} */}
                           <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                           {product.category === "lambrin" || product.category==='piedras' ?
                           <span className="ml-2 text-sm  text-muted-foreground">
                            ${product?.boxPrice?.toFixed(2)} por caja con {product?.boxQuantity} piezas
                          </span> : null}

                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    {/* <span className="text-sm text-muted-foreground">
                      {product.stock > 10
                        ? "En stock"
                        : product.stock > 0
                          ? `¡Solo ${product.stock} disponibles!`
                          : "Agotado"}
                    </span> */}
                    <ProductDetailModal product={product} />
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-xl text-muted-foreground">
                No se encontraron productos que coincidan con tu búsqueda.
              </p>
              <Button
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("all")
                  setSearchQuery("")
                }}
              >
                Ver todos los productos
              </Button>
            </div>
          )}
        </div>

        {/* Paginación */}
       {/*  {filteredProducts.length > 0 && (
          <div className="flex justify-center gap-2 mt-12">
            <Button variant="outline" size="icon">
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
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="sr-only">Anterior</span>
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="icon">
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
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              <span className="sr-only">Siguiente</span>
            </Button>
          </div>
        )} */}
      </div>
    </section>
  )
}
