"use client"

import { Shield, Glasses, Sparkles, Eye } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description:
      "Trabalhamos com marcas renomadas e materiais de alta qualidade.",
  },
  {
    icon: Glasses,
    title: "Grande Variedade",
    description:
      "Mais de 500 modelos disponíveis para todos os estilos.",
  },
  {
    icon: Sparkles,
    title: "Exclusividade",
    description:
      "Coleções selecionadas e modelos diferenciados.",
  },
  {
    icon: Eye,
    title: "Exame Especializado",
    description:
      "Avaliação completa com profissionais capacitados.",
  },
]

export function FeaturesSection() {
  return (
    <section
      id="diferenciais"
      className="bg-black py-20 lg:py-24 relative overflow-hidden"
    >
      {/* glow decorativo */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A227]/10 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* header */}
        <div className="text-center mb-14 max-w-xl mx-auto">

          <p className="text-[#C9A227] tracking-[0.3em] text-xs uppercase mb-4">
            Diferenciais
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
            Uma experiência{" "}
            <span className="text-[#C9A227]">
              premium em ótica
            </span>
          </h2>

        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {features.map((feature, index) => {

            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="group flex items-start gap-4 p-5 bg-neutral-900/70 border border-white/5 rounded-lg hover:border-[#C9A227]/40 transition-all"
              >

                {/* icon */}
                <div className="w-10 h-10 bg-[#C9A227] flex items-center justify-center rounded-sm shrink-0">

                  <Icon className="w-5 h-5 text-black" />

                </div>

                {/* text */}
                <div>

                  <h3 className="text-base font-semibold text-white mb-1">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                </div>

              </div>
            )
          })}

        </div>

        {/* CTA */}
        <div className="mt-14 text-center">

          <a
            href="#contato"
            className="inline-block border border-[#C9A227] text-[#C9A227] px-7 py-3 text-sm font-medium hover:bg-[#C9A227] hover:text-black transition-colors"
          >
            Agendar atendimento
          </a>

        </div>

      </div>
    </section>
  )
}