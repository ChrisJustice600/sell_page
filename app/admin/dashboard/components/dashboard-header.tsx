"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function DashboardHeader() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/admin/login");
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Tableau de Bord Admin</h1>
      <Button variant="outline" onClick={handleLogout}>
        Déconnexion
      </Button>
    </div>
  );
}