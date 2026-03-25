"use server";

import z from "zod";
import { Resend } from "resend";
import fs from "fs";
import path from "path";
import { buildEmailHtml } from "./lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    joiningAsOther: z.string().optional().or(z.literal("")),
    // Founder-only fields
    industry: z.string().optional().or(z.literal("")),
    industryOther: z.string().optional().or(z.literal("")),
    stage: z.string().optional().or(z.literal("")),
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

export type SchemaInput = z.infer<typeof ContactSchema>;

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

  // console.log(data);

  const html = buildEmailHtml(data);
  // const isDev = process.env.NODE_ENV === "development";

  // if (isDev) {
  //   const previewPath = path.join(
  //     process.cwd(),
  //     "public",
  //     "email-preview.html",
  //   );
  //   fs.writeFileSync(previewPath, html, "utf-8");
  //   console.log(
  //     "\n📧 Email preview saved → http://localhost:3000/email-preview.html\n",
  //   );

  //   return {
  //     success: true,
  //     message: "Dev mode: email not sent. Preview at /email-preview.html",
  //   };
  // }

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
