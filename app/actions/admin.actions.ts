"use server";

import { db } from "@/lib/db";
import { Admin, AdminCreate, Registration } from "../types";

export async function getRegistrations(): Promise<Registration[]> {
  try {
    const registrations = (await db.registration.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        fullName: true,
        whatsapp: true,
        address: true,
        status: true,
        createdAt: true,
      },
    })) as Registration[];
    return registrations;
  } catch (error) {
    console.error("Error fetching registrations:", error);
    return [];
  }
}

export async function getAdmins(): Promise<Admin[]> {
  try {
    const admins = await db.admin
      .findMany({
        orderBy: {
          name: "asc",
        },
      })
      .then((admins) =>
        admins.map((admin) => ({
          ...admin,
          role: admin.role as "ADMIN" | "SUPER_ADMIN",
        }))
      );
    return admins;
  } catch (error) {
    console.error("Error fetching admins:", error);
    return [];
  }
}

export async function updateRegistrationStatus(
  registrationId: string,
  status: Registration["status"]
): Promise<{ success: boolean }> {
  try {
    await db.registration.update({
      where: { id: registrationId },
      data: { status },
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating registration status:", error);
    return { success: false };
  }
}

export async function deleteAdmin(
  adminId: string
): Promise<{ success: boolean }> {
  try {
    await db.admin.delete({
      where: { id: adminId },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting admin:", error);
    return { success: false };
  }
}

export async function addAdmin(
  data: AdminCreate
): Promise<{ success: boolean }> {
  try {
    await db.admin.create({
      data,
    });
    return { success: true };
  } catch (error) {
    console.error("Error adding admin:", error);
    return { success: false };
  }
}
