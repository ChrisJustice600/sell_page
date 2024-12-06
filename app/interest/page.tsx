import { Card } from "@/components/ui/card";
import { InterestForm } from "./interest-form";

export default function InterestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Intéressé par la Formation ?</h1>
          <p className="text-muted-foreground mb-8">
            Laissez-nous vos coordonnées pour recevoir plus d'informations sur notre formation et être contacté par notre équipe.
          </p>
          <InterestForm />
        </Card>
      </div>
    </div>
  );
}