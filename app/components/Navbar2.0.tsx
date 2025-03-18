"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import { useState } from "react";

gsap.registerPlugin(CustomEase);
CustomEase.create(
  "hop",
  "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
);

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const breakToSpan = (text: string) => {
    return text.split("").map((char, idx) => <span key={idx}>{char}</span>);
  };

  useGSAP(() => {
    if (isOpen) {
      gsap.to(".menu", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.5,
      });

      gsap.to(".video-wrapper", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.5,
        delay: 0.5,
      });

      gsap.to(".links p", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.75,
        stagger: 0.05,
        ease: "power3.out",
      });

      gsap.to(".right-links p", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 2.5,
        stagger: 0.05,
        ease: "power3.out",
      });

      gsap.to(".heading span", {
        y: 0,
        scale: 1,
        rotateY: 0,
        stagger: 0.05,
        delay: 0.75,
        duration: 1.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(".menu", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "hop",
        duration: 1.5,
        onComplete: () => {
          gsap.set(".menu", {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          });
        },
      });

      gsap.to(".video-wrapper", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      });
      gsap.to(".links p", {
        opacity: 0,
        y: 20,
      });

      gsap.to(".right-links p", {
        opacity: 0,
        y: 20,
      });
      gsap.to(".heading span", {
        y: 500,
        rotateY: 90,
        scale: 0.75,
      });
    }
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed top-4 right-4 md:top-6 md:right-6 cursor-pointer z-[999999999] group"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-[burlywood] rounded-full transition-all duration-300 ease-out group-hover:w-12 group-hover:h-12 md:group-hover:w-16 md:group-hover:h-16"></div>
        <div className="relative flex flex-col items-center justify-center w-12 h-12 md:w-16 md:h-16">
          <div
            className={`w-7 h-[3px] bg-white transition-all duration-300 group-hover:bg-black rounded absolute ${
              isOpen ? "rotate-45" : "translate-y-[-4px]"
            }`}
          ></div>
          <div
            className={`w-7 h-[3px] bg-white transition-all duration-300 group-hover:bg-black rounded absolute ${
              isOpen ? "-rotate-45" : "translate-y-[4px]"
            }`}
          ></div>
        </div>
      </div>

      <div className="w-full menu h-screen fixed z-[99999] flex flex-col bg-[#0f0f0f] overflow-hidden">
        <div className="w-full h-24 " />

        {/* Top Left Branding */}
        <div className="absolute top-6 left-4 md:top-12 md:left-14">
          <h1 className="text-4xl md:text-6xl text-white">SHAHEEN</h1>
        </div>

        <div className="flex-grow flex flex-col">
          {/* Texts Container */}
          <div className="flex-1 flex justify-evenly items-center p-4 md:mt-0 mt-12 px-12">
            <div className="flex mt-4 flex-col links menu-tags gap-2">
              <p className="xs:text-5xl text-4xl md:text-[44px] leading-none font-normal text-white">
                <a
                  onClick={() => setIsOpen(false)}
                  href="#home"
                  className="relative inline-block group"
                >
                  HOME
                  <span className="absolute left-0 -bottom-1 h-1 bg-white w-0 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </p>
              <p className="xs:text-5xl text-4xl md:text-[44px] leading-none font-normal text-white">
                <a
                  onClick={() => setIsOpen(false)}
                  href="#introduction"
                  className="relative inline-block group"
                >
                  Introduction
                  <span className="absolute left-0 -bottom-1 h-1 bg-white w-0 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </p>
              <p className="xs:text-5xl text-4xl md:text-[44px] leading-none font-normal text-white">
                <a
                  onClick={() => setIsOpen(false)}
                  href="#about"
                  className="relative inline-block group"
                >
                  About
                  <span className="absolute left-0 -bottom-1 h-1 bg-white w-0 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </p>
              <p className="xs:text-5xl text-4xl md:text-[44px] leading-none font-normal text-white">
                <a
                  onClick={() => setIsOpen(false)}
                  href="#contact"
                  className="relative inline-block group"
                >
                  Contact
                  <span className="absolute left-0 -bottom-1 h-1 bg-white w-0 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </p>
            </div>

            {/* Right Links (Shown Only on md+) */}
            <div className="hidden md:flex flex-row gap-4 right-links">
              <div>
                <div className="flex flex-col gap-1">
                  <p className="text-[12px] leading-none font-[500] text-white">
                    SHAHEEN
                  </p>
                  <p className="text-[12px] leading-none text-white font-[500]">
                    2B26B2 ONTORIO
                  </p>
                  <p className="text-[12px] leading-none text-white font-[500]">
                    BANGLADESH
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[12px] leading-none text-white font-[500]">
                    shaheendeveloper8@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[11px] leading-none font-[500] text-white">
                  INSTAGRAM
                </p>
                <p className="text-[11px] leading-none text-white font-[500]">
                  YOUTUBE
                </p>
                <Link href={"https://www.fiverr.com/s/6Y295eB"} className="text-[11px] leading-none text-white font-[500]">
                  FIVERR
                </Link>
              </div>
            </div>
          </div>

          {/* Video and Animated Heading Container */}
          <div className="flex-1 flex justify-end items-center md:justify-evenly px-7">
            <div className="w-[280px] md:w-[330px] p-[6px] bg-[#1d1d1d] aspect-video h-[150px] md:h-[200px] video-wrapper">
              <video
                src="/videos/feature-4.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              />
            </div>
            <div className="hidden md:block place-self-end mb-9">
              <h1 className="text-2xl xs:text-3xl md:text-6xl lg:text-8xl font-bold text-white heading leading-3">
                {breakToSpan("SHAHEEN")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
