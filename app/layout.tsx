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
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
