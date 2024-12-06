import DashboardClient from "./dashboard-client";
import { fetchAdmins, fetchRegistrations } from "./feth";

export default async function Dashboard() {
  const registrations = await fetchRegistrations();
  const admins = await fetchAdmins();

  // Passez les données initiales au composant client
  return (
    <DashboardClient initialRegistrations={registrations} admins={admins} />
  );
}
