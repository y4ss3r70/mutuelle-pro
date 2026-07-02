export default function Footer() {
  return (
    <footer
  id="contact"
  style={{
    background: "#0f172a",
    color: "white",
    padding: "60px 0",
    width: "100%",
  }}
>
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-blue-400">
              MutuelleFrance
            </h2>

            <p className="mt-5 text-gray-300 leading-8">
              Comparez gratuitement les meilleures mutuelles santé
              françaises et trouvez l'offre adaptée à votre budget.
            </p>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>📞 01 89 45 23 10</li>

              <li>✉️ contact@mutuelle-sante.fr</li>

              <li>🌐 www.mutuelle-sante.fr</li>

            </ul>

          </div>

          {/* Adresse */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Adresse
            </h3>

            <p className="text-gray-300 leading-8">
              10 Avenue des Champs-Élysées
              <br />
              75008 Paris
              <br />
              France
            </p>

          </div>

          {/* Horaires */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Horaires
            </h3>

            <p className="text-gray-300 leading-8">
              Lundi - Vendredi
              <br />
              09h00 - 18h00
            </p>

            <div className="flex gap-3 mt-6">

              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                f
              </div>

              <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center">
                X
              </div>

              <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center">
                IG
              </div>

              <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center">
                in
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-14 pt-8 text-center text-gray-400">

          © 2026 MutuelleFrance — Tous droits réservés.

        </div>

      </div>
    </footer>
  );
}