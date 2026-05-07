"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, User, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroCarousel from "@/components/HeroCarousel";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Bahut fast service mili, form bina error ke fill ho gaya.",
  },
  {
    name: "Pooja Verma",
    text: "Resume banwaya tha, job mil gayi 🙌",
  },
  {
    name: "Amit Kumar",
    text: "PDF work perfect tha, highly recommended.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gradient-to-b from-white via-blue-50 to-white text-gray-900">

      {/* 🔝 Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b px-10 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          CyberCafe<span className="text-blue-600">Pro</span>
        </h1>

        <div className="flex gap-6 items-center">
          <Link href="/services">Services</Link>
          <Link href="/login">Login</Link>
          <Link
            href="/upload"
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* 🚀 Hero */}
      <section className="relative overflow-hidden py-32 px-6 text-center">

  {/* 🔥 Background Gradient Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[120px] rounded-full" />
    <div className="absolute bottom-[-100px] right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full" />
  </div>

  {/* ✨ Content */}
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight"
  >
    Next-Gen Cyber Cafe Services,
    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
      {" "}Fast & Seamless
    </span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-gray-600 mt-6 max-w-xl mx-auto text-lg"
  >
    Forms, resumes, PDFs — everything handled professionally with speed & accuracy.
  </motion.p>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="mt-10 flex justify-center gap-4"
  >
    <Link
      href="/upload"
      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-3 rounded-full shadow-lg hover:scale-105 transition"
    >
      Get Started
    </Link>

    <Link
      href="/services"
      className="border px-7 py-3 rounded-full backdrop-blur-md bg-white/40 hover:bg-white/60 transition"
    >
      Explore
    </Link>
  </motion.div>

</section>


<HeroCarousel />


      {/* 🧾 Services */}
      <AnimatedSection direction="left">
        <section className="px-10 py-20 max-w-6xl mx-auto overflow-hidden">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Our Services
          </h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.03, y: -4 }}
                className="p-5 border rounded-2xl shadow-sm bg-white"
              >
                {i === 0 && <FileText className="mb-4 text-blue-600" size={32} />}
                {i === 1 && <User className="mb-4 text-blue-600" size={32} />}
                {i === 2 && <Wrench className="mb-4 text-blue-600" size={32} />}

                <h4 className="font-semibold text-lg">
                  {["Govt Forms", "Resume", "PDF Work"][i]}
                </h4>

                <p className="text-gray-600 text-sm mt-2">
                  {[
                    "SSC, Banking forms filling",
                    "Professional resume building",
                    "Edit & convert files",
                  ][i]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      {/* ⭐ Features */}
      <AnimatedSection direction="right">
        <section className="py-20 px-10 max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Why Choose Us
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {["⚡ Fast", "🔒 Secure", "💰 Affordable"].map((f, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <h4 className="font-semibold mt-3">{f}</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Best service experience
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ⚡ How it works */}
      <AnimatedSection direction="left">
        <section className="bg-gray-50 py-20 px-10">
          <h3 className="text-3xl font-semibold text-center mb-12">
            How It Works
          </h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto"
          >
            {["Upload", "Process", "Download"].map((step, i) => (
              <motion.div key={i} variants={item}>
                <div className="text-4xl mb-3">
                  {["📤", "⚙️", "📥"][i]}
                </div>
                <h4 className="font-semibold">{step}</h4>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      {/* 💰 Pricing */}
      <AnimatedSection direction="right">
        <section className="py-20 px-10 bg-white">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Pricing
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {["Basic", "Standard", "Premium"].map((plan, i) => (
              <div key={i} className="p-6 border rounded-2xl text-center hover:shadow-xl transition">
                <h4 className="text-xl font-semibold mb-2">{plan}</h4>
                <p className="text-3xl font-bold mb-4">
                  ₹{[49, 99, 199][i]}
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* 💬 Testimonials */}
      <AnimatedSection direction="up">
        <section className="py-20 text-center">
          <h3 className="text-3xl font-semibold mb-10">
            What Users Say
          </h3>

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto p-6 border rounded-xl shadow bg-white"
          >
            <p className="text-gray-700 italic">
              "{testimonials[index].text}"
            </p>
            <h4 className="mt-4 font-semibold">
              - {testimonials[index].name}
            </h4>
          </motion.div>
        </section>
      </AnimatedSection>

      {/* ❓ FAQ */}
      <AnimatedSection direction="left">
        <section className="py-20 px-10 max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-10">
            FAQs
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">How fast is delivery?</h4>
              <p className="text-gray-600 text-sm">24-48 hours</p>
            </div>
            <div>
              <h4 className="font-semibold">Is my data safe?</h4>
              <p className="text-gray-600 text-sm">Yes 100% secure</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 🚀 CTA */}
      <AnimatedSection direction="up">
        <section className="py-24 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <h3 className="text-4xl font-bold mb-4">
            Ready to Start? 🚀
          </h3>

          <Link
            href="/upload"
            className="bg-white text-blue-600 px-8 py-3 rounded-full"
          >
            Get Started
          </Link>
        </section>
      </AnimatedSection>

      {/* 🔻 Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t">
        © 2026 CyberCafe Pro
      </footer>

    </main>
  );
}