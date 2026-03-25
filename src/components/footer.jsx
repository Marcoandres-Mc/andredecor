"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logoAndreDecor from '../../public/logo.png';

export default function Footer() {
  return (
    <>
    {/* --- FOOTER --- */}
      <footer className="bg-gray-100 text-gray-600 py-10 border-t border-gray-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex items-center gap-3">
            <Image src={logoAndreDecor} alt="Andre Decor" width={30} height={30} />
            <span className="font-serif font-bold text-[#3E448A]">ANDRE DECOR</span>
            <span className="opacity-50">|</span>
            <p>&copy; 2026. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex gap-3 text-xs uppercase tracking-widest opacity-70">
            {['Legales', 'Servicios', 'Galería', 'Contacto'].map(item => (
                <Link key={item} href="#" className="hover:text-[#7A548E]">{item}</Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
