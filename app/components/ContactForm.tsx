"use client";
import { Mail, Target } from "lucide-react";

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
          {/* <p className="text-gray-500 mt-6 text-lg">
            Ready to take the next step? Reach out to our team and let&apos;s explore how we can collaborate.
          </p> */}
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          {/* Contact Info Side */}
          <div className="lg:w-5/12 bg-[#22418F] p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#EF3F3C] rounded-tl-full opacity-10"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Enter the Ecosystem</h3>
              {/* <p className="text-blue-100 mb-12 text-lg">
                Whether you’re building, investing, or advising — let’s initiate
                and integrate.
              </p> */}

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Email Us</p>
                    <p className="font-semibold text-lg">
                      connect@venturizer.in
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Headquarters</p>
                    <p className="font-semibold text-lg">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-12 lg:p-16 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#2A2A2A]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#2A2A2A]">
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
                  <label className="text-sm font-semibold text-[#2A2A2A]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#2A2A2A]">
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
                <label className="text-sm font-semibold text-[#2A2A2A]">
                  Tell us about your goals &#40;Optional&#41;
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="- We strongly believe in long-term associations. What are you looking for?"
                ></textarea>
              </div>

              <button className="w-full bg-[#2A2A2A] hover:bg-[#1a1a1a] text-white px-6 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg mt-4">
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
