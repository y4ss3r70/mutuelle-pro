"use client";

import { motion } from "framer-motion";

export default function WhyChoose() {
  const avantages = [
    {
      title: "Jusqu'à 40% d'économies",
      description:
        "Comparez plusieurs mutuelles santé et trouvez la meilleure offre.",
    },
    {
      title: "Réponse rapide",
      description:
        "Recevez votre devis personnalisé en moins de 2 minutes.",
    },
    {
      title: "Sans engagement",
      description:
        "La demande de devis est gratuite et sans aucune obligation.",
    },
    {
      title: "Conseillers experts",
      description:
        "Nos spécialistes vous accompagnent gratuitement.",
    },
  ];

  return (
    <section id="garanties" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Pourquoi choisir MutuellePro ?
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-16">
          Des milliers de personnes nous font confiance.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {avantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-5xl mb-4">✅</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}