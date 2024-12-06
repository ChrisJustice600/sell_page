"use server";

import { db } from "@/lib/db";
import { compare, hash } from "bcrypt";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key");

export async function register(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    if (!email || !password || !name) {
      return {
        status: "error",
        message: "Tous les champs sont requis"
      };
    }

    // Vérifier si l'email existe déjà
    const existingAdmin = await db.admin.findUnique({
      where: { email }
    });

    if (existingAdmin) {
      return {
        status: "error",
        message: "Cet email est déjà utilisé"
      };
    }

    // Hasher le mot de passe
    const hashedPassword = await hash(password, 10);

    // Créer l'admin
    await db.admin.create({
      data: {
        email,
        password: hashedPassword,
        name,
      }
    });

    return {
      status: "success",
      message: "Compte créé avec succès"
    };
  } catch (error) {
    console.error("REGISTER_ERROR:", error);
    return {
      status: "error",
      message: "Une erreur s'est produite lors de l'inscription"
    };
  }
}
// Secret JWT
 

export async function login(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return {
        status: "error",
        message: "Email et mot de passe requis",
      };
    }

    const admin = await db.admin.findUnique({ where: { email } });

    if (!admin || !(await compare(password, admin.password))) {
      return {
        status: "error",
        message: "Identifiants incorrects",
      };
    }

    const token = await new SignJWT({
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .sign(secret);

    cookies().set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    return { status: "success", redirectTo: "/admin/dashboard" }; // On retourne l'URL
  } catch (error) {
    console.error("LOGIN_ERROR:", error);
    return { status: "error", message: "Une erreur s'est produite." };
  }
}



export async function logout() {
  cookies().delete("auth-token");
  redirect("/admin/login");
}
