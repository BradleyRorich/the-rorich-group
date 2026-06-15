"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { productCategories, categorySlug } from "@/data/products";
import { industries } from "@/data/industries";

const simpleLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const dropdownLinks = [
  {
    label: "Services",
    href: "/services",
    items: services.map((s) => ({ label: s.title, href: "/services" })),
  },
  {
    label: "Industries",
    href: "/industries",
    items: industries.map((i) => ({ label: i.title, href: "/industries" })),
  },
  {
    label: "Products",
    href: "/products",
    items: productCategories.map((cat) => ({
      label: cat,
      href: `/products#${categorySlug(cat)}`,
    })),
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-brand/95 backdrop-blur supports-[backdrop-filter]:bg-brand/90">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-lg font-bold tracking-tight text-white">
            The Rorich Group
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Home / About */}
          {simpleLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors hover:text-gold rounded-md",
                pathname === link.href ? "text-gold" : "text-white/70"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown links */}
          {dropdownLinks.map((group) => (
            <div key={group.label} className="relative group">
              <Link
                href={group.href}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-gold rounded-md",
                  pathname.startsWith(group.href) ? "text-gold" : "text-white/70"
                )}
              >
                {group.label}
                <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* Dropdown panel */}
              <div className="absolute top-full left-0 z-50 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                <div className="min-w-[220px] rounded-lg border border-white/10 bg-[#0d0d0d] shadow-xl py-1.5">
                  {group.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-white/65 hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Contact */}
          <Link
            href="/contact"
            className={cn(
              "px-3 py-2 text-sm font-medium transition-colors hover:text-gold rounded-md",
              pathname === "/contact" ? "text-gold" : "text-white/70"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <Sheet>
          <SheetTrigger
            className="md:hidden text-white/80 hover:text-white"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-brand border-white/10 overflow-y-auto"
          >
            <SheetHeader>
              <SheetTitle className="text-white text-left">
                The Rorich Group
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-1 p-4">
              {/* Simple links — Home, About */}
              {simpleLinks.slice(0, 2).map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-3 py-2.5 text-base font-medium rounded-md transition-colors hover:text-gold hover:bg-white/5",
                      pathname === link.href ? "text-gold" : "text-white/70"
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}

              {/* Expandable dropdown groups */}
              {dropdownLinks.map((group) => (
                <div key={group.label}>
                  <button
                    onClick={() =>
                      setOpenMobile(
                        openMobile === group.label ? null : group.label
                      )
                    }
                    className={cn(
                      "flex w-full items-center justify-between px-3 py-2.5 text-base font-medium rounded-md transition-colors hover:text-gold hover:bg-white/5",
                      pathname.startsWith(group.href)
                        ? "text-gold"
                        : "text-white/70"
                    )}
                  >
                    {group.label}
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-200",
                        openMobile === group.label ? "rotate-180" : ""
                      )}
                    />
                  </button>

                  {openMobile === group.label && (
                    <div className="ml-3 mt-1 border-l border-white/10 pl-3 pb-1 flex flex-col gap-0.5">
                      <SheetClose asChild>
                        <Link
                          href={group.href}
                          className="block px-2 py-1.5 text-sm text-white/50 hover:text-gold transition-colors"
                        >
                          View all {group.label}
                        </Link>
                      </SheetClose>
                      {group.items.map((item) => (
                        <SheetClose key={item.label} asChild>
                          <Link
                            href={item.href}
                            className="block px-2 py-1.5 text-sm text-white/60 hover:text-gold transition-colors"
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Contact */}
              <SheetClose asChild>
                <Link
                  href="/contact"
                  className={cn(
                    "block px-3 py-2.5 text-base font-medium rounded-md transition-colors hover:text-gold hover:bg-white/5",
                    pathname === "/contact" ? "text-gold" : "text-white/70"
                  )}
                >
                  Contact
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
