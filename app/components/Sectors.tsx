import { TrendingUp, HeartPulse, Globe, Cpu, Lightbulb, Users } from "lucide-react";

export default function Sectors() {
    const industries = [
        { name: "Fintech", icon: <TrendingUp /> },
        { name: "Healthtech", icon: <HeartPulse /> },
        { name: "SaaS", icon: <Globe /> },
        { name: "Deep Tech", icon: <Cpu /> },
        { name: "Edtech", icon: <Lightbulb /> },
        { name: "Clean Energy", icon: <Users /> }
    ];
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">Industry Focus</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {industries.map((ind, i) => (
                        <div key={i} className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-red-500">
                            <div className="text-red-500 mb-4 transform scale-125">{ind.icon}</div>
                            <h4 className="font-semibold">{ind.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}