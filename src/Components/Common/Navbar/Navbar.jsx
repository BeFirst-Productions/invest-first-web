'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import Container from "../Layout/Contianer"

const companyFormationItems = [
  {
    name: "Mainland",
    href: "#",
    children: [
      { name: "Dubai", href: "#" },
      { name: "Abu Dhabi", href: "#" },
    ]
  },
  {
    name: "Free Zones",
    href: "#",
    children: [
      {
        name: "Dubai",
        href: "#",
        children: [
          { name: "Meydan Free Zone", href: "#" },
          { name: "IFZA Free Zone", href: "#" },
          { name: "DMCC Free Zone", href: "#" },
          { name: "Jebel Ali (JAFZA)", href: "#" },
          { name: "DDA Free Zones", href: "#" },
          { name: "Dubai Airport (DAFZA)", href: "#" },
          { name: "DIFC", href: "#" },
          { name: "Dubai South", href: "#" },
          { name: "Dubai Healthcare City", href: "#" },
        ]
      },
      {
        name: "Abu Dhabi",
        href: "#",
        children: [
          { name: "Masdar City", href: "#" },
          { name: "Abu Dhabi Airport Free Zone", href: "#" },
        ]
      },
      {
        name: "Sharjah",
        href: "#",
        children: [
          { name: "Sharjah Media City (SHAMS)", href: "#" },
          { name: "Sharjah Publishing City (SPCFZ)", href: "#" },
          { name: "SRTIP Free Zone", href: "#" },
          { name: "Hamriyah Free Zone", href: "#" },
        ]
      },
      { name: "Ajman", href: "#" },
      { name: "Umm Al Quwain", href: "#" },
      { name: "Ras Al Khaimah", href: "#" },
    ]
  },
  {
    name: "Offshore",
    href: "#"
  }
]

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about-us",
    children: [
      { name: "About the Company", href: "/about-us" },
      { name: "The Founders", href: "#" },
      { name: "Why UAE?", href: "/why-uae" }
    ]
  },
  { name: "Company Formation", href: "#", children: companyFormationItems },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "PRO Services",
        href: "#",
        children: [
          { name: "Virtual PRO", href: "#" },
          { name: "Local Sponsorships", href: "#" },
          { name: "License Renewals", href: "#" },
          { name: "Visa Renewals", href: "#" },
          { name: "Banking Assistance", href: "#" },
          { name: "Office Solutions", href: "#" },
        ]
      },
      {
        name: "Visa Services",
        href: "#",
        children: [
          { name: "Investor Visa", href: "#" },
          { name: "Employment Visa", href: "#" },
          { name: "Dependent Visa", href: "#" },
          { name: "Golden Visa", href: "#" },
          { name: "Green Visa", href: "#" },
          { name: "Blue Visa", href: "#" },
          { name: "Remote Work Visa", href: "#" },
          { name: "Tourist/Visit Visa", href: "#" },
        ]
      },
      { name: "Government Approvals", href: "#" },
      {
        name: "Document Services",
        href: "#",
        children: [
          { name: "Attestation Services", href: "#" },
          { name: "Legal Translation", href: "#" },
          { name: "Typing Services", href: "#" },
        ]
      },
      {
        name: "Value-Added Services",
        href: "#",
        children: [
          { name: "VAT & Corporate Tax Assistance", href: "#" },
          { name: "Medical Insurance Assistance", href: "#" },
          { name: "Trademark Registration", href: "#" },
          { name: "Branding and Design Services", href: "#" },
          { name: "Digital Marketing Services", href: "#" },
          { name: "Web Design & Development", href: "#" },
        ]
      },
    ]
  },
  {
    name: "Resources",
    href: "#",
    children: [
      { name: "News & Updates", href: "#" },
      { name: "Blogs & Articles", href: "/blog" },
      { name: "Downloads", href: "#" }
    ]
  },
  { name: "Contact Us", href: "/contact-us" },
]

