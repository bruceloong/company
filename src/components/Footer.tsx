"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiGithub,
  FiTwitter as FiTwitterIcon,
  FiLinkedin as FiLinkedinIcon,
  FiFacebook as FiFacebookIcon,
} from "react-icons/fi";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const t = useTranslations("footer");
  const footerRef = useRef<HTMLElement>(null);

  const currentYear = new Date().getFullYear();

  // 使用 header 命名空间的翻译键，因为 footer 中没有这些键
  const headerT = useTranslations("header");

  const navLinks = [
    { href: "#", label: headerT("home") },
    { href: "#about", label: headerT("about") },
    { href: "#services", label: headerT("services") },
    { href: "#products", label: headerT("products") },
    { href: "#testimonials", label: headerT("testimonials") },
    { href: "#contact", label: headerT("contact") },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com" },
    { icon: <FiTwitterIcon />, href: "https://twitter.com" },
    { icon: <FiLinkedinIcon />, href: "https://linkedin.com" },
    { icon: <FiFacebookIcon />, href: "https://facebook.com" },
  ];

  useEffect(() => {
    // Animation for footer
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("logo")}</h3>
            <p className="mb-4 text-gray-400">{t("description")}</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("contactInfo")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">{t("address")}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">{t("phone")}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">{t("email")}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("newsletter")}</h3>
            <p className="mb-4 text-gray-400">{t("newsletterText")}</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {t("subscribe")}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
