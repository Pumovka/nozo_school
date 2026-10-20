import Link from "next/link";

import { t } from "@/shared/lib/i18n";
import { Logo } from "@/shared/ui/Logo";

import styles from "./Footer.module.scss";

export function Footer() {
  const footerLinks = [
    { label: t("header.nav.about"), href: "#about" },
    { label: t("header.nav.courses"), href: "#courses" },
    { label: t("header.nav.partnership"), href: "#collaboration" },
    { label: t("header.nav.accessibility"), href: "#formats" },
    { label: t("header.nav.contacts"), href: "#contacts" },
  ];

  return (
    <footer
      className={styles.footer}
      id="contacts"
      aria-label={t("footer.ariaFooter")}
    >
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <Logo />
            <span className={styles.divider} aria-hidden="true" />
            <span className={styles.tagline}>{t("footer.tagline")}</span>
          </div>

          <nav className={styles.nav} aria-label={t("footer.ariaFooterLinks")}>
            {footerLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.separatorLine} aria-hidden="true" />

        <div className={styles.bottomRow}>
          <span className={styles.copyright}>{t("footer.copyright")}</span>

          <div className={styles.wcagBadge}>
            <span className={styles.greenDot} aria-hidden="true" />
            <span>{t("footer.wcagCompliant")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
