import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { t } from "@/shared/lib/i18n";

import styles from "./BenefitsSection.module.scss";

export function BenefitsSection() {
  const items = [
    {
      step: t("benefits.item1.step"),
      title: t("benefits.item1.title"),
      description: t("benefits.item1.description"),
      badgeClass: styles.blueBadge,
    },
    {
      step: t("benefits.item2.step"),
      title: t("benefits.item2.title"),
      description: t("benefits.item2.description"),
      badgeClass: styles.orangeBadge,
    },
    {
      step: t("benefits.item3.step"),
      title: t("benefits.item3.title"),
      description: t("benefits.item3.description"),
      badgeClass: styles.amberBadge,
    },
  ];

  return (
    <section
      className={styles.section}
      id="benefits"
      aria-label={t("benefits.ariaSection")}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.leftCol}>
            <h2 className={styles.title}>{t("benefits.title")}</h2>
            <p className={styles.description}>{t("benefits.description")}</p>
            <Link href="#courses" className={styles.actionButton}>
              <span>{t("benefits.action")}</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className={styles.rightCol}>
            {items.map((item, idx) => (
              <div key={idx} className={styles.item}>
                <div className={`${styles.stepBadge} ${item.badgeClass}`}>
                  {item.step}
                </div>
                <div className={styles.itemContent}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
