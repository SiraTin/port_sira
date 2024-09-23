"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {

  return (
    <section className="first w-full h-full fixed  visible" id="contact">
      <div className="outer w-full h-full overflow-y-hidden">
        <div className="inner w-full h-full overflow-y-hidden">
          <div className="bg one w-full h-full absolute top-0 bg-cover bg-no-repeat  bg-[url('/assets/images/bg-contact.png')]">
          <div className="w-full absolute z-20 h-full bg-[rgba(0,0,0,0.3)]"></div>
            <div className="relative z-40 font-chakra-petch font-medium pt-32 text-center " id="contactUS">
                <h2 className="uppercase text-white text-4xl ">Contact Me</h2>
                <div className="text-xl md:text-3xl flex flex-col gap-10 pt-16 ">
                    <h2 className="email text-white">Email: Siraphoptinthuwanon@gmail.com</h2>
                    <h2 className="email text-white">Tel: 095-8107757</h2>
                    <h2 className="text-white">Facebook: Siraphop Thintuwanon</h2>
                </div>
                <h2 className="text-xl pt-10 text-white md:text-5xl">Thank You!!</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
