import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

import { t } from "@/shared/lib/i18n";

import styles from "./CtaSection.module.scss";

export function CtaSection() {
  return (
    <section className={styles.section} aria-label={t("cta.ariaSection")}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.iconCircle}>
            <Compass size={26} />
          </div>

          <h2 className={styles.title}>{t("cta.title")}</h2>
          <p className={styles.subtitle}>{t("cta.subtitle")}</p>

          <Link href="#courses" className={styles.button}>
            <span>{t("cta.action")}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
