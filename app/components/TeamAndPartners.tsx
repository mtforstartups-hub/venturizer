export default function TeamAndPartners() {
    return (
        <section id="team" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Partners Logo Strip */}
                <div className="mb-20">
                    <p className="text-center text-gray-500 font-semibold uppercase tracking-wider mb-8">Trusted by Partners From</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Text placeholders for logos to keep it generic yet visual */}
                        {['IIT Bombay', 'TechCrunch', 'Sequoia', 'Y Combinator', 'Google Cloud'].map((partner) => (
                            <span key={partner} className="text-2xl font-bold text-gray-400 hover:text-blue-900 cursor-default">{partner}</span>
                        ))}
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Leadership Team</h2>
                    <p className="text-gray-600 mt-2">Guided by veterans in technology, law, and finance.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group relative overflow-hidden rounded-xl">
                            <img
                                src={`https://images.unsplash.com/photo-${i === 1 ? '1560250097-0b93528c311a' : i === 2 ? '1573496359142-b8d87734a5a2' : '1519085360753-af0119f7cbe7'}?auto=format&fit=crop&q=80&w=800`}
                                alt="Team Member"
                                className="w-full h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h4 className="text-xl font-bold">Name Surname</h4>
                                <p className="text-red-400 font-medium text-sm">Managing Partner</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}