export default function Gallery() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <div>

            <img
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200"
              alt="Médecin"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />

          </div>

          {/* TEXTE */}

          <div>

            <span className="text-blue-700 font-bold uppercase">
              Pourquoi nous ?
            </span>

            <h2 className="text-5xl font-bold mt-4 text-gray-900 leading-tight">
              Une mutuelle pensée pour protéger votre famille.
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-8">
              Nous comparons les meilleures compagnies afin de vous proposer
              une couverture santé adaptée à votre budget.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">

                <div className="text-4xl">
                  ✅
                </div>

                <div>

                  <h3 className="font-bold text-xl text-gray-900">
                    Jusqu'à 40% d'économies
                  </h3>

                  <p className="text-gray-600">
                    Comparez plusieurs mutuelles gratuitement.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="text-4xl">
                  ⚡
                </div>

                <div>

                  <h3 className="font-bold text-xl text-gray-900">
                    Réponse rapide
                  </h3>

                  <p className="text-gray-600">
                    Recevez votre devis en quelques minutes.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="text-4xl">
                  🛡️
                </div>

                <div>

                  <h3 className="font-bold text-xl text-gray-900">
                    Données sécurisées
                  </h3>

                  <p className="text-gray-600">
                    Vos informations restent totalement confidentielles.
                  </p>

                </div>

              </div>

            </div>

            <button className="mt-12 bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transition">
              Demander un devis
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}