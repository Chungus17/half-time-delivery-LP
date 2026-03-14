"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Route,
  ShieldCheck,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/Whatsapp";

const businessItems = [
  {
    icon: Clock3,
    title: "Fast support",
    text: "Quick coordination when speed matters.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable team",
    text: "Delivery support you can trust.",
  },
  {
    icon: Route,
    title: "Flexible setup",
    text: "Food, bikes, cars, and more.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Built for growth",
    text: "Made for restaurants and growing brands.",
  },
];

export default function BusinessSolutions() {
  const businessWhatsappLink = createWhatsAppLink(
    "Hello Half Time, I want delivery support for my business."
  );

  return (
    <section
      id="businesses"
      className="relative min-h-screen overflow-hidden bg-[var(--dark-1)] py-14"
    >
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.18))]" />
        <div className="absolute -top-20 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[var(--orange-1)]/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-80px] h-[260px] w-[260px] rounded-full bg-[var(--orange-2)]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange-1)] sm:text-sm">
            For businesses
          </div>

          <h2 className="mt-6 text-5xl font-black leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Delivery support
            <span className="block text-[var(--orange-1)]">that feels simple</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Reliable delivery solutions for restaurants, food brands, and
            businesses that need to move fast.
          </p>

          <motion.a
            href={businessWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.55,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--orange-1)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(249,115,22,0.22)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_20px_45px_rgba(249,115,22,0.30)]"
          >
            Talk on WhatsApp
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 grid w-full max-w-6xl gap-4 grid-cols-2 xl:grid-cols-4"
        >
          {businessItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.40 }}
                transition={{
                  duration: 0.55,
                  delay: 0.2 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)] sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--orange-1)]/12 text-[var(--orange-1)] transition-all duration-300 group-hover:bg-[var(--orange-1)] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}