"use client";

import { motion } from "framer-motion";

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
    <main className="min-h-screen bg-white">

      <Navbar />

      {/* HERO */}
      <section
        id="accueil"
        className="pt-28 bg-gradient-to-r from-blue-700 to-blue-500 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Texte */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >

              <span className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold">
                Mutuelle Santé
              </span>

              <h1 className="text-5xl font-extrabold mt-8 leading-tight">
                Protégez votre santé avec une mutuelle adaptée à vos besoins.
              </h1>

              <p className="text-xl mt-6 text-blue-100">
                Recevez gratuitement votre devis personnalisé en moins de
                2 minutes.
              </p>

              <div className="mt-10 flex gap-4">

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-100 transition"
                >
                  Recevoir mon devis
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition"
                >
                  Nos garanties
                </motion.button>

              </div>

            </motion.div>

            {/* Image */}
            <motion.div
              className="flex justify-center"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >

              <div className="relative">

                <motion.img
                  whileHover={{ scale: 1.03 }}
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200"
                  alt="Mutuelle"
                  className="rounded-3xl shadow-2xl w-full h-[520px] object-cover"
                />

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-6 left-6 bg-white p-6 rounded-2xl shadow-xl"
                >

                  <p className="text-blue-700 font-bold text-xl">
                    ✔ Plus de 25 000 clients satisfaits
                  </p>

                  <p className="text-gray-600">
                    Comparez gratuitement les meilleures mutuelles.
                  </p>

                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      <WhyChoose />

      <HowItWorks />

      <Gallery />

      <VideoSection />

      <LeadForm />

      <FAQ />

      <Footer />

    </main>
  );
}