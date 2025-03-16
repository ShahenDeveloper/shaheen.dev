"use client";
import Image from "next/image";
import AnimatedTitle from "./AnimatedText";

const ImageClipBox = ({ src, clipClass }: {src: string, clipClass: string}) => (
  <div className={clipClass}>
    <Image src={src} alt="Contact Image" width={1500} height={1200} />
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden lg:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-0 md:translate-y-20 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-[50%] -translate-x-[50%] sm:-translate-x-0 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-115"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-115"
          />
        </div>

        <div className="flex flex-col mt-12 md:mt-0 items-center text-center">
          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> <b>We</b>b t<b>o</b>gether"
            containerClass="special-font !text-3xl md:!text-[4.3rem] w-full font-zentry !text-5xl !font-black !leading-[.9] mix-blend-difference"
          />
          <a
            className="ring-fuchsia-50 bg-violet-50 py-3 px-8 mt-10 text-black"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shaheendeveloper8@gmail.com"
            target="_blank"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>

  );
};

export default Contact;
