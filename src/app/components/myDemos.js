"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function MyDemos() {
  return (
    <section className="third w-full h-full fixed visible" id="myDemos">
      <div className="outer w-full h-full overflow-y-hidden">
        <div className="inner w-full h-full overflow-y-hidden">
          <div className="bg three w-full h-full absolute top-0 bg-cover bg-no-repeat  bg-[url('/assets/images/demos.png')]">
            <div className="w-full absolute z-20 h-full bg-[rgba(0,0,0,0.2)]"></div>
            <div className="relative w-11/12 mx-auto z-40 pt-28 text-center uppercase font-chakra-petch font-medium
              md:flex md:flex-col md:gap-10
              ">
              {/* //left side */}
              <div className="bg-[rgba(0,0,0,0.5)] p-4 w-full mx-auto" id="mySkill">
                <h2 className="text-4xl text-white">MY SKILL</h2>
                <div>
                  <div className="flex items-end justify-center gap-5 pt-10">
                    <h2 className="text-xl text-white">Skill:</h2>
                    <div className="flex gap-5">
                      <img
                        src="/assets/images/html-logo.png"
                        className="max-w-12"
                      />
                      <img
                        src="/assets/images/css3-logo.png"
                        className="max-w-12"
                      />
                      <img
                        src="/assets/images/javascript-logo.png"
                        className="max-w-12"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-5 pt-10">
                    <h2 className="text-xl text-white">Framework & Library:</h2>
                    <div className="flex">
                      <img
                        src="/assets/images/next-js.png"
                        className="max-w-24 bg-white"
                      />
                      <img
                        src="/assets/images/react.png"
                        className="max-w-16"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-5 pt-10">
                    <h2 className="text-xl text-white">CSS Framework:</h2>
                    <div className="flex gap-5">
                      <img
                        src="/assets/images/tailwind.png"
                        className="max-w-24"
                      />
                      <img
                        src="/assets/images/bootstrap.png"
                        className="max-w-16"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* right-side */}
              <div className=" text-center uppercase font-chakra-petch font-medium mt-8 p-5 bg-[rgba(0,0,0,0.5)]
              w-full mx-auto md:6/12 md:h-full" id="demos">
                <h2 className="text-3xl text-white">MY DEMOS</h2>
                <div className="grid grid-cols-2 items-center gap-4 pt-2 md:grid-cols-3">
                  <a href="https://bakery-ruddy.vercel.app/" target="_blank"><img src="/assets/images/bakery-logo.png" className="md:w-56 mx-auto"/></a>
                  <a href="https://project-travel-five.vercel.app/" target="_blank"><img src="/assets/images/travel-logo.png" className="md:w-56 mx-auto"/></a>
                  <a href="https://next-demo-2-six.vercel.app/" target="_blank"><img src="/assets/images/mntn.svg" className="md:w-56 mx-auto"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
