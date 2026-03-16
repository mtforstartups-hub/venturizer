import { Rocket, PieChart, LayoutGrid } from "lucide-react";

export default function WhatWeDo() {
    const cards = [
        {
            title: "Venture Builder",
            desc: "We co-build from scratch. We take your raw technology and wrap it in a viable business model.",
            icon: <Rocket size={40} />,
            color: "bg-blue-50"
        },
        {
            title: "Venture Fund",
            desc: "Strategic capital deployment for pre-seed and seed stages to fuel initial growth traction.",
            icon: <PieChart size={40} />,
            color: "bg-red-50"
        },
        {
            title: "Venture Studio",
            desc: "A shared resource hub providing design, dev, and marketing teams to multiple startups.",
            icon: <LayoutGrid size={40} />,
            color: "bg-gray-50"
        }
    ];
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 pr-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Operate</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We aren't just consultants; we are co-creators. Our model is designed to intervene at critical failure points for technical founders.
                        </p>
                        <div className="p-6 bg-blue-900 rounded-xl text-white">
                            <h4 className="text-xl font-bold mb-2">Ready to scale?</h4>
                            <p className="text-blue-200 mb-4 text-sm">Join our cohort of elite technical founders.</p>
                            <button className="w-full py-2 bg-white text-blue-900 font-bold rounded hover:bg-gray-100 transition-colors">
                                Apply Now
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        {cards.map((card, idx) => (
                            <div key={idx} className={`${card.color} p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow`}>
                                <div className="mb-4 text-gray-800">{card.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                                <p className="text-gray-600">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}