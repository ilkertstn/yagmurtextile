import nodemailer from "nodemailer";

const contactRecipient = process.env.CONTACT_FORM_TO || "info@mayagmurtextile.com";
const smtpConfigError =
  "Mail service is not configured right now. Please try again later or email info@mayagmurtextile.com.";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    const error = new Error(
      "SMTP settings are missing. Please configure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.",
    );
    error.code = "SMTP_MISSING_CONFIG";
    throw error;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

function buildTextBody(fields) {
  const lines = fields
    .filter((field) => field.value)
    .map((field) => `${field.label}: ${field.value}`);

  return `${lines.join("\n")}\n\nSubmitted from mayagmurtextile.com`;
}

export async function POST(request) {
  try {
    const { subject, fields } = await request.json();

    if (!subject || !Array.isArray(fields) || fields.length === 0) {
      return Response.json({ error: "Invalid form submission." }, { status: 400 });
    }

    const transporter = getTransporter();
    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
    const replyTo = fields.find((field) => field.name === "email")?.value || undefined;

    await transporter.sendMail({
      from: fromAddress,
      to: contactRecipient,
      replyTo,
      subject,
      text: buildTextBody(fields),
    });

    return Response.json({ ok: true });
  } catch (error) {
    if (error.code === "SMTP_MISSING_CONFIG") {
      console.error("Contact form SMTP configuration is incomplete.");
    } else {
      console.error("Contact form submission failed:", error);
    }

    return Response.json(
      {
        error: error.code === "SMTP_MISSING_CONFIG" ? smtpConfigError : "Unable to send inquiry.",
      },
      { status: error.code === "SMTP_MISSING_CONFIG" ? 503 : 500 },
    );
  }
}
