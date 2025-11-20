import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ammar Ahmed",
    treatment: "Acne Treatment Program",
    rating: 5,
    review: "After struggling with acne for years, I finally found a dermatologist who truly understands skin health. The personalized treatment plan completely transformed my skin and my confidence. I can't recommend this clinic enough!",
    date: "2 months ago",
  },
  {
    name: "Bushra Rashid",
    treatment: "Eczema Care",
    rating: 5,
    review: "DR. Uzma is a very competent dermatologist. I went to her to treat my eczema, and the results were amazing. She also treated a skin rash my son had, and it cleared up quickly. Honestly, God has gifted her with healing hands—so grateful we found her!",
    date: "1 month ago",
  },
  {
    name: "talha",
    treatment: "Fungal Infection Treatment",
    rating: 5,
    review: "I had been dealing with a stubborn fungal infection for almost six months and tried several treatments without success. When I visited Dr. Uzma, everything changed. She quickly identified the problem, prescribed the right medication. Thanks to her expertise and care, I recovered much faster than I expected. She is truly the best skin specialist I have ever visited — professional, knowledgeable, and genuinely compassionate toward her patients. I’m very grateful for her help and highly recommend her to anyone looking for a skilled and caring dermatologist.",
    date: "1 month ago",
  },
  {
    name: "Midhat Ahmad",
    treatment: "Dandruff Treatment",
    rating: 5,
    review: "Dr. Uzma Khalil at Derma Cure Clinic provided exceptional care for my acne and dandruff treatment. She explained everything clearly, and her treatment plan worked wonders. Friendly staff, clean facility, and reasonable consultation fee. Highly recommend for skin care in Raiwind 👍 Visited Multiple times for follow up treatments …",
    date: "4 months ago",
  },
  {
    name: "Ahmed Khan",
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
