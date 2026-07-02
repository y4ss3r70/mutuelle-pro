"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./MapLeaflet"), {
  ssr: false,
});

export default function FranceMap() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Trouvez une mutuelle dans votre région
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Sélectionnez votre région ou votre ville afin de découvrir les meilleures offres disponibles.
        </p>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Map />
        </div>

      </div>
    </section>
  );
}