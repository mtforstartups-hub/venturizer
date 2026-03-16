import { Target, Users, ArrowRight } from "lucide-react";

export default function MissionVision() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1470"
                            alt="Team Collaboration"
                            className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                        />
                        {/* Overlay Card */}
                        <div className="absolute bottom-10 left-10 z-20 bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-red-500">
                            <p className="font-bold text-gray-900 text-lg">&quot;Bridging the Tech-Business Gap&quot;</p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 space-y-12">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="p-2 bg-blue-100 text-blue-900 rounded-full"><Target size={20} /></span>
                                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-gray-200 pl-6">
                                To democratize business success for technical founders. We exist to ensure that no great innovation fails due to a lack of business acumen, legal structure, or market access.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="p-2 bg-red-100 text-red-600 rounded-full"><Users size={20} /></span>
                                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-gray-200 pl-6">
                                To be the world's premier Venture Capability Ecosystem, creating a seamless pipeline where raw technical talent from institutions like IIT Bombay transforms into global market leadership.
                            </p>
                        </div>

                        <button className="text-blue-900 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                            Read Our Story <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}