import nodemailer from "nodemailer";

const contactRecipient = process.env.CONTACT_FORM_TO || "info@mayagmurtextile.com";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP settings are missing. Please configure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.");
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
    return Response.json(
      {
        error: error.message || "Unable to send inquiry.",
      },
      { status: 500 },
    );
  }
}
