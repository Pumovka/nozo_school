"use client";

import { useState } from "react";
import Link from "next/link";
import { LogIn, Menu, X } from "lucide-react";

import { navigation } from "@/shared/config/navigation";
import { t } from "@/shared/lib/i18n";
import { Logo } from "@/shared/ui/Logo";
import { LoginForm } from "@/features/auth/ui/LoginForm";
import authStyles from "@/features/auth/ui/AuthModal.module.scss";

import styles from "./Header.module.scss";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo className={styles.logoWrapper} />

        <nav
          className={styles.navigation}
          aria-label={t("header.ariaMainNavigation")}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.link} ${item.isActive ? styles.active : ""}`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.loginButton}
            onClick={() => setIsAuthOpen(true)}
            aria-label={t("header.login")}
          >
            <span>{t("header.login")}</span>
            <LogIn size={18} />
          </button>

          <button
            type="button"
            className={styles.burger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t("header.ariaNavMenu")}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          className={styles.mobileNav}
          aria-label={t("header.ariaMobileNavigation")}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`${styles.mobileLink} ${item.isActive ? styles.active : ""}`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      )}

      {isAuthOpen && (
        <div
          className={authStyles.overlay}
          onClick={() => setIsAuthOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={authStyles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={authStyles.close}
              onClick={() => setIsAuthOpen(false)}
              aria-label={t("header.ariaClose")}
            >
              ×
            </button>
            <h2 className={authStyles.title}>{t("auth.loginTitle")}</h2>
            <LoginForm />
          </div>
        </div>
      )}
    </header>
  );
}
