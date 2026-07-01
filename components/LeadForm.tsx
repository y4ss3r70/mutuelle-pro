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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbziwCEbswrPXTBIfn9zFFd7hpsgCd5hNltaDUp3nGiyEvXSOv106Ea7Yl5zkbc748TW/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

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
    } catch (error) {
      alert("Erreur lors de l'envoi !");
    }
  };

  return (
    <section id="contact" className="py-24 bg-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Demandez votre devis gratuitement
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Remplissez le formulaire ci-dessous.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            placeholder="Nom"
            className="border rounded-xl p-4"
            required
          />

          <input
            type="text"
            name="prenom"
            value={form.prenom}
            onChange={handleChange}
            placeholder="Prénom"
            className="border rounded-xl p-4"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border rounded-xl p-4"
            required
          />

          <input
            type="tel"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            placeholder="Téléphone"
            className="border rounded-xl p-4"
            required
          />

          <input
            type="date"
            name="dateNaissance"
            value={form.dateNaissance}
            onChange={handleChange}
            className="border rounded-xl p-4"
            required
          />

          <select
            name="profession"
            value={form.profession}
            onChange={handleChange}
            className="border rounded-xl p-4"
            required
          >
            <option value="">Profession</option>
            <option>Salarié</option>
            <option>Indépendant</option>
            <option>Retraité</option>
            <option>Étudiant</option>
          </select>

          <select
            name="ville"
            value={form.ville}
            onChange={handleChange}
            className="border rounded-xl p-4"
            required
          >
            <option value="">Ville</option>
            <option>Casablanca</option>
            <option>Rabat</option>
            <option>Marrakech</option>
            <option>Tanger</option>
          </select>

          <select
            name="fumeur"
            value={form.fumeur}
            onChange={handleChange}
            className="border rounded-xl p-4"
            required
          >
            <option value="">Fumeur ?</option>
            <option>Oui</option>
            <option>Non</option>
          </select>

          <button
            type="submit"
            className="md:col-span-2 bg-blue-700 text-white rounded-xl py-5 text-xl font-bold hover:bg-blue-800 transition"
          >
            Recevoir mon devis gratuitement
          </button>
        </form>
      </div>
    </section>
  );
}