"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function InterestForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/interest', {
        method: 'POST',
        body: JSON.stringify({
          fullName: formData.get('fullName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        router.push('/interest/success');
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
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      
      <div>
        <Label htmlFor="phone">Téléphone</Label>
        <Input id="phone" name="phone" type="tel" required />
      </div>
      
      <div>
        <Label htmlFor="message">Message (Optionnel)</Label>
        <Textarea id="message" name="message" />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Envoi en cours..." : "Recevoir plus d'informations"}
      </Button>
    </form>
  );
}