"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLaptopCode,
  FaCloud,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";
import {
  FiMonitor,
  FiSmartphone,
  FiShoppingBag,
  FiBarChart2,
} from "react-icons/fi";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
  const t = useTranslations("services");
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Heading animation
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Cards animation with staggered effect
    if (cardsRef.current) {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const services = [
    {
      icon: <FiMonitor className="w-12 h-12" />,
      title: t("service1.title"),
      description: t("service1.description"),
    },
    {
      icon: <FiSmartphone className="w-12 h-12" />,
      title: t("service2.title"),
      description: t("service2.description"),
    },
    {
      icon: <FiShoppingBag className="w-12 h-12" />,
      title: t("service3.title"),
      description: t("service3.description"),
    },
    {
      icon: <FiBarChart2 className="w-12 h-12" />,
      title: t("service4.title"),
      description: t("service4.description"),
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={headingRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-blue-600 dark:text-blue-400 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
