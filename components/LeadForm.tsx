"use client";

import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    dateNaissance: "",
    profession: "",
    ville: "",
    fumeur: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/api/lead", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});

      alert("Votre demande a été envoyée avec succès !");

      setForm({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        dateNaissance: "",
        profession: "",
        ville: "",
        fumeur: "",
      });
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi !");
    }
  };

  return (
    <section id="contact" className="py-24 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
  Comparez gratuitement les meilleures mutuelles santé
</h2>

<p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
  Recevez plusieurs devis personnalisés en moins de 2 minutes,
  gratuitement et sans engagement.
</p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 grid md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            placeholder="Nom"
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            required
          />

          <input
            type="text"
            name="prenom"
            value={form.prenom}
            onChange={handleChange}
            placeholder="Prénom"
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            required
          />

         <div className="flex w-full rounded-xl overflow-hidden border border-gray-300">

  <div className="w-20 bg-gray-100 flex items-center justify-center font-semibold text-gray-700">
    +33
  </div>

  <input
    type="tel"
    name="telephone"
    value={form.telephone}
    onChange={handleChange}
    placeholder="6 12 34 56 78"
    inputMode="numeric"
    className="w-full p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
    required
  />

</div>

          <input
            type="date"
            name="dateNaissance"
            value={form.dateNaissance}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            required
          />

          <select
            name="profession"
            value={form.profession}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            required
          >
            <option value="">Profession</option>
<option value="Salarié">Salarié</option>
<option value="Fonctionnaire">Fonctionnaire</option>
<option value="Indépendant">Indépendant</option>
<option value="Chef d'entreprise">Chef d'entreprise</option>
<option value="Retraité">Retraité</option>
<option value="Étudiant">Étudiant</option>
<option value="Sans emploi">Sans emploi</option>
          </select>

          <select
  name="ville"
  value={form.ville}
  onChange={handleChange}
  className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
  required
>
  <option value="">Ville</option>
  <option value="Paris">Paris</option>
  <option value="Marseille">Marseille</option>
  <option value="Lyon">Lyon</option>
  <option value="Toulouse">Toulouse</option>
  <option value="Nice">Nice</option>
  <option value="Nantes">Nantes</option>
  <option value="Strasbourg">Strasbourg</option>
  <option value="Montpellier">Montpellier</option>
  <option value="Bordeaux">Bordeaux</option>
  <option value="Lille">Lille</option>
  <option value="Rennes">Rennes</option>
  <option value="Reims">Reims</option>
  <option value="Le Havre">Le Havre</option>
  <option value="Saint-Étienne">Saint-Étienne</option>
  <option value="Toulon">Toulon</option>
  <option value="Grenoble">Grenoble</option>
  <option value="Dijon">Dijon</option>
  <option value="Angers">Angers</option>
  <option value="Nîmes">Nîmes</option>
  <option value="Clermont-Ferrand">Clermont-Ferrand</option>
  <option value="Autre">Autre</option>
</select>

          <select
            name="fumeur"
            value={form.fumeur}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            required
          >
            <option value="">Fumeur ?</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>

         <button
  type="submit"
  className="md:col-span-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl py-5 text-xl font-bold shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
>
  Comparer gratuitement les mutuelles
</button>
          <div className="md:col-span-2 mt-6 flex flex-wrap justify-center gap-4">

  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold shadow-sm">
    Gratuit
  </span>

  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold shadow-sm">
    Sans engagement
  </span>

  <span className="px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-semibold shadow-sm">
    Réponse en moins de 2 minutes
  </span>

</div>


        </form>
      </div>
    </section>
  );
}