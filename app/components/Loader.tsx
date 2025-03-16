import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = () => {
  useGSAP(() => {
    const windowsWidth = window.innerWidth;
    const wrapperWidth = 180;
    const finalPosition = windowsWidth - wrapperWidth;
    const stepDistance = finalPosition / 6;
    const tl = gsap.timeline();
    console.log(stepDistance)

    tl.to(".count", {
      x: -900,
      duration: 0.85,
      delay: 0.5,
      ease: "power4.inOut",
    });

    for (let i = 1; i <= 6; i++) {
      const xPosition = -900 + i * 180;
      tl.to(".count", {
        x: xPosition,
        duration: 0.85,
        ease: "power4.inOut",
        onStart: () => {
          gsap.to(".count-wrapper", {
            x: stepDistance * i,
            duration: 0.85,
            ease: "power4.inOut",
          });
        },
      });
    }

    gsap.set(".revealer svg", { scale: 0 });

    tl.to(".revealer svg", {
      scale: 45,
      duration: 1.2,
      ease: "power4.inOut",
      stagger: { each: 0.5, from: "start" },
      onComplete: () => {
        gsap.to(".loader", {
          opacity: 0,
          duration: .8,
          ease: "power4.inOut"
        }).then(() => {
          document.querySelector(".loader")?.remove();

        })
      },
    });
  }, []);
  return (
    <div className="loader z-[999999999]">
      <div className="count-wrapper">
        <div className="count">
          <div className="digit">
            <h1>9</h1>
          </div>
          <div className="digit">
            <h1>8</h1>
          </div>
          <div className="digit">
            <h1>7</h1>
          </div>
          <div className="digit">
            <h1>4</h1>
          </div>
          <div className="digit">
            <h1>2</h1>
          </div>
          <div className="digit">
            <h1>0</h1>
          </div>
        </div>
      </div>

      <div className="count-wrapper">
        <div className="count">
          <div className="digit">
            <h1>9</h1>
          </div>
          <div className="digit">
            <h1>5</h1>
          </div>
          <div className="digit">
            <h1>9</h1>
          </div>
          <div className="digit">
            <h1>7</h1>
          </div>
          <div className="digit">
            <h1>4</h1>
          </div>
          <div className="digit">
            <h1>0</h1>
          </div>
        </div>
      </div>

      <div className="revealer revealer-1">
        <svg
        scale={0}
          width="151"
          height="148"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M431.76 256c-69 42.24-137.27 126.89-175.76 224.78C217.51 382.89 149.25 298.24 80.24 256c69-42.24 137.27-126.89 175.76-224.78C294.49 129.11 362.75 213.76 431.76 256z"
          />
        </svg>
      </div>

      <div className="revealer revealer-2">
        <svg
                scale={0}

          width="151"
          height="148"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#CDFD50"
            d="M431.76 256c-69 42.24-137.27 126.89-175.76 224.78C217.51 382.89 149.25 298.24 80.24 256c69-42.24 137.27-126.89 175.76-224.78C294.49 129.11 362.75 213.76 431.76 256z"
          />
        </svg>
      </div>

      <div className="revealer revealer-3">
        <svg
          width="151"
          scale={0}

          height="148"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000"
            d="M431.76 256c-69 42.24-137.27 126.89-175.76 224.78C217.51 382.89 149.25 298.24 80.24 256c69-42.24 137.27-126.89 175.76-224.78C294.49 129.11 362.75 213.76 431.76 256z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
