import { useState, type FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(data: ContactFormData): FormErrors {
  const newErrors: FormErrors = {};

  if (!data.name.trim()) {
    newErrors.name = "Name is required.";
  } else if (data.name.trim().length < 2) {
    newErrors.name = "Name must contain at least 2 characters.";
  }

  if (!data.email.trim()) {
    newErrors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    newErrors.email = "Please enter a valid email address.";
  }

  if (!data.subject.trim()) {
    newErrors.subject = "Please select a subject.";
  }

  if (!data.message.trim()) {
    newErrors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    newErrors.message = "Message must contain at least 10 characters.";
  }

  return newErrors;
}

const baseFieldClass =
  "w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 dark:bg-slate-950 dark:text-white";

function getFieldClass(hasError: boolean) {
  return `${baseFieldClass} ${
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
      : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 dark:border-slate-700"
  }`;
}

export default function ContactForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  function handleChange(
    field: keyof ContactFormData,
    value: string
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: undefined,
      }));
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const newErrors = validate(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setSubmitSuccess(true);
      setFormData(initialFormData);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-900 dark:bg-emerald-950/40">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl font-bold text-white">
          ✓
        </div>

        <h4 className="mt-5 text-lg font-bold text-emerald-900 dark:text-emerald-100">
          Form validation completed
        </h4>

        <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
          This was a demonstration. No message was sent.
        </p>

        <button
          type="button"
          onClick={() => setSubmitSuccess(false)}
          className="mt-5 rounded-xl border border-emerald-300 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-800 dark:text-emerald-300"
        >
          Try the form again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200"
        >
          Full Name
        </label>

        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(event) =>
            handleChange("name", event.target.value)
          }
          className={getFieldClass(Boolean(errors.name))}
          placeholder="Enter your full name"
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200"
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(event) =>
            handleChange("email", event.target.value)
          }
          className={getFieldClass(Boolean(errors.email))}
          placeholder="name@example.com"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200"
        >
          Subject
        </label>

        <select
          id="subject"
          value={formData.subject}
          onChange={(event) =>
            handleChange("subject", event.target.value)
          }
          className={getFieldClass(Boolean(errors.subject))}
        >
          <option value="">Select a subject...</option>
          <option value="general">General</option>
          <option value="feedback">Project Feedback</option>
          <option value="collaboration">Collaboration</option>
        </select>

        {errors.subject && (
          <p className="mt-2 text-sm text-red-500">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200"
        >
          Message
        </label>

        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(event) =>
            handleChange("message", event.target.value)
          }
          className={`${getFieldClass(
            Boolean(errors.message)
          )} resize-y`}
          placeholder="Write your message..."
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3.5 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Validating..." : "Test Form Validation"}
      </button>
    </form>
  );
}