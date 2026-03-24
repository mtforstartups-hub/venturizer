"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions";

const initialState: ContactFormState = { success: false };

// Small helper — renders the first error for a field
function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null;
  return <p className="text-red-400 text-xs mt-1 font-medium">{messages[0]}</p>;
}

export default function ContactForm() {
  const [state, action, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  const { errors, fields } = state;

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

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 lg:max-w-7/12 mx-auto">
          <div className="p-12 lg:p-16 bg-[#22418F] relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#EF3F3C] rounded-tl-full opacity-10 z-0" />

            {/* Top-level success / form-wide error banner */}
            {state.success && (
              <div className="mb-6 rounded-lg bg-green-500/20 border border-green-400 text-green-200 px-4 py-3 text-sm font-medium relative z-10">
                {state.message}
              </div>
            )}
            {errors?.formErrors?.length ? (
              <div className="mb-6 rounded-lg bg-red-500/20 border border-red-400 text-red-200 px-4 py-3 text-sm font-medium relative z-10">
                {errors.formErrors[0]}
              </div>
            ) : null}

            <form action={action} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={fields?.name}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Jane Doe"
                  />
                  <FieldError messages={errors?.fieldErrors?.name} />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-white">
                    E-mail ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={fields?.email}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="jane@startup.com"
                  />
                  <FieldError messages={errors?.fieldErrors?.email} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    defaultValue={fields?.phone}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="+1 (555) 000-0000"
                  />
                  <FieldError messages={errors?.fieldErrors?.phone} />
                </div>

                {/* Joining As */}
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-white">
                    Joining as
                  </label>
                  <select
                    name="joiningAs"
                    defaultValue={fields?.joiningAs ?? "founder"}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-gray-700"
                  >
                    <option value="founder">Founder</option>
                    <option value="investor">Investor</option>
                    <option value="mentor">Mentor</option>
                  </select>
                  <FieldError messages={errors?.fieldErrors?.joiningAs} />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-white">
                  Tell us about your goals{" "}
                  <span className="font-normal opacity-70">(Optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  defaultValue={fields?.message}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="- We strongly believe in long-term associations. What are you looking for?"
                />
                <FieldError messages={errors?.fieldErrors?.message} />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-[#2A2A2A] hover:bg-[#1a1a1a] disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg mt-4"
              >
                {isPending ? "Sending…" : "Get Access"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
