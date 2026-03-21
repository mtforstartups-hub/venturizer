"use client";

import { useState, useEffect, useRef } from "react";

const data = [
  {
    title: "Founders",
    desc: "We provide end-to-end business design, GTM strategies, operational frameworks, compliance, and funding support.",
    list: [
      "Fractional Co-building",
      "Milestone-driven execution",
      "Institutional Capital Readiness",
      "Long-term aligned partners",
    ],
  },
  {
    title: "Investors",
    desc: "Access high-quality, fundamentally validated early-stage opportunities with complete transparency.",
    list: [
      "Transparent Operational Visibility",
      "De-risked early-stage exposure",
      "Governance-first portfolio companies",
      "Disciplined exit frameworks",
    ],
  },
  {
    title: "Mentors & Advisors",
    desc: "Engage in structured, outcome-driven relationships with high-potential, rapidly scaling startups.",
    list: [
      "Access to curated founders",
      "Structured contribution frameworks",
      "Two-way accountability",
      "Meaningful early-stage impact",
    ],
  },
];

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);
    const timers = data.map((_, i) =>
      setTimeout(
        () => {
          setVisibleCards((prev) => [...prev, i]);
        },
        400 + i * 150,
      ),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="ecosystem"
      className="bg-white min-h-[80vh] flex items-center justify-center py-25 px-6 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="w-full max-w-300 relative z-10">
        <div className="mb-20 text-center flex flex-col items-center">
          <p
            className={`text-lg md:text-xl -rotate-2 text-[#E7000B] mb-5 flex items-center gap-4 transition-all duration-700 delay-100 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {/* <span className="block h-px w-10 bg-[#E7000B] opacity-45"></span> */}
            Who We Impact
            {/* <span className="block h-px w-10 bg-[#E7000B] opacity-45"></span> */}
          </p>
          <h2
            className={`font-bold text-4xl md:text-5xl text-[#2A2A2A]  mb-6 transition-all duration-800 delay-250 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Designed for Value Creation
          </h2>
          <p
            className={` text-[#2A2A2A]/80 max-w-135 transition-all duration-800 delay-400 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            Our ecosystem is meticulously designed to align incentives and solve
            the systemic challenges of key stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#21428E]/20">
          {data.map((item, i) => (
            <div
              key={item.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`group relative pt-12 px-10 pb-16 border-b border-[#21428E]/20 md:border-b-0 md:border-r last:border-b-0 md:last:border-r-0 cursor-default transition-all duration-700 ease-out hover:bg-[#21428E]/2 overflow-hidden ${visibleCards.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${0.45 + i * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#21428E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <span className=" text-[160px] font-semibold text-[#21428E]/3 group-hover:text-[#21428E]/8 absolute -top-6 -right-4 leading-none transition-colors duration-500 pointer-events-none select-none">
                0{i + 1}
              </span>

              <div className="text-[12px] font-medium tracking-[0.25em] text-[#21428E] mb-7 opacity-80">
                0{i + 1}
              </div>
              <div className="w-8 h-px bg-[#21428E] mb-7 transition-all duration-400 group-hover:w-14" />

              <h3 className="text-4xl  font-semibold text-[#21428E] leading-[1.1] mb-5 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[16px] text-[#2A2A2A]/70 mb-8 transition-colors duration-400 group-hover:text-[#2A2A2A]/90">
                {item.desc}
              </p>

              <ul className="list-none p-0 m-0 flex flex-col gap-3.5 relative z-10">
                {item.list.map((point) => (
                  <li
                    key={point}
                    className="text-[15px]  text-[#2A2A2A]/60 flex items-center gap-3 tracking-wide transition-all duration-300 group-hover:text-[#2A2A2A] group-hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E7000B] shrink-0 opacity-55 transition-all duration-300 group-hover:opacity-100 group-hover:scale-[1.4]" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-10 right-10 w-9 h-9 border border-[#21428E]/25 rounded-full flex items-center justify-center opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 group-hover:border-[#21428E]/60 group-hover:bg-[#21428E]/10 z-10">
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M2 10L10 2M10 2H4M10 2V8"
                    stroke="#21428E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
