import { Card, CardContent } from "@/components/ui/card"
import { Zap, Paintbrush, Wrench, Droplets } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Eletricista",
    items: ["Instalação elétrica", "Manutenção", "Fiação", "Quadros elétricos"],
  },
  {
    icon: Wrench,
    title: "Jardinagem",
    items: ["Corte de grama", "Manutenção de jardim", "Plantio e poda", "Fertilização", "Projeto jardim"],
  },
  {
    icon: Paintbrush,
    title: "Pinturas",
    items: ["Pintura residencial", "Pintura comercial", "Impermeabilização de lajes"],
  },
  {
    icon: Droplets,
    title: "Serviços Gerais",
    items: ["Residencial", "Empresarial", "Condomínios", "Marido de aluguel"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-balance text-3xl font-bold text-foreground md:text-4xl">Nossos Serviços</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Soluções completas para todas as necessidades</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group border-2 transition-all hover:border-secondary hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
