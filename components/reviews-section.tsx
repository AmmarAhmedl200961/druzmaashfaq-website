import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    treatment: "Acne Treatment Program",
    rating: 5,
    review: "After struggling with acne for years, I finally found a dermatologist who truly understands skin health. The personalized treatment plan completely transformed my skin and my confidence. I can't recommend this clinic enough!",
    date: "2 months ago",
  },
  {
    name: "James Patterson",
    treatment: "Skin Cancer Screening",
    rating: 5,
    review: "The thoroughness and professionalism during my skin cancer screening was exceptional. The doctor took the time to explain everything, answer all my questions, and made me feel completely at ease. Early detection saved my life.",
    date: "3 months ago",
  },
  {
    name: "Emily Chen",
    treatment: "Anti-Aging Treatment",
    rating: 5,
    review: "I was nervous about trying aesthetic treatments, but the expertise and gentle approach made all the difference. The results are natural and beautiful - exactly what I wanted. The entire experience exceeded my expectations.",
    date: "1 month ago",
  },
  {
    name: "Michael Rodriguez",
    treatment: "Psoriasis Management",
    rating: 5,
    review: "Living with psoriasis was affecting my quality of life until I came here. The comprehensive treatment plan and ongoing support have been life-changing. My skin has never looked or felt better.",
    date: "4 months ago",
  },
  {
    name: "Lisa Thompson",
    treatment: "Laser Treatment for Pigmentation",
    rating: 5,
    review: "Outstanding results from my laser treatment! The pigmentation that bothered me for years is almost completely gone. The clinic uses the latest technology and the staff is incredibly knowledgeable and caring.",
    date: "6 weeks ago",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Patient Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from patients who have experienced transformative results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-primary text-primary" 
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <div className="relative mb-4">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" aria-hidden="true" />
                  <p className="text-muted-foreground leading-relaxed pl-6 relative">
                    "{testimonial.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="h-5 w-5 fill-primary text-primary" 
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-foreground font-semibold">
              5.0 Average Rating
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">
              Based on 500+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
