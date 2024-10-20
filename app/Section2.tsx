"use client"
import { useInView } from "framer-motion";
import { useRef } from "react";

const Section2 = () => {
  const sec2Ref = useRef(null);
  const isInView = useInView(sec2Ref, { amount: 0.3, once: true });
  return (
    <div className="bg-black">
      <div className="w-full relative h-full max-w-desktop mx-auto px-2 pt-[108px] pb-[227px]">
        <img
          className="absolute w-full h-full top-0 left-0"
          src="/sec2.png"
          alt=""
        />
        <div className="bg-sec2 w-full h-full absolute top-0 left-0"></div>

        <div ref={sec2Ref} className="flex flex-col w-full mx-auto gap-14 relative">
          <div className={`relative ${isInView ? "animate-fade-up opacity-100 delay-500" : "opacity-0 translate-y-10"}`}>
            <p className="font-omega text-[72px] leading-[72px] max-md:text-[40px] max-md:leading-[40px]">
              our philosophy.
            </p>
            <p className="absolute top-1 left-0.5 text-border font-omega text-[72px] leading-[72px] max-md:text-[40px] max-md:leading-[40px]">
              our philosophy.
            </p>
          </div>
          <div className={`w-full mx-auto ${isInView ? "animate-fade-up opacity-100 delay-2000" : "opacity-0 translate-y-10"}`}>
            <p className="text-[52px] leading-[72px] max-md:text-2xl">
              “Limit is breakable! And we are here to robust and redefine what
              theWeb3 gaming landscape via the most addictive games"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
