"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Hammer,
  Palette,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export default function WhatWeDo() {
  // Default to the middle one (Studio) or first one? Let's default to null or first.
  // User requested hover interaction.
  const [activeId, setActiveId] = useState<string | null>(null);

  const pillars = [
    {
      id: "builder",
      title: "Venture Builder",
      subtitle: "One to Hundred",
      icon: <Hammer size={32} />,
      desc: "An integrated ecosystem that transforms POCs into scalable, capital-ready ventures",
      tags: ["MVP Development", "Technical Co-Founders", "IP Structure"],
      color: "bg-[#21428E]", // Tech Blue
      textColor: "text-white",
      accent: "bg-blue-400",
      image: "url('/patterns/blueprint.png')", // Placeholder or CSS pattern
    },
    {
      id: "studio",
      title: "Venture Studio",
      subtitle: "Co-Creation",
      icon: <Palette size={32} />,
      desc: "A hub of innovation where ideas are born, refined and developed into profitable ventures from scratch. ",
      tags: ["Market Validation", "Design Sprints", "Business Modeling"],
      color: "bg-white", // Clean Studio
      textColor: "text-[#2A2A2A]",
      accent: "bg-[#EF3F3C]",
      borderColor: "border-[#2A2A2A]",
    },
    {
      id: "fund",
      title: "Venture Funding",
      subtitle: "Scale Capital",
      icon: <TrendingUp size={32} />,
      desc: "The epicentre of smart capital access — where fundraising discipline meets institutional readiness.",
      tags: ["Pre-Seed / Seed", "Follow-on Capital", "Investor Network"],
      color: "bg-[#2A2A2A]", // Dark/Premium
      textColor: "text-white",
      accent: "bg-green-400",
      borderColor: "border-gray-800",
    },
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] overflow-hidden" id="ventures">
      <div className="container max-w-7xl mx-auto px-6 h-full">
        <div className="text-center mb-16">
          {/* font-hand class maybe */}
          <h2 className="text-[#EF3F3C]  text-lg md:text-xl -rotate-2 mb-2">
            Our Models
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#2A2A2A]">
            The Venture Trinity
          </h3>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Three distinct engines driving one outcome: Growth.
          </p>
        </div>

        {/* Desktop Accordion */}
        <div className="hidden md:flex h-150 w-full gap-4">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              layout
              onClick={() => setActiveId(pillar.id)}
              onMouseEnter={() => setActiveId(pillar.id)}
              onMouseLeave={() => setActiveId(null)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-end p-8 shadow-xl ${pillar.color} ${pillar.borderColor ? `border-2 ${pillar.borderColor}` : ""}`}
              style={{
                flex: activeId === pillar.id ? 3 : 1,
              }}
            >
              {/* Background Pattern/Texture */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, currentColor 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              {/* Content Wrapper */}
              <div
                className={`relative z-10 w-full ${activeId === pillar.id ? "opacity-100" : "opacity-70"} transition-opacity duration-300`}
              >
                {/* Header (Always visible-ish, but layout changes) */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl ${pillar.id === "studio" ? "bg-gray-100 text-[#2A2A2A]" : "bg-white/10 text-white backdrop-blur-sm"}`}
                  >
                    {pillar.icon}
                  </div>
                  {activeId === pillar.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>
                  )}
                </div>

                <motion.div layout="position">
                  <h4
                    className={`text-sm font-bold tracking-widest uppercase mb-2 opacity-80 ${pillar.textColor}`}
                  >
                    {pillar.subtitle}
                  </h4>
                  <h3
                    className={`text-3xl font-bold ${pillar.textColor} leading-tight whitespace-nowrap`}
                  >
                    {pillar.title}
                  </h3>
                </motion.div>

                {/* Expanded Content */}
                <AnimatePresence mode="wait">
                  {activeId === pillar.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6"
                    >
                      <p
                        className={`text-lg mb-8 leading-relaxed max-w-xl ${pillar.textColor} opacity-90`}
                      >
                        {pillar.desc}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {pillar.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 ${pillar.id === "studio" ? "bg-gray-100 text-gray-800" : "bg-white/20 text-white backdrop-blur-md"}`}
                          >
                            <CheckCircle2 size={14} /> {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Stacked View */}
        <div className="flex md:hidden flex-col gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`rounded-2xl p-8 shadow-lg ${pillar.color} ${pillar.borderColor ? `border ${pillar.borderColor}` : ""}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl ${pillar.id === "studio" ? "bg-gray-100 text-[#2A2A2A]" : "bg-white/10 text-white"}`}
                >
                  {pillar.icon}
                </div>
                <div>
                  <h4
                    className={`text-xs font-bold uppercase opacity-80 ${pillar.textColor}`}
                  >
                    {pillar.subtitle}
                  </h4>
                  <h3 className={`text-2xl font-bold ${pillar.textColor}`}>
                    {pillar.title}
                  </h3>
                </div>
              </div>

              <p className={`mb-6 ${pillar.textColor} opacity-90`}>
                {pillar.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-bold ${pillar.id === "studio" ? "bg-gray-100 text-gray-800" : "bg-white/20 text-white"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
