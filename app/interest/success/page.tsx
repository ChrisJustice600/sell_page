import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8 text-center">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Demande Envoyée !</h1>
          <p className="text-muted-foreground mb-8">
            Merci de votre intérêt ! Notre équipe vous contactera bientôt avec plus d'informations sur la formation.
          </p>
          <Button asChild>
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}