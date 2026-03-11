"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    id: "feminino",
    number: "01",
    title: "FEMININO",
    description: "Armações sofisticadas que realçam sua personalidade",
    image: "/images/woman-glasses.jpg",
  },
  {
    id: "masculino",
    number: "02",
    title: "MASCULINO",
    description: "Design moderno para homens que valorizam estilo",
    image: "/images/man-glasses.jpg",
  },
  {
    id: "infantil",
    number: "03",
    title: "INFANTIL",
    description: "Conforto e durabilidade para os pequenos",
    image: "/images/kid-glasses.jpg",
  },
]

export function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("feminino")

  const activeItem = categories.find((c) => c.id === activeCategory)

  return (
    <section id="categorias" className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">

          <div>
            <p className="text-[#C9A227] font-medium tracking-[0.3em] text-xs uppercase mb-4">
              Nossas Categorias
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[0.9] tracking-tight">
              Óculos para
              <br />
              <span className="text-[#C9A227]">toda família</span>
            </h2>
          </div>

          <p className="text-gray-600 max-w-md text-lg leading-relaxed">
            Coleções exclusivas para todos os estilos e idades, com a qualidade que você merece.
          </p>

        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-12 gap-6">

          {/* IMAGEM PRINCIPAL COM BORDA DOURADA */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:h-[550px]">

            {/* Moldura dourada */}
            <div className="absolute inset-0 rounded-xl border-2 border-[#C9A227] pointer-events-none"></div>

            {/* Container da imagem */}
            <div className="relative w-full h-full overflow-hidden rounded-xl bg-gray-200 group">

              <Image
                src={activeItem?.image || "/images/woman-glasses.jpg"}
                alt={activeItem?.title || ""}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

                <div className="flex items-end justify-between">

                  <div>

                    <span className="text-[#C9A227] text-6xl md:text-7xl lg:text-8xl font-black opacity-40">
                      {activeItem?.number}
                    </span>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white -mt-2 md:-mt-4">
                      {activeItem?.title}
                    </h3>

                    <p className="text-gray-200 mt-2 max-w-xs text-sm md:text-base">
                      {activeItem?.description}
                    </p>

                  </div>

                  <button className="w-12 h-12 md:w-14 md:h-14 bg-[#C9A227] flex items-center justify-center hover:brightness-110 transition-colors shrink-0 rounded-md">
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* LISTA DE CATEGORIAS */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {categories.map((category) => (

              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-6 p-6 text-left transition-all duration-300 rounded-lg ${
                  activeCategory === category.id
                    ? "bg-black text-white"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >

                <span
                  className={`text-4xl lg:text-5xl font-black ${
                    activeCategory === category.id
                      ? "text-[#C9A227]"
                      : "text-gray-600"
                  }`}
                >
                  {category.number}
                </span>

                <div className="flex-1">

                  <h4 className="text-xl lg:text-2xl font-bold">
                    {category.title}
                  </h4>

                  <p className="text-sm mt-1 text-gray-400">
                    {category.description}
                  </p>

                </div>

                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-md ${
                    activeCategory === category.id
                      ? "bg-[#C9A227]"
                      : "border border-gray-700"
                  }`}
                >

                  <ArrowUpRight
                    className={`w-5 h-5 ${
                      activeCategory === category.id
                        ? "text-black"
                        : "text-gray-400"
                    }`}
                  />

                </div>

              </button>

            ))}

            {/* CARD DE DESTAQUE */}
            <div className="bg-[#C9A227] p-8 flex flex-col justify-center min-h-[180px] rounded-xl">

              <p className="text-black/60 text-xs uppercase tracking-[0.2em]">
                Prazo de Entrega
              </p>

              <p className="text-6xl lg:text-7xl font-black text-black mt-2 tracking-tight">
                1 HORA
              </p>

              <p className="text-black/70 mt-4 text-lg leading-relaxed">
                Seus óculos prontos enquanto você faz suas compras
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}