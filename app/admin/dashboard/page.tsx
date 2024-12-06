// "use client";

// import { getAdmins } from "@/app/actions/admin";
// import { logout } from "@/app/actions/auth";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { useEffect, useState } from "react";

export default function DashboardPage() {
  // const [admins, setAdmins] = useState<any[]>([]);

  // useEffect(() => {
  //   // Charger les administrateurs au montage
  //   const fetchAdmins = async () => {
  //     const data = await getAdmins();
  //     setAdmins(data);
  //   };

  //   fetchAdmins();
  // }, []);

  return (
    <div>Dashboard</div>
    // <div className="min-h-screen p-8 bg-gray-100">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="flex justify-between items-center mb-8">
    //       <h1 className="text-3xl font-bold">Tableau de bord Admin</h1>
    //       <form action={logout}>
    //         <Button variant="outline">Déconnexion</Button>
    //       </form>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    //       <Card>
    //         <CardHeader>
    //           <CardTitle>Inscriptions</CardTitle>
    //           <CardDescription>Total des inscriptions</CardDescription>
    //         </CardHeader>
    //         <CardContent>
    //           <p className="text-3xl font-bold">0</p>
    //         </CardContent>
    //       </Card>

    //       <Card>
    //         <CardHeader>
    //           <CardTitle>Leads</CardTitle>
    //           <CardDescription>Total des leads</CardDescription>
    //         </CardHeader>
    //         <CardContent>
    //           <p className="text-3xl font-bold">0</p>
    //         </CardContent>
    //       </Card>

    //       <Card>
    //         <CardHeader>
    //           <CardTitle>En attente</CardTitle>
    //           <CardDescription>Inscriptions en attente</CardDescription>
    //         </CardHeader>
    //         <CardContent>
    //           <p className="text-3xl font-bold">0</p>
    //         </CardContent>
    //       </Card>
    //     </div>

    //     {/* Tableau des administrateurs */}
    //     <div className="bg-white p-6 rounded-lg shadow">
    //       <h2 className="text-2xl font-bold mb-4">Liste des Administrateurs</h2>
    //       <table className="w-full border-collapse">
    //         <thead>
    //           <tr>
    //             <th className="border px-4 py-2 text-left">Nom</th>
    //             <th className="border px-4 py-2 text-left">Email</th>
    //             <th className="border px-4 py-2 text-left">Rôle</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {admins.map((admin) => (
    //             <tr key={admin.id}>
    //               <td className="border px-4 py-2">{admin.name}</td>
    //               <td className="border px-4 py-2">{admin.email}</td>
    //               <td className="border px-4 py-2">{admin.role}</td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
  );
}
