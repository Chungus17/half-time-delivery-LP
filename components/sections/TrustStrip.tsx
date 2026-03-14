"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Clock3, ShieldCheck, Bike } from "lucide-react";

const items = [
  {
    icon: Clock3,
    title: "Fast response",
    text: "Quick communication through WhatsApp.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable team",
    text: "Delivery support you can count on.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business-ready",
    text: "Built for restaurants and growing brands.",
  },
  {
    icon: Bike,
    title: "For drivers",
    text: "Simple application. Flexible opportunities.",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative -mt-2 pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.85 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-3 md:grid-cols-2 xl:grid-cols-4"
        >
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-[1.5rem] border border-black/5 bg-white/80 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--orange-1)]/10 text-[var(--orange-1)] transition duration-300 group-hover:bg-[var(--orange-1)] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold tracking-[-0.02em] text-[var(--text-1)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--text-2)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}