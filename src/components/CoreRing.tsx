import { type CSSProperties } from "react";
import { FadeIn, Magnet } from "./Motion";

export function CoreRing() {
  return (
    <FadeIn
      className="ambient-core-ring pointer-events-none absolute inset-x-0 bottom-[12%] z-0 mx-auto flex w-[300px] items-center justify-center sm:bottom-[-4%] sm:w-[420px] md:w-[520px]"
      delay={0.6}
      y={30}
    >
      <Magnet className="relative aspect-square w-full">
        <span className="absolute inset-[-14%] rounded-full bg-[radial-gradient(circle,rgba(182,0,168,0.16),transparent_62%)] blur-2xl" />
        <span className="absolute inset-[6%] rounded-full border border-[#D7E2EA]/25" />
        <span className="core-ring absolute inset-[18%] rounded-full border border-[#D7E2EA]/15">
          {Array.from({ length: 6 }).map((_, index) => (
            <i key={index} style={{ "--dot-index": index } as CSSProperties} />
          ))}
        </span>
        <span className="absolute inset-[31%] rounded-full border border-[#D7E2EA]/10" />
      </Magnet>
    </FadeIn>
  );
}
