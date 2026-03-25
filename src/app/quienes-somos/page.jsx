
export default function page() {
    return (
        <main className="bg-gray-100 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#3E448A] to-[#7A548E] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Sobre Nosotros
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Conoce más sobre Andre Decor y nuestro compromiso con la calidad
        </p>
      </section>

      {/* HISTORIA */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#3E448A]">
          Nuestra Historia
        </h2>
        <p className="mt-4 text-gray-600">
          En Andre Decor nos especializamos en la renovación y decoración de espacios,
          ofreciendo servicios de forro de muebles, cortinas, rollers y lavado profesional.
          Nuestro objetivo es transformar tu hogar con soluciones modernas, elegantes y accesibles.
        </p>
      </section>

      {/* IMAGEN (equipo o trabajo) */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <div className="h-64 bg-gray-200 rounded-2xl"></div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="bg-white py-16 px-6">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto text-center">

          <div>
            <h3 className="text-2xl font-bold text-[#3E448A]">Misión</h3>
            <p className="mt-3 text-gray-600">
              Brindar servicios de alta calidad en decoración y renovación,
              mejorando los espacios de nuestros clientes con profesionalismo y detalle.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3E448A]">Visión</h3>
            <p className="mt-3 text-gray-600">
              Ser una empresa líder en decoración de interiores en Lima,
              reconocida por nuestra calidad, confianza y atención personalizada.
            </p>
          </div>

        </div>
      </section>

      {/* VALORES */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#3E448A] mb-10">
          Nuestros Valores
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

          <div>
            <p className="font-semibold text-[#7A548E]">✔ Calidad</p>
          </div>

          <div>
            <p className="font-semibold text-[#7A548E]">✔ Responsabilidad</p>
          </div>

          <div>
            <p className="font-semibold text-[#7A548E]">✔ Puntualidad</p>
          </div>

          <div>
            <p className="font-semibold text-[#7A548E]">✔ Confianza</p>
          </div>

        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3E448A]">
          ¿Por qué elegir Andre Decor?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Porque ofrecemos un servicio completo: asesoría, diseño, fabricación e instalación
          directamente en tu hogar, garantizando resultados que superan expectativas.
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3E448A]">
          Trabajemos juntos
        </h2>
        <p className="mt-4 text-gray-600">
          Contáctanos y transforma tu espacio hoy mismo
        </p>

        <a 
          href="https://wa.me/51999999999"
          className="inline-block mt-6 bg-[#7A548E] text-white px-6 py-3 rounded-xl"
        >
          Escribir por WhatsApp
        </a>
      </section>

    </main>
    )
};