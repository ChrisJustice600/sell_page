"use client";

import { createRegistration } from "@/app/actions/registration";
import SuccessMessage from "@/components/SuccessMessage";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaUser, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "sonner";

const fireConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
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
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
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

export default function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

  if (isSuccess) {
    return <SuccessMessage />;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Nom complet
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-gray-400" />
            </div>
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre nom complet"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="whatsapp"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Numéro WhatsApp
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaWhatsapp className="text-gray-400" />
            </div>
            <input
              type="tel"
              name="whatsapp"
              id="whatsapp"
              required
              value={formData.whatsapp}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: +243 000 000 000"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Adresse
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaMapMarkerAlt className="text-gray-400" />
            </div>
            <input
              type="text"
              name="address"
              id="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre adresse"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <SubmitButton isLoading={isLoading} />
      </div>
    </form>
  );
}
