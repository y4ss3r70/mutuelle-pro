export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-blue-400">
              MutuellePro
            </h2>

            <p className="mt-4 text-gray-400">
              Comparez gratuitement les meilleures mutuelles santé au Maroc.
            </p>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-xl mb-4">
              Contact
            </h3>

            <p>📞 +212 6 12 34 56 78</p>

            <p className="mt-2">
              ✉ contact@mutuellepro.ma
            </p>

          </div>

          {/* Adresse */}

          <div>

            <h3 className="font-bold text-xl mb-4">
              Adresse
            </h3>

            <p>
              📍 Boulevard Zerktouni
            </p>

            <p>Casablanca - Maroc</p>

          </div>

          {/* Horaires */}

          <div>

            <h3 className="font-bold text-xl mb-4">
              Horaires
            </h3>

            <p>Lundi - Vendredi</p>

            <p>09:00 - 18:00</p>

            <p className="mt-4">
              Facebook • Instagram • LinkedIn
            </p>

          </div>

        </div>

        <hr className="my-10 border-gray-700"/>

        <p className="text-center text-gray-500">
          © 2026 MutuellePro. Tous droits réservés.
        </p>

      </div>
    </footer>
  );
}