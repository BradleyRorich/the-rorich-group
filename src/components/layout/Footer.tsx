import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <p className="text-lg font-bold text-white">The Rorich Group</p>
            <p className="text-sm text-gold">Your Business Partner</p>
            <p className="text-sm text-white/50 leading-relaxed">
              Connecting businesses with industrial and printing solutions across
              Africa and beyond.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Quick Links</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+27735618899"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors"
              >
                <Phone className="size-4 shrink-0" />
                +27 73 561 8899
              </a>
              <a
                href="mailto:info@rorichgroup.co.za"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors"
              >
                <Mail className="size-4 shrink-0" />
                info@rorichgroup.co.za
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">
            © {year} The Rorich Group. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/legal"
              className="text-xs text-white/30 hover:text-gold transition-colors"
            >
              Legal Notice
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-white/30 hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
