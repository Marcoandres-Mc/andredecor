import Image from 'next/image';
import Link from 'next/link';
import logoAndreDecor from '../../public/logo.png';

// Definición de colores para referencia rápida en comentarios:
// Azul Íñigo Principal: #3E448A
// Púrpura de Acento: #7A548E

export default function Home() {
  const servicios = [
    { title: "FORROS PARA MUEBLES", desc: "A medida y premium.", icon: "🛋️" },
    { title: "CORTINAS Y ROLLERS", desc: "Estilo y funcionalidad.", icon: "🪟" },
    { title: "FORROS DE SILLAS", desc: "Protección con estilo.", icon: "🪑" },
    { title: "LAVADO PROFESIONAL", desc: "Muebles y cortinas impecables.", icon: "🧼" },
  ];

  const testimonios = [
    { text: "¡Increíble transformación! Mis muebles parecen nuevos con los forros. El servicio de instalación en casa fue impecable y muy profesional.", name: "María González", client: "Cliente Satisfecha" },
    { text: "Las cortinas rollers quedaron perfectas. Excelente calidad y atención.", name: "Juan Pérez", client: "Cliente de Rollers" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src={logoAndreDecor} 
              alt="Andre Decor Logo" 
              width={50} 
              height={50} 
              className="object-contain"
            />
            <span className="text-3xl font-serif font-bold text-[#3E448A] tracking-tight">
              ANDRE <span className="text-[#7A548E]">DECOR</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-[#3E448A]">
            {['Inicio', 'Servicios', 'Lavado', 'Galería', 'Contacto'].map(item => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#7A548E] transition duration-300">
                {item}
              </Link>
            ))}
          </div>
          
          <button className="md:hidden text-[#3E448A] text-2xl">☰</button>
        </nav>
      </header>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative bg-gray-50 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/hero-muebles.jpg" // COLOCA UNA FOTO ELEGANTE DE SALA AQUÍ
            alt="Interior elegante"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#3E448A] mb-6 leading-tight max-w-4xl mx-auto">
            RENOVA TU ESPACIO CON <span className="text-[#7A548E]">ELEGANCIA</span> Y CUIDADO
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto font-light">
            Expertos en forros de muebles, cortinas, rollers y lavado profesional a domicilio.
          </p>
          <Link href="#contacto" className="inline-block bg-[#3E448A] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#7A548E] hover:scale-105 transition duration-300 uppercase tracking-wider">
            SOLICITA TU COTIZACIÓN
          </Link>
        </div>
      </section>

      {/* --- SECCIÓN SERVICIOS --- */}
      <section id="servicios" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-[#7A548E]/30"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 border-2 border-[#7A548E] bg-white"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-[#7A548E]/50 transition duration-500 hover:-translate-y-2">
                <div className="text-6xl mb-8 transform group-hover:scale-110 transition duration-500">{servicio.icon}</div>
                <h3 className="text-xl font-serif font-bold text-[#3E448A] mb-4 tracking-tight group-hover:text-[#7A548E]">
                  {servicio.title}
                </h3>
                <p className="text-gray-600 font-light flex-grow">{servicio.desc}</p>
                <div className="w-12 h-1 bg-[#7A548E] mt-6 rounded-full opacity-50 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN LAVADO (Antes/Después) --- */}
      <section id="lavado" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <Image 
                src="/lavado-antes-despues.jpg" // COLOCA IMAGEN ANTES/DESPUES AQUÍ
                alt="Lavado de muebles antes y después"
                width={800}
                height={600}
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <p className="text-sm uppercase tracking-widest opacity-80">Nuestro Resultado</p>
                  <p className="text-xl font-semibold">Muebles Impecables</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3E448A] leading-tight">
                MUEBLES IMPECABLES: <span className="text-[#7A548E]">EL PODER</span> DEL LAVADO
              </h2>
              <p className="text-lg text-gray-700 font-light">
                Nuestro servicio profesional a domicilio utiliza tecnología avanzada para eliminar manchas profundas, ácaros y olores de tus muebles y cortinas, devolviéndoles su esplendor original sin que tengas que moverte de casa.
              </p>
              <ul className="space-y-3 text-gray-600 font-light">
                {['✅ Eliminación de manchas difíciles', '✅ Desinfección profunda anti-ácaros', '✅ Cuidado experto de telas delicadas', '✅ Secado rápido a domicilio'].map(item => (
                    <li key={item} className="flex items-center gap-2"> {item}</li>
                ))}
              </ul>
              <Link href="#contacto" className="inline-block mt-6 border-2 border-[#3E448A] text-[#3E448A] px-8 py-3 rounded-full font-semibold hover:bg-[#3E448A] hover:text-white transition duration-300 uppercase tracking-wider text-sm">
                Saber más sobre Lavado
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN TESTIMONIOS --- */}
      <section id="galería" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-serif font-bold text-[#3E448A] mb-16 uppercase tracking-wider">Testimonios</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonios.map((test, index) => (
              <div key={index} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 relative">
                <span className="text-8xl text-[#7A548E]/20 absolute top-4 left-6 font-serif">“</span>
                <p className="text-gray-700 italic text-lg font-light mb-8 relative z-10">{test.text}</p>
                <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                  <div className="w-12 h-12 bg-[#3E448A] rounded-full flex items-center justify-center text-white font-bold text-xl font-serif">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#3E448A]">{test.name}</p>
                    <p className="text-sm text-[#7A548E]">{test.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* --- FOOTER --- */}
      <footer className="bg-gray-100 text-gray-600 py-12 border-t border-gray-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex items-center gap-3">
            <Image src={logoAndreDecor} alt="Andre Decor" width={30} height={30} />
            <span className="font-serif font-bold text-[#3E448A]">ANDRE DECOR</span>
            <span className="opacity-50">|</span>
            <p>&copy; 2024. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex gap-3 text-xs uppercase tracking-widest opacity-70">
            {['Legales', 'Servicios', 'Galería', 'Contacto'].map(item => (
                <Link key={item} href="#" className="hover:text-[#7A548E]">{item}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}