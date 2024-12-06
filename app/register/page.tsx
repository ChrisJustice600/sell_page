import { Card } from "@/components/ui/card";
import { RegistrationForm } from "./registration-form";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Inscription à la Formation</h1>
          <RegistrationForm />
        </Card>
      </div>
    </div>
  );
}