"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedText";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <section id="introduction" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general uppercase text-base">
          Welcome to my world
        </h2>
        <AnimatedTitle
          title="E<b>a</b>b<b>a</b>rk <b>o</b>n <b>a</b> J<b>o</b>urney <b/> int<b>o</b> the F<b>u</b>t<b>u</b>re of Web Cre<b>a</b>ti<b>o</b>n."
          containerClass="mt-5 !text-5xl md:!text-[85px] !text-black text-center"
        />
        <div className="about-subtext">
          <p>Explore the cutting edge of web development, where creativity and innovation shape the digital future</p>
          
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <Image
            width={1400}
            height={1400}
            priority
            src="/img/about.webp"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
