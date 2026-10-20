import Image from "next/image";
import Link from "next/link";

import { t } from "@/shared/lib/i18n";

import styles from "./Logo.module.scss";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={`${styles.logoContainer} ${className || ""}`}
      aria-label={t("header.ariaLogo")}
    >
      <div className={styles.owlWrapper}>
        <Image
          src="/logo_owl.png"
          alt={t("header.ariaLogo")}
          width={48}
          height={44}
          className={styles.owlImage}
          priority
        />
      </div>

      <div className={styles.textGroup}>
        <div className={styles.mainTitle}>
          <span className={styles.titleDark}>{t("header.logoTitle1")}</span>
          <span className={styles.titleBlue}>{t("header.logoTitle2")}</span>
        </div>
        <span className={styles.subtitle}>{t("header.logoSubtitle")}</span>
      </div>
    </Link>
  );
}
