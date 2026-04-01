export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary shadow-lg">
                <svg
                  className="h-7 w-7 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12l7-7 7 7" />
                  <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                  <circle cx="16" cy="8" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="block text-xl font-bold">ServiçosTauro</span>
                <span className="block text-sm font-medium text-secondary">Força do Touro</span>
              </div>
            </div>
            <p className="text-sm text-white/80">Qualidade e dedicação em cada projeto</p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Elétrica</li>
              <li>Pintura</li>
              <li>Jardinagem</li>
              <li>Serviços Gerais</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold">Contato</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Porto Alegre - RS</li>
              <li className="font-semibold text-white">(51) 98473-5427</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} ServiçosTauro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
