"use client";
import FranceMap from "@/components/FranceMap";

import { motion } from "framer-motion";
import Image from "next/image";

import Navbar from "../components/Navbar";
import WhyChoose from "../components/WhyChoose";
import HowItWorks from "../components/HowItWorks";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";
import LeadForm from "../components/LeadForm";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* ================= HERO ================= */}

        <section
          id="accueil"
          className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-6 py-24">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}

              <motion.div
                initial={{ opacity: 0, x: -70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >

                <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                  🇫🇷 Comparateur Français
                </span>

                <h1 className="mt-8 text-6xl font-extrabold text-gray-900 leading-tight">
                  Comparez les meilleures mutuelles santé en France.
                </h1>

                <p className="mt-8 text-xl text-gray-600 leading-9">
                  Recevez gratuitement plusieurs devis personnalisés,
                  comparez les garanties et trouvez la couverture santé
                  adaptée à votre profil en moins de 2 minutes.
                </p>
                                <div className="mt-10 flex flex-wrap gap-4">

                  <a
                    href="#contact"
                    className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition"
                  >
                    Comparer les offres
                  </a>

                  <a
                    href="#how"
                    className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-xl font-bold transition"
                  >
                    Comment ça marche
                  </a>

                </div>

                <div className="mt-12 flex flex-wrap items-center gap-8 text-gray-600">

                  <div className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">✔</span>
                    Gratuit
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">✔</span>
                    Sans engagement
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">✔</span>
                    Réponse en moins de 2 min
                  </div>

                </div>

              </motion.div>

              {/* RIGHT */}

              <motion.div
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border">

                  <p className="text-sm text-gray-500">
                    Plus de
                  </p>

                  <p className="text-3xl font-extrabold text-blue-700">
                    25
                  </p>

                  <p className="font-semibold text-gray-700">
                    assureurs partenaires
                  </p>

                </div>

                <Image
                  src="/images/hero-family.jpg"
                  alt="Famille"
                  width={650}
                  height={700}
                  className="rounded-[32px] shadow-2xl object-cover"
                />

                <div className="absolute -bottom-8 left-8 bg-white rounded-2xl shadow-xl p-6 border">

                  <p className="text-yellow-500 text-2xl">
                    ★★★★★
                  </p>

                  <p className="font-bold text-gray-900 mt-2">
                    4.8 / 5
                  </p>

                  <p className="text-gray-500">
                    Plus de 18 000 avis clients
                  </p>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* ================= LOGOS ================= */}

       <section className="bg-white py-12">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-center text-gray-500 uppercase tracking-widest font-semibold mb-10">
      Nos partenaires santé
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">

      <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition">
        <span className="text-2xl font-bold text-blue-700">
          AXA
        </span>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition">
        <span className="text-2xl font-bold text-red-600">
          APRIL
        </span>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition">
        <span className="text-2xl font-bold text-green-700">
          MGEN
        </span>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition">
        <span className="text-2xl font-bold text-purple-700">
          SwissLife
        </span>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition">
        <span className="text-2xl font-bold text-orange-600">
          Harmonie
        </span>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition">
        <span className="text-2xl font-bold text-cyan-700">
          AÉSIO
        </span>
      </div>

    </div>

  </div>
</section>
<WhyChoose />

<HowItWorks />

<Gallery />

<VideoSection />

      

      {/* ================= CONTACT ================= */}
              
          <section
        id="contact"
        className="py-24 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-blue-700 font-semibold uppercase tracking-widest">
              Obtenez votre devis
            </span>

            <h2 className="text-5xl font-extrabold text-gray-900 mt-4">
              Recevez gratuitement votre comparaison personnalisée
            </h2>

            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              Complétez notre formulaire en moins de deux minutes.
              Nos partenaires vous proposent des offres adaptées à votre
              profil, sans engagement et gratuitement.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <div className="space-y-8">

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                    
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-gray-900">
                      Comparaison gratuite
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Aucune inscription payante et aucun engagement.
                    </p>

                  </div>

                </div>

                
                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                    
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-gray-900">
                      Réponse rapide
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Recevez plusieurs devis personnalisés en moins de
                      2 minutes.
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-2xl">
                    
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-gray-900">
                      Plus de 25 partenaires
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Nous comparons les offres des principaux assureurs
                      afin de vous proposer les meilleures garanties.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div>

              <LeadForm />
              <FranceMap />

            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <FAQ />
            {/* ================= FOOTER ================= */}

      <Footer />

    </main>

    </>
  );
}