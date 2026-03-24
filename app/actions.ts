"use server";

import z from "zod";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

// const RECIPIENTS = [
//   "sid@venturizer.in",
//   "ash@venturizer.in",
//   "connect@venturizer.in",
//   "mudra@venturizer.in",
// ];

const RECIPIENTS = ["connect@venturizer.in"];

const FROM_EMAIL = "no-reply@venturizer.in";

const ContactSchema = z
  .object({
    name: z.string().min(2, { error: "Name must be at least 2 characters." }),
    email: z.email({ error: "Please enter a valid email address." }),
    phone: z
      .string()
      .min(7, { error: "Phone number seems too short." })
      .optional()
      .or(z.literal("")),
    linkedinUrl: z
      .url({ error: "Please enter a valid URL." })
      .optional()
      .or(z.literal("")),
    joiningAs: z.enum(["founder", "investor", "mentor", "others"], {
      error: "Please select a valid role.",
    }),
    joiningAsOther: z.string().optional(),
    // Founder-only fields
    industry: z.string().optional(),
    industryOther: z.string().optional(),
    stage: z.string().optional(),
    pitchDeckUrl: z
      .url({ error: "Please enter a valid URL." })
      .optional()
      .or(z.literal("")),
    message: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // If joiningAs is "others", joiningAsOther is required
    if (data.joiningAs === "others" && !data.joiningAsOther?.trim()) {
      ctx.addIssue({
        code: "custom",
        message: "Please specify your role.",
        path: ["joiningAsOther"],
      });
    }
    // If founder, industry and stage are required
    if (data.joiningAs === "founder") {
      if (!data.industry) {
        ctx.addIssue({
          code: "custom",
          message: "Please select an industry.",
          path: ["industry"],
        });
      }
      if (data.industry === "others" && !data.industryOther?.trim()) {
        ctx.addIssue({
          code: "custom",
          message: "Please specify your industry.",
          path: ["industryOther"],
        });
      }
      if (!data.stage) {
        ctx.addIssue({
          code: "custom",
          message: "Please select your stage.",
          path: ["stage"],
        });
      }
    }
  });

type SchemaInput = z.infer<typeof ContactSchema>;

type FormErrors = {
  formErrors: string[];
  fieldErrors: Partial<Record<keyof SchemaInput, string[]>>;
};

export type ContactFormState = {
  success: boolean;
  message?: string;
  errors?: FormErrors;
  fields?: Partial<SchemaInput>;
};

// ── Email helpers ────────────────────────────────────────────────────────────

function row(label: string, value: string, last = false) {
  return `
    <tr>
      <td style="padding:24px 0${last ? "" : ";border-bottom:1px solid #f0f0f0"};">
        <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#9ca3af;">${label}</p>
        <p style="margin:0;font-size:16px;color:#1a1a1a;font-weight:500;">${value}</p>
      </td>
    </tr>`;
}

function badge(text: string) {
  return `<span style="display:inline-block;background:#EEF2FF;color:#22418F;font-size:13px;font-weight:600;padding:4px 14px;border-radius:999px;text-transform:capitalize;">${text}</span>`;
}

function link(href: string, label?: string) {
  return `<a href="${href}" style="color:#22418F;text-decoration:none;">${label ?? href}</a>`;
}

const INDUSTRY_LABELS: Record<string, string> = {
  fintech: "Fintech",
  "clean-energy": "Clean Energy & Sustainability",
  healthtech: "Healthtech",
  "ai-saas": "AI & SaaS",
  edtech: "EdTech",
  deeptech: "DeepTech",
  agritech: "AgriTech",
  proptech: "PropTech",
  others: "Others",
};

const STAGE_LABELS: Record<string, string> = {
  idea: "Idea / Pre-seed",
  mvp: "MVP / Seed",
  "early-traction": "Early Traction",
  "series-a": "Series A",
  "series-b-plus": "Series B+",
  growth: "Growth Stage",
};

