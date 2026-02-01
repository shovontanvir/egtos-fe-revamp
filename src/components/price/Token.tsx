"use client";

import React from "react";
import TokenPackagesData, { TokenPackage } from "@/dummydata/TokenPackagesData";
import { ArrowRight, Images } from "lucide-react";
import Image from "next/image";

function TokenCard({ pkg }: { pkg: TokenPackage }) {
  const isFeatured = !!pkg.featured; 

  return (
    <div
  className={[
    isFeatured
      ? "rounded-2xl bg-[linear-gradient(180deg,#0A5753_0%,#EBF1F4_100%)] p-0.5"
      : "",
  ].join(" ")}
>
  <div
    className={[
      "relative overflow-hidden rounded-2xl px-4 py-4 md:px-5 md:py-5",
      isFeatured
        ? "bg-[#E9FFFA]"
        : "bg-white ring-1 ring-black/5 shadow-[0_12px_40px_rgba(2,6,23,0.08)]",
    ].join(" ")}
  >
      <div className="flex items-start justify-between gap-3">
        <div className="text-[16px] font-bold text-[#0A5753]">{pkg.name}</div>

        <div className="flex items-center gap-2">
          {pkg.badgeLeft ? (
            <span
              className={[
                "inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-semibold ring-1",
                isFeatured && pkg.badgeLeft.toLowerCase() === "popular"
                  ? "bg-[#0B2F2D] text-white ring-[#0B2F2D]/30"
                  : "bg-[#F0FDF2] text-[#21BA45] ring-[#BBF7C8]",
              ].join(" ")}
            >
              <span
                className={[
                  "h-1.5 w-1.5 rounded-full",
                  isFeatured && pkg.badgeLeft.toLowerCase() === "popular"
                    ? "bg-white/85"
                    : "bg-[#21BA45]",
                ].join(" ")}
              />
              {pkg.badgeLeft}
            </span>
          ) : null}

          {pkg.badgeRight ? (
            <span className="rounded-full bg-black px-2 py-1 text-[10px] font-semibold text-white ring-1 ">
              {pkg.badgeRight}
            </span>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-[28px] font-extrabold tracking-tight text-[#00928B]">
          {pkg.price}
        </div>
        <div className="pt-1 text-[14px] font-medium text-[#4D5662]">{pkg.tokens}</div>
      </div>

      <div className="mt-4 h-px w-full bg-[#DBE5EA]" />

      <div className="mt-4 flex items-center justify-between">
        <div className="text-[20px] font-extrabold text-[#00A89D]">{pkg.unitPrice}</div>
        <div className="text-[14px] font-medium text-[#5B6878]">{pkg.unitLabel}</div>
      </div>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-[#167F2F] ring-1 ring-emerald-200">
        {/* % icon */}
        <Image src="/percent.svg" alt="percent" width={14} height={14} />

        {/* text parts: "9% off" • "Save $99" */}
        {(() => {
            // expected format: "9% off  Save $99" (double space)
            const parts = pkg.saveLine.split("  ");
            const left = parts[0] ?? pkg.saveLine; // "9% off"
            const right = parts[1] ?? "";          // "Save $99"

            return (
            <>
                <span>{left}</span>

                {right ? (
                <>
                    {/* green dot */}
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    <span>{right}</span>
                </>
                ) : null}
            </>
            );
        })()}
        </div>

        <div className="my-5 h-px w-full bg-[#DBE5EA]" />


      <div className="mt-3 text-[12px] font-medium text-primary-700">{pkg.compareLine}</div>

      <button
        type="button"
        className={[
          "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-[14px] font-semibold text-[#00A89D]",
          isFeatured
            ? "bg-[#00A89D] text-white shadow-[0_10px_20px_rgba(0,168,157,0.25)] hover:opacity-95"
            : "bg-white text-[#0A5753] ring-1 ring-[#00A89D] hover:bg-[#00D0BF]/10",
        ].join(" ")}
      >
        Purchase Tokens
        <ArrowRight size={14} />
      </button>
    </div>
    </div>
  );
}

const INFO_IMAGES = {
  discount: "/discount.svg",
  instant: "/instant.svg",
  noexp: "/noexp.svg",
};

function BottomInfoBlock({
  title,
  desc,
  imgSrc,
  imgAlt,
}: {
  title: string;
  desc: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
}) {
  return (
    <div className="flex flex-col items-center px-6 py-10 gap-10 text-center">
      <div className="grid h-10 w-10 place-items-center ">
        <Image src={imgSrc} alt={imgAlt} width={60} height={60} className="object-contain" />
      </div>
      <div>
        <div className="text-[20px] font-semibold text-primary-900">{title}</div>
        <p className="mt-1 text-[18px] font-normal leading-relaxed text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

export default function TokenPackagesSection() {
  return (
    <section className="w-full bg-[#f5f8fa] py-16 md:py-20">
      <div className="px-4 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            Additional Token <br className="hidden md:block" />
            Packages
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed font-normal text-slate-600 md:text-[18px]">
            Need more tokens? Our flexible token packages offer <br /> volume discounts with base price of{" "}
            <span className="font-semibold text-primary-700">$3.49/token</span>
          </p>
        </div>

        <div className="mt-10">
          <div className="hidden gap-5 md:grid md:grid-cols-5">
            {TokenPackagesData.map((pkg: TokenPackage) => (
              <TokenCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="grid gap-4 md:hidden">
            {TokenPackagesData.map((pkg: TokenPackage) => (
              <TokenCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl bg-[#FFFFFF] shadow-[0_12px_40px_rgba(2,6,23,0.06)]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="border-b md:border-r md:border-black/5">
              <BottomInfoBlock
                title="Volume Discounts"
                desc={
                    <>
                    Save more with larger token packages. <br /> Discounts up to 31% off base price.
                    </>
                    }
                imgSrc={INFO_IMAGES.discount}
                imgAlt="Volume discounts"
              />
            </div>

            <div className="border-b md:border-r md:border-black/5">
              <BottomInfoBlock
                title="Instant Access"
                desc={
                    <>
                    Tokens are added to your account <br /> immediately after purchase.
                    </>
                    }
                imgSrc={INFO_IMAGES.instant}
                imgAlt="Instant access"
              />
            </div>

            <div>
              <BottomInfoBlock
                title="No Expiration"
                desc={
                    <>
                    All purchased tokens come with <br /> extended banking periods.
                    </>
                    }
                imgSrc={INFO_IMAGES.noexp}
                imgAlt="No expiration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
