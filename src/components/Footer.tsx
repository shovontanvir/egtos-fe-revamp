"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FOOTER_LOGO = "/egtos.svg";

const Footer = () => {
  return (
    <footer className="relative w-full bg-white">
      {/* background grid + soft glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-45 [background-size:48px_48px] [background-image:linear-gradient(to_right,rgba(2,132,199,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,132,199,0.08)_1px,transparent_1px)]" />
        <div className="absolute inset-0 opacity-30 [background-size:120px_100%] [background-image:linear-gradient(to_right,rgba(2,132,199,0.06)_1px,transparent_1px)]" />
        <div className="absolute left-1/2 bottom-[-1%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-200/35 blur-3xl" />
      </div>

      <div className="relative w-full px-6 py-12 md:px-12 md:py-16">
        {/* top row: logo + menus */}
        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* big logo */}
          <div className="md:col-span-7">
            <div className="relative w-full max-w-[760px]">
              <Image
                src={FOOTER_LOGO}
                alt="egtos"
                width={900}
                height={260}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* menus */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-10 md:gap-14 justify-items-end text-left">
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Menu</h4>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>
                    <Link href="/" className="hover:text-slate-900">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-slate-900">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-slate-900">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  Quick Action
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>
                    <Link href="/demo" className="hover:text-slate-900">
                      Request A Demo
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-slate-900">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-it-works" className="hover:text-slate-900">
                      How it Works
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* middle: address / email / phone */}
        <div className="mt-12 grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-4">
            <p className="text-sm text-slate-500">Adress</p>
            <p className="mt-2 text-sm font-semibold text-slate-900 leading-relaxed">
              Sevogelstrasse 102 4052, Basel <br />
              Switzerland, Europe
            </p>
          </div>

          <div className="md:col-span-4 md:text-center">
            <p className="text-sm text-slate-500">Email</p>
            <a
              href="mailto:hello@egtos.ch"
              className="mt-2 inline-block text-sm font-semibold text-slate-900 hover:underline"
            >
              hello@egtos.ch
            </a>
          </div>

          <div className="md:col-span-4 md:text-right">
            <p className="text-sm text-slate-500">Phone</p>
            <a
              href="tel:+66035552458"
              className="mt-2 inline-block text-sm font-semibold text-slate-900 hover:underline"
            >
              +660 3555 2458
            </a>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} egtos. All rights reserved.
          </p>

          {/* social center (like the reference) */}
          <div className="flex items-center justify-start md:justify-center">
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/90 text-white shadow-sm hover:bg-slate-900"
              aria-label="LinkedIn"
            >
              <span className="text-xs font-semibold">in</span>
            </a>
          </div>

          <div className="flex items-center gap-8 text-sm text-slate-500 md:justify-end">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
