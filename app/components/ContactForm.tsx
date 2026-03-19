"use client";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#FDFBF7] border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lg md:text-xl text-[#21428E] -rotate-2 mb-4 inline-block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A2A2A]">
            Let&apos;s Build Together
          </h2>
          <p className="text-gray-500 mt-6">
            Whether you&apos;re building, investing, or advising — let&apos;s
            initiate and integrate.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-7/12 mx-auto">
          {/* Contact Info Side */}

          {/* Form Side */}
          <div className=" p-12 lg:p-16 bg-[#22418F] relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#EF3F3C] rounded-tl-full opacity-10 z-0"></div>
            <form
              className="space-y-6 relative z-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white">
                    E-mail ID
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="jane@startup.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white">
                    Joining as
                  </label>
                  <select
                    defaultValue="founder"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-gray-700"
                  >
                    {/* <option value="" disabled>Select an option</option> */}
                    <option value="founder">Founder</option>
                    <option value="investor">Investor</option>
                    <option value="mentor">Mentor</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white">
                  Tell us about your goals &#40;Optional&#41;
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="- We strongly believe in long-term associations. What are you looking for?"
                ></textarea>
              </div>

              <button className="w-full bg-[#2A2A2A] hover:bg-[#1a1a1a] text-white px-6 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg mt-4">
                Get Access
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
