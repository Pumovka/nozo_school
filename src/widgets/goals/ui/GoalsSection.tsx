import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Layers,
  Palette,
  RefreshCw,
} from "lucide-react";

import { t } from "@/shared/lib/i18n";

import styles from "./GoalsSection.module.scss";

export function GoalsSection() {
  const cards = [
    {
      icon: Briefcase,
      title: t("goals.career.title"),
      description: t("goals.career.description"),
      action: t("goals.career.action"),
      href: "#courses",
      variantClass: styles.blueCard,
    },
    {
      icon: RefreshCw,
      title: t("goals.professionChange.title"),
      description: t("goals.professionChange.description"),
      action: t("goals.professionChange.action"),
      href: "#courses",
      variantClass: styles.orangeCard,
    },
    {
      icon: Layers,
      title: t("goals.practice.title"),
      description: t("goals.practice.description"),
      action: t("goals.practice.action"),
      href: "#courses",
      variantClass: styles.amberCard,
    },
    {
      icon: Palette,
      title: t("goals.creativity.title"),
      description: t("goals.creativity.description"),
      action: t("goals.creativity.action"),
      href: "#courses",
      variantClass: styles.purpleCard,
    },
  ];

  return (
    <section
      className={styles.section}
      id="goals"
      aria-label={t("goals.ariaSection")}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t("goals.title")}</h2>
          <p className={styles.subtitle}>{t("goals.subtitle")}</p>
        </div>

        <div className={styles.grid}>
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className={`${styles.card} ${card.variantClass}`}
              >
                <div className={styles.cardContent}>
                  <div className={styles.iconWrapper}>
                    <Icon size={24} />
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  <span>{card.action}</span>
                  <ArrowRight size={16} className={styles.arrow} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
