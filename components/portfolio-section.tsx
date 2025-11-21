import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Users, BookOpen } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Board Certified",
    description: "Board Certified Dermatologist with specialized training in both medical and cosmetic dermatology",
  },
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Over 20 years of clinical excellence serving thousands of satisfied patients",
  },
  {
    icon: BookOpen,
    title: "Continuous Education",
    description: "Committed to staying at the forefront of dermatological advances and treatment innovations",
  },
  {
    icon: Users,
    title: "Patient-Centered Care",
    description: "Personalized treatment plans tailored to each patient's unique skin concerns and goals",
  },
];

export function PortfolioSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=800&width=640"
                  alt="Professional dermatologist portrait in clinical setting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold">5,000+</p>
                <p className="text-sm font-medium">Happy Patients</p>
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Meet Dr. Uzma Khalil
              </h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 20 years of dedicated experience in dermatology, Dr. Uzma Khalil brings 
                  unparalleled expertise in both medical and aesthetic dermatology. Board-certified and 
                  committed to excellence, she combines evidence-based treatments with personalized care 
                  to help you achieve your healthiest, most radiant skin.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At Derma Cure, we believe in a holistic approach where each patient receives customized 
                  treatment plans based on their unique skin type, concerns, and aesthetic goals. Our proven 
                  track record of transformative results and exceptional patient satisfaction speaks to our 
                  commitment to your skin health journey.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {credentials.map((credential) => {
                  const Icon = credential.icon;
                  return (
                    <Card key={credential.title} className="border-border/50">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1 text-sm">
                              {credential.title}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {credential.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
