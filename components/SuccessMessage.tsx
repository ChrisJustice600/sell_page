"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

interface SuccessMessageProps {
  name: string;
}

export default function SuccessMessage({ name }: SuccessMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center p-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-block mb-6"
      >
        <FaCheckCircle className="text-green-500 w-24 h-24" />
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Félicitations {name}!
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl text-gray-300 mb-8"
      >
        Votre inscription a été enregistrée avec succès. Notre équipe vous contactera très bientôt via WhatsApp pour la suite du processus.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-center space-x-2 text-green-500"
      >
        <FaWhatsapp className="w-6 h-6" />
        <span>Gardez votre téléphone à portée de main!</span>
      </motion.div>
    </motion.div>
  );
}
