import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Registration, Lead } from "@/app/types";

interface StatsCardsProps {
  registrations: Registration[];
  leads: Lead[];
}

export function StatsCards({ registrations, leads }: StatsCardsProps) {
  const pendingRegistrations = registrations.filter(r => r.status === "PENDING").length;
  const newLeads = leads.filter(l => l.status === "NEW").length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Inscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{registrations.length}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">En Attente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{pendingRegistrations}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{leads.length}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Nouveaux Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{newLeads}</div>
        </CardContent>
      </Card>
    </div>
  );
}