import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { t } from "@/shared/lib/i18n";

import styles from "./CoursesSection.module.scss";

export function CoursesSection() {
  const courses = [
    {
      badge: t("courses.languages.badge"),
      title: t("courses.languages.title"),
      description: t("courses.languages.description"),
      image: "/images/course-languages.png",
      href: "#courses",
      themeClass: styles.blueTheme,
    },
    {
      badge: t("courses.digital.badge"),
      title: t("courses.digital.title"),
      description: t("courses.digital.description"),
      image: "/images/course-digital.png",
      href: "#courses",
      themeClass: styles.orangeTheme,
    },
    {
      badge: t("courses.general.badge"),
      title: t("courses.general.title"),
      description: t("courses.general.description"),
      image: "/images/course-general.png",
      href: "#courses",
      themeClass: styles.amberTheme,
    },
    {
      badge: t("courses.professions.badge"),
      title: t("courses.professions.title"),
      description: t("courses.professions.description"),
      image: "/images/course-professions.png",
      href: "#courses",
      themeClass: styles.blueTheme,
    },
  ];

  return (
    <section
      className={styles.section}
      id="courses"
      aria-label={t("courses.ariaSection")}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t("courses.title")}</h2>
          <p className={styles.subtitle}>{t("courses.subtitle")}</p>
        </div>

        <div className={styles.grid}>
          {courses.map((course, idx) => (
            <Link
              key={idx}
              href={course.href}
              className={`${styles.card} ${course.themeClass}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={274}
                  height={180}
                  className={styles.image}
                />
                <span className={styles.badge}>{course.badge}</span>
              </div>

              <div className={styles.body}>
                <div className={styles.info}>
                  <h3 className={styles.cardTitle}>{course.title}</h3>
                  <p className={styles.cardDesc}>{course.description}</p>
                </div>

                <div className={styles.footer}>
                  <span>{t("courses.action")}</span>
                  <ArrowRight size={16} className={styles.arrow} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
