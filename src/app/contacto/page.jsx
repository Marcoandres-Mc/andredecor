import React from 'react'
import Link from 'next/link';

export default function page() {
  return (
    <>
    {/* --- SECCIÓN CONTACTO --- */}
      <section id="contacto" className="py-24 bg-[#3E448A] text-white rounded-t-[50px]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-serif font-bold mb-6">CONTACTO</h2>
          <p className="text-xl font-light mb-16 opacity-80 max-w-xl mx-auto">
            Estamos listos para hacer realidad tu proyecto. Contáctanos por cualquier medio para una cotización sin compromiso.
          </p>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16">
            {[
              { icon: "📞", title: "Teléfono", value: "+32 (0) 538-7980", href: "tel:+325387980" },
              { icon: "✉️", title: "Correo", value: "contacto@andredecor.pe", href: "mailto:contacto@andredecor.pe" },
              { icon: "📍", title: "Ubicación", value: "Calle Decor, 123 - Lima", href: "#" },
            ].map((item, index) => (
              <Link key={index} href={item.href} className="bg-white/10 p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition flex flex-col items-center group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition">{item.icon}</div>
                <p className="text-sm uppercase tracking-widest opacity-70 mb-2">{item.title}</p>
                <p className="text-xl font-semibold break-all">{item.value}</p>
              </Link>
            ))}
          </div>

          <Link href="https://wa.me/tu_numero_aqui" target="_blank" className="inline-block bg-[#7A548E] text-white px-12 py-5 rounded-full text-2xl font-bold shadow-2xl hover:bg-white hover:text-[#7A548E] hover:scale-105 transition duration-300 uppercase tracking-wider">
            Chatear por WhatsApp
          </Link>
        </div>
      </section>

    </>
  )
};
