"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import HeroImage from "@/assets/images/hero-bg.jpg";
export default function HeroSection() {
  const t = useTranslations("hero");
  const heroRef = useRef<HTMLDivElement>(null);
  // const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero section animations
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

    // Content animations with staggered effect
    tl.fromTo(
      ".hero-content > *",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.5"
    );
  }, []);

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={HeroImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl md:text-2xl mb-8">{t("subtitle")}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-white text-blue-900 hover:bg-blue-100 transition-colors px-8 py-3 rounded-full font-medium text-lg"
            >
              {t("contactButton")}
            </a>
            <a
              href="#about"
              className="border-2 border-white hover:bg-white/10 transition-colors px-8 py-3 rounded-full font-medium text-lg"
            >
              {t("learnMoreButton")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
