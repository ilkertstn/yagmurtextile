"use client";

import { useState } from "react";

export default function MailtoContactForm({
  className,
  title,
  fields,
  buttonLabel,
  buttonClassName = "button button-dark",
  groupedFieldCount = 0,
  groupClassName,
  subject = "Website Inquiry",
  language = "en",
}) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const copy =
    language === "tr"
      ? {
          sending: "Gönderiliyor...",
          success: "Talebiniz başarıyla gönderildi.",
          error: "Talebiniz şu anda gönderilemiyor.",
        }
      : {
          sending: "Sending...",
          success: "Your inquiry has been sent successfully.",
          error: "Unable to send your inquiry right now.",
        };

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payloadFields = fields.map((field) => ({
      label: field.label,
      name: field.name,
      value: formData.get(field.name)?.toString().trim() || "",
    }));

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          fields: payloadFields,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || copy.error);
      }

      setStatus("success");
      setMessage(copy.success);
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(language === "tr" ? copy.error : error.message || copy.error);
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {title ? <h3>{title}</h3> : null}
      {groupedFieldCount > 0 ? (
        <div className={groupClassName}>
          {fields.slice(0, groupedFieldCount).map((field) => (
            <FormField key={field.name} field={field} disabled={status === "submitting"} />
          ))}
        </div>
      ) : null}
      {fields.slice(groupedFieldCount).map((field) => (
        <FormField key={field.name} field={field} disabled={status === "submitting"} />
      ))}
      <button className={buttonClassName} type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? copy.sending : buttonLabel}
      </button>
      {message ? (
        <p
          className={`form-status ${status === "success" ? "is-success" : "is-error"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function FormField({ field, disabled }) {
  return (
    <label>
      <span>{field.label}</span>
      {field.type === "textarea" ? (
        <textarea
          name={field.name}
          rows={field.rows || 4}
          placeholder={field.placeholder}
          required={field.required}
          disabled={disabled}
        ></textarea>
      ) : field.type === "select" ? (
        <select
          name={field.name}
          defaultValue={field.defaultValue || field.options?.[0]}
          required={field.required}
          disabled={disabled}
        >
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          disabled={disabled}
        />
      )}
    </label>
  );
}
