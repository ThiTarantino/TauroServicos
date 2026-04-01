"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { X } from "lucide-react"

/*
 * GALERIA DE TRABALHOS
 * 
 * Para adicionar ou trocar fotos:
 * 1. Coloque suas imagens na pasta /public/galeria/
 * 2. Edite o array abaixo com o nome do arquivo e descrição
 * 
 * Exemplo: { src: "/galeria/minha-foto.jpg", alt: "Descrição da foto" }
 */
const galleryImages = [
  {
    src: "/galeria/trabalho-1.jpg",
    alt: "Instalação elétrica profissional",
  },
  {
    src: "/galeria/trabalho-2.jpg",
    alt: "Pintura interna residencial",
  },
  {
    src: "/galeria/trabalho-3.jpg",
    alt: "Serviços de alvenaria",
  },
  {
    src: "/galeria/trabalho-4.jpg",
    alt: "Reforma de banheiro",
  },
  {
    src: "/galeria/trabalho-5.jpg",
    alt: "Pintura externa de fachada",
  },
  {
    src: "/galeria/trabalho-6.jpg",
    alt: "Quadro elétrico moderno",
  },
  {
    src: "/galeria/trabalho-7.jpg",
    alt: "Jardinagem e paisagismo",
  },
  {
    src: "/galeria/trabalho-8.jpg",
    alt: "Manutenção residencial",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="galeria" className="bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-balance text-3xl font-bold text-foreground md:text-4xl">Galeria de Trabalhos</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Veja a qualidade dos nossos projetos realizados</p>
        </div>

        <div className="grid grid-cols-4 gap-3 md:gap-4">
          {/* Primeira linha: 2 grandes + 2 pequenos */}
          <div
            className="group relative col-span-2 row-span-2 cursor-pointer overflow-hidden rounded-xl bg-muted shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl"
            onClick={() => setSelectedImage(0)}
          >
            <img
              src={galleryImages[0].src || "/placeholder.svg"}
              alt={galleryImages[0].alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-bold text-white">{galleryImages[0].alt}</p>
              </div>
            </div>
          </div>

          <div
            className="group relative col-span-2 cursor-pointer overflow-hidden rounded-xl bg-muted shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl"
            onClick={() => setSelectedImage(1)}
          >
            <img
              src={galleryImages[1].src || "/placeholder.svg"}
              alt={galleryImages[1].alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-xs font-bold text-white md:text-sm">{galleryImages[1].alt}</p>
              </div>
            </div>
          </div>

          <div
            className="group relative col-span-2 cursor-pointer overflow-hidden rounded-xl bg-muted shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl"
            onClick={() => setSelectedImage(2)}
          >
            <img
              src={galleryImages[2].src || "/placeholder.svg"}
              alt={galleryImages[2].alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-xs font-bold text-white md:text-sm">{galleryImages[2].alt}</p>
              </div>
            </div>
          </div>

          {/* Restante das imagens */}
          {galleryImages.slice(3).map((image, index) => (
            <div
              key={index + 3}
              className="group relative col-span-2 cursor-pointer overflow-hidden rounded-xl bg-muted shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl md:col-span-1"
              onClick={() => setSelectedImage(index + 3)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-xs font-bold text-white">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={() =>
              window.open("https://wa.me/5551984735427?text=Olá, vi a galeria e gostaria de um orçamento!", "_blank")
            }
            className="bg-secondary text-white hover:bg-secondary/90 hover:scale-105 transition-all shadow-lg"
          >
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Solicitar Orçamento
          </Button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              className="max-h-[85vh] w-full max-w-5xl rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  )
}
