"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bike,
  CarFront,
  BadgeCheck,
  Clock3,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/Whatsapp";

const roles = [
  {
    icon: CarFront,
    title: "Car Drivers",
    text: "Talabat & Keeta delivery",
  },
  {
    icon: Bike,
    title: "Bike Drivers",
    text: "Talabat & Keeta delivery",
  },
];

const requirements = [
  "Transferable visa",
  "Valid Kuwait driving license",
  "Minimum 1-year delivery experience",
  "Punctual & hardworking",
];

const dutyHours = [
  "12 hours/day, fixed shifts",
  "Weekly off as per company policy",
];

export default function HowItWorks() {
  const driverWhatsappLink = createWhatsAppLink(
    "Hello Half Time, I want to apply for a driver job."
  );

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-28 overflow-hidden bg-[var(--bg-1)] py-12"
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
            Job openings
          </div>

          <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[var(--text-1)] sm:text-5xl lg:text-6xl">
            Driver Jobs
            <span className="block text-[var(--orange-1)]">Available</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-2)] sm:text-lg">
            Join Half Time as a driver and start with a structured role,
            fixed shifts, and strong earning potential.
          </p>
        </motion.div>

        {/* role cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2 lg:gap-6">
          {roles.map((role, index) => {
            const Icon = role.icon;

            return (
              <motion.div
                key={role.title}
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
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-[var(--text-1)]">
                  {role.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-2)] sm:text-[15px]">
                  {role.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* info cards */}
        <div className="mx-auto mt-6 grid max-w-5xl gap-4 md:grid-cols-2 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[2rem] border border-black/5 bg-white/85 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-7"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--orange-1)]/10 text-[var(--orange-1)]">
              <BadgeCheck className="h-5 w-5" />
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-[var(--text-1)]">
              Requirements
            </h3>

            <ul className="mt-4 space-y-3">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--orange-1)]" />
                  <span className="text-sm leading-6 text-[var(--text-2)] sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.6,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[2rem] border border-black/5 bg-[var(--dark-1)] p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-7"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[var(--orange-1)]">
              <Clock3 className="h-5 w-5" />
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em]">
              Duty Hours
            </h3>

            <ul className="mt-4 space-y-3">
              {dutyHours.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--orange-1)]" />
                  <span className="text-sm leading-6 text-white/75 sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.22,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 text-center"
        >
          <a
            href={driverWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--orange-1)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(249,115,22,0.20)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_20px_45px_rgba(249,115,22,0.28)]"
          >
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}