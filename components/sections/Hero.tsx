"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Bike, Clock3, Store } from "lucide-react";
import { createWhatsAppLink } from "@/lib/Whatsapp";

export default function Hero() {
  const businessWhatsappLink = createWhatsAppLink(
    "Hello Half Time, I want delivery support for my business."
  );

  const driverWhatsappLink = createWhatsAppLink(
    "Hello Half Time, I want to apply as a driver."
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-28 bg-[var(--bg-1)] pt-6 pb-16 sm:pt-8 sm:pb-20"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-80px] left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[var(--orange-1)]/12 blur-3xl" />
        <div className="absolute top-[180px] right-[-80px] h-[240px] w-[240px] rounded-full bg-[var(--orange-2)]/10 blur-3xl" />
        <div className="absolute bottom-[-80px] left-[-60px] h-[220px] w-[220px] rounded-full bg-[var(--orange-1)]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-[var(--orange-1)]/15 bg-[var(--orange-1)]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--orange-1)] sm:text-sm">
            Fast delivery solutions
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[var(--text-1)] sm:text-6xl lg:text-7xl">
            Delivery for
            <span className="block text-[var(--orange-1)]">businesses</span>
            <span className="block">Opportunities for drivers</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-2)] sm:text-lg">
            Food, cars, bikes, and more. Simple delivery support for businesses in Kuwait.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={businessWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--orange-1)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(249,115,22,0.20)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_20px_45px_rgba(249,115,22,0.28)]"
            >
              For Businesses
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href={driverWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--dark-1)]/10 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--text-1)] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:border-[var(--orange-1)]/30 hover:text-[var(--orange-1)]"
            >
              Join as Driver
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto max-w-[560px]">
            {/* main card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/80 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-6">
              <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(249,115,22,0.10),rgba(255,255,255,0.95))] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--orange-1)]">
                      Half Time Delivery
                    </p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[var(--text-1)] sm:text-3xl">
                      Fast. Simple. Reliable.
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-[var(--dark-1)] px-4 py-3 text-white shadow-lg">
                    <Bike className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-black/5 bg-white/85 p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-[var(--orange-1)]">
                      <BriefcaseBusiness className="h-4 w-4" />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                        Businesses
                      </span>
                    </div>
                    <p className="mt-3 text-lg font-bold text-[var(--text-1)]">
                      Delivery support
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-2)]">
                      Restaurants, food brands, and more
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-black/5 bg-[var(--dark-1)] p-4 text-white shadow-sm">
                    <div className="flex items-center gap-2 text-[var(--orange-1)]">
                      <Bike className="h-4 w-4" />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                        Drivers
                      </span>
                    </div>
                    <p className="mt-3 text-lg font-bold">
                      Join the team
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Quick application through WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}