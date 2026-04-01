import { Card, CardContent } from "@/components/ui/Card"
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">
              Conheça Tauro Luetkemeyer
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground">
              <p>
                <strong className="font-bold text-primary">Tauro Luetkemeyer</strong> fundou a ServiçosTauro há 8 anos
                com uma missão clara: oferecer serviços de qualidade com a força e dedicação do touro.
              </p>
              <p>
                Com uma trajetória profissional diversificada que inclui experiência como caminhoneiro da Parmalat e
                especialização através de diversos cursos técnicos, Tauro construiu sua expertise em elétrica, pintura,
                jardinagem e manutenção geral.
              </p>
              <p>
                Hoje, a <strong className="font-bold text-primary">ServiçosTauro</strong> é referência em Porto Alegre e
                região, atendendo residências, empresas e condomínios com o mesmo compromisso de qualidade.
              </p>
            </div>

            <Card className="mt-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold text-primary">Diferenciais</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "8 anos no mercado",
                    "Profissionais qualificados",
                    "Materiais de qualidade",
                    "Orçamento sem compromisso",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-muted shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-14%20at%2016.20.34-TBECNPRaGCwmaf0Dgyzwniw2phgLi8.jpeg"
                  alt="Tauro Luetkemeyer e família"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-br from-secondary via-secondary to-secondary/80 p-6 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-5xl font-black">8</div>
                  <div className="text-sm font-bold">Anos de</div>
                  <div className="text-base font-bold">Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
