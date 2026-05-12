'use client';

import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav id="global-navbar" className={styles.navbar} aria-label="Main navigation">
      {/* Logo */}
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

      {/* Nav Links */}
      <ul className={styles.navLinks} role="list">
        {['About Us', 'Company Formation', 'Services', 'Resources'].map((item) => (
          <li key={item}>
            <a href="#" className={styles.navLink}>
              {item}
              <span className={styles.chevron} aria-hidden="true" />
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className={styles.navLink}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
