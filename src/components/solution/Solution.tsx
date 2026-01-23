"use client";

export default function SolutionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-40 [bg-size:48px_48px] [bg-image:linear-gradient(to_right,rgba(2,132,199,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,132,199,0.08)_1px,transparent_1px)]" />

        <div className="absolute inset-0 opacity-35 [bg-size:120px_100%] [bg-image:linear-gradient(to_right,rgba(2,132,199,0.06)_1px,transparent_1px)]" />
    
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-[6.25rem] border border-white/50 bg-white/40 px-5 py-3 text-xs font-medium text-slate-700 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Reduce risk. Unlock value. Replace inefficiency with collaboration</span>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-3xl text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            The egtos Solution
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-600">
    
            egtos enables companies to create and participate in private trading networks where
            capacity, skills, and expertise can be exchanged.
          </p>
        </div>

        
        <div className="relative mx-auto mt-14 h-[640px] w-full max-w-5xl">
          <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 md:w-[64%]">
            <div className="absolute inset-0 rounded-3xl border border-white/50 bg-white/35 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl" />

            <div className="relative rounded-3xl p-6 md:p-10">
              <div className="h-[380px] md:h-[440px] w-full rounded-2xl border border-white/60 bg-white/40" />
            </div>

            <div className="pointer-events-none absolute -left-10 top-16 hidden md:block">
              <div className="h-28 w-60 rounded-2xl border border-white/60 bg-white/60 shadow-lg" />
            </div>

            <div className="pointer-events-none absolute -right-12 top-44 hidden md:block">
              <div className="h-28 w-72 rounded-2xl border border-white/60 bg-white/60 shadow-lg" />
            </div>

            <div className="pointer-events-none absolute left-6 -bottom-12 hidden md:block">
              <div className="h-28 w-80 rounded-2xl border border-white/60 bg-white/60 shadow-lg" />
            </div>
          </div>

          <div className="absolute left-0 top-36 hidden md:block">
            <Callout>Maintain governance, confidentiality, and compliance</Callout>
          </div>

          <div className="absolute right-0 top-44 hidden md:block">
            <Callout>Control who sees and accesses capacity</Callout>
          </div>

          <div className="absolute left-8 bottom-24 hidden md:block">
            <Callout>Invite and accept trusted companies</Callout>
          </div>

          <div className="absolute right-12 bottom-16 hidden md:block">
            <Callout>Trade real expertise not generic resources</Callout>
          </div>

          <div className="absolute left-0 right-0 bottom-0 md:hidden space-y-3">
            <Callout>Maintain governance, confidentiality, and compliance</Callout>
            <Callout>Control who sees and accesses capacity</Callout>
            <Callout>Invite and accept trusted companies</Callout>
            <Callout>Trade real expertise not generic resources</Callout>
          </div>
        </div>
      </div>
    </section>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-[340px] items-center gap-2 rounded-full border border-white/60 bg-white/60 px-3 py-2 text-xs text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur-xl">

      <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500/15">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
      </span>
      <span className="leading-snug">{children}</span>
    </div>
  );
}
