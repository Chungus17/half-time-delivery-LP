import Link from "next/link";
import { createWhatsAppLink } from "@/lib/Whatsapp";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Businesses", href: "#businesses" },
  { label: "Drivers", href: "#drivers" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const whatsappLink = createWhatsAppLink(
    "Hello Half Time, I want to know more."
  );

  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a]">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[var(--orange-1)]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.18))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <Link href="#home" className="inline-block">
            <span className="text-3xl font-black uppercase tracking-[0.28em] text-[var(--orange-1)] sm:text-4xl">
              HALF TIME
            </span>
          </Link>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Delivery solutions for businesses. Opportunities for drivers.
            Simple, fast, and reliable.
          </p>

          {/* CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[var(--orange-1)]/40 hover:bg-white/8 hover:text-[var(--orange-1)]"
          >
            Chat on WhatsApp
          </a>

          {/* Nav */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-white/55 transition-colors duration-300 hover:text-[var(--orange-1)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* divider */}
          <div className="mt-10 h-px w-full max-w-4xl bg-white/8" />

          {/* bottom */}
          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-white/30">
            © {new Date().getFullYear()} Half Time Delivery
          </p>
        </div>
      </div>
    </footer>
  );
}