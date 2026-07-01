export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Remplissez le formulaire",
      description:
        "Indiquez vos informations en moins d'une minute.",
    },
    {
      number: "02",
      title: "Nous comparons les offres",
      description:
        "Nous recherchons les meilleures mutuelles adaptées à votre profil.",
    },
    {
      number: "03",
      title: "Recevez votre devis",
      description:
        "Un conseiller vous contacte rapidement avec la meilleure offre.",
    },
  ];

  return (
    <section id="avantages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Comment ça marche ?
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-16">
          Obtenir votre devis est simple et rapide.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step) => (

            <div
              key={step.number}
              className="bg-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="text-5xl font-bold text-blue-700 mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}