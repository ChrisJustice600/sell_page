/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto mb-16 text-center"
    >
      <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold pulse-red">
          -90% OFFRE LIMITÉE
        </div>

        <h3 className="text-2xl font-bold text-white mb-6">
          Prix Exceptionnel de Lancement
        </h3>

        <div className="flex flex-col items-center justify-center mb-6">
          <div className="text-gray-400 line-through text-xl mb-2">
            Prix normal: $100
          </div>
          <div className="text-5xl font-bold text-white mb-2 flash-price">
            $10
          </div>
          <div className="text-green-400 font-semibold">
            Économisez $90 aujourd'hui !
          </div>
        </div>
      </div>
    </motion.div>
  );
}
