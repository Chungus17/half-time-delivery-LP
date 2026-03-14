"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  MessageCircleMore,
  Users,
} from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Fast",
    text: "Quick response and smooth coordination.",
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    text: "Delivery support you can count on.",
    featured: true,
  },
  {
    icon: MessageCircleMore,
    title: "Simple",
    text: "Easy communication through WhatsApp.",
    featured: false,
  },
  {
    icon: Users,
    title: "Flexible",
    text: "Built for businesses and drivers alike.",
    featured: false,
  },
];

export default function WhyHalfTime() {
  return (
    <section
      id="why-us"
      className="relative scroll-mt-28 overflow-hidden bg-[var(--bg-1)] py-24 sm:py-28 lg:py-32"
    >
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-100px] top-[10%] h-[240px] w-[240px] rounded-full bg-[var(--orange-1)]/8 blur-3xl" />
        <div className="absolute right-[-100px] bottom-[8%] h-[260px] w-[260px] rounded-full bg-[var(--orange-2)]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-[var(--orange-1)]/15 bg-[var(--orange-1)]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange-1)] sm:text-sm">
            Why Half Time
          </div>

          <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[var(--text-1)] sm:text-5xl lg:text-6xl">
            Built to move
            <span className="block text-[var(--orange-1)]">fast and simple</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-2)] sm:text-lg">
            A delivery brand focused on speed, reliability, and clear communication
            for businesses and drivers.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-4 lg:gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            const featured = item.featured;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group rounded-[2rem] border p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                  featured
                    ? "border-white/10 bg-[var(--dark-1)] text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
                    : "border-black/5 bg-white/85 text-[var(--text-1)] shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
                    featured
                      ? "bg-white/10 text-[var(--orange-1)]"
                      : "bg-[var(--orange-1)]/10 text-[var(--orange-1)] group-hover:bg-[var(--orange-1)] group-hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3
                  className={`mt-6 text-2xl font-bold tracking-[-0.03em] ${
                    featured ? "text-white" : "text-[var(--text-1)]"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-6 sm:text-[15px] ${
                    featured ? "text-white/70" : "text-[var(--text-2)]"
                  }`}
                >
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}