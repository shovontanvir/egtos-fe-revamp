import React from 'react'
import Image from 'next/image'
import Badge from '../../Badge'

const IMAGES = {
  main: "/Table.svg",
  top: "/aboutherotop.png",
  bottom: "/aboutherobottom.png",
};

const bullets = [
    "Monetize excess capacity ",
    "Access true expertise from trusted partners  ",
    "Build and scale teams on demand ",
];

const Hero = () => {
  return (
   <section
         className="relative w-full h-[50vh] md:h-screen xl:h-[110vh] bg-primary-900 overflow-hidden pl-48 py-24"
       >
         <Image
           src="/aboutbg-grid.png"
           alt="grid bg"
           className="absolute w-1/2 h-1/2 left-100 top-40"
           width={560}
           height={560}
         /> 
         <Badge
            classname="border-primary-800 bg-[linear-gradient(91deg,rgba(0,208,191,0.20)_0%,rgba(0,208,191,0)_100%),linear-gradient(90deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.08)_100%)] text-white mb-4 font-thin "
            title='egtos stands for Experienced Global Team of Specialists. '
            icon={
                <span className="relative inline-flex h-5 w-5 items-center justify-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#00D0BF]/35" />
                <span className="absolute h-full w-full animate-pulse rounded-full bg-[#00D0BF]/20 blur-[1px]" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-[#00D0BF] shadow-[0_0_0_3px_rgba(0,208,191,0.18)]" />
                </span>
            }
         />
         <div className="relative ">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-[#EEFFFC] md:text-5xl">
                Everything You Need <br className="hidden md:block" />
                to Know About egtos
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                We help organizations transform underutilized talent into measurable value by
                enabling secure, token-based collaboration across invitation-only private networks
                of companies, consulting firms, and pre-cleared independent experts.
              </p>

              <h3 className="mt-7 text-lg font-semibold text-[#EEFFFC] md:text-3xl">
                Instead of layoffs, bench time,
                <br className="hidden md:block" /> or costly external consulting,
                <br className="hidden md:block" /> companies use egtos to:
              </h3>

              <ul className="mt-4">
                {bullets.map((text) => (
                <li
                    key={text}
                    className="flex items-start gap-3 rounded-lg px-3 py-2"
                >
                    <span className="shrink-0 mt-0.5">
                    <Image src="/tick.svg" alt="" width={20} height={20} />
                    </span>

                    <span className="font-thin text-sm md:text-base leading-snug text-gray-100">
                    {text}
                    </span>
                </li>
                ))}
              </ul> 
                 

              <p className="mt-5 text-xs text-white/55 md:text-sm">
                All within a controlled, compliant, and transparent environment.
              </p>
            </div>

            <div className="relative lg:col-span-7">
              <div className="relative mx-auto h-[360px] w-full max-w-[820px] md:h-[440px] lg:h-[520px]">
                <div className="absolute left-24 top-10 h-[62%] w-full md:h-[90%]">
                  <Image
                    src={IMAGES.main}
                    alt="About hero main"
                    fill
                    priority
                    className="object-contain"
                    sizes="(min-width: 1024px) 55vw, 92vw"
                  />
                </div>

                <div className="absolute left-24 -top-24 h-[60%] w-[92%] sm:w-[80%] md:w-[76%]">
                  <Image
                    src={IMAGES.top}
                    alt="About hero top card"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 45vw, 88vw"
                  />
                </div>

                <div className="absolute left-[6%] -bottom-14 h-[70%] w-[78%] sm:w-[68%] md:w-[62%]">
                  <Image
                    src={IMAGES.bottom}
                    alt="About hero bottom card"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 40vw, 80vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />

    </section>
  )
}

export default Hero