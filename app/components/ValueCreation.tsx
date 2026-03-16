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
    hex: "#22418F",
    bg: "bg-blue-50",
    activeBorder: "border-[#22418F]",
    label: "01",
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
    hex: "#2A2A2A",
    bg: "bg-gray-100",
    activeBorder: "border-[#2A2A2A]",
    label: "02",
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
    hex: "#EF3F3C",
    bg: "bg-red-50",
    activeBorder: "border-[#EF3F3C]",
    label: "03",
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

// Decorative 3×3 dot grid
function DotGrid({ color }: { color: string }) {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="w-1 h-1 rounded-full transition-all duration-500"
          style={{ background: color, opacity: 0.25 + (i % 3) * 0.15 }}
        />
      ))}
    </div>
  );
}

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
          {/* ── Left Column: 2×2 Grid ── */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="grid grid-cols-2 gap-8 md:gap-10 w-full max-w-120">

              {/* ── Card: Founders (Top Left) ── */}
              {[valueData[0], null, valueData[1], valueData[2]].map((item, idx) => {
                // Position 2 (idx=1) is the Lottie animation slot
                if (!item) {
                  return (
                    <div
                      key="lottie"
                      className="relative flex items-center justify-center aspect-square opacity-80 pointer-events-none"
                    >
                      <DotLottieReact src="Startup.lottie" loop autoplay />
                    </div>
                  );
                }

                const isActive = activeTab === item.id;
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className="relative flex flex-col items-center justify-center p-6 text-center rounded-4xl border-2 transition-all duration-400 aspect-square overflow-hidden group"
                    style={{
                      borderColor: isActive ? item.hex : "#f3f4f6",
                      background: isActive
                        ? `linear-gradient(145deg, ${item.hex}0f 0%, #ffffff 55%)`
                        : "rgba(249, 250, 251, 0.85)",
                      boxShadow: isActive
                        ? `0 16px 48px ${item.hex}22, 0 4px 16px ${item.hex}14`
                        : "0 1px 4px rgba(0,0,0,0.04)",
                      transform: isActive ? "scale(1.03)" : "scale(1)",
                      zIndex: isActive ? 10 : 1,
                    }}
                  >
                    {/* ── Watermark icon (bottom-right, large) ── */}
                    <div className="absolute -bottom-3 -right-3 pointer-events-none transition-all duration-400">
                      <Icon
                        className="transition-all duration-400"
                        style={{
                          width: 88,
                          height: 88,
                          color: item.hex,
                          opacity: isActive ? 0.07 : 0.04,
                          transform: "rotate(-12deg)",
                        }}
                      />
                    </div>

                    {/* ── Top-left dot grid ── */}
                    <div className="absolute top-3.5 left-3.5">
                      <DotGrid color={isActive ? item.hex : "#9ca3af"} />
                    </div>

                    {/* ── Top-right number badge ── */}
                    <div
                      className="absolute top-3.5 right-4 text-[10px] font-bold tracking-widest transition-all duration-300"
                      style={{
                        color: isActive ? item.hex : "#d1d5db",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {item.label}
                    </div>

                    {/* ── Active: top accent bar ── */}
                    <div
                      className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full transition-all duration-400"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${item.hex}, transparent)`,
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scaleX(1)" : "scaleX(0.3)",
                      }}
                    />

                    {/* ── Icon container ── */}
                    <div
                      className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-400"
                      style={
                        isActive
                          ? {
                            background: `linear-gradient(135deg, ${item.hex}22, ${item.hex}0a)`,
                            boxShadow: `0 4px 16px ${item.hex}20`,
                            border: `1px solid ${item.hex}30`,
                          }
                          : {
                            background: "white",
                            border: "1px solid #e5e7eb",
                          }
                      }
                    >
                      <Icon
                        className="w-7 h-7 transition-all duration-400"
                        style={{ color: isActive ? item.hex : "#9ca3af" }}
                      />
                    </div>

                    {/* ── Title ── */}
                    <h4
                      className="text-xl font-bold transition-colors duration-300 relative z-10"
                      style={{ color: isActive ? "#2A2A2A" : "#6b7280" }}
                    >
                      {item.title}
                    </h4>

                    {/* ── Hover shimmer (inactive only) ── */}
                    {!isActive && (
                      <div
                        className="absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(145deg, rgba(255,255,255,0.8) 0%, transparent 60%)",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Right Column: Dynamic Content Window ── */}
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
                    className="text-2xl md:text-3xl lg:text-[2.1rem] font-medium text-[#2A2A2A] mb-10 md:mb-12"
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
                        <span className="">{li}</span>
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