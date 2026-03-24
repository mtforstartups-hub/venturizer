"use client";

import { useActionState, useState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions";

const initialState: ContactFormState = { success: false };

function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null;
  return (
    <p className="text-red-300 text-xs mt-1.5 font-medium">{messages[0]}</p>
  );
}

const INDUSTRY_OPTIONS = [
  { value: "fintech", label: "Fintech" },
  { value: "clean-energy", label: "Clean Energy & Sustainability" },
  { value: "healthtech", label: "Healthtech" },
  { value: "ai-saas", label: "AI & SaaS" },
  { value: "edtech", label: "EdTech" },
  { value: "deeptech", label: "DeepTech" },
  { value: "agritech", label: "AgriTech" },
  { value: "proptech", label: "PropTech" },
  { value: "others", label: "Others" },
];

const STAGE_OPTIONS = [
  { value: "idea", label: "Idea / Pre-seed" },
  { value: "mvp", label: "MVP / Seed" },
  { value: "early-traction", label: "Early Traction" },
  { value: "series-a", label: "Series A" },
  { value: "growth", label: "Growth Stage" },
];

// Exact same input/select styles as the original form
const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400";
const selectClass =
  "w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22418F] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-gray-700";
const labelClass = "text-sm font-semibold text-white";
const sectionHeadingClass =
  "text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-5";

type JoiningAsOption = "founder" | "investor" | "mentor" | "others";

export default function ContactForm() {
  const [state, action, isPending] = useActionState(
    submitContactForm,
    initialState,
  );
  const [joiningAs, setJoiningAs] = useState<JoiningAsOption>(
    (state.fields?.joiningAs ?? "investor") as JoiningAsOption,
  );
  const [industry, setIndustry] = useState(state.fields?.industry ?? "");

  const isFounder = joiningAs === "founder";
  const isOtherIndustry = industry === "others";

  const { errors, fields } = state;

  return (
    <section
      id="contact"
      className="py-24 bg-[#FDFBF7] border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Card — identical to original */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 lg:max-w-7/12 mx-auto">
          <div className="p-12 lg:p-16 bg-[#22418F] relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#EF3F3C] rounded-tl-full opacity-10 z-0" />

            {/* Banners */}
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

            <form action={action} className="relative z-10 space-y-10">
              {/* ── SECTION 1: Identity ── */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className={labelClass}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={fields?.name}
                      className={inputClass}
                      placeholder="Jane Doe"
                    />
                    <FieldError messages={errors?.fieldErrors?.name} />
                  </div>

                  <div className="space-y-1">
                    <label className={labelClass}>E-mail ID</label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={fields?.email}
                      className={inputClass}
                      placeholder="jane@startup.com"
                    />
                    <FieldError messages={errors?.fieldErrors?.email} />
                  </div>

                  <div className="space-y-1">
                    <label className={labelClass}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      defaultValue={fields?.phone}
                      className={inputClass}
                      placeholder="+1 (555) 000-0000"
                    />
                    <FieldError messages={errors?.fieldErrors?.phone} />
                  </div>

                  <div className="space-y-1">
                    <label className={labelClass}>
                      LinkedIn URL{" "}
                      <span className="font-normal opacity-70">(Optional)</span>
                    </label>
                    <input
                      type="url"
                      name="linkedinUrl"
                      defaultValue={fields?.linkedinUrl}
                      className={inputClass}
                      placeholder="linkedin.com/in/janedoe"
                    />
                    <FieldError messages={errors?.fieldErrors?.linkedinUrl} />
                  </div>
                </div>
              </div>

              {/* ── SECTION 2: Role ── */}
              <div>
                <div className="space-y-1">
                  <label className={labelClass}>Joining as</label>
                  <select
                    name="joiningAs"
                    value={joiningAs}
                    onChange={(e) =>
                      setJoiningAs(e.target.value as JoiningAsOption)
                    }
                    className={selectClass}
                  >
                    <option value="founder">Founder</option>
                    <option value="investor">Investor</option>
                    <option value="mentor">Mentor or Advisor</option>
                    <option value="others">Others</option>
                  </select>
                  <FieldError messages={errors?.fieldErrors?.joiningAs} />
                </div>

                {joiningAs === "others" && (
                  <div className="space-y-1 mt-6">
                    <label className={labelClass}>
                      Please specify your role
                    </label>
                    <input
                      type="text"
                      name="joiningAsOther"
                      defaultValue={fields?.joiningAsOther}
                      className={inputClass}
                      placeholder="e.g. Partner, Journalist, Student…"
                    />
                    <FieldError
                      messages={errors?.fieldErrors?.joiningAsOther}
                    />
                  </div>
                )}

                {/* Founder-only fields */}
                {isFounder && (
                  <div className="mt-6  space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className={labelClass}>Industry / Sector</label>
                        <select
                          name="industry"
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          className={selectClass}
                        >
                          <option value="" disabled>
                            Select a sector…
                          </option>
                          {INDUSTRY_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                        <FieldError messages={errors?.fieldErrors?.industry} />
                      </div>

                      <div className="space-y-1">
                        <label className={labelClass}>Stage</label>
                        <select
                          name="stage"
                          defaultValue={fields?.stage ?? ""}
                          className={selectClass}
                        >
                          <option value="" disabled>
                            Select stage…
                          </option>
                          {STAGE_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                        <FieldError messages={errors?.fieldErrors?.stage} />
                      </div>

                      {isOtherIndustry && (
                        <div className="space-y-1">
                          <label className={labelClass}>Specify Industry</label>
                          <input
                            type="text"
                            name="industryOther"
                            defaultValue={fields?.industryOther}
                            className={inputClass}
                            placeholder="e.g. Space Tech, Web3…"
                          />
                          <FieldError
                            messages={errors?.fieldErrors?.industryOther}
                          />
                        </div>
                      )}

                      <div
                        className={`space-y-1 ${isOtherIndustry ? "" : "md:col-span-2"}`}
                      >
                        <label className={labelClass}>Pitch Deck URL</label>
                        <input
                          type="url"
                          name="pitchDeckUrl"
                          defaultValue={fields?.pitchDeckUrl}
                          className={inputClass}
                          placeholder="drive.google.com/…"
                          required={isFounder}
                        />
                        <FieldError
                          messages={errors?.fieldErrors?.pitchDeckUrl}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ── SECTION 3: Goals ── */}
              <div>
                <p className="text-sm font-semibold text-white">
                  Your Goals (Optional)
                </p>
                <textarea
                  name="message"
                  rows={4}
                  defaultValue={fields?.message}
                  className={`${inputClass} resize-none`}
                  placeholder="- We strongly believe in long-term associations. What are you looking for?"
                />
                <FieldError messages={errors?.fieldErrors?.message} />
              </div>

              {/* Submit — identical to original */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-[#2A2A2A] hover:bg-[#1a1a1a] disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
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
