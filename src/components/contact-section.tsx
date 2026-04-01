import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Fale Conosco</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Atendimento em Porto Alegre e região</p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <Card className="border-2 transition-all hover:border-secondary hover:shadow-xl">
            <CardContent className="flex flex-col items-center gap-5 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 shadow-lg">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-foreground">WhatsApp</h3>
                <p className="mb-1 text-sm text-muted-foreground">Atendimento rápido</p>
                <p className="mb-4 text-lg font-bold text-primary">(51) 98473-5427</p>
                <Button
                  onClick={() =>
                    window.open("https://wa.me/5551984735427?text=Olá, gostaria de solicitar um orçamento!", "_blank")
                  }
                  className="bg-secondary text-white hover:bg-secondary/90"
                >
                  Enviar Mensagem
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 transition-all hover:border-primary hover:shadow-xl">
            <CardContent className="flex flex-col items-center gap-5 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-foreground">Localização</h3>
                <p className="mb-2 text-sm text-muted-foreground">Atendemos</p>
                <p className="text-xl font-bold text-primary">Porto Alegre - RS</p>
                <p className="text-sm text-muted-foreground">e região metropolitana</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
