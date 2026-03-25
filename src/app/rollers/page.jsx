import Image from "next/image";

export default function page() {
  return (
    <main className="bg-gray-100 text-gray-800">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-r from-[#3E448A] to-[#7A548E] text-white">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Rollers Modernos a Medida
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Elegancia, control de luz y diseño minimalista para tu hogar u oficina.
          </p>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#3E448A]">
          Soluciones modernas para tus ventanas
        </h2>
        <p className="mt-4 text-gray-600">
          Instalamos rollers personalizados que se adaptan perfectamente a tu espacio,
          brindando comodidad, estilo y funcionalidad.
        </p>
      </section>

      {/* TIPOS DE ROLLERS */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#3E448A] mb-10">
          Tipos de Rollers
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Roller Blackout */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold text-[#7A548E]">
              Roller Blackout
            </h3>
            <p className="text-gray-600 mt-2">
              Bloqueo total de luz, ideal para dormitorios y salas de cine.
            </p>
          </div>

          {/* Roller Screen */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold text-[#7A548E]">
              Roller Screen
            </h3>
            <p className="text-gray-600 mt-2">
              Permite el paso de luz manteniendo privacidad y vista exterior.
            </p>
          </div>

          {/* Roller Duo */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold text-[#7A548E]">
              Roller Duo (Zebra)
            </h3>
            <p className="text-gray-600 mt-2">
              Alterna entre luz y privacidad con un diseño moderno y elegante.
            </p>
          </div>

        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#3E448A] mb-10">
          Beneficios de los Rollers
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

          <div>
            <p className="font-semibold text-[#7A548E]">✔ Control de luz</p>
          </div>

          <div>
            <p className="font-semibold text-[#7A548E]">✔ Fácil limpieza</p>
          </div>

          <div>
            <p className="font-semibold text-[#7A548E]">✔ Diseño moderno</p>
          </div>

          <div>
            <p className="font-semibold text-[#7A548E]">✔ Instalación rápida</p>
          </div>

        </div>
      </section>

      {/* PROCESO */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#3E448A] mb-10">
          Nuestro Proceso
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

          <div>
            <div className="text-3xl font-bold text-[#7A548E]">1</div>
            <p className="mt-2">Medición en tu hogar</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-[#7A548E]">2</div>
            <p className="mt-2">Selección de material</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-[#7A548E]">3</div>
            <p className="mt-2">Fabricación</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-[#7A548E]">4</div>
            <p className="mt-2">Instalación</p>
          </div>

        </div>
      </section>

      {/* GALERÍA (placeholder para imágenes) */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#3E448A] mb-10">
          Trabajos Realizados
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          <div className="h-52 bg-gray-200 rounded-xl"></div>
          <div className="h-52 bg-gray-200 rounded-xl"></div>
          <div className="h-52 bg-gray-200 rounded-xl"></div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3E448A]">
          Cotiza tus rollers ahora
        </h2>
        <p className="mt-4 text-gray-600">
          Te asesoramos gratis y vamos hasta tu casa
        </p>

        <a 
          href="https://wa.me/51999999999"
          className="inline-block mt-6 bg-[#7A548E] text-white px-6 py-3 rounded-xl"
        >
          Escribir por WhatsApp
        </a>
      </section>

    </main>
  );
}