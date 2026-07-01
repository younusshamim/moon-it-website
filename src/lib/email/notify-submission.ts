import { Resend } from "resend";

// Where submission notifications are delivered.
const NOTIFY_TO = "moon69032@gmail.com";

// `from` must be a Resend-verified domain to reach external inboxes. Falls back
// to Resend's shared test sender (only delivers to the account owner's email).
const NOTIFY_FROM =
  process.env.RESEND_FROM_EMAIL || "Moon IT <onboarding@resend.dev>";

const resend = new Resend(process.env.RESEND_API_KEY);

type Row = { label: string; value?: string | number | null };

const buildHtml = (title: string, rows: Row[]): string => {
  const cells = rows
    .filter(
      (row) =>
        row.value !== undefined && row.value !== null && row.value !== "",
    )
    .map(
      (row) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">${row.label}</td>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;">${row.value}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;">
      <h2 style="margin:0 0 16px;">${title}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px;">${cells}</table>
    </div>`;
};

/**
 * Sends a notification email. Best-effort: never throws, returns whether the
 * send succeeded so callers can log without failing the submission.
 */
const send = async (subject: string, html: string): Promise<boolean> => {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY is not set — skipping notification email.");
    return false;
  }

  try {
    const { error } = await resend.emails.send({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      subject,
      html,
    });

    if (error) {
      console.error("Resend send error:", error);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Failed to send notification email:", error);
    return false;
  }
};

export type AdmissionEmailPayload = {
  name: string;
  contactNo: string;
  courseName?: string;
  variationName?: string;
  courseFee?: number;
  address?: string;
};

export const sendAdmissionEmail = (payload: AdmissionEmailPayload) =>
  send(
    `New Admission: ${payload.name}`,
    buildHtml("New Admission Submission", [
      { label: "Name", value: payload.name },
      { label: "Contact No", value: payload.contactNo },
      { label: "Course", value: payload.courseName },
      { label: "Level / Package", value: payload.variationName },
      { label: "Course Fee", value: payload.courseFee },
      { label: "Address", value: payload.address },
    ]),
  );

export type SeminarEmailPayload = {
  name: string;
  contactNo: string;
  courseName?: string;
  attendPosibility?: string;
  address?: string;
};

export const sendSeminarEmail = (payload: SeminarEmailPayload) =>
  send(
    `New Seminar Registration: ${payload.name}`,
    buildHtml("New Free Seminar Registration", [
      { label: "Name", value: payload.name },
      { label: "Contact No", value: payload.contactNo },
      { label: "Course", value: payload.courseName },
      { label: "Attend Possibility", value: payload.attendPosibility },
      { label: "Address", value: payload.address },
    ]),
  );
