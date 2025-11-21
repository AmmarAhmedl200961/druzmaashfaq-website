import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Derma Cure - Expert Dermatology & Aesthetic Treatments in Lahore",
  description: "Board-certified dermatologist offering comprehensive skin care: acne, eczema, psoriasis, fungal infection treatments, anti-aging procedures, laser therapy & aesthetic solutions. Serving Lahore with over 20 years of excellence.",
  keywords: ["dermatology", "dermatologist", "skin care", "acne treatment", "fungal infection", "laser treatment", "aesthetic dermatology", "Lahore", "Derma Cure", "anti-aging", "skin rejuvenation"],
  authors: [{ name: "Derma Cure" }],
  openGraph: {
    title: "Derma Cure - Expert Dermatology & Aesthetic Treatments",
    description: "Transform your skin with professional dermatological care. Over 20 years of board-certified experience in Lahore.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dermatology",
    "name": "Derma Cure",
    "image": "https://dermacure.vercel.app/hero-banner.jpg",
    "@id": "https://dermacure.vercel.app",
    "url": "https://dermacure.vercel.app",
    "telephone": "+923304620676",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "43 Green Acres Main Rd, Block B T & T Aabpara Housing Society",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.412135,
      "longitude": 74.240428
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "19:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "17:00",
        "closes": "22:00"
      }
    ],
    "priceRange": "$",
    "employee": {
      "@type": "Person",
      "name": "Dr. Uzma Khalil",
      "jobTitle": "Board Certified Dermatologist",
      "description": "20+ Years Experience in Medical & Aesthetic Dermatology"
    }
  };

  return (
    <html lang="en">
      <head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
