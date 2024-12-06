// lib/data-fetching.ts
import { db } from "@/lib/db";
import { Admin, Registration } from "@prisma/client";

// Fonction pour récupérer les inscriptions
export const fetchRegistrations = async (): Promise<Registration[]> => {
  return await db.registration.findMany();
};

// Fonction pour récupérer les admins
export const fetchAdmins = async (): Promise<Admin[]> => {
  return await db.admin.findMany();
};
