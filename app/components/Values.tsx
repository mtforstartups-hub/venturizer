import { ShieldCheck, Lightbulb, Rocket, Banknote } from "lucide-react";

export default function Values() {
    const values = [
        {
            icon: <Rocket size={28} />,
            title: "Execution Infrastructure",
            desc: "Bringing operating discipline to early-stage chaos — structured milestones, hiring clarity, GTM focus, and measurable accountability.",
            colorClass: "bg-red-50/80 text-red-500 group-hover:bg-red-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20"
        },
        {
            icon: <Lightbulb size={28} />,
            title: "Embedded Functional Leadership",
            desc: "Access to institutional-grade expertise across finance, compliance, growth, and governance — without premature overhead.",
            colorClass: "bg-amber-50/80 text-amber-500 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-amber-500/20"
        },
        {
            icon: <ShieldCheck size={28} />,
            title: "Governance Architecture",
            desc: "Structured transparency, disciplined reporting, and capital-aligned oversight — ensuring your company scales with credibility, not chaos.",
            colorClass: "bg-blue-50/80 text-blue-500 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/20"
        },
        {
            icon: <Banknote size={28} />,
            title: "Strategic Capital Enablement",
            desc: "Institutional readiness, investor positioning, and curated access to aligned capital partners.",
            colorClass: "bg-emerald-50/80 text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-600/20"
        },
    ];

    return (
        <section id="values" className="py-24 bg-[#FDFBF7]">
            <div className="container max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <span className="text-lg md:text-xl text-[#21428E] -rotate-2 mb-4 inline-block ">
                        Our Philosophy
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Bridging The Early-Stage Gaps
                    </h2>
                    <p className="text-gray-600 text-lg mt-6 leading-relaxed">
                        The entrepreneurial journey is fragmented. We operate as fractional co-founders — uniting a cohesive ecosystem designed to compound your growth.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
                    {values.map((v, idx) => (
                        <div key={idx} className="bg-white/80 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors ${v.colorClass}`}>
                                {v.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h4>
                            <p className="text-gray-600 leading-relaxed">
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}