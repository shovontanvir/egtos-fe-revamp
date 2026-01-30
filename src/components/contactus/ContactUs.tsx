"use client";

import React, { useMemo, useState } from "react";
import Badge from "@/components/Badge";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  countryCode: string;
  phone: string;
  message: string;
};

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  countryCode: "US",
  phone: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const requiredOk = useMemo(() => {
    return (
      form.firstName.trim() &&
      form.lastName.trim() &&
      isValidEmail(form.email.trim()) &&
      form.company.trim() &&
      form.message.trim()
    );
  }, [form]);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((p) => ({ ...p, [key]: e.target.value }));
      if (status !== "idle") setStatus("idle");
      if (error) setError("");
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!requiredOk) {
      setStatus("error");
      setError("Please fill all required fields (and use a valid email).");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      // ✅ Preferred: send to your API route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setForm(INITIAL);
    } catch {
      // Fallback: mailto (still behaves like contact page)
      const subject = encodeURIComponent("Contact request from egtos website");
      const body = encodeURIComponent(
        `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.countryCode} ${form.phone}\n\nMessage:\n${form.message}\n`
      );
      window.location.href = `mailto:contact@egtos.ch?subject=${subject}&body=${body}`;
      setStatus("idle");
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full overflow-hidden bg-[#002425]">
        <div className="pointer-events-none absolute inset-0 ">
            {/* <Image src="/aboutbg-grid.png" alt="White grid background" fill className="object-center" /> */}
          
          <div className="absolute right-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="absolute left-[-16%] bottom-[-22%] h-[620px] w-[620px] rounded-full bg-cyan-300/10 blur-3xl" />
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_72%,rgba(0,0,0,0.55)_100%)]" /> */}
        </div>

        <div className="relative m-6 rounded-3xl  border-2 border-white/25 p-6 md:m-10 md:p-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <Badge
                classname="border-white/30 bg-[linear-gradient(91deg,rgba(0,208,191,0.2)_0%,rgba(0,208,191,0)_100%),linear-gradient(90deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.08)_100%)] text-white mb-4"
                title="Contact Us"
                icon={
                <span className="relative inline-flex h-5 w-5 items-center justify-center">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-[#00D0BF]/35" />
                    <span className="absolute h-full w-full animate-pulse rounded-full bg-[#00D0BF]/20 blur-[1px]" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-[#00D0BF] shadow-[0_0_0_3px_rgba(0,208,191,0.18)]" />
                </span>
                }
            />

              <h1 className="text-4xl font-semibold leading-tight text-[#EEFFFC] md:text-5xl">
                Let’s Talk About <br /> Your Needs
              </h1>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
                Our team is ready to answer questions and share how egtos can support your organization.
              </p>

              <div className="md:mt-[41%] mt-5 space-y-3">
                <ContactCard
                  icon={<Mail size={18} className="text-[#00D0BF]  " />}
                  label="Email Us"
                  value="contact@egtos.ch"
                />
                <ContactCard
                  icon={<MapPin size={18} className="text-[#00D0BF]" />}
                  label="Drop in us"
                  value="Get directions"
                  rightIcon={<ArrowRight size={18} className="text-[#00D0BF]" />}
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label="First name"
                    placeholder="First name"
                    value={form.firstName}
                    onChange={onChange("firstName")}
                    required
                  />
                  <Field
                    label="Last name"
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={onChange("lastName")}
                    required
                  />
                </div>

                <Field
                  label="Email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={onChange("email")}
                  required
                />

                <Field
                  label="Company name"
                  placeholder="protoja"
                  value={form.company}
                  onChange={onChange("company")}
                  required
                />

                <div className="space-y-2">
                  <label className="text-xs font-medium text-white/70">Phone number</label>
                  <div className="flex overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
                    <select
                      value={form.countryCode}
                      onChange={onChange("countryCode")}
                      className="w-[82px] bg-transparent px-3 py-3 text-sm text-white/70 outline-none "
                    >
                      <option value="US">US</option>
                      <option value="CH">CH</option>
                      <option value="BD">BD</option>
                      <option value="UK">UK</option>
                      <option value="DE">DE</option>
                    </select>
                    <div className="h-auto" />
                    <input
                      value={form.phone}
                      onChange={onChange("phone")}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-transparent px-4 py-3 text-sm text-white/80 outline-none placeholder:text-white/25"
                    />
                  </div>
                </div>

                
                <div className="space-y-2">
                  <label className="text-xs font-medium text-white/70">Message</label>
                  <textarea
                    value={form.message}
                    onChange={onChange("message")}
                    placeholder=""
                    rows={6}
                    className="w-full resize-none rounded-xl bg-white/5 px-4 py-3 text-sm text-white/80 outline-none placeholder:text-white/25 ring-1 ring-white/10"
                  />
                </div>
                {status === "error" && (
                  <div className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-200 ring-1 ring-red-500/20">
                    {error}
                  </div>
                )}
                {status === "sent" && (
                  <div className="rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100 ring-1 ring-emerald-500/20">
                    Thanks! Your message has been sent.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={[
                    "w-full rounded-full py-3.5 text-sm font-semibold",
                    "bg-[#00A89D] text-white",
                    "hover:opacity-95 active:opacity-90",
                    "disabled:opacity-60 disabled:cursor-not-allowed",
                  ].join(" ")}
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

              </form>
            </div>
          </div>
        </div>

        <div className="h-10 md:h-14" />
      </div>
    </section>
  );
}

/* ---------- small UI pieces ---------- */

function ContactCard({
  icon,
  label,
  value,
  rightIcon,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  rightIcon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
          {icon}
        </div>
        <div className="leading-tight">
          <div className="text-[11px] text-white/55">{label}</div>
          <div className="text-sm font-semibold text-white/85">{value}</div>
        </div>
      </div>
      {rightIcon ? (
        <div className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
          {rightIcon}
        </div>
      ) : (
        <div className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
          <ArrowRight size={18} className="text-[#00D0BF]" />
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-medium text-white/70">
        {label} {required ? <span className="text-white/30">*</span> : null}
      </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white/80 outline-none placeholder:text-white/25 ring-1 ring-white/10"
      />
    </div>
  );
}