function buildEmailHtml(data: SchemaInput): string {
  const joiningAsDisplay =
    data.joiningAs === "others" && data.joiningAsOther
      ? data.joiningAsOther
      : data.joiningAs;

  const industryDisplay =
    data.industry === "others" && data.industryOther
      ? data.industryOther
      : data.industry
        ? (INDUSTRY_LABELS[data.industry] ?? data.industry)
        : null;

  const stageDisplay = data.stage
    ? (STAGE_LABELS[data.stage] ?? data.stage)
    : null;

  const founderRows =
    data.joiningAs === "founder"
      ? `
        ${row("Industry / Sector", industryDisplay ?? "—")}
        ${row("Stage", stageDisplay ?? "—")}
        ${row("Pitch Deck", data.pitchDeckUrl ? link(data.pitchDeckUrl) : "—")}
      `
      : "";

  const messageRow = data.message
    ? `
      <tr>
        <td style="padding:24px 0 0;">
          <p style="margin:0 0 8px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#9ca3af;">Message</p>
          <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;white-space:pre-wrap;">${data.message}</p>
        </td>
      </tr>`
    : "";

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin:0;padding:0;background:#f4f6fb;font-family:'Segoe UI',Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

                <!-- Header -->
                <tr>
                  <td style="background:#22418F;padding:28px 40px 24px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:middle;padding-right:12px;">
                          <img src="https://venturizer.in/logo-inverted.png" alt="Venturizer" width="180" height="40"
                            style="display:block;border-radius:8px;object-fit:contain;" />
                        </td>
                      </tr>
                    </table>
                    <div style="border-top:1px solid rgba(255,255,255,0.15);margin:20px 0 16px;"></div>
                    <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.3px;">
                      New Contact Form Submission
                    </h1>
                    <p style="margin:6px 0 0;color:rgba(255,255,255,0.65);font-size:13px;">
                      Someone just reached out via the Venturizer website
                    </p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:36px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0">

                      ${row("Full Name", data.name)}
                      <tr>
                        <td style="padding:24px 0;border-bottom:1px solid #f0f0f0;">
                          <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#9ca3af;">Email Address</p>
                          <p style="margin:0;font-size:16px;font-weight:500;">${link(`mailto:${data.email}`, data.email)}</p>
                        </td>
                      </tr>
                      ${row("Phone Number", data.phone || "—")}
                      ${
                        data.linkedinUrl
                          ? `<tr>
                              <td style="padding:24px 0;border-bottom:1px solid #f0f0f0;">
                                <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#9ca3af;">LinkedIn</p>
                                <p style="margin:0;font-size:16px;font-weight:500;">${link(data.linkedinUrl)}</p>
                              </td>
                            </tr>`
                          : ""
                      }
                      <tr>
                        <td style="padding:24px 0;border-bottom:1px solid #f0f0f0;">
                          <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#9ca3af;">Joining As</p>
                          <p style="margin:0;margin-top:6px;">${badge(joiningAsDisplay)}</p>
                        </td>
                      </tr>
                      ${founderRows}
                      ${messageRow}

                    </table>
                  </td>
                </tr>

                <!-- CTA -->
                <tr>
                  <td style="padding:0 40px 32px;">
                    <a href="mailto:${data.email}"
                      style="display:inline-block;background:#EF3F3C;color:#ffffff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:8px;text-decoration:none;letter-spacing:0.2px;">
                      Reply to ${data.name.split(" ")[0]} →
                    </a>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#f9fafb;padding:20px 40px;border-top:1px solid #f0f0f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <img src="https://venturizer.in/logo.png" alt="Venturizer" width="140" height="20"
                            style="display:inline-block;vertical-align:middle;border-radius:4px;margin-right:6px;opacity:0.5;" />
                        </td>
                        <td align="right">
                          <p style="margin:0;font-size:12px;color:#9ca3af;">Automated · Do not reply to this email</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

// ── Server action ────────────────────────────────────────────────────────────

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const rawFields = Object.fromEntries(formData);

  const result = ContactSchema.safeParse(rawFields);

  if (!result.success) {
    const flattened = z.flattenError(result.error);

    return {
      success: false,
      errors: {
        formErrors: flattened.formErrors,
        fieldErrors: flattened.fieldErrors as FormErrors["fieldErrors"],
      },
      fields: {
        name: rawFields.name?.toString(),
        email: rawFields.email?.toString(),
        phone: rawFields.phone?.toString(),
        linkedinUrl: rawFields.linkedinUrl?.toString(),
        joiningAs: rawFields.joiningAs as SchemaInput["joiningAs"],
        joiningAsOther: rawFields.joiningAsOther?.toString(),
        industry: rawFields.industry?.toString(),
        industryOther: rawFields.industryOther?.toString(),
        stage: rawFields.stage?.toString(),
        pitchDeckUrl: rawFields.pitchDeckUrl?.toString(),
        message: rawFields.message?.toString(),
      },
    };
  }

  const { data } = result;

  const html = buildEmailHtml(data);
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    // Write to /public so it's accessible at http://localhost:3000/email-preview.html
    const previewPath = path.join(
      process.cwd(),
      "public",
      "email-preview.html",
    );
    fs.writeFileSync(previewPath, html, "utf-8");
    console.log(
      "\n📧 Email preview saved → http://localhost:3000/email-preview.html\n",
    );

    return {
      success: true,
      message: "Dev mode: email not sent. Preview at /email-preview.html",
    };
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENTS,
      replyTo: data.email,
      subject: `New Contact: ${data.name} — joining as ${data.joiningAs === "others" && data.joiningAsOther ? data.joiningAsOther : data.joiningAs}`,
      html,
    });
  } catch (error) {
    console.error("Resend error:", error);
    return {
      success: false,
      errors: {
        formErrors: ["Failed to send your message. Please try again shortly."],
        fieldErrors: {},
      },
      fields: data,
    };
  }

  return {
    success: true,
    message: "Thanks! We'll be in touch soon.",
  };
}
