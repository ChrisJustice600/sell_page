import { db } from "@/lib/db"; // Assurez-vous que ce fichier est configuré
import LeadsAndAdmins from "./LeadsAndAdmins";

export default async function DashboardPage() {
  // Récupération des données via Prisma
  const leads = await db.lead.findMany();
  console.log(leads);

  const admins = await db.admin.findMany();
  console.log(admins);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {/* Inclusion du composant LeadsAndAdmins */}
      <LeadsAndAdmins leads={leads} admins={admins} />
    </div>
  );
}
