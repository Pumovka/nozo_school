import Link from "next/link";
import { ArrowRight, Laptop, Smile, UploadCloud } from "lucide-react";

import { t } from "@/shared/lib/i18n";

import styles from "./CollaborationSection.module.scss";

export function CollaborationSection() {
  const cards = [
    {
      icon: UploadCloud,
      badge: t("collaboration.card1.badge"),
      title: t("collaboration.card1.title"),
      tag: t("collaboration.card1.tag"),
      variantClass: styles.blueCard,
    },
    {
      icon: Smile,
      badge: t("collaboration.card2.badge"),
      title: t("collaboration.card2.title"),
      tag: t("collaboration.card2.tag"),
      variantClass: styles.orangeCard,
    },
    {
      icon: Laptop,
      badge: t("collaboration.card3.badge"),
      title: t("collaboration.card3.title"),
      tag: t("collaboration.card3.tag"),
      variantClass: styles.amberCard,
    },
  ];

  return (
    <section
      className={styles.section}
      id="collaboration"
      aria-label={t("collaboration.ariaSection")}
    >
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{t("collaboration.title")}</h2>
            <p className={styles.subtitle}>{t("collaboration.subtitle")}</p>
          </div>

          <Link href="#partnership" className={styles.actionButton}>
            <span>{t("collaboration.action")}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.cardsStack}>
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className={`${styles.card} ${card.variantClass}`}>
                <div className={styles.cardLeft}>
                  <div className={styles.iconWrapper}>
                    <Icon size={24} />
                  </div>
                  <div className={styles.cardInfo}>
                    <span className={styles.badge}>{card.badge}</span>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  </div>
                </div>

                <div className={styles.pill}>{card.tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
