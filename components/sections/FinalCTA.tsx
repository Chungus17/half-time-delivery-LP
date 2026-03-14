"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { createWhatsAppLink } from "@/lib/Whatsapp";

export default function FinalCTA() {
  const businessWhatsappLink = createWhatsAppLink(
    "Hello Half Time, I want delivery support for my business."
  );

  const driverWhatsappLink = createWhatsAppLink(
    "Hello Half Time, I want to apply as a driver."
  );

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-[var(--dark-1)] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[var(--orange-1)]/12 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.18))]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange-1)] sm:text-sm">
            Ready to start?
          </div>

          <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Let’s get
            <span className="block text-[var(--orange-1)]">moving.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            Whether you need delivery support or want to join as a driver,
            message us on WhatsApp and we’ll take it from there.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={businessWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[210px] items-center justify-center rounded-full bg-[var(--orange-1)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(249,115,22,0.22)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_20px_45px_rgba(249,115,22,0.30)]"
            >
              For Businesses
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href={driverWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[var(--orange-1)]/40 hover:bg-white/8 hover:text-[var(--orange-1)]"
            >
              Join as Driver
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}