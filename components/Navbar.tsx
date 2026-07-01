export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">
          Mutuelle<span className="text-gray-800">Pro</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">

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

        {/* Bouton */}
        <button className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition">
          Devis Gratuit
        </button>

      </div>
    </header>
  );
}