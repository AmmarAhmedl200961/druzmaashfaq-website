import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/644974423/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/druzmaashfaq?igsh=MWFmbDVnbGdhZnM5bQ==",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/uzma-khalil-571859329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: Linkedin,
  },
];

const quickLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Clinic Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Derma Cure</h3>
              <p className="text-background/80 mb-4 leading-relaxed">
                Excellence in dermatological care, combining medical expertise with aesthetic innovation.
              </p>
              <div className="space-y-2 text-sm">
                <a 
                  href="tel:03304620676" 
                  className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>0330 4620676</span>
                </a>
                <a 
                  href="mailto:info@dermacure.com" 
                  className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>info@dermacure.com</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-background/80 hover:text-background transition-colors inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Location & Social */}
            <div>
              <h3 className="text-xl font-bold mb-4">Visit Us</h3>
              <div className="flex items-start gap-2 text-background/80 mb-6">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" aria-hidden="true" />
                <address className="not-italic text-sm leading-relaxed">
                  43 Green Acres Main Rd<br />
                  Block B T & T Aabpara Housing Society<br />
                  Lahore, Pakistan
                </address>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                        aria-label={`Visit our ${social.name} page`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/60">
              <p>
                © {currentYear} Derma Cure. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-background transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-background transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
