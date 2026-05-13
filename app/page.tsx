"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  Image as ImageIcon,
  MapPin,
  MessageCircle,
  Phone,
  Printer,
  ShieldCheck,
  Star,
} from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";
const CALL_NUMBER = "+91 XXXXX XXXXX";

const services = [
  {
    title: "सरकारी नौकरी Forms",
    desc: "SSC, Railway, Police, Army, Banking, Teaching aur sabhi Govt Job forms bharwaye.",
    icon: Briefcase,
  },
  {
    title: "Admit Card / Result",
    desc: "Admit card download, result check, exam notification aur print service.",
    icon: FileText,
  },
  {
    title: "Scholarship Forms",
    desc: "School, college, government scholarship forms carefully fill kiye jaate hain.",
    icon: GraduationCap,
  },
  {
    title: "Resume / Bio Data",
    desc: "Job ke liye professional resume, CV aur bio-data Hindi/English me banwaye.",
    icon: Printer,
  },
  {
    title: "PDF / Photo Work",
    desc: "PDF merge, compress, scan, photo resize, signature resize aur document editing.",
    icon: ImageIcon,
  },
  {
    title: "Typing & Online Work",
    desc: "Hindi/English typing, letter, application, affidavit format aur online work.",
    icon: CheckCircle2,
  },
];

const photos = [
  "/images/cyber/service1.jpeg",
  "/images/cyber/service2.jpeg",
  "/images/cyber/service3.jpeg",
  "/images/cyber/service4.jpeg",
];

const steps = [
  "WhatsApp par documents bhejo",
  "Hum details confirm karenge",
  "Form fill hone ke baad verify karwaenge",
  "Final submit ke baad receipt/admit card bhej denge",
];

