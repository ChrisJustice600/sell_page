import { db } from "@/lib/db";

export async function getAdmins() {
  try {
    const admins = await db.admin.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    return admins;
  } catch (error) {
    console.error("Erreur lors de la récupération des admins :", error);
    return [];
  }
}
