"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createRegistration(formData: FormData) {
  try {
    const fullName = formData.get("fullName") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const address = formData.get("address") as string;

    if (!fullName || !whatsapp || !address) {
      return {
        status: "error",
        message: "Tous les champs sont requis"
      };
    }

    await db.registration.create({
      data: {
        fullName,
        whatsapp,
        address,
      }
    });

    revalidatePath("/");
    return { 
      status: "success",
      message: "Inscription réussie!"
    };
  } catch (error) {
    console.error("REGISTRATION_ERROR:", error);
    return { 
      status: "error",
      message: "Une erreur s'est produite lors de l'inscription"
    };
  }
}