export default function Home() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Namaste%20mujhe%20online%20form%20bharwana%20hai`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900 antialiased">
      {/* Top Bar */}
      <div className="bg-indigo-950 text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2.5 md:flex-row md:items-center md:justify-between">
          <p className="font-medium text-white/90">
            क्या आप परेशान हैं? घर बैठे Online Form, Admit Card, Result, Resume
            aur PDF ka kaam
          </p>

          <div className="flex flex-wrap gap-4 text-white/90">
            <span className="flex items-center gap-1.5">
              <Phone size={15} /> {CALL_NUMBER}
            </span>

            <span className="flex items-center gap-1.5">
              <Clock3 size={15} /> 10:00 AM - 8:00 PM
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-indigo-100 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            CyberCafe<span className="text-indigo-700">Pro</span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="hover:text-indigo-700">
              Services
            </a>

            <a href="#process" className="hover:text-indigo-700">
              Kaise Hoga?
            </a>

            <a href="#contact" className="hover:text-indigo-700">
              Contact
            </a>
          </div>

          <Link
            href={whatsappLink}
            target="_blank"
            className="flex items-center gap-2 rounded-2xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
          >
            <MessageCircle size={18} />
            WhatsApp
          </Link>
        </div>
      </nav>

      
     {/* Hero */}
<section className="relative min-h-[760px] overflow-hidden bg-white">
  {/* Right Side Hero Image - Zoom Out Layout */}
<div className="absolute right-0 top-[140px] hidden h-[520px] w-[64%] overflow-hidden lg:block xl:top-[130px] xl:h-[560px]">
  <img
    src="/images/hero-image.png"
    alt="Online Cyber Cafe Service"
    className="absolute right-0 top-0 h-full w-full object-contain object-right-top"
  />
</div>

  {/* Left White Fade */}
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/94 via-[42%] to-white/10" />
  {/* Soft Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_34%),radial-gradient(circle_at_bottom_left,#eef2ff,transparent_35%)]" />

  <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-center px-6 py-16 lg:px-12">
    <motion.div
      initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 w-full max-w-[660px]"
    >
      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-2xl border border-indigo-100 bg-white/90 px-5 py-3 text-sm font-semibold text-indigo-700 shadow-md backdrop-blur">
        <ShieldCheck size={17} />
        <span className="text-green-600">✓</span>
        विश्वसनीय Online Cyber Cafe Service
      </div>

      {/* Heading */}
     <h1 className="text-[34px] font-extrabold tracking-[-1px] text-[#06091b] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[56px]">
  <span className="block whitespace-nowrap leading-[1.08]">
    अब Cyber Cafe
  </span>

  <span className="mt-3 block whitespace-nowrap leading-[1.08]">
    जाने की जरूरत नहीं,
  </span>

  <span className="mt-4 block whitespace-nowrap leading-[1.08] text-[#4f46e5]">
    घर बैठे Form भरवाइए
  </span>
</h1>

      {/* Description */}
      <p className="mt-7 max-w-[590px] text-[17px] font-normal leading-8 text-slate-500 sm:text-[18px] sm:leading-9">
        Govt job forms, admit card, result, scholarship, resume, PDF, photo
        resize aur typing ka kaam simple WhatsApp process se. बस documents
        भेजिए, बाकी काम हम संभाल लेंगे।
      </p>

      {/* Buttons */}
      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <Link
          href={whatsappLink}
          target="_blank"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#12b857] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0fa34c]"
        >
          <MessageCircle size={22} />
          WhatsApp Par Kaam Bhejo
          <ArrowRight size={20} />
        </Link>

        <a
          href={`tel:${CALL_NUMBER}`}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-800 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <Phone size={20} />
          Call Now
        </a>
      </div>

      {/* Feature Pills */}
      <div className="mt-9 flex flex-wrap gap-4">
        {[
          ["⚡", "Fast Service"],
          ["🛡️", "Secure Work"],
          ["🎧", "Hindi Support"],
        ].map(([icon, text]) => (
          <div
            key={text}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-sm backdrop-blur"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-xl">
              {icon}
            </div>
            <p className="text-sm font-semibold text-slate-700">{text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* Services */}
      <AnimatedSection direction="up">
        <section
          id="services"
          className="mx-auto max-w-7xl px-4 py-24 md:py-32"
        >
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 font-semibold text-orange-600">हमारी सेवाएँ</p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              क्या आप Form भरने में परेशान हैं?
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-slate-500">
              Sabhi online forms aur cyber cafe ka kaam ek jagah. Documents
              WhatsApp karo, hum receipt / PDF / admit card mobile par bhej
              denge.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex h-full flex-col rounded-[32px] border border-indigo-100/70 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-indigo-100 p-4 text-indigo-700 transition-all duration-300 group-hover:bg-indigo-700 group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-500">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </AnimatedSection>

      {/* Tagline */}
      <section className="bg-indigo-950 px-4 py-20 md:py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            “आपके दस्तावेज़, हमारी जिम्मेदारी”
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Form bharna, document resize karna, PDF banana ya admit card nikalna
            — ab sab kuch aasaan, तेज़ और भरोसेमंद तरीके से।
          </p>
        </div>
      </section>

      {/* Photo Strip */}
      <AnimatedSection direction="right">
        <section className="bg-white py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="mb-3 font-semibold text-orange-600">
                हमारी प्रमुख सेवाएँ
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                क्या आप इन कामों के लिए परेशान हैं?
              </h2>

              <p className="mt-5 text-[16px] leading-8 text-slate-500">
                Affidavit, insurance, ration card, electricity meter, bill
                correction, online form aur सरकारी दस्तावेज़ से जुड़े काम अब
                आसानी से करवाइए।
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {photos.map((photo, i) => (
                <motion.div
                  key={photo}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex h-full flex-col overflow-hidden rounded-[32px] bg-white shadow-lg shadow-slate-200/80"
                >
                  <img
                    src={photo}
                    alt={`Cyber cafe service ${i + 1}`}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-semibold text-slate-900">
                      {
                        [
                          "Affidavit / Agreement",
                          "Vehicle Insurance",
                          "Ration Card Services",
                          "Electricity Meter Work",
                        ][i]
                      }
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {
                        [
                          "किरायानामा, शपथ पत्र, NOC aur agreement work.",
                          "Bike, car, commercial vehicle insurance help.",
                          "नया राशन कार्ड aur नाम जोड़ने से जुड़ा कार्य.",
                          "मीटर, बिजली बिल, नाम बदलना aur correction work.",
                        ][i]
                      }
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection direction="left">
        <section id="process" className="mx-auto max-w-7xl px-4 py-24 md:py-32">
          <div className="grid gap-16 lg:gap-24 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 font-semibold text-orange-600">
                काम कैसे होगा?
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Simple WhatsApp process, no confusion
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-slate-500">
                Aapko website par kuch upload/login nahi karna. Sirf WhatsApp
                par clear photo/document bhejna hai. Hum details check karke
                kaam start kar denge.
              </p>

              <div className="mt-10 space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-700 font-semibold text-white">
                      {index + 1}
                    </div>

                    <p className="font-semibold text-slate-800">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-indigo-950 p-8 text-white shadow-xl">
              <h3 className="text-3xl font-bold tracking-tight">
                दस्तावेज़ भेजते समय ध्यान रखें
              </h3>

              <div className="mt-6 space-y-4 text-white/85">
                {[
                  "Photo clear aur readable honi chahiye",
                  "Name, DOB, mobile number jaise details sahi bhejein",
                  "Final submit se pehle form check zaroor karein",
                  "Payment/fees ka confirmation WhatsApp par ho jayega",
                ].map((point) => (
                  <div key={point} className="flex gap-3">
                    <CheckCircle2 className="shrink-0 text-amber-300" />

                    <p className="leading-7">{point}</p>
                  </div>
                ))}
              </div>

              <Link
                href={whatsappLink}
                target="_blank"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-indigo-950 transition hover:bg-amber-100"
              >
                WhatsApp Par Documents Bhejo
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose */}
      <AnimatedSection direction="right">
        <section className="bg-orange-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="mb-3 font-semibold text-orange-600">
                भरोसेमंद सेवा
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Kyun choose karein CyberCafePro?
              </h2>

              <p className="mt-4 leading-8 text-slate-500">
                सही जानकारी, साफ प्रक्रिया और समय पर काम — यही हमारी पहचान है।
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["⚡", "Fast Work", "Time par kaam complete"],
                ["🔐", "Safe Documents", "Aapka data secure"],
                ["🇮🇳", "Hindi Support", "Simple language me help"],
                ["⭐", "Trusted Service", "Verification ke baad submit"],
              ].map(([emoji, title, desc]) => (
                <div
                  key={title}
                  className="rounded-[32px] bg-white p-8 text-center shadow-sm"
                >
                  <div className="text-4xl">{emoji}</div>

                  <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection direction="up">
        <section className="mx-auto max-w-7xl px-4 py-24 md:py-32">
          <div className="mb-16 text-center">
            <p className="mb-3 font-semibold text-orange-600">
              लोगों का विश्वास
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Log kya kehte hain?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              [
                "Rahul Sharma",
                "Railway ka form bharwaya tha, service fast aur clear thi.",
              ],
              [
                "Pooja Verma",
                "Resume bahut professional bana, WhatsApp par hi PDF mil gayi.",
              ],
              [
                "Amit Kumar",
                "Admit card download aur print ka kaam turant ho gaya.",
              ],
            ].map(([name, text]) => (
              <div key={name} className="rounded-[32px] bg-white p-8 shadow-sm">
                <div className="mb-4 flex gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="leading-8 text-slate-500">“{text}”</p>

                <h3 className="mt-5 font-semibold text-slate-900">- {name}</h3>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Contact CTA */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-r from-indigo-950 via-blue-900 to-slate-950 px-4 py-24 md:py-32 text-white"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 font-semibold text-amber-300">आज ही संपर्क करें</p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Form bharwana hai? Abhi contact karein
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50/80">
            Govt job form, admit card, result, scholarship, resume, PDF ya
            typing — jo bhi cyber cafe work hai, WhatsApp par details bhej do.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={whatsappLink}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              <MessageCircle size={21} />
              WhatsApp Now
            </Link>

            <a
              href={`tel:${CALL_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              <Phone size={21} />
              Call: {CALL_NUMBER}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-blue-50/80">
            <MapPin size={18} />

            <span>Online Service Available — India Based Cyber Cafe Help</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-4 py-8 text-center text-sm text-slate-400">
        © 2026 CyberCafePro. All Rights Reserved.
      </footer>
    </main>
  );
}