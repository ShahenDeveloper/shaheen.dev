"use client";
import { ReactNode, useRef, useState } from "react";
import Button from "./Button";
import { IoMail } from "react-icons/io5";

interface BentoTiltProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  src: string;
  title: ReactNode;
  titleClassName?: string;
  description?: string;
  descriptionClassName?: string;
}

const BentoTilt: React.FC<BentoTiltProps> = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");

  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={`${className}`}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard: React.FC<BentoCardProps> = ({
  src,
  title,
  description,
  titleClassName,
  descriptionClassName,
}) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute opacity-85 left-0 top-0 size-full object-cover object-center "
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className={`bento-title special-font ${titleClassName}`}>
            {title}
          </h1>
          {description && (
            <p className={`mt-3 max-w-72 text-white text-[16px] drop-shadow-2xl opacity-100 ${descriptionClassName}`}>
              {description}
            </p>
          )}{" "}
        </div>
      </div>
    </div>
  );
};
const Features = () => {

 const sendMail = () => { 
  window.open("mailto:shaheendeveloper8@gmail.com?subject=Inquiry&body=Hello, I would like to get in touch regarding...");
}
  return (
    <section id="about" className="bg-black pb-52">
      <div className="px-3 xs:px-4 md:px-10">
        <div className="px-5  py-32">
          <p className="font-circular-web text-blue-50 text-lg">
            Turning Ideas Into Digital Experiences
          </p>
          <p className="max-w-md font-circular-web text-base font-normal text-blue-50 opacity-50">
            I’m Shaheen, a web developer with a passion for creating modern,
            responsive, and user-focused web applications. Whether it’s a
            dynamic app or a polished website, I’m here to help bring your
            vision to life. Let’s build something great together!
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 md:mr-0 mr-4 overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                Expl<b>o</b>rati<b>o</b>n
              </>
            }
            description="A fresh approach to exploring web development with me."
          />
        </BentoTilt>

        <div className="grid md:h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 mr-3 md:mr-0">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  S<b>k</b>ills <b>&</b> <b>E</b>xp<b>e</b>rti<b>se</b>
                </>
              }
              titleClassName="sm:!text-5xl !text-3xl"
              descriptionClassName="md:max-w-72 max-w-[100%]"
              description={
                "I specialize in a range of web development technologies, including HTML, CSS, JavaScript, React, Next Js, Tailwind CSS, Bootstrap, Zustand, Redux Toolkit, Git, Github, MongoDB,  Node.js, Express Js, Next Auth and many more. My expertise also extends to designing seamless UI/UX, optimizing performance, and ensuring cross-browser compatibility. Whether you need a responsive website or a dynamic web app, I have the skills to turn your vision into reality."
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 col-span-2 md:col-span-1 mr-4 md:mr-0">
            <BentoCard
              src=" videos/feature-3.mp4"
              title={
                <>
                  <b>F</b>u<b>n</b> <b>Fac</b>t
                </>
              }
              description={"One of my earliest coding memories is staying up all night building my first website from scratch. Armed with tutorials and a lot of determination, I created a simple site by morning. That experience sparked my passion for coding and taught me the value of persistence and creativity, which continues to inspire me every day."}

              descriptionClassName="!max-w-[100%]"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 mr-4 md:col-span-1 md:mr-0">
            <BentoCard
            titleClassName="!text-[40px] [word-spacing:8px]"
              src=" videos/feature-4.mp4"
              title={
                <>
                  <b>M</b>y P<b>e</b>rs<b>o</b>nality
                </>
              }
              description={
                "I’m a curious and driven individual who loves to combine creativity with problem-solving. In my free time, you’ll find me fishing by the lake, doing calisthenics, or traveling to new places to explore nature. I’m also an avid fan of anime, especially One Piece, which never fails to inspire me with its themes of adventure and perseverance. I enjoy watching movies and series, too, as they offer fresh perspectives and spark creativity."
              }
              descriptionClassName="!max-w-[100%] text-[15px]"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 md:!col-span-1 md:!row-span-1 !col-span-2 !row-span-3 mr-4 md:mr-0">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font text-center text-black">
                G<b>e</b>t I<b>n</b> T<b>o</b>uc<b>h</b>
              </h1>
              <Button onClick={sendMail} title="Contact Me" rightIcon={<IoMail className="size-5"/>} containerClass="flex md:mb-16 mt-12 self-center hover:scale-[1.009] text-blue-50 !bg-black/[.99] duration-400 transition-all gap-3 items-center font-semibold text-[15px]"/>
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 md:!col-span-1 md:!row-span-1 !col-span-2 !row-span-3 mr-4 md:mr-0">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
