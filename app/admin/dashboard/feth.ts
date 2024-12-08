import { db } from "@/lib/db";
import { Admin, Registration } from "@prisma/client";

// Fonction pour récupérer les inscriptions
export const fetchRegistrations = async (): Promise<Registration[]> => {
  try {
    return await db.registration.findMany();
  } catch (error) {
    console.error("Erreur lors de la récupération des inscriptions :", error);
    throw error; // Propager l'erreur pour la gestion dans la page
  }
};

// Fonction pour récupérer les admins
export const fetchAdmins = async (): Promise<Admin[]> => {
  try {
    return await db.admin.findMany();
  } catch (error) {
    console.error("Erreur lors de la récupération des admins :", error);
    throw error; // Propager l'erreur pour la gestion dans la page
  }
};