"use client"

import { Shield, Glasses, Sparkles, Eye } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description:
      "Trabalhamos apenas com marcas renomadas e materiais de primeira linha. Garantia total em todas as armações e lentes.",
  },
  {
    icon: Glasses,
    title: "Várias Opções",
    description:
      "Mais de 500 modelos diferentes em nosso acervo. De clássicos atemporais a tendências da moda internacional.",
  },
  {
    icon: Sparkles,
    title: "Exclusividade",
    description:
      "Coleções limitadas e modelos exclusivos que você não encontra em outro lugar. Seja único, seja você.",
  },
  {
    icon: Eye,
    title: "Exame Gratuito",
    description:
      "Avaliação oftalmológica completa sem custo. Cuide da sua visão com profissionais especializados.",
  },
]

export function FeaturesSection() {
  return (
    <section
      id="diferenciais"
      className="bg-black py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Glow decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A227]/10 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">

          <p className="text-[#C9A227] font-medium tracking-[0.3em] text-xs uppercase mb-4">
            Por que nos escolher
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] max-w-3xl mx-auto tracking-tight">
            Diferenciais que fazem a{" "}
            <span className="relative inline-block text-[#C9A227]">
              diferença
            </span>
          </h2>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {features.map((feature, index) => {

            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="group relative bg-neutral-900 p-8 md:p-10 rounded-xl border border-white/5 hover:border-[#C9A227]/40 transition-all duration-500 overflow-hidden"
              >

                {/* Número decorativo */}
<span className="absolute top-6 right-6 text-7xl font-black text-[#C9A227]/60 group-hover:text-[#C9A227] transition-colors select-none">                  0{index + 1}
                </span>

                <div className="relative z-10">

                  {/* Ícone */}
                  <div className="w-16 h-16 bg-[#C9A227] flex items-center justify-center mb-6 rounded-md">

                    <Icon className="w-8 h-8 text-black" />

                  </div>

                  {/* Conteúdo */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {feature.description}
                  </p>

                </div>

                {/* Linha dourada animada */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A227] group-hover:w-full transition-all duration-500" />

              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">

          <p className="text-gray-400 text-lg mb-6">
            Pronto para transformar sua visão?
          </p>

          <a
            href="#contato"
            className="inline-flex items-center gap-3 bg-[#C9A227] text-black px-10 py-4 font-semibold text-lg rounded-full hover:brightness-110 transition-all"
          >

            Venha nos visitar

            <span className="w-8 h-8 bg-black flex items-center justify-center rounded-full">
              <svg
                className="w-4 h-4 text-[#C9A227]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

          </a>

        </div>

      </div>
    </section>
  )
}