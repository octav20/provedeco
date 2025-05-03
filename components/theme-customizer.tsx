"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Paintbrush, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"

type ColorOption = {
  name: string
  value: string
  foreground: string
}

const primaryColors: ColorOption[] = [
  { name: "Azul", value: "hsl(221.2 83.2% 53.3%)", foreground: "hsl(210 40% 98%)" },
  { name: "Púrpura", value: "hsl(262.1 83.3% 57.8%)", foreground: "hsl(210 40% 98%)" },
  { name: "Verde", value: "hsl(142.1 76.2% 36.3%)", foreground: "hsl(210 40% 98%)" },
  { name: "Rosa", value: "hsl(346.8 77.2% 49.8%)", foreground: "hsl(210 40% 98%)" },
  { name: "Ámbar", value: "hsl(38 92% 50%)", foreground: "hsl(210 40% 98%)" },
  { name: "Rojo", value: "hsl(0 84.2% 60.2%)", foreground: "hsl(210 40% 98%)" },
  { name: "Turquesa", value: "hsl(184 100% 38.2%)", foreground: "hsl(210 40% 98%)" },
  { name: "Naranja", value: "hsl(24.6 95% 53.1%)", foreground: "hsl(210 40% 98%)" },
]

const radiusOptions = [
  { name: "Cuadrado", value: "0rem" },
  { name: "Pequeño", value: "0.3rem" },
  { name: "Medio", value: "0.5rem" },
  { name: "Grande", value: "0.75rem" },
  { name: "Completo", value: "1rem" },
]

export function ThemeCustomizer() {
  const { theme, setTheme } = useTheme()
  const [primaryColor, setPrimaryColor] = useState<string | null>(null)
  const [radius, setRadius] = useState<string | null>(null)

  const applyPrimaryColor = (color: ColorOption) => {
    document.documentElement.style.setProperty("--primary", color.value)
    document.documentElement.style.setProperty("--primary-foreground", color.foreground)
    setPrimaryColor(color.name)
    localStorage.setItem("primary-color", color.name)
  }

  const applyRadius = (value: string) => {
    document.documentElement.style.setProperty("--radius", value)
    setRadius(value)
    localStorage.setItem("radius", value)
  }

  // Cargar preferencias guardadas
  useEffect(() => {
    const savedPrimaryColor = localStorage.getItem("primary-color")
    const savedRadius = localStorage.getItem("radius")
  
    if (savedPrimaryColor) {
      const color = primaryColors.find((c) => c.name === savedPrimaryColor)
      if (color) applyPrimaryColor(color)
    }
  
    if (savedRadius) {
      applyRadius(savedRadius)
    }
  }, [])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed bottom-4 right-4 h-10 w-10 rounded-full shadow-lg">
          <Paintbrush className="h-5 w-5" />
          <span className="sr-only">Personalizar tema</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <SheetHeader className="mb-6">
          <SheetTitle>Personalizar Tema</SheetTitle>
          <SheetDescription>Personaliza el aspecto del sitio a tu gusto.</SheetDescription>
        </SheetHeader>
        <Tabs defaultValue="color">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="color">Color</TabsTrigger>
            <TabsTrigger value="radius">Bordes</TabsTrigger>
            <TabsTrigger value="mode">Modo</TabsTrigger>
          </TabsList>
          <TabsContent value="color" className="space-y-4 py-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Color Principal</h3>
              <div className="grid grid-cols-3 gap-2">
                {primaryColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => applyPrimaryColor(color)}
                    className={`h-8 rounded-md text-xs ${
                      primaryColor === color.name ? "ring-2 ring-primary ring-offset-2" : "ring-1 ring-border"
                    }`}
                    style={{ backgroundColor: color.value, color: color.foreground }}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="radius" className="space-y-4 py-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Bordes Redondeados</h3>
              <div className="grid grid-cols-3 gap-2">
                {radiusOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => applyRadius(option.value)}
                    className={`flex h-8 items-center justify-center rounded-md px-2 text-xs ${
                      radius === option.value ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="mode" className="space-y-4 py-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Modo</h3>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setTheme("light")}
                  className={`flex h-8 items-center justify-center rounded-md px-2 text-xs ${
                    theme === "light" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  Claro
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`flex h-8 items-center justify-center rounded-md px-2 text-xs ${
                    theme === "dark" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  Oscuro
                </button>
                <button
                  onClick={() => setTheme("system")}
                  className={`flex h-8 items-center justify-center rounded-md px-2 text-xs ${
                    theme === "system" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  Sistema
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-6 flex justify-between">
          <Button
            variant="outline"
            onClick={() => {
              // Restablecer valores por defecto
              document.documentElement.style.removeProperty("--primary")
              document.documentElement.style.removeProperty("--primary-foreground")
              document.documentElement.style.removeProperty("--radius")
              localStorage.removeItem("primary-color")
              localStorage.removeItem("radius")
              setPrimaryColor(null)
              setRadius(null)
            }}
          >
            Restablecer
          </Button>
          <SheetClose asChild>
            <Button variant="outline">
              <X className="mr-2 h-4 w-4" />
              Cerrar
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