export default function Navbar() {
  const [active, setActive] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          // if scroll down and not at top, hide
          setIsVisible(false)
        } else {
          // if scroll up or at top, show
          setIsVisible(true)
        }

        // Add background if scrolled more than 20px
        setIsScrolled(window.scrollY > 20)

        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-[150%]"
        } ${isScrolled
          ? "bg-gradient-to-r from-[#05030f]/90 via-[#0b0718]/90 to-[#05030f]/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-6"
        }`}
    >
      <Container>
        <div className="flex items-center justify-between  py-4 gap-4">
          <Logo />
          <DesktopNav active={active} setActive={setActive} />
          <MobileToggle open={mobileOpen} setOpen={setMobileOpen} />
        </div>
      </Container>

      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} />
    </div>
  )
}

/* ---------------- LOGO ---------------- */

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-15 w-[160px]  lg:w-[220px] flex-shrink-0">
        <Image
          src="/assets/images/logo/invest-first.png"
          alt="Invest First Logo"
          fill
          className=" object-contain md:object-cover"
          priority
        />
      </div>
    </Link>
  )
}

/* ---------------- DESKTOP NAV ---------------- */

function DesktopNav({ active, setActive }) {
  return (
    <nav className="hidden md:flex max-w-full items-center gap-4 lg:gap-8 xl:gap-12 rounded-xl border border-[#0099CC] bg-white/5 px-4 lg:px-6 py-3 backdrop-blur-md">

      {navItems.map((item) => (
        <NavItem
          key={item.name}
          item={item}
          active={active}
          setActive={setActive}
        />
      ))}
    </nav>
  )
}

/* ---------------- NAV ITEM ---------------- */

function NavItem({ item, active, setActive }) {
  const hasDropdown = item.children && item.children.length > 0
  const isCompanyFormation = item.name === "Company Formation"

  return (
    <div
      className="relative group"
      onMouseEnter={() => setActive(item.name)}
      onMouseLeave={() => setActive(null)}
    >
      <Link
        href={item.href}
        className={`flex items-center gap-1 text-sm lg:text-base transition py-2
          ${active === item.name ? "text-[#0099CC]" : "text-white hover:text-[#0099CC]"}`}
      >
        {item.name}
        {hasDropdown && (
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${active === item.name ? "rotate-180 text-[#0099CC]" : ""}`}
            strokeWidth={3}
          />
        )}
      </Link>

      {/* Top Level Dropdown */}
      {hasDropdown && (
        <div
          className={`absolute left-0 pt-4 w-60
            transition-all duration-300 transform origin-top
            ${active === item.name ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
          `}
        >
          <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-100">
            {item.children.map((child, idx) => (
              <DropdownItem key={idx} item={child} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function DropdownItem({ item }) {
  const hasSubmenu = item.children && item.children.length > 0;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.href}
        className={`flex items-center justify-between px-5 py-3.5 text-base transition-colors
            ${isOpen ? "text-[#841257]" : "text-gray-700 hover:text-[#841257]"}
        `}
      >
        <span>{item.name}</span>
        {hasSubmenu && <ChevronRight size={16} />}
      </Link>

      {/* Nested Submenu */}
      {hasSubmenu && (
        <div
          className={`absolute left-full top-0 pl-2 w-64 transition-all duration-200
                ${isOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}
            `}
        >
          <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-100">
            {item.children.map((subChild, subIdx) => (
              <DropdownItem key={subIdx} item={subChild} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- MOBILE TOGGLE ---------------- */

function MobileToggle({ open, setOpen }) {
  return (
    <button
      className="md:hidden text-white"
      onClick={() => setOpen(!open)}
    >
      {open ? <X size={28} /> : <Menu size={28} />}
    </button>
  )
}

/* ---------------- MOBILE MENU ---------------- */

/* ---------------- MOBILE MENU ---------------- */

function MobileMenu({ open, setOpen }) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black transition-transform duration-300 md:hidden overflow-y-auto h-screen ${open ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="p-8 pb-24 space-y-4">
        <div className="flex justify-end mb-6">
          {/* Close button is handled by MobileToggle but we can add another one or just rely on the fixed header toggle */}
        </div>

        {navItems.map((item, idx) => (
          <MobileNavItem key={idx} item={item} setOpen={setOpen} />
        ))}
      </div>
    </div>
  )
}

function MobileNavItem({ item, setOpen }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div className="border-b border-gray-800 pb-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center justify-between w-full text-lg font-medium py-2 px-2 rounded-lg transition-colors
            ${isExpanded ? "bg-white/10 text-[#841257]" : "text-gray-200 hover:bg-white/10"}
          `}
        >
          <span>{item.name}</span>
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            strokeWidth={3}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
        >
          <div className="pl-4 space-y-2 border-l border-[#841257]/30 ml-2">
            {item.children.map((child, idx) => (
              <MobileNavItem key={idx} item={child} setOpen={setOpen} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-gray-800 pb-2">
      <Link
        href={item.href}
        onClick={() => setOpen(false)}
        className="block text-lg font-medium text-gray-200 hover:text-[#841257] hover:bg-white/10 py-2 px-2 rounded-lg transition-colors"
      >
        {item.name}
      </Link>
    </div>
  );
}
