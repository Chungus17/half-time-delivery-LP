"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bike,
  CircleCheckBig,
  Clock3,
  MessageCircleMore,
  WalletCards,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/Whatsapp";

const benefits = [
  {
    icon: Bike,
    title: "New vehicle provided",
    text: "Car or bike, 2026 model.",
  },
  {
    icon: WalletCards,
    title: "High pay + commission",
    text: "Earn per order with strong income potential.",
  },
  {
    icon: CircleCheckBig,
    title: "Monthly bonuses",
    text: "Extra rewards based on performance.",
  },
  {
    icon: Clock3,
    title: "Fuel & maintenance paid",
    text: "We cover the running costs for you.",
  },
  {
    icon: MessageCircleMore,
    title: "Free phone & internet",
    text: "Stay connected without extra expense.",
  },
];

const steps = [
  {
    number: "01",
    title: "Message us",
    text: "Start by contacting us on WhatsApp.",
  },
  {
    number: "02",
    title: "Share your details",
    text: "Send your basic information and availability.",
  },
  {
    number: "03",
    title: "Get started",
    text: "Our team will guide you through the next steps.",
  },
];

export default function DriverRecruitment() {
  const driverWhatsappLink = createWhatsAppLink(
    "Hello Half Time, I want to apply as a driver."
  );

  return (
    <section
      id="drivers"
      className="relative scroll-mt-28 overflow-hidden bg-[var(--bg-1)] py-24 sm:py-28 lg:py-32"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-80px] top-[15%] h-[220px] w-[220px] rounded-full bg-[var(--orange-1)]/10 blur-3xl" />
        <div className="absolute right-[-100px] bottom-[10%] h-[260px] w-[260px] rounded-full bg-[var(--orange-2)]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.06),transparent_28%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center rounded-full border border-[var(--orange-1)]/15 bg-[var(--orange-1)]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange-1)] sm:text-sm">
              For drivers
            </div>

            <h2 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.05em] text-[var(--text-1)] sm:text-6xl lg:text-7xl">
              Drive with
              <span className="block text-[var(--orange-1)]">Half Time</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text-2)] sm:text-lg">
              Join a delivery team with flexible opportunities and a simple
              application process.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={driverWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--orange-1)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(249,115,22,0.20)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_20px_45px_rgba(249,115,22,0.28)]"
              >
                Apply on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-4 rounded-[1.5rem] border border-black/5 bg-white/80 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--orange-1)]/10 text-[var(--orange-1)]">
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
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[620px]">
              {/* main large card */}
              <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white/85 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-6">
                <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(249,115,22,0.10),rgba(255,255,255,0.96))] p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange-1)]">
                        Driver application
                      </p>
                      <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[var(--text-1)] sm:text-3xl">
                        Start your journey in 3 simple steps
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--dark-1)] text-white shadow-lg">
                      <Bike className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {steps.map((step, index) => (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.55,
                          delay: 0.2 + index * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-[1.25rem] border border-black/5 bg-white/85 p-4 shadow-sm"
                      >
                        <div className="flex gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--orange-1)] text-sm font-bold text-white">
                            {step.number}
                          </div>

                          <div>
                            <h4 className="text-base font-bold text-[var(--text-1)]">
                              {step.title}
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-[var(--text-2)]">
                              {step.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}