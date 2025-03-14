"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const t = useTranslations("contact");
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

    // Form animation
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Initialize EmailJS
    // Note: In a real application, you would need to replace these with your actual EmailJS credentials
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    console.log(formData);

    // Here you would normally integrate with a service like EmailJS
    // For demo purposes, we'll simulate a successful submission
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus("success");
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t("infoTitle")}</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-blue-500 mr-4 mt-1">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">
                    {t("address.title")}
                  </h4>
                  <p className="text-gray-300">{t("address.line1")}</p>
                  <p className="text-gray-300">{t("address.line2")}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-500 mr-4 mt-1">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">
                    {t("phone.title")}
                  </h4>
                  <p className="text-gray-300">{t("phone.number")}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-500 mr-4 mt-1">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">
                    {t("email.title")}
                  </h4>
                  <p className="text-gray-300">{t("email.address")}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">{t("formTitle")}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-70"
              >
                {formStatus === "submitting"
                  ? t("form.submitting")
                  : t("form.submit")}
              </button>

              {formStatus === "success" && (
                <div className="p-4 bg-green-800 rounded-lg mt-4">
                  {t("form.successMessage")}
                </div>
              )}

              {formStatus === "error" && (
                <div className="p-4 bg-red-800 rounded-lg mt-4">
                  {t("form.errorMessage")}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
