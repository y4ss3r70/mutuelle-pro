"use client";

import { useState } from "react";

export default function FAQ() {
  const questions = [
    {
      question: "Le devis est-il gratuit ?",
      answer:
        "Oui. La demande de devis est totalement gratuite et sans engagement.",
    },
    {
      question: "Combien de temps pour recevoir une réponse ?",
      answer:
        "Généralement en moins de 2 minutes pendant les heures d'ouverture.",
    },
    {
      question: "Puis-je comparer plusieurs mutuelles ?",
      answer:
        "Oui. Nous comparons plusieurs compagnies afin de vous proposer la meilleure offre.",
    },
    {
      question: "Mes informations sont-elles sécurisées ?",
      answer:
        "Oui. Toutes vos données sont protégées et restent confidentielles.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Questions fréquentes
        </h2>

        {questions.map((item, index) => (

          <div
            key={index}
            className="border rounded-2xl mb-5 overflow-hidden shadow-sm"
          >

            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-lg"
            >

              {item.question}

              <span className="text-2xl">
                {open === index ? "-" : "+"}
              </span>

            </button>

            {open === index && (

              <div className="px-6 pb-6 text-gray-600">
                {item.answer}
              </div>

            )}

          </div>

        ))}

      </div>
    </section>
  );
}