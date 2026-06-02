"use client";

import React, { useEffect, useRef } from "react";

import { Target, Shield, Award, Lightbulb, Eye, Handshake } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionTag from "@/components/Common/SectionTag";

const CoreValues = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsWrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const wrapper = cardsWrapperRef.current;
        const container = cardsContainerRef.current;

        if (wrapper && container) {
          const cards = wrapper.children;
          if (cards.length > 3) {
            const card1Height = cards[0].offsetHeight;
            const card2Height = cards[1].offsetHeight;
            const card3Height = cards[2].offsetHeight;
            const totalVisibleHeight =
              card1Height + card2Height + card3Height + 24 * 2;

            gsap.set(container, {
              height: totalVisibleHeight,
              overflow: "hidden",
            });

            const scrollAmount = wrapper.scrollHeight - totalVisibleHeight;

            ScrollTrigger.create({
              trigger: sectionRef.current,
              start: "center center",
              end: `+=${scrollAmount * 2}`,
              pin: true,
              scrub: 1,
              animation: gsap.to(wrapper, {
                y: -scrollAmount,
                ease: "none",
              }),
              invalidateOnRefresh: true,
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 md:py-20 max-w-[1980px] mx-auto  overflow-hidden"
    >
      {/* Background Wave Pattern (Placeholder - can be replaced with an image) */}
      <div className="mx-4 md:mx-6 lg:mx-12  bg-linear-to-b from-[#14293A] to-[#0B223E] rounded-[40px] overflow-hidden relative">
        {/* <Container> */}
        <div className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 xl:px-[140px] 2xl:px-[200px] w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* LEFT COLUMN: Sticky Header & Description */}
            <div className="flex flex-col items-start justify-center lg:sticky lg:top-32 self-start">
              <SectionTag text="Our Core Values" className="mb-4 uppercase" />

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
                We are a <span className="text-[#0099CC]">values-driven</span>
                <br />
                organization committed
                <br />
                to excellence.
              </h2>

              {/* <PrimaryButton title="Button" /> */}
            </div>

            {/* RIGHT COLUMN: Value Cards Stack */}
            <div ref={cardsContainerRef} className="w-full relative">
              <div ref={cardsWrapperRef} className="flex flex-col gap-6">
                {/* Card 2: Integrity */}
                <ValueCard
                  icon={<Shield className="w-8 h-8 text-white" />}
                  title="Integrity"
                  description="We are committed to honesty, transparency and establishment of long-term professionalism and client relationship."
                />

                {/* Card 3: Excellence */}
                <ValueCard
                  icon={<Award className="w-8 h-8 text-white" />}
                  title="Excellence"
                  description="We are related to a dedicated team that ensures timely and accurate services to the clients, concerned about providing quality business formation in Dubai."
                />

                {/* Card 4: Innovation */}
                <ValueCard
                  icon={<Lightbulb className="w-8 h-8 text-white" />}
                  title="Innovation"
                  description="We embrace innovation by delivering smart, modern, and efficient business setup solutions in Dubai, helping entrepreneurs simplify processes, improve growth, and achieve long-term success in the UAE."
                />

                {/* Card 5: Transparency */}
                <ValueCard
                  icon={<Eye className="w-8 h-8 text-white" />}
                  title="Transparency"
                  description="We believe in complete transparency with our clients, providing clear insights, honest feedback, and straightforward communication to build lasting relationships based on mutual respect and clarity."
                />

                {/* Card 6: Reliability */}
                <ValueCard
                  icon={<Handshake className="w-8 h-8 text-white" />}
                  title="Reliability"
                  description="Our commitment to reliability ensures that we are always there when you need us, delivering consistent results and dependable service that you can count on for your business growth."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 pointer-events-none ">
          <img
            src="/images/shapes/left-lines.png"
            alt=""
            className="w-auto h-auto max-w-full"
          />
        </div>
        <div className="absolute right-0 bottom-0 pointer-events-none ">
          <img
            src="/images/shapes/right-lines.png"
            alt=""
            className="w-auto h-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="relative p-[3px] rounded-2xl bg-linear-to-r from-[#780343] to-[#00335A] group transition-all duration-300">
      <div className="relative h-full w-full rounded-[14px] bg-[#00335A] overflow-hidden">
        <div className="flex flex-col md:flex-row p-6 md:p-8 gap-6 md:gap-8 items-start">
          {/* Icon & Title Column */}
          <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-4 flex-shrink-0 md:w-1/4">
            <div className="w-14 h-14 rounded-full bg-[#1e293b] flex items-center justify-center border border-gray-700 shadow-inner">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>

          {/* Description Column */}
          <div className="flex-grow">
            <p className=" text-sm leading-relaxed text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
