'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { navLinks } from '@/data/navigationData';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // ── Scroll direction detection ──────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const diff = currentScrollY - lastScrollY.current;

        if (currentScrollY < 60) {
          // Always show at very top of page
          setIsVisible(true);
        } else if (diff > 4) {
          // Scrolling down — hide
          setIsVisible(false);
          setActiveDropdown(null);
        } else if (diff < -4) {
          // Scrolling up — show
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name) => {
    if (window.innerWidth > 768) setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) setActiveDropdown(null);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleAccordion = (name) => {
    setExpandedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const DesktopDropdown = ({ items, level = 1 }) => (
    <div className={level === 1 ? styles.dropdown : styles.subDropdown}>
      <ul className={level === 1 ? styles.dropdownList : styles.subDropdownList} role="list">
        {items.map((item) => (
          <li key={item.name} className={styles.dropdownItem}>
            <a href={item.href} className={styles.dropdownLink}>
              {item.name}
              {item.children && <span className={styles.subChevron} />}
            </a>
            {item.children && <DesktopDropdown items={item.children} level={level + 1} />}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <nav
        id="global-navbar"
        className={styles.navbar}
        aria-label="Main navigation"
        style={{
          transform: isVisible
            ? 'translateX(-50%) translateY(0)'
            : 'translateX(-50%) translateY(calc(-100% - 40px))',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <a href="/" className={styles.logo} aria-label="InvestFirst home">
          <Image
            src="/images/logos/invest-first-logo.png"
            alt="InvestFirst Business Services"
            width={360}
            height={80}
            quality={100}
            priority
            className={styles.logoImage}
            style={{ width: 'auto', height: '40px' }}
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks} role="list">
          {navLinks.map((item) => (
            <li
              key={item.name}
              className={styles.navItem}
              onMouseEnter={() => item.children && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={item.href} className={styles.navLink}>
                {item.name}
                {item.children && (
                  <span
                    className={`${styles.chevron} ${activeDropdown === item.name ? styles.chevronActive : ''}`}
                    aria-hidden="true"
                  />
                )}
              </a>

              {item.children && (
                <div className={`${styles.dropdown} ${activeDropdown === item.name ? styles.dropdownActive : ''}`}>
                  <ul className={styles.dropdownList} role="list">
                    {item.children.map((subItem) => (
                      <li key={subItem.name} className={styles.dropdownItem}>
                        <a href={subItem.href} className={styles.dropdownLink}>
                          {subItem.name}
                          {subItem.children && <span className={styles.subChevron} />}
                        </a>
                        {subItem.children && <DesktopDropdown items={subItem.children} level={2} />}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <a href="/" className={styles.logo} onClick={() => setIsMenuOpen(false)} aria-label="InvestFirst home">
            <Image
              src="/images/logos/invest-first-logo.png"
              alt="InvestFirst Business Services"
              width={360}
              height={80}
              quality={100}
              priority
              className={styles.logoImage}
              style={{ width: 'auto', height: '32px' }}
            />
          </a>
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className={styles.closeIcon}></span>
          </button>
        </div>

        <div className={styles.mobileMenuContent}>
          <ul className={styles.mobileNavLinks} role="list">
            {navLinks.map((item) => (
              <li key={item.name} className={styles.mobileNavItem}>
                {item.children ? (
                  <div
                    className={`${styles.mobileLinkWrapper} ${expandedItems[item.name] ? styles.activeWrapper : ''}`}
                    onClick={(!item.href || item.href === '#') ? () => toggleAccordion(item.name) : undefined}
                  >
                    {item.href && item.href !== '#' ? (
                      <a href={item.href} className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                        {item.name}
                      </a>
                    ) : (
                      <span className={styles.mobileNavLink}>{item.name}</span>
                    )}
                    <button
                      type="button"
                      className={styles.mobileChevronBtn}
                      onClick={(item.href && item.href !== '#') ? () => toggleAccordion(item.name) : undefined}
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <span className={`${styles.mobileChevron} ${expandedItems[item.name] ? styles.mobileChevronActive : ''}`} />
                    </button>
                  </div>
                ) : (
                  <a href={item.href} className={styles.mobileLinkWrapper} onClick={() => setIsMenuOpen(false)}>
                    <span className={styles.mobileNavLink}>{item.name}</span>
                  </a>
                )}

                {item.children && (
                  <div className={`${styles.mobileAccordion} ${expandedItems[item.name] ? styles.mobileAccordionOpen : ''}`}>
                    <ul className={styles.mobileLevel2List}>
                      {item.children.map((subItem) => (
                        <li key={subItem.name} className={styles.mobileLevel2Item}>
                          {subItem.children ? (
                            <div
                              className={`${styles.mobileLevel2LinkWrapper} ${expandedItems[`${item.name}-${subItem.name}`] ? styles.activeWrapper : ''}`}
                              onClick={(!subItem.href || subItem.href === '#') ? () => toggleAccordion(`${item.name}-${subItem.name}`) : undefined}
                            >
                              {subItem.href && subItem.href !== '#' ? (
                                <a href={subItem.href} className={styles.mobileLevel2Link} onClick={() => setIsMenuOpen(false)}>
                                  {subItem.name}
                                </a>
                              ) : (
                                <span className={styles.mobileLevel2Link}>{subItem.name}</span>
                              )}
                              <button
                                type="button"
                                className={styles.mobileChevronBtn}
                                onClick={(subItem.href && subItem.href !== '#') ? () => toggleAccordion(`${item.name}-${subItem.name}`) : undefined}
                                aria-label={`Toggle ${subItem.name} submenu`}
                              >
                                <span className={`${styles.mobileChevronSmall} ${expandedItems[`${item.name}-${subItem.name}`] ? styles.mobileChevronActive : ''}`} />
                              </button>
                            </div>
                          ) : (
                            <a href={subItem.href} className={styles.mobileLevel2LinkWrapper} onClick={() => setIsMenuOpen(false)}>
                              <span className={styles.mobileLevel2Link}>{subItem.name}</span>
                            </a>
                          )}

                          {subItem.children && (
                            <div className={`${styles.mobileLevel3Accordion} ${expandedItems[`${item.name}-${subItem.name}`] ? styles.mobileLevel3AccordionOpen : ''}`}>
                              <ul className={styles.mobileLevel3List}>
                                {subItem.children.map((nested) => (
                                  <li key={nested.name} className={styles.mobileLevel3Item}>
                                    {nested.children ? (
                                      <div
                                        className={`${styles.mobileLevel3LinkWrapper} ${expandedItems[`${item.name}-${subItem.name}-${nested.name}`] ? styles.activeWrapper : ''}`}
                                        onClick={(!nested.href || nested.href === '#') ? () => toggleAccordion(`${item.name}-${subItem.name}-${nested.name}`) : undefined}
                                      >
                                        {nested.href && nested.href !== '#' ? (
                                          <a href={nested.href} className={styles.mobileLevel3Link} onClick={() => setIsMenuOpen(false)}>
                                            {nested.name}
                                          </a>
                                        ) : (
                                          <span className={styles.mobileLevel3Link}>{nested.name}</span>
                                        )}
                                        <button
                                          type="button"
                                          className={styles.mobileChevronBtn}
                                          onClick={(nested.href && nested.href !== '#') ? () => toggleAccordion(`${item.name}-${subItem.name}-${nested.name}`) : undefined}
                                          aria-label={`Toggle ${nested.name} submenu`}
                                        >
                                          <span className={`${styles.mobileChevronSmall} ${expandedItems[`${item.name}-${subItem.name}-${nested.name}`] ? styles.mobileChevronActive : ''}`} />
                                        </button>
                                      </div>
                                    ) : (
                                      <a href={nested.href} className={styles.mobileLevel3LinkWrapper} onClick={() => setIsMenuOpen(false)}>
                                        <span className={styles.mobileLevel3Link}>{nested.name}</span>
                                      </a>
                                    )}

                                    {nested.children && (
                                      <div className={`${styles.mobileLevel4Accordion} ${expandedItems[`${item.name}-${subItem.name}-${nested.name}`] ? styles.mobileLevel4AccordionOpen : ''}`}>
                                        <ul className={styles.mobileLevel4List}>
                                          {nested.children.map((deepItem) => (
                                            <li key={deepItem.name}>
                                              <a href={deepItem.href} className={styles.mobileLevel4Link} onClick={() => setIsMenuOpen(false)}>
                                                {deepItem.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}