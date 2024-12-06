/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8 text-center">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Inscription Réussie !</h1>
          <p className="text-muted-foreground mb-8">
            Nous avons bien reçu votre inscription. Notre équipe vous contactera
            prochainement pour confirmer votre participation.
          </p>
          <Button asChild>
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}
