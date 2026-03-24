'use client'
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import Container from "../Layout/Contianer"
import { navItems } from "@/data/NavbarData"

export default function Navbar() {
  const [active, setActive] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollRef = useRef(0);

  // Lock page scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    let ticking = false;

    const controlNavbar = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY > scrollRef.current && currentScrollY > 50) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          
          setIsScrolled(currentScrollY > 20);
          scrollRef.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-[150%]"
        } ${isScrolled
          ? "bg-gradient-to-r from-[#05030f]/90 via-[#0b0718]/90 to-[#05030f]/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-6"
        }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4 gap-4">
          {/* Logo — always at the far left */}
          <Logo />

          {/* Desktop Nav — floated to the right */}
          <div className="hidden md:flex items-center gap-4">
            <DesktopNav active={active} setActive={setActive} />
          </div>

          {/* Mobile Hamburger */}
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
    <Link href="/" className="flex items-center flex-shrink-0">
      <div className="relative h-12 w-[150px] md:w-[160px] lg:w-[190px] xl:w-[220px] 2xl:w-[260px] 2xl:h-14">
        <Image
          src="/assets/images/logo/invest-first.png"
          alt="Invest First Logo"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </Link>
  )
}

/* ---------------- DESKTOP NAV ---------------- */

function DesktopNav({ active, setActive }) {
  return (
    <nav className="flex items-center gap-2 lg:gap-5 xl:gap-10 rounded-xl border border-[#0099CC] bg-white/5 px-3 lg:px-6 py-3 backdrop-blur-md">
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

  return (
    <div
      className="relative group"
      onMouseEnter={() => setActive(item.name)}
      onMouseLeave={() => setActive(null)}
    >
      <Link
        href={item.href}
        className={`flex items-center gap-0.5 text-xs lg:text-sm xl:text-base whitespace-nowrap transition py-2
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

function MobileMenu({ open, setOpen }) {
  return (
    <div
      className={`fixed inset-0 z-60 md:hidden transition-transform duration-300 flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'
        }`}
      style={{ background: '#060614', height: '100dvh' }}
    >
      {/* Top header — logo + X close button */}
      <div
        className="flex items-center justify-between px-6 py-5 border-b border-gray-800 shrink-0"
        style={{ background: '#060614' }}
      >
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
          <div className="relative h-10 w-[130px]">
            <Image
              src="/assets/images/logo/invest-first.png"
              alt="Invest First"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
        <button
          onClick={() => setOpen(false)}
          className="text-white hover:text-[#0099CC] transition-colors p-2 rounded-lg hover:bg-white/10"
          aria-label="Close menu"
        >
          <X size={26} />
        </button>
      </div>

      {/* Scrollable nav content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-6 space-y-2 pb-16">
          {navItems.map((item, idx) => (
            <MobileNavItem key={idx} item={item} setOpen={setOpen} />
          ))}
        </div>
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
