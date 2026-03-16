"use client";

import { useState } from "react";
import { ChevronRight, Banknote, Users, Handshake } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const valueData = [
  {
    id: "founders",
    title: "Founders",
    icon: Handshake,
    color: "text-[#22418F]",
    bg: "bg-blue-50",
    activeBorder: "border-[#22418F]",
    desc: "We provide end-to-end business design, GTM strategies, operational frameworks, compliance, and funding support.",
    list: [
      "Fractional Co-building",
      "Milestone-driven execution",
      "Institutional Capital Readiness",
      "Long-term aligned partners",
    ],
  },
  {
    id: "investors",
    title: "Investors",
    icon: Banknote,
    color: "text-[#2A2A2A]",
    bg: "bg-gray-100",
    activeBorder: "border-[#2A2A2A]",
    desc: "Access high-quality, fundamentally validated early-stage opportunities with complete transparency.",
    list: [
      "Transparent Operational Visibility",
      "De-risked early-stage exposure",
      "Governance-first portfolio companies",
      "Disciplined exit frameworks",
    ],
  },
  {
    id: "mentors",
    title: "Mentors & Advisors",
    icon: Users,
    color: "text-[#EF3F3C]",
    bg: "bg-red-50",
    activeBorder: "border-[#EF3F3C]",
    desc: "Engage in structured, outcome-driven relationships with high-potential, rapidly scaling startups.",
    list: [
      "Access to curated founders",
      "Structured contribution frameworks",
      "Two-way accountability",
      "Meaningful early-stage impact",
    ],
  },
];

// Framer Motion Variants for staggered text reveal
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

export default function ValueCreation() {
  const [activeTab, setActiveTab] = useState(valueData[0].id);
  const activeContent = valueData.find((item) => item.id === activeTab);

  return (
    <section id="ecosystem" className="py-24 bg-white relative">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-lg md:text-xl text-[#EF3F3C] -rotate-2 mb-4 inline-block ">
            Who We Serve
          </span>
          <h3 className="text-4xl md:text-5xl font-bold text-[#2A2A2A]">
            Designed for Value Creation
          </h3>
          <p className="text-gray-600 mt-6 text-lg">
            Our ecosystem is meticulously designed to align incentives and solve
            the systemic challenges of key stakeholders.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* ── Left Column: L-Shaped Grid ── */}
          {/* Increased gap and controlled max-width so the cards aren't huge */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="grid grid-cols-2 gap-8 md:gap-10 w-full max-w-120">
              {/* Position 1: Top Left (Founders) */}
              <button
                onClick={() => setActiveTab(valueData[0].id)}
                className={`relative flex flex-col items-center justify-center p-6 text-center rounded-4xl border-2 transition-all duration-300 aspect-square
                  ${activeTab === valueData[0].id
                    ? `${valueData[0].activeBorder} bg-white shadow-xl scale-[1.02] z-10`
                    : "border-gray-100 bg-gray-50/80 hover:bg-white hover:border-gray-200 hover:shadow-md"
                  }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 ${activeTab === valueData[0].id ? valueData[0].bg : "bg-white border border-gray-200"}`}
                >
                  <Handshake
                    className={`w-7 h-7 transition-colors duration-300 ${activeTab === valueData[0].id ? valueData[0].color : "text-gray-400"}`}
                  />
                </div>
                <h4
                  className={`text-xl font-bold transition-colors duration-300 ${activeTab === valueData[0].id ? "text-[#2A2A2A]" : "text-gray-500"}`}
                >
                  {valueData[0].title}
                </h4>
              </button>

              {/* Position 2: Top Right (Subtle Floating SVG Area) */}
              <div className="relative flex items-center justify-center aspect-square opacity-80 pointer-events-none">
                {/* Drop your raw animated SVG right here! 
                  No background, no borders. It will blend seamlessly.
                */}
                {/* <div className="w-24 h-24 border-2 border-dashed border-[#22418F]/20 rounded-full animate-[spin_15s_linear_infinite] flex items-center justify-center relative">
                  <div className="absolute w-16 h-16 border-2 border-[#EF3F3C]/20 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
                  <div className="w-2 h-2 bg-[#2A2A2A]/20 rounded-full animate-pulse" />
                </div> */}

                <DotLottieReact src="Startup.lottie" loop autoplay />
              </div>

              {/* Position 3: Bottom Left (Investors) */}
              <button
                onClick={() => setActiveTab(valueData[1].id)}
                className={`relative flex flex-col items-center justify-center p-6 text-center rounded-4xl border-2 transition-all duration-300 aspect-square
                  ${activeTab === valueData[1].id
                    ? `${valueData[1].activeBorder} bg-white shadow-xl scale-[1.02] z-10`
                    : "border-gray-100 bg-gray-50/80 hover:bg-white hover:border-gray-200 hover:shadow-md"
                  }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 ${activeTab === valueData[1].id ? valueData[1].bg : "bg-white border border-gray-200"}`}
                >
                  <Banknote
                    className={`w-7 h-7 transition-colors duration-300 ${activeTab === valueData[1].id ? valueData[1].color : "text-gray-400"}`}
                  />
                </div>
                <h4
                  className={`text-xl font-bold transition-colors duration-300 ${activeTab === valueData[1].id ? "text-[#2A2A2A]" : "text-gray-500"}`}
                >
                  {valueData[1].title}
                </h4>
              </button>

              {/* Position 4: Bottom Right (Mentors) */}
              <button
                onClick={() => setActiveTab(valueData[2].id)}
                className={`relative flex flex-col items-center justify-center p-6 text-center rounded-4xl border-2 transition-all duration-300 aspect-square
                  ${activeTab === valueData[2].id
                    ? `${valueData[2].activeBorder} bg-white shadow-xl scale-[1.02] z-10`
                    : "border-gray-100 bg-gray-50/80 hover:bg-white hover:border-gray-200 hover:shadow-md"
                  }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 ${activeTab === valueData[2].id ? valueData[2].bg : "bg-white border border-gray-200"}`}
                >
                  <Users
                    className={`w-7 h-7 transition-colors duration-300 ${activeTab === valueData[2].id ? valueData[2].color : "text-gray-400"}`}
                  />
                </div>
                <h4
                  className={`text-xl font-bold transition-colors duration-300 ${activeTab === valueData[2].id ? "text-[#2A2A2A]" : "text-gray-500"}`}
                >
                  {valueData[2].title}
                </h4>
              </button>
            </div>
          </div>

          {/* ── Right Column: Dynamic Content Window (Big Text) ── */}
          <div className="w-full lg:w-1/2 min-h-87.5 flex items-center">
            <AnimatePresence mode="wait">
              {activeContent && (
                <motion.div
                  key={activeContent.id}
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="w-full"
                >
                  {/* Big Description */}
                  <motion.p
                    variants={itemVariants}
                    className="text-2xl md:text-3xl lg:text-[2.1rem] font-medium text-[#2A2A2A] leading-tight md:leading-snug mb-10 md:mb-12"
                  >
                    {activeContent.desc}
                  </motion.p>

                  {/* Big List */}
                  <motion.ul className="space-y-5 md:space-y-6">
                    {activeContent.list.map((li, i) => (
                      <motion.li
                        key={i}
                        variants={itemVariants}
                        className="flex items-start text-lg md:text-xl text-gray-600 font-medium"
                      >
                        <div className="mt-1 mr-4 shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200">
                          <ChevronRight
                            className={`w-4 h-4 ${activeContent.color.replace("text-", "text-")}`}
                          />
                        </div>
                        <span className="leading-snug">{li}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
