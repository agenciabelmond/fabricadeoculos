"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left - Info */}
          <div>
            <p className="text-[#C9A227] font-medium tracking-[0.3em] text-xs uppercase mb-4">
              Visite-nos
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[0.9] mb-6 lg:mb-8 tracking-tight">
              Venha conhecer
              <br />
              <span className="text-[#C9A227]">nossa loja</span>
            </h2>

            <p className="text-gray-600 text-lg mb-10 lg:mb-12 max-w-md leading-relaxed">
              Estamos prontos para ajudá-lo a encontrar o óculos perfeito.
              Nossa equipe especializada está à sua disposição.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">

              {/* Endereço */}
              <div className="flex gap-4 p-6 bg-black text-white rounded-lg border border-[#C9A227]/30 hover:border-[#C9A227] transition-all">
                <div className="w-14 h-14 bg-[#C9A227] flex items-center justify-center shrink-0 rounded-md">
                  <MapPin className="w-6 h-6 text-black" />
                </div>

                <div>
                  <p className="font-bold text-lg">
                    Endereço
                  </p>

                  <p className="text-white/70 text-sm md:text-base">
                    Av. Brasil, 1500 - Centro
                    <br />
                    São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex gap-4 p-6 bg-black text-white rounded-lg border border-[#C9A227]/30 hover:border-[#C9A227] transition-all">
                <div className="w-14 h-14 bg-[#C9A227] flex items-center justify-center shrink-0 rounded-md">
                  <Phone className="w-6 h-6 text-black" />
                </div>

                <div>
                  <p className="font-bold text-lg">
                    Telefone
                  </p>

                  <p className="text-white/70 text-sm md:text-base">
                    (11) 99999-9999
                    <br />
                    (11) 3333-3333
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-6 bg-black text-white rounded-lg border border-[#C9A227]/30 hover:border-[#C9A227] transition-all">
                <div className="w-14 h-14 bg-[#C9A227] flex items-center justify-center shrink-0 rounded-md">
                  <Mail className="w-6 h-6 text-black" />
                </div>

                <div>
                  <p className="font-bold text-lg">
                    E-mail
                  </p>

                  <p className="text-white/70 text-sm md:text-base">
                    contato@fabricadeoculos.com.br
                  </p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex gap-4 p-6 bg-black text-white rounded-lg border border-[#C9A227]/30 hover:border-[#C9A227] transition-all">
                <div className="w-14 h-14 bg-[#C9A227] flex items-center justify-center shrink-0 rounded-md">
                  <Clock className="w-6 h-6 text-black" />
                </div>

                <div>
                  <p className="font-bold text-lg">
                    Horário
                  </p>

                  <p className="text-white/70 text-sm md:text-base">
                    Seg - Sex: 9h às 19h
                    <br />
                    Sábado: 9h às 14h
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right - Map */}
          <div className="relative">
            <div className="lg:sticky lg:top-24">

              <div className="border-2 border-[#C9A227] rounded-xl overflow-hidden shadow-lg">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975978674!2d-46.65390682374868!3d-23.56510006176461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709825244789!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "420px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />

              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-3 w-full bg-[#C9A227] text-black p-5 font-semibold text-lg hover:bg-[#b8921f] transition-colors rounded-lg"
              >

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>

                Fale pelo WhatsApp
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}