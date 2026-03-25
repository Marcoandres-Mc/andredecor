import Image from "next/image";

export default function page() {
  return (
    <main className="bg-gray-100 text-gray-800">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-r from-[#3E448A] to-[#7A548E] text-white">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Forro de Muebles a Medida
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Renueva tus muebles sin comprar nuevos. Calidad, diseño y comodidad en tu hogar.
          </p>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#3E448A]">
          Dale una nueva vida a tus muebles
        </h2>
        <p className="mt-4 text-gray-600">
          Transformamos tus sofás, sillas y muebles antiguos en piezas modernas y elegantes,
          adaptadas a tu estilo y espacio.
        </p>
      </section>

      {/* TIPOS DE MUEBLES */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#3E448A] mb-10">
          ¿Qué muebles forramos?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold text-[#7A548E]">
              Sofás
            </h3>
            <p className="text-gray-600 mt-2">
              Renovación completa con telas resistentes y modernas.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold text-[#7A548E]">
              Sillas
            </h3>
            <p className="text-gray-600 mt-2">
              Ideal para comedores, oficinas y negocios.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold text-[#7A548E]">
              Cabeceras
            </h3>
            <p className="text-gray-600 mt-2">
              Diseños personalizados para dormitorios elegantes.
            </p>
          </div>

        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#3E448A] mb-10">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

          <div>
            <p className="font-semibold text-[#7A548E]">✔ Ahorro vs comprar nuevo</p>
          </div>

          <div>
            <p className="font-semibold text-[#7A548E]">✔ Diseños personalizados</p>
          </div>

          <div>
            <p className="font-semibold text-[#7A548E]">✔ Materiales de calidad</p>
          </div>

          <div>
            <p className="font-semibold text-[#7A548E]">✔ Trabajo a domicilio</p>
          </div>

        </div>
      </section>

      {/* ANTES Y DESPUÉS */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#3E448A] mb-10">
          Antes y Después
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <div className="h-60 bg-gray-200 rounded-xl"></div>
          <div className="h-60 bg-gray-200 rounded-xl"></div>

        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#3E448A] mb-10">
          Nuestro proceso
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

          <div>
            <div className="text-3xl font-bold text-[#7A548E]">1</div>
            <p className="mt-2">Evaluación del mueble</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-[#7A548E]">2</div>
            <p className="mt-2">Elección de tela</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-[#7A548E]">3</div>
            <p className="mt-2">Trabajo profesional</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-[#7A548E]">4</div>
            <p className="mt-2">Entrega e instalación</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3E448A]">
          Cotiza tu mueble ahora
        </h2>
        <p className="mt-4 text-gray-600">
          Envíanos una foto y te damos precio rápido
        </p>

        <a 
          href="https://wa.me/51999999999"
          className="inline-block mt-6 bg-[#7A548E] text-white px-6 py-3 rounded-xl"
        >
          Enviar foto por WhatsApp
        </a>
      </section>

    </main>
  );
}