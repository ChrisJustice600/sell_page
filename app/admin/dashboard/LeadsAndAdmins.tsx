"use client";

import { useState } from "react";

type Lead = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  status: string;
  createdAt: Date;
};

type Admin = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type Props = {
  leads: Lead[];
  admins: Admin[];
};

export default function LeadsAndAdmins({ leads, admins }: Props) {
  const [search, setSearch] = useState("");

  // Filtrage des leads en fonction de la recherche
  const filteredLeads = leads.filter(
    (lead) =>
      lead.fullName.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Section Leads */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Leads</h2>
        <input
          type="text"
          placeholder="Rechercher un lead"
          className="border p-2 w-full mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Nom complet</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Téléphone</th>
              <th className="border p-2">Statut</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead.id}>
                <td className="border p-2">{lead.fullName}</td>
                <td className="border p-2">{lead.email}</td>
                <td className="border p-2">{lead.phone}</td>
                <td className="border p-2">{lead.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section Admins */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Admins</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Nom</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Rôle</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td className="border p-2">{admin.name}</td>
                <td className="border p-2">{admin.email}</td>
                <td className="border p-2">{admin.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
