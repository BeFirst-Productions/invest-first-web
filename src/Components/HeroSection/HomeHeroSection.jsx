"use client"
import FloatingLines from "../Animations/FloatingLines"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Container from "../Common/Layout/Contianer"
import Image from "next/image"
import Link from "next/link"

export default function HomeHeroSection() {
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const titles = [
      "Business Setup Services UAE | Invest First",
      "Invest first | Business Setup Consultant UAE"
    ]

    const descriptions = [
      "We are Providing Business setup services UAE with Invest First. Expert company formation, licensing, visas, and compliance services customized to your needs.",
      "We are best Business setup consultant UAE, offering expert guidance for company formation, licensing, compliance, and hassle-free business growth."
    ]

    let index = 0
    const getOffscreen = () => window.innerWidth * 1.2

    const tl = gsap.timeline({
      repeat: -1,
      paused: true // Start paused, let IntersectionObserver handle it
    })
    timelineRef.current = tl

    const updateContent = () => {
      index = (index + 1) % titles.length
      if (titleRef.current) titleRef.current.textContent = titles[index]
      if (descRef.current) descRef.current.textContent = descriptions[index]
    }

    // Animation Step 1: In
    tl.set([titleRef.current, descRef.current], { x: -2000 }) // Use a large fixed value for initial set to avoid calculating every time if possible, or use a responsive calc in the to()
    
    tl.to(titleRef.current, {
      x: 0,
      duration: 1,
      ease: "power4.out"
    })
    tl.to(descRef.current, {
      x: 0,
      duration: 1,
      ease: "power4.out"
    }, "-=0.5")

    tl.to({}, { duration: 2.2 }) // Pause while visible

    // Animation Step 2: Out
    tl.to(titleRef.current, {
      x: -2000,
      duration: 1,
      ease: "power4.in"
    })
    tl.to(descRef.current, {
      x: -2000,
      duration: 1,
      ease: "power4.in",
      onComplete: updateContent
    }, "-=0.6")

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        tl.resume()
      } else {
        tl.pause()
      }
    }, { threshold: 0.1 })

    const currentSection = titleRef.current?.closest('section')
    if (currentSection) observer.observe(currentSection)

    return () => {
      if (tl) tl.kill()
      if (observer) observer.disconnect()
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05030f]">

      <div className="absolute inset-0 z-10">
        <FloatingLines
          enabledWaves={['middle']}
          lineCount={[6, 6, 6]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 backdrop-blur-lg" />
        <div className="absolute top-0 right-0 w-1/2 h-full flex justify-between opacity-20">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-px h-full bg-white" />
          ))}
        </div>
      </div>

      <Container>
        <div className="relative z-20 min-h-screen   grid grid-cols-1 lg:grid-cols-2 ">

          {/* LEFT COLUMN */}
          <div className="flex items-center lg:items-end  pb-0 lg:pb-24 order-2 lg:order-1">
            <div className="relative w-[320px] rounded-[24px] bg-linear-to-b from-[#001b3f] to-[#000b1f] p-6 py-8 border-2 border-[#0099CC]">

              <h3 className="text-white text-xl md:text-2xl leading-snug font-semibold">
                Thinking of Starting a Company?
              </h3>

              <p className="text-gray-300 text-base font-medium mt-3 max-w-[200px]">
                Let Invest First take care of the legal work while you focus on growth.            </p>

              <Link href="/cost-calculator">
                <button className="mt-6 flex items-center gap-3  text-lg md:text-xl rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white font-medium shadow-lg">
                  Cost Calculator
                  <span className="text-lg md:text-xl">→</span>
                </button>
              </Link>

              {/* WhatsApp */}
              {/* WhatsApp */}
              <div className="absolute right-[-11px] top-[85px]">
                <div className="h-[68px] w-[68px] bg-[#1e0a22] rounded-full border-2 border-r-transparent border-[#0099CC] flex items-center justify-center">
                  <div className="h-[48px] w-[48px] rounded-full z-10 bg-[#25D366] flex items-center justify-center shadow-lg">
                    <Image
                      src="/assets/images/icons/whatsapp.png"
                      alt="WhatsApp"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>


              {/* Phone */}
              {/* Phone */}
              <div className="absolute right-[-11px] top-[165px]">
                <div className="h-[68px] w-[68px] bg-[#1e0a22] rounded-full border-2 border-r-transparent border-[#0099CC] flex items-center justify-center">
                  <div className="h-[48px] w-[48px] z-10 rounded-full bg-[#0099CC] flex items-center justify-center shadow-lg">
                    <Image
                      src="/assets/images/icons/call.png"
                      alt="Call"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-end lg:items-center order-1 lg:order-2 px-2 lg:px-4">
            <div className="relative text-left overflow-hidden">
              <h1 ref={titleRef} className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Business Setup Services UAE | Invest First
              </h1>

              <p ref={descRef} className="mt-6 text-lg md:text-xl   max-w-xl">
                We are Providing Business setup services UAE with Invest First. Expert company formation, licensing, visas, and compliance services customized to your needs.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
