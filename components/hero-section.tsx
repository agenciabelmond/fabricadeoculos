"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronDown } from "lucide-react"
import { useEffect } from "react"

export function HeroSection() {

  useEffect(() => {
    console.log("Hero premium loaded")
  }, [])

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      {/* Glow dourado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C9A227]/5 blur-[200px] pointer-events-none"/>
{/* Marquee */}
<div className="absolute top-16 md:top-20 left-0 right-0 bg-gradient-to-r from-[#C9A227] via-[#E5C76B] to-[#C9A227] py-2.5 overflow-hidden z-20">
  <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
    {[...Array(12)].map((_, i) => (
      <span
        key={i}
        className="mx-10 text-sm font-semibold text-black tracking-widest"
      >
        ÓCULOS PRONTOS EM 1 HORA
      </span>
    ))}
  </div>
</div>

      <div className="relative z-10 container mx-auto px-8 sm:px-10 md:px-6 pt-28 md:pt-32 pb-12 min-h-screen flex flex-col justify-center">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div className="space-y-8 max-w-[560px]">

            <div className="space-y-4">

              <p className="text-[#C9A227] font-medium tracking-[0.35em] text-xs uppercase">
                São João de Meriti — RJ
              </p>

              <div className="w-16 h-[2px] bg-[#C9A227]" />

              <h1 className="font-[var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-semibold text-white leading-[1.05] tracking-tight">
                FÁBRICA
                <br/>
                <span className="bg-gradient-to-r from-[#C9A227] via-[#F4D77C] to-[#C9A227] bg-clip-text text-transparent">
                  DE ÓCULOS
                </span>
              </h1>

            </div>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              Seus novos óculos prontos em até <strong className="text-white">1 hora</strong>.
              Atendimento rápido, exame de vista gratuito e armações que valorizam seu rosto.
            </p>

            <Button
              size="lg"
              className="w-[320px] sm:w-[360px] bg-gradient-to-r from-[#C9A227] via-[#E5C76B] to-[#C9A227] hover:brightness-110 text-black px-12 py-6 text-base font-semibold rounded-full flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5"/>
              Falar com a equipe
            </Button>

          </div>

          {/* RIGHT */}
          <div className="relative h-[450px] sm:h-[520px] lg:h-[620px] flex items-center justify-center">

            <div className="relative w-[90%] h-[85%] rounded-xl border border-[#C9A227]/40 p-[3px]">

              <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl">

                <Image
                  src="/katemoss.jpg"
                  alt="Mulher usando óculos modernos"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"/>

              </div>

            </div>

            {/* CARD */}
            <div className="absolute bottom-20 left-4 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] max-w-[240px] rounded-xl border border-[#C9A227]/20">

              <div className="inline-block bg-[#C9A227] text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-2">
                Exclusivo
              </div>

              <p className="text-sm text-black mt-1 leading-relaxed">
                Modelos que combinam com seu estilo e conforto para o dia a dia.
              </p>

            </div>

            <div className="absolute top-8 right-8 w-[70%] h-[70%] border border-[#C9A227]/30 rounded-xl -z-10"/>

          </div>

        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={36} className="text-white opacity-70"/>
      </div>

    </section>
  )
}