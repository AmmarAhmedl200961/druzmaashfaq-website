"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

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
    name: "Talha",
    treatment: "Laser Hair Removal",
    rating: 5,
    review: "I had been dealing with a stubborn fungal infection for almost six months and tried several treatments without success. When I visited Dr. Uzma, everything changed. She quickly identified the problem, prescribed the right medication. Thanks to her expertise and care, I recovered much faster than I expected. She is truly the best skin specialist I have ever visited — professional, knowledgeable, and genuinely compassionate toward her patients.",
    date: "1 month ago",
  },
  {
    name: "Midhat Ahmad",
    treatment: "Anti-Aging Procedures",
    rating: 5,
    review: "Dr. Uzma Khalil at Derma Cure Clinic provided exceptional care for my acne and dandruff treatment. She explained everything clearly, and her treatment plan worked wonders. Friendly staff, clean facility, and reasonable consultation fee. Highly recommend for skin care in Lahore 👍",
    date: "4 months ago",
  },
  {
    name: "Ahmed Khan",
    treatment: "General Consultation",
    rating: 5,
    review: "Outstanding results from my laser treatment! The pigmentation that bothered me for years is almost completely gone. The clinic uses the latest technology and the staff is incredibly knowledgeable and caring.",
    date: "6 weeks ago",
  },
];

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate which testimonials to show (3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

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

        <div className="max-w-7xl mx-auto">
          {/* Desktop Carousel - 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card 
                key={`${testimonial.name}-${index}`} 
                className="border-border/50 shadow-sm hover:shadow-md transition-all"
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
                    <p className="text-muted-foreground leading-relaxed pl-6 relative line-clamp-6">
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

          {/* Mobile Carousel - 1 card */}
          <div className="md:hidden mb-8">
            <Card className="border-border/50 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4" aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}>
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
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
                    "{testimonials[currentIndex].review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].treatment}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonials[currentIndex].date}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </Button>

            {/* Dots Navigation */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
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
