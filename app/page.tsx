"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaUserGraduate, FaChartLine, FaLock, FaClock, FaWhatsapp, FaUser, FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import CountdownTimer from "@/components/CountdownTimer";
import { toast } from "sonner";
import { createRegistration } from "./actions/registration";
import confetti from 'canvas-confetti';
import SuccessMessage from "@/components/SuccessMessage";

const fireConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
      spread: 90,
      scalar: 1.2,
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

function SubmitButton({ isLoading }: { isLoading: boolean }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      disabled={isLoading}
      className="relative z-50 w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 disabled:opacity-50"
    >
      {isLoading ? "INSCRIPTION EN COURS..." : "RÉSERVER MA PLACE VIP"}
    </motion.button>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    address: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append("fullName", formData.fullName);
      formDataObj.append("whatsapp", formData.whatsapp);
      formDataObj.append("address", formData.address);

      const result = await createRegistration(formDataObj);
      
      if (result.status === "success") {
        fireConfetti();
        setIsSuccess(true);
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Une erreur s'est produite lors de l'inscription");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section avec Overlay Animé */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient" />
        
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6">
              <span className="text-blue-400 text-lg font-semibold">MasterClass Alibaba - Formation Ultime à Kinshasa</span>
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
                <span className="text-white">Silikin Village, Concession COTEX N° 63, Av. Colonel Mondjiba, Kinshasa, Ref: SOWBUZZ</span>
              </div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            👉 Vous rêvez de booster votre business et d'acheter directement en Chine sans stress ? Participez à notre Masterclass Alibaba et apprenez tout ce qu’il faut pour devenir un as de l’importation en toute simplicité !
            </p>
          </motion.div>

          {/* Compteur et Offre Limitée */}
          <div className="mb-16">
            <CountdownTimer />
            <div className="mt-8 flex justify-center">
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg px-6 py-3">
                <span className="text-red-400 font-semibold">
                  🔥 Seulement 5 places restantes sur 20
                </span>
              </div>
            </div>
          </div>

          {/* Prix Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-16 text-center"
          >
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
              {/* Badge Promo */}
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

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-2 text-red-400">
                  <FaClock className="w-5 h-5" />
                  <span className="shake-animation">Cette offre expire bientôt !</span>
                </div>
                <div className="text-gray-300 text-sm">
                  ⚡ Paiement unique - Pas d'abonnement
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-lg hover:from-red-700 hover:to-red-800 transition-all pulse-red"
                onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                PROFITER DE L'OFFRE MAINTENANT
              </motion.button>

              <div className="mt-6 text-center text-sm text-gray-400">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaLock className="w-4 h-4" />
                  <span>Paiement 100% sécurisé</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span>Réponse garantie imediatement</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire Amélioré */}
          <div className="relative z-10 max-w-2xl mx-auto px-4 pb-16">
            {!isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                    <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">
                Inscrivez vous maintenant
              </h3>
              <p className="text-gray-400 text-center mb-8">
                Remplissez le formulaire et vous serez contacté par notre equipe pour rejoindre la formation.
              </p>
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
                      <FaUser className="inline-block mr-2" />
                      Nom complet
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="relative z-50 w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Entrez votre nom complet"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300">
                      <FaWhatsapp className="inline-block mr-2" />
                      Numéro WhatsApp
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="tel"
                        name="whatsapp"
                        id="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        className="relative z-50 w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+243 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-300">
                      <FaMapMarkerAlt className="inline-block mr-2" />
                      Adresse domicile
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="relative z-50 w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Entrez votre adresse"
                      />
                    </div>
                  </div>

                  <SubmitButton isLoading={isLoading} />
                </form>
                <div className="mt-6 text-center text-sm text-gray-400">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaLock className="w-4 h-4" />
                  <span>Vos données sont sauvegardées et confidentielles</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span>Réponse garantie imediatement</span>
                </div>
              </div>
             </div>
              </motion.div>
            ) : (
              <SuccessMessage name={formData.fullName} />
            )}
          </div>

          {/* Programme et Bonus */}
          <div className="max-w-4xl mx-auto my-16">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Au programme :</h3>
                <div className="grid gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-blue-400 text-xl">✨</span>
                    <span className="text-gray-300">Trouver des fournisseurs fiables</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-blue-400 text-xl">✨</span>
                    <span className="text-gray-300">Collaborer avec des transitaires de confiance</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-blue-400 text-xl">✨</span>
                    <span className="text-gray-300">Profiter d'un accompagnement à vie !</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-blue-400 text-xl">✨</span>
                    <span className="text-gray-300">Intégrer une communauté d'e-commerçants dynamiques et actifs</span>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  <span className="text-2xl mr-2">🎁</span> BONUS INCLUS :
                </h3>
                <div className="grid gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-green-500">✔️</span>
                    <span className="text-gray-300">Accès aux meilleurs contacts en Chine pour vos besoins</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-green-500">✔️</span>
                    <span className="text-gray-300">Apprentissage pratique et astuces exclusives</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Bénéfices */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Ce qui est inclus aussi dans la formation
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3 bg-gray-800/30 p-4 rounded-lg"
              >
                <FaCheck className="text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Accès à vie aux mises à jour</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-3 bg-gray-800/30 p-4 rounded-lg"
              >
                <FaCheck className="text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Groupe privé WhatsApp</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-3 bg-gray-800/30 p-4 rounded-lg"
              >
                <FaCheck className="text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Templates et ressources premium</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-3 bg-gray-800/30 p-4 rounded-lg"
              >
                <FaCheck className="text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Sessions de Q&R hebdomadaires</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-3 bg-gray-800/30 p-4 rounded-lg"
              >
                <FaCheck className="text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Bonus surprise exclusifs</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-3 bg-gray-800/30 p-4 rounded-lg"
              >
                <FaCheck className="text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Support technique dédié</span>
              </motion.div>
            </div>
          </div>

         
        </div>
      </div>
    </main>
  );
}