import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Microscope, Sparkles, Syringe, Shield, Heart, Zap } from "lucide-react";

const services = [
  {
    category: "Medical Dermatology",
    icon: Microscope,
    services: [
      {
        name: "Acne Treatment",
        description: "Advanced treatment protocols for all types of acne, from mild to severe cystic acne.",
        icon: Shield,
      },
      {
        name: "Fungal Infection Treatment",
        description: "All types of fungal infection treatments.",
        icon: Heart,
      },
      {
        name: "Eczema & Psoriasis Care",
        description: "Personalized management plans for chronic skin conditions with proven results.",
        icon: Zap,
      },
    ],
  },
  {
    category: "Aesthetic Dermatology",
    icon: Sparkles,
    services: [
      {
        name: "Anti-Aging Treatments",
        description: "Botox, dermal fillers, and advanced skin rejuvenation for natural-looking results.",
        icon: Sparkles,
      },
      {
        name: "Laser Treatments",
        description: "State-of-the-art laser therapy for pigmentation, scars, and skin resurfacing.",
        icon: Zap,
      },
      {
        name: "Medical-Grade Skincare",
        description: "Customized treatment plans with professional-grade products and procedures.",
        icon: Syringe,
      },
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dermatological care combining medical expertise with aesthetic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <Card key={category.category} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <CategoryIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.services.map((service) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div key={service.name} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="p-2 rounded-md bg-primary/5">
                            <ServiceIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
                          <CardDescription className="text-sm leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
