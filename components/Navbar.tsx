"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3">
          <Image
            src="/images/france-logo.png"
            alt="France"
            width={55}
            height={55}
          />

          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              Mutuelle Santé
            </h1>

            <p className="text-sm text-gray-500">
              Comparateur Français 🇫🇷
            </p>
          </div>
        </a>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <a href="#accueil" className="hover:text-blue-700 transition">
            Accueil
          </a>

          <a href="#garanties" className="hover:text-blue-700 transition">
            Garanties
          </a>

          <a href="#avantages" className="hover:text-blue-700 transition">
            Avantages
          </a>

          <a href="#faq" className="hover:text-blue-700 transition">
            FAQ
          </a>

          <a href="#contact" className="hover:text-blue-700 transition">
            Contact
          </a>

        </nav>

        {/* Partie droite */}
        <div className="flex items-center gap-5">

          <div className="hidden lg:block text-right">
            <p className="text-xs text-gray-500">
              Conseillers disponibles
            </p>

            <p className="text-lg font-bold text-blue-700">
              📞 01 89 45 23 10
            </p>
          </div>

          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
          >
            Obtenir mon devis
          </a>

        </div>

      </div>
    </header>
  );
}