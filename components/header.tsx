"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3 transition-transform hover:scale-105">
          {/* LOGO: Troque a imagem em /public/logo.png */}
          <img 
            src="/logo.png" 
            alt="Logo ServiçosTauro" 
            className="h-12 w-12 rounded-xl object-cover shadow-lg"
          />
          <div>
            <span className="block text-xl font-bold leading-none text-primary">ServiçosTauro</span>
            <span className="block text-xs font-semibold leading-relaxed text-secondary">Força do Touro</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-sm font-medium text-foreground transition-colors hover:text-secondary"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-sm font-medium text-foreground transition-colors hover:text-secondary"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-sm font-medium text-foreground transition-colors hover:text-secondary"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("galeria")}
            className="text-sm font-medium text-foreground transition-colors hover:text-secondary"
          >
            Galeria
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-sm font-medium text-foreground transition-colors hover:text-secondary"
          >
            Contato
          </button>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            onClick={() =>
              window.open("https://wa.me/5551984735427?text=Olá, gostaria de solicitar um orçamento!", "_blank")
            }
            className="bg-secondary text-white hover:bg-secondary/90"
          >
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-white md:hidden">
          <nav className="container mx-auto flex flex-col gap-3 px-4 py-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left text-sm font-medium text-foreground transition-colors hover:text-secondary"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-left text-sm font-medium text-foreground transition-colors hover:text-secondary"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-left text-sm font-medium text-foreground transition-colors hover:text-secondary"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-left text-sm font-medium text-foreground transition-colors hover:text-secondary"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-left text-sm font-medium text-foreground transition-colors hover:text-secondary"
            >
              Contato
            </button>
            <Button
              onClick={() =>
                window.open("https://wa.me/5551984735427?text=Olá, gostaria de solicitar um orçamento!", "_blank")
              }
              className="bg-secondary text-white hover:bg-secondary/90"
            >
              Fale no WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
