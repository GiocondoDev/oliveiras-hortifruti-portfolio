"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./site-header.module.css";

const navigationItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Como Trabalhamos", href: "#como-trabalhamos" },
  { label: "Contato", href: "#contato" },
] as const;

export function SiteHeader({ homePage = true }: { homePage?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header
      className={styles.header}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href={`${homePage ? "" : "/"}#inicio`} aria-label="Oliveiras Hortifruti — início">
          <Image
            src="/oliveiras-logo-forest.webp"
            alt=""
            aria-hidden="true"
            width={499}
            height={510}
            sizes="(min-width: 1120px) 52px, 36px"
            loading="eager"
            className={styles.logo}
          />
          <span className={styles.brandName}>Oliveiras<span>Hortifruti</span></span>
        </a>

        <button
          ref={menuButtonRef}
          className={styles.menuToggle}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? "Fechar menu" : "Menu"}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M3 6h14M3 14h14" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>

        <nav
          id="site-navigation"
          className={`${styles.navigation} ${menuOpen ? styles.open : ""}`}
          aria-label="Navegação principal"
        >
          <ul className={styles.links}>
            {navigationItems.map((item) => (
              <li key={item.href}>
                  <a
                    href={`${homePage ? "" : "/"}${item.href}`}
                    className={styles.navButton}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
              </li>
            ))}
          </ul>
          <a href={`${homePage ? "" : "/"}#contato`} className={`button button-primary ${styles.quote}`} onClick={() => setMenuOpen(false)}>
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
