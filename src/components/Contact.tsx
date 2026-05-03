import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-5 md:py-32">
        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            03 — Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Let's build something sharp.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Tell me about your project. I reply within two business days.
          </p>
          <a
            href="mailto:hello@studio.dev"
            className="mt-6 inline-block font-mono text-sm text-foreground underline-offset-4 hover:underline"
          >
            hello@studio.dev
          </a>
        </div>

        <form onSubmit={onSubmit} className="space-y-5 md:col-span-3">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" name="name" type="text" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="jane@example.com" />
          </div>
          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              required
              rows={6}
              placeholder="Tell me what you're working on..."
              className="w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            {sent ? "Sent — thank you" : "Send message"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
