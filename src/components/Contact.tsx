import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const details = [
  { icon: Phone, label: "Phone", value: "+49 30 1234 5678", href: "tel:+493012345678" },
  { icon: Mail, label: "Email", value: "hello@grady.studio", href: "mailto:hello@grady.studio" },
  { icon: MapPin, label: "Address", value: "Torstrasse 142, 10119 Berlin, DE" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-5 md:py-32">
        {/* LEFT SIDE */}
        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            04 — Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Let’s build something sharp.
          </h2>

          <p className="mt-6 text-muted-foreground">
            Tell me about your project. I usually respond within two business days.
          </p>

          <ul className="mt-10 space-y-6 border-t border-border pt-8">
            {details.map((d) => (
              <li key={d.label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-border">
                  <d.icon className="h-4 w-4" strokeWidth={1.5} />
                </div>

                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {d.label}
                  </div>

                  {d.href ? (
                    <a
                      href={d.href}
                      className="mt-1 block text-sm text-foreground hover:underline underline-offset-4"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <div className="mt-1 text-sm text-foreground">{d.value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* RIGHT SIDE - FORM */}
        <div className="md:col-span-3 space-y-8">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Name" name="name" type="text" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@example.com" />
            </div>

            {/* NEW INPUT */}
            <div>
              <Field
                label="Subject"
                name="subject"
                type="text"
                placeholder="Website redesign, portfolio, etc..."
              />
            </div>

            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Message
              </label>

              <textarea
                required
                rows={7}
                placeholder="Tell me what you're working on..."
                className="w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              {sent ? "Message sent" : "Send message"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>{" "}
        </div>{" "}
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
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
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
