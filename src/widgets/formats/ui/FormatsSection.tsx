import Link from "next/link";
import { ArrowRight, Eye, MessageSquare, SunMedium } from "lucide-react";

import { t } from "@/shared/lib/i18n";

import styles from "./FormatsSection.module.scss";

export function FormatsSection() {
  const formatCards = [
    {
      icon: MessageSquare,
      title: t("formats.hearing.title"),
      description: t("formats.hearing.description"),
      variantClass: styles.blueCard,
    },
    {
      icon: Eye,
      title: t("formats.vision.title"),
      description: t("formats.vision.description"),
      variantClass: styles.orangeCard,
    },
    {
      icon: SunMedium,
      title: t("formats.comfort.title"),
      description: t("formats.comfort.description"),
      variantClass: styles.amberCard,
    },
  ];

  return (
    <section
      className={styles.section}
      id="formats"
      aria-label={t("formats.ariaSection")}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.headerRow}>
            <div className={styles.textContent}>
              <h2 className={styles.title}>{t("formats.title")}</h2>
              <p className={styles.subtitle}>{t("formats.subtitle")}</p>
            </div>

            <Link href="#accessibility" className={styles.actionButton}>
              <span>{t("formats.standardsButton")}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.cardsRow}>
            {formatCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className={`${styles.card} ${card.variantClass}`}
                >
                  <div className={styles.iconWrapper}>
                    <Icon size={24} />
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
