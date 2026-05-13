'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { navLinks } from '@/data/navigationData';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

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

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Recursive Desktop Dropdown Component
  const DesktopDropdown = ({ items, level = 1 }) => {
    return (
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
  };

  return (
    <>
      <nav id="global-navbar" className={styles.navbar} aria-label="Main navigation">
        <a href="/" className={styles.logo} aria-label="InvestFirst home">
          <Image
            src="/images/logos/invest-first-logo.png"
            alt="InvestFirst Business Services"
            width={180}
            height={40}
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

              {/* Dropdown Menu */}
              {item.children && (
                <div
                  className={`${styles.dropdown} ${activeDropdown === item.name ? styles.dropdownActive : ''}`}
                >
                  <ul className={styles.dropdownList} role="list">
                    {item.children.map((subItem) => (
                      <li key={subItem.name} className={styles.dropdownItem}>
                        <a href={subItem.href} className={styles.dropdownLink}>
                          {subItem.name}
                          {subItem.children && <span className={styles.subChevron} />}
                        </a>

                        {/* Level 3 & Deep Dropdowns */}
                        {subItem.children && <DesktopDropdown items={subItem.children} level={2} />}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
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
        <div className={styles.mobileMenuContent}>
          <ul className={styles.mobileNavLinks} role="list">
            {navLinks.map((item) => (
              <li key={item.name} className={styles.mobileNavItem}>
                <div
                  className={`${styles.mobileLinkWrapper} ${expandedItems[item.name] ? styles.activeWrapper : ''}`}
                  onClick={() => item.children && toggleAccordion(item.name)}
                >
                  <span className={styles.mobileNavLink}>{item.name}</span>
                  {item.children && (
                    <span
                      className={`${styles.mobileChevron} ${expandedItems[item.name] ? styles.mobileChevronActive : ''}`}
                    />
                  )}
                </div>

                {/* Mobile Accordion Level 2 */}
                {item.children && (
                  <div
                    className={`${styles.mobileAccordion} ${expandedItems[item.name] ? styles.mobileAccordionOpen : ''}`}
                  >
                    <ul className={styles.mobileLevel2List}>
                      {item.children.map((subItem) => (
                        <li key={subItem.name} className={styles.mobileLevel2Item}>
                          <div
                            className={`${styles.mobileLevel2LinkWrapper} ${expandedItems[`${item.name}-${subItem.name}`] ? styles.activeWrapper : ''}`}
                            onClick={() => subItem.children && toggleAccordion(`${item.name}-${subItem.name}`)}
                          >
                            <span className={styles.mobileLevel2Link}>{subItem.name}</span>
                            {subItem.children && (
                              <span
                                className={`${styles.mobileChevronSmall} ${expandedItems[`${item.name}-${subItem.name}`] ? styles.mobileChevronActive : ''}`}
                              />
                            )}
                          </div>

                          {/* Mobile Accordion Level 3 */}
                          {subItem.children && (
                            <div
                              className={`${styles.mobileLevel3Accordion} ${expandedItems[`${item.name}-${subItem.name}`] ? styles.mobileLevel3AccordionOpen : ''}`}
                            >
                              <ul className={styles.mobileLevel3List}>
                                {subItem.children.map((nested) => (
                                  <li key={nested.name} className={styles.mobileLevel3Item}>
                                    <div
                                      className={`${styles.mobileLevel3LinkWrapper} ${expandedItems[`${item.name}-${subItem.name}-${nested.name}`] ? styles.activeWrapper : ''}`}
                                      onClick={() => nested.children && toggleAccordion(`${item.name}-${subItem.name}-${nested.name}`)}
                                    >
                                      <span className={styles.mobileLevel3Link}>{nested.name}</span>
                                      {nested.children && (
                                        <span
                                          className={`${styles.mobileChevronSmall} ${expandedItems[`${item.name}-${subItem.name}-${nested.name}`] ? styles.mobileChevronActive : ''}`}
                                        />
                                      )}
                                    </div>

                                    {/* Mobile Accordion Level 4 */}
                                    {nested.children && (
                                      <div
                                        className={`${styles.mobileLevel4Accordion} ${expandedItems[`${item.name}-${subItem.name}-${nested.name}`] ? styles.mobileLevel4AccordionOpen : ''}`}
                                      >
                                        <ul className={styles.mobileLevel4List}>
                                          {nested.children.map((deepItem) => (
                                            <li key={deepItem.name}>
                                              <a
                                                href={deepItem.href}
                                                className={styles.mobileLevel4Link}
                                                onClick={() => setIsMenuOpen(false)}
                                              >
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
