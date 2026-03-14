"use client";

import { motion } from "framer-motion";
import { MessageCircleMore, ClipboardList, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Message us",
    text: "Reach out on WhatsApp and tell us what you need.",
    icon: MessageCircleMore,
  },
  {
    number: "02",
    title: "Share details",
    text: "We quickly understand your business needs or driver application.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Get moving",
    text: "Our team helps you start with a smooth and simple process.",
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-28 overflow-hidden bg-[var(--bg-1)] py-16"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-80px] top-[15%] h-[220px] w-[220px] rounded-full bg-[var(--orange-1)]/8 blur-3xl" />
        <div className="absolute right-[-100px] bottom-[10%] h-[260px] w-[260px] rounded-full bg-[var(--orange-2)]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* top text */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-[var(--orange-1)]/15 bg-[var(--orange-1)]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange-1)] sm:text-sm">
            How it works
          </div>

          <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[var(--text-1)] sm:text-5xl lg:text-6xl">
            Start fast.
            <span className="block text-[var(--orange-1)]">Keep it simple.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-2)] sm:text-lg">
            Whether you’re a business looking for delivery support or a driver
            ready to join, getting started is quick and straightforward.
          </p>
        </motion.div>

        {/* 3 cards */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-3 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-[2rem] border border-black/5 bg-white/85 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--orange-1)]/10 text-[var(--orange-1)] transition-all duration-300 group-hover:bg-[var(--orange-1)] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-sm font-bold tracking-[0.18em] text-[var(--orange-1)]/80">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-[var(--text-1)]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-2)] sm:text-[15px]">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}