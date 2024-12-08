import DashboardClient from "./dashboard-client";
import { fetchAdmins, fetchRegistrations } from "./feth"; // Correction ici

export default async function Dashboard() {
  try {
    const registrations = await fetchRegistrations();
    const admins = await fetchAdmins();

    return (
      <DashboardClient initialRegistrations={registrations} admins={admins} />
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return <div>Une erreur est survenue lors du chargement des données.</div>;
  }
}