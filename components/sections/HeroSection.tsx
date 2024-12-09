"use client";

import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient" />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-lg font-semibold">
              MasterClass Alibaba - Formation Ultime à Kinshasa
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            DEVENEZ PRO DES
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            ACHATS EN CHINE
          </h1>
          <div className="flex flex-col items-center justify-center gap-6 mt-8 mb-12">
            <div className="flex items-center space-x-2 bg-gray-800/50 px-6 py-3 rounded-full">
              <FaClock className="text-blue-400" />
              <span className="text-white">13-14 Décembre 2024</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 px-6 py-3 rounded-full">
              <FaMapMarkerAlt className="text-blue-400" />
              <span className="text-white">
                Silikin Village, Concession COTEX N° 63, Av. Colonel Mondjiba,
                Kinshasa, Ref: SOWBUZZ
              </span>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            👉 Vous rêvez de booster votre business et d'acheter directement
            en Chine sans stress ? Participez à notre Masterclass Alibaba et
            apprenez tout ce qu'il faut pour devenir un as de l'importation en
            toute simplicité !
          </p>
        </motion.div>
      </div>
    </div>
  );
}
