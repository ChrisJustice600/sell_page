import DashboardClient from "./dashboard-client";
import { fetchAdmins, fetchRegistrations } from "./feth";

// Assurez-vous que cette page reste côté serveur
export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const registrations = await fetchRegistrations();
  const admins = await fetchAdmins();

  // Passez les données initiales au composant client
  return (
    <DashboardClient initialRegistrations={registrations} admins={admins} />
  );
}
