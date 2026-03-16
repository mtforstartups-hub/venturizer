import { Lightbulb, PieChart, Users, Briefcase } from "lucide-react";

export default function StakeHolders() {
    const stakeholders = [
        { title: "Founders", sub: "Tech Innovators", icon: <Lightbulb /> },
        { title: "Investors", sub: "Angels & VCs", icon: <PieChart /> },
        { title: "Mentors", sub: "Industry Veterans", icon: <Users /> },
        { title: "Partners", sub: "Corporate & Gov", icon: <Briefcase /> },
    ];
    return (
        <section className="py-16 bg-blue-900 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Key Stakeholders</h2>
                        <p className="text-blue-200">The pillars of our integrated ecosystem.</p>
                    </div>
                    <div className="hidden md:block w-1/3 h-px bg-blue-700 mb-4"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stakeholders.map((s, i) => (
                        <div key={i} className="bg-blue-800/50 backdrop-blur-sm border border-blue-700 p-6 rounded-xl text-center hover:bg-blue-800 transition-colors">
                            <div className="inline-flex p-3 bg-red-500 rounded-lg mb-4 text-white shadow-lg shadow-red-500/20">
                                {s.icon}
                            </div>
                            <h3 className="text-xl font-bold">{s.title}</h3>
                            <p className="text-sm text-blue-200">{s.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}