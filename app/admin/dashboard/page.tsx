"use client";

import {
  getAdmins,
  getRegistrations,
  updateRegistrationStatus,
} from "@/app/actions/admin.actions";
import { Admin, Registration } from "@/app/types";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaUsers } from "react-icons/fa";
import { toast } from "sonner";

export default function DashboardPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [registrationsData, adminsData] = await Promise.all([
        getRegistrations(),
        getAdmins(),
      ]);
      setRegistrations(registrationsData);
      setAdmins(adminsData);
    } catch (error) {
      console.error("Error loading data:", error);
      toast.error("Error loading data");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (
    registrationId: string,
    status: Registration["status"]
  ) => {
    try {
      await updateRegistrationStatus(registrationId, status);
      toast.success("Status updated successfully");
      loadData();
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Error updating status");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg shadow flex items-center">
          <FaUsers className="text-blue-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">{registrations.length}</h3>
            <p className="text-gray-600">Total Registrations</p>
          </div>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow flex items-center">
          <FaCheckCircle className="text-green-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">
              {
                registrations.filter(
                  (registration) => registration.status === "CONFIRMED"
                ).length
              }
            </h3>
            <p className="text-gray-600">Confirmed Registrations</p>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow flex items-center">
          <FaUsers className="text-yellow-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">
              {
                registrations.filter(
                  (registration) => registration.status === "PENDING"
                ).length
              }
            </h3>
            <p className="text-gray-600">Pending Registrations</p>
          </div>
        </div>
      </div>

      {/* Registrations Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Registrations</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left px-4 py-2 text-sm font-semibold text-gray-600">
                  Full Name
                </th>
                <th className="text-left px-4 py-2 text-sm font-semibold text-gray-600">
                  WhatsApp
                </th>
                <th className="text-left px-4 py-2 text-sm font-semibold text-gray-600">
                  Address
                </th>
                <th className="text-left px-4 py-2 text-sm font-semibold text-gray-600">
                  Created At
                </th>
                <th className="text-left px-4 py-2 text-sm font-semibold text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((registration, index) => (
                <tr
                  key={registration.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {registration.fullName}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {registration.whatsapp}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {registration.address}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {new Date(registration.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">
                    <select
                      value={registration.status}
                      onChange={(e) =>
                        handleStatusUpdate(
                          registration.id,
                          e.target.value as Registration["status"]
                        )
                      }
                      className="bg-gray-100 border rounded px-2 py-1 text-sm"
                    >
                      <option value="PENDING">Pending</option>
                      <option value="CONFIRMED">Confirmed</option>
                      <option value="CANCELLED">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
