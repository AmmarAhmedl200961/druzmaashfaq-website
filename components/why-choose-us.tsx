import { Award, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Award,
    value: "20+",
    label: "Years Experience",
    description: "Board-certified excellence in medical & aesthetic dermatology",
  },
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Patients",
    description: "Trusted by thousands across Lahore for transformative results",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Rating",
    description: "Certified Excellence in patient care and treatment outcomes",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Derma Cure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in achieving healthy, radiant skin through expertise and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.label} 
                className="border-border/50 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 bg-background"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <p className="text-5xl font-bold text-primary mb-2">{stat.value}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
