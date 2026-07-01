export default function LeadForm() {
  return (
    <section
      id="contact"
      className="py-24 bg-blue-50"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Demandez votre devis gratuitement
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Remplissez le formulaire ci-dessous.
        </p>

        <form className="bg-white rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Nom"
            className="border rounded-xl p-4 text-gray-900 placeholder:text-gray-500"
          />

          <input
            type="text"
            placeholder="Prénom"
            className="border rounded-xl p-4 text-gray-900 placeholder:text-gray-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="border rounded-xl p-4 text-gray-900 placeholder:text-gray-500"
          />

          <input
            type="tel"
            placeholder="Téléphone"
            className="border rounded-xl p-4 text-gray-900 placeholder:text-gray-500"
          />

          <input
            type="date"
            className="border rounded-xl p-4 text-gray-900"
          />

          <select className="border rounded-xl p-4 text-gray-900">
            <option>Profession</option>
            <option>Salarié</option>
            <option>Indépendant</option>
            <option>Retraité</option>
            <option>Étudiant</option>
          </select>

          <select className="border rounded-xl p-4 text-gray-900">
            <option>Ville</option>
            <option>Casablanca</option>
            <option>Rabat</option>
            <option>Marrakech</option>
            <option>Tanger</option>
          </select>

          <select className="border rounded-xl p-4 text-gray-900">
            <option>Fumeur ?</option>
            <option>Oui</option>
            <option>Non</option>
          </select>

          <button
            className="md:col-span-2 bg-blue-700 text-white rounded-xl py-5 text-xl font-bold hover:bg-blue-800 transition"
          >
            Recevoir mon devis gratuitement
          </button>

        </form>

      </div>
    </section>
  );
}