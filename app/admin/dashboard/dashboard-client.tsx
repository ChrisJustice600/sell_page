"use client";

import { Admin, Registration } from "@prisma/client";
import { useState } from "react";

type DashboardClientProps = {
  initialRegistrations: Registration[];
  admins: Admin[];
};

export default function DashboardClient({
  initialRegistrations,
  admins,
}: DashboardClientProps) {
  const [registrations, setRegistrations] =
    useState<Registration[]>(initialRegistrations);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Affichage des statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold">Total Registrations</h2>
          <p className="text-3xl font-bold text-blue-600">
            {registrations.length}
          </p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold">Total Admins</h2>
          <p className="text-3xl font-bold text-green-600">{admins.length}</p>
        </div>
      </div>

      {/* Liste des registrations */}
      <section>
        <h2 className="text-xl font-bold mb-4">Registrations</h2>
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                WhatsApp
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <tr key={reg.id} className="border-b">
                <td className="px-4 py-2">{reg.fullName}</td>
                <td className="px-4 py-2">{reg.whatsapp}</td>
                <td className="px-4 py-2">{reg.status}</td>
                <td className="px-4 py-2">
                  {new Date(reg.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
