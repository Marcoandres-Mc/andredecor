"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logoAndreDecor from '../../public/logo.png';

export default function Header() {
  return (
     <>
            {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href={`/home`} className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Image 
              src={logoAndreDecor} 
              alt="Andre Decor Logo" 
              width={50} 
              height={50} 
              className="object-contain"
            />
            <span className="text-2xl font-serif font-bold text-[#3E448A] tracking-tight">
              ANDRE <span className="text-[#7A548E]">DECOR</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-[#3E448A]">
            <Link href={'/quienes-somos'}>
            <span className="hover:text-[#7A548E] transition duration-300">
              Quienes Somos
            </span>
          </Link>
            {['Cortinas','Rollers','Forro', 'Servicios', 'Lavado', 'Contacto'].map(item => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-[#7A548E] transition duration-300">
                {item}
              </Link>
            ))}
          </div>
          
          <button className="md:hidden text-[#3E448A] text-2xl">☰</button>
        </nav>
      </header>
        </>
  )
}

