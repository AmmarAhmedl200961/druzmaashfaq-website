import { Button } from "@/components/ui/button";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ReviewsSection } from "@/components/reviews-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" aria-hidden="true" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Hero Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <CheckCircle className="h-4 w-4" aria-hidden="true" />
                    Board Certified Dermatologist
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your Journey to
                  <span className="text-primary block mt-2">
                    Healthier, Radiant Skin
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Expert dermatological care combining advanced medical treatments with 
                  cutting-edge aesthetic solutions. Experience personalized skin care that 
                  transforms lives.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 group"
                  asChild
                >
                  <a href="https://wa.link/mavx9d" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2" aria-label="Book an appointment via WhatsApp">
                    Book an Appointment
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6"
                  asChild
                >
                  <a href="#services">
                    Our Services
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-bold text-primary">20+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-bold text-primary">5,000+</p>
                  <p className="text-sm text-muted-foreground">Happy Patients</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-bold text-primary">5.0</p>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=800&width=800"
                  alt="Modern dermatology clinic interior with professional medical equipment and welcoming atmosphere"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl shadow-xl border border-border/50 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Certified Excellence</p>
                    <p className="text-sm text-muted-foreground">Medical & Aesthetic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio/About Section */}
      <PortfolioSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
