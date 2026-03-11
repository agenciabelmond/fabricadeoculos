import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      
      {/* Main footer */}
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#C9A227] flex items-center justify-center rounded-sm">
                <span className="text-black font-black text-xl">F</span>
              </div>

              <div>
                <p className="font-black text-white text-lg leading-none tracking-tight">
                  FÁBRICA
                </p>
                <p className="text-[#C9A227] text-xs font-bold tracking-[0.15em]">
                  DE ÓCULOS
                </p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              Transformando a forma como você enxerga o mundo.
              Qualidade, estilo e atendimento excepcional.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[#C9A227] font-bold mb-5 text-xs uppercase tracking-[0.2em]">
              Links
            </p>

            <ul className="space-y-3">
              {["Início", "Coleções", "Diferenciais", "Contato"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-[#C9A227] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[#C9A227] font-bold mb-5 text-xs uppercase tracking-[0.2em]">
              Serviços
            </p>

            <ul className="space-y-3">
              {[
                "Exame de Vista",
                "Óculos de Grau",
                "Óculos de Sol",
                "Lentes de Contato",
                "Conserto de Óculos",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-[#C9A227] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-[#C9A227] font-bold mb-5 text-xs uppercase tracking-[0.2em]">
              Redes Sociais
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-md hover:bg-[#C9A227] hover:border-[#C9A227] transition-all group"
              >
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-black transition-colors" />
              </a>

              <a
                href="#"
                className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-md hover:bg-[#C9A227] hover:border-[#C9A227] transition-all group"
              >
                <Facebook className="w-5 h-5 text-white/70 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/40 text-sm">
            © 2024 Fábrica de Óculos. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-white/40 hover:text-[#C9A227] transition-colors text-sm"
            >
              Política de Privacidade
            </Link>

            <Link
              href="#"
              className="text-white/40 hover:text-[#C9A227] transition-colors text-sm"
            >
              Termos de Uso
            </Link>
          </div>

        </div>
      </div>

    </footer>
  )
}