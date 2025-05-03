"use client"

import { useState, useEffect } from "react"
import { Check, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type ColorTheme = {
  name: string
  primary: string
  secondary: string
  accent: string
}

const colorThemes: ColorTheme[] = [
  {
    name: "Default",
    primary: "221.2 83.2% 53.3%",
    secondary: "217.2 32.6% 17.5%",
    accent: "210 40% 96.1%",
  },
  {
    name: "Púrpura",
    primary: "262.1 83.3% 57.8%",
    secondary: "300 20% 20%",
    accent: "270 40% 96.1%",
  },
  {
    name: "Esmeralda",
    primary: "142.1 76.2% 36.3%",
    secondary: "155 30% 15.9%",
    accent: "150 40% 96.1%",
  },
  {
    name: "Rosa",
    primary: "346.8 77.2% 49.8%",
    secondary: "355 30% 17.5%",
    accent: "350 40% 96.1%",
  },
  {
    name: "Ámbar",
    primary: "38 92% 50%",
    secondary: "30 30% 17.5%",
    accent: "35 40% 96.1%",
  },
]

export function ColorThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<string>("Default")

  // Cargar tema guardado al iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme")
    if (savedTheme) {
      setCurrentTheme(savedTheme)
      applyColorTheme(savedTheme)
    }
  }, [])

  const applyColorTheme = (themeName: string) => {
    const theme = colorThemes.find((t) => t.name === themeName)
    if (!theme) return

    // Aplicar variables CSS al elemento root
    document.documentElement.style.setProperty("--primary", theme.primary)
    document.documentElement.style.setProperty("--secondary", theme.secondary)
    document.documentElement.style.setProperty("--accent", theme.accent)

    // Actualizar también las variables para el modo oscuro
    const isDark = document.documentElement.classList.contains("dark")
    if (isDark) {
      // Ajustar el brillo para el modo oscuro
      document.documentElement.style.setProperty("--primary", adjustColorForDarkMode(theme.primary))
    }

    // Guardar preferencia
    localStorage.setItem("color-theme", themeName)
    setCurrentTheme(themeName)
  }

  // Función para ajustar el color para modo oscuro (aumentar brillo)
  const adjustColorForDarkMode = (hslColor: string): string => {
    const parts = hslColor.split(" ")
    if (parts.length === 3) {
      const h = parts[0]
      const s = parts[1]
      // Aumentar el brillo (lightness) para el modo oscuro
      const l = Number.parseFloat(parts[2]) + 10 + "%"
      return `${h} ${s} ${l}`
    }
    return hslColor
  }

  // Escuchar cambios en el tema claro/oscuro
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class" && currentTheme !== "Default") {
          // Reaplicar el tema cuando cambia entre claro/oscuro
          applyColorTheme(currentTheme)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [currentTheme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Cambiar colores">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Cambiar colores</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {colorThemes.map((theme) => (
          <DropdownMenuItem
            key={theme.name}
            onClick={() => applyColorTheme(theme.name)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div
              className="h-4 w-4 rounded-full"
              style={{ backgroundColor: `hsl(${theme.primary})` }}
              aria-hidden="true"
            />
            <span>{theme.name}</span>
            {currentTheme === theme.name && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
