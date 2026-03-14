"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { navItems } from "@/lib/navigation";
import { createWhatsAppLink } from "@/lib/Whatsapp";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const businessWhatsappLink = createWhatsAppLink(
    "Hello Half Time, I want delivery support for my business."
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -40% 0px",
        threshold: 0.01,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    const el = document.getElementById(targetId);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  const isSolid = scrolled || isOpen;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="">
          <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled
                ? "bg-[var(--dark-1)]/70 shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur-2xl"
                : "bg-[var(--dark-1)]/95 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
              }`}
          >
            <nav className="flex items-center justify-between px-4 py-3 sm:px-5 lg:px-6 mx-auto max-w-7xl">
              {/* Logo */}
              <Link
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="group flex items-center gap-3"
              >
                <div className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11">
                  <Image
                    src="/Logo.svg"
                    alt="Half Time logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                <span className="text-lg font-black uppercase tracking-[0.24em] text-[var(--orange-1)] transition-transform duration-300 group-hover:scale-[1.02] sm:text-xl">
                  HALF TIME
                </span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden items-center gap-2 md:flex">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive
                        ? "text-[var(--orange-1)]"
                        : "text-[var(--text-on-dark)]/88 hover:text-[var(--text-on-dark)]"
                        }`}
                    >
                      <span className="relative z-10">{item.label}</span>

                      <span
                        className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive
                          ? "bg-white/6"
                          : "bg-transparent group-hover:bg-white/5"
                          }`}
                      />

                      <span
                        className={`absolute bottom-[7px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[var(--orange-1)] transition-all duration-300 ${isActive ? "w-6 opacity-100" : "w-0 opacity-0"
                          }`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:block">
                <a
                  href={businessWhatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--orange-1)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,0.18)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_18px_40px_rgba(249,115,22,0.28)]"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Mobile Toggle */}
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--text-on-dark)] transition-all duration-300 hover:border-[var(--orange-1)] hover:bg-white/8 hover:text-[var(--orange-1)] md:hidden"
              >
                <span className="sr-only">Open menu</span>

                <div className="relative h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-[2px] w-5 origin-center rounded-full bg-current transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""
                      }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                      }`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] h-[2px] w-5 origin-center rounded-full bg-current transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""
                      }`}
                  />
                </div>
              </button>
            </nav>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
              ? "pointer-events-auto visible mt-3 opacity-100"
              : "pointer-events-none invisible mt-1 opacity-0"
              }`}
          >
            <div
              className={`origin-top rounded-[1.75rem] border border-white/10 bg-[var(--dark-1)]/85 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
                ? "translate-y-0 scale-100"
                : "-translate-y-3 scale-[0.98]"
                }`}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${isActive
                        ? "bg-[var(--orange-1)]/12 text-[var(--orange-1)]"
                        : "text-[var(--text-on-dark)]/90 hover:bg-white/6 hover:text-[var(--text-on-dark)]"
                        } ${isOpen
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                        }`}
                      style={{
                        transitionDelay: isOpen ? `${index * 45}ms` : "0ms",
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <a
                href={businessWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-3 inline-flex w-full items-center justify-center rounded-full bg-[var(--orange-1)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.18)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_18px_40px_rgba(249,115,22,0.28)] ${isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
                  }`}
                style={{
                  transitionDelay: isOpen ? `${navItems.length * 45}ms` : "0ms",
                }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px] transition-all duration-500 md:hidden ${isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      />
    </>
  );
}