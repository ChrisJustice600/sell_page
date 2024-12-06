"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function RegistrationForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
          fullName: formData.get('fullName'),
          whatsapp: formData.get('whatsapp'),
          address: formData.get('address'),
        }),
      });

      if (response.ok) {
        router.push('/register/success');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <Label htmlFor="fullName">Nom Complet</Label>
        <Input id="fullName" name="fullName" required />
      </div>
      
      <div>
        <Label htmlFor="whatsapp">Numéro WhatsApp</Label>
        <Input id="whatsapp" name="whatsapp" type="tel" required />
      </div>
      
      <div>
        <Label htmlFor="address">Adresse du Domicile</Label>
        <Textarea id="address" name="address" required />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Envoi en cours..." : "S'inscrire"}
      </Button>
    </form>
  );
}