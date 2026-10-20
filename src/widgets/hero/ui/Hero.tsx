"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sliders, Users } from "lucide-react";

import { t, tArray } from "@/shared/lib/i18n";

import styles from "./Hero.module.scss";

export function Hero() {
  const fontSizes = tArray("hero.fontSizeOptions");
  const speedOptions = tArray("hero.speedOptions");

  const [fontSize, setFontSize] = useState(fontSizes[0] || "100%");
  const [colorScheme, setColorScheme] = useState(t("hero.schemeLight"));
  const [screenReaderOn, setScreenReaderOn] = useState(true);
  const [speed, setSpeed] = useState(speedOptions[1] || "1.0x");
  const [noAnimationOn, setNoAnimationOn] = useState(false);

  // Lesson preview card states
  const [subtitlesOn, setSubtitlesOn] = useState(true);
  const [transcriptOn, setTranscriptOn] = useState(true);

  const schemeOptions = [
    { key: t("hero.schemeLight"), label: t("hero.schemeLight") },
    { key: t("hero.schemeContrast"), label: t("hero.schemeContrast") },
    { key: t("hero.schemeDark"), label: t("hero.schemeDark") },
    { key: t("hero.schemeSepia"), label: t("hero.schemeSepia") },
  ];

  return (
    <section className={styles.hero} aria-label={t("hero.ariaMainBanner")}>
      <div className={styles.container}>
        {/* Left column */}
        <div className={styles.leftCol}>
          <h1 className={styles.title}>
            {t("hero.titleLine1")}
            <br />
            <span className={styles.highlightBlue}>
              {t("hero.titleHighlight1")}
            </span>{" "}
            <span className={styles.highlightOrange}>
              {t("hero.titleHighlight2")}
            </span>
          </h1>

          <p className={styles.description}>{t("hero.description")}</p>

          <div className={styles.buttonGroup}>
            <Link href="#courses" className={styles.primaryButton}>
              <span>{t("hero.findCourse")}</span>
              <ArrowRight size={18} />
            </Link>

            <Link href="#collaboration" className={styles.secondaryButton}>
              <Users size={18} />
              <span>{t("hero.partnership")}</span>
            </Link>
          </div>

          {/* Interactive Accessibility settings panel */}
          <div
            className={styles.accessPanel}
            role="region"
            aria-label={t("hero.ariaAccessPanel")}
          >
            <div className={styles.panelHeader}>
              <div className={styles.panelTitle}>
                <Sliders size={18} className={styles.panelIcon} />
                <span>{t("hero.accessibilityTitle")}</span>
              </div>
              <span className={styles.wcagBadge}>{t("hero.wcagBadge")}</span>
            </div>

            <div className={styles.controlsGrid}>
              <div className={styles.controlRow}>
                {/* Font size */}
                <div className={styles.controlItem}>
                  <div className={styles.controlLabel}>
                    <span>{t("hero.fontSizeLabel")}</span>
                  </div>
                  <div className={styles.toggleButtonGroup}>
                    {fontSizes.map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setFontSize(val)}
                        className={`${styles.toggleBtn} ${fontSize === val ? styles.active : ""}`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color scheme */}
                <div className={styles.controlItem}>
                  <div className={styles.controlLabel}>
                    <span>{t("hero.colorSchemeLabel")}</span>
                  </div>
                  <div className={styles.toggleButtonGroup}>
                    {schemeOptions.map(({ key, label }) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setColorScheme(key)}
                        className={`${styles.toggleBtn} ${colorScheme === key ? styles.active : ""}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.controlRow}>
                {/* Screen reader + speed */}
                <div className={styles.controlItem}>
                  <div className={styles.switchRow}>
                    <div className={styles.switchInfo}>
                      <span className={styles.switchTitle}>
                        {t("hero.screenReaderLabel")}
                      </span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={screenReaderOn}
                      onClick={() => setScreenReaderOn(!screenReaderOn)}
                      className={`${styles.toggleSwitch} ${screenReaderOn ? styles.switchOn : ""}`}
                    >
                      <span className={styles.switchKnob} />
                    </button>
                  </div>

                  <div className={styles.speedControls}>
                    <span className={styles.speedLabel}>
                      {t("hero.speedLabel")}
                    </span>
                    <div className={styles.toggleButtonGroup}>
                      {speedOptions.map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setSpeed(val)}
                          className={`${styles.toggleBtn} ${speed === val ? styles.active : ""}`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* No animation */}
                <div className={styles.controlItem}>
                  <div className={styles.switchRow}>
                    <div className={styles.switchInfo}>
                      <span className={styles.switchTitle}>
                        {t("hero.noAnimationLabel")}
                      </span>
                      <span className={styles.switchDesc}>
                        {t("hero.noAnimationDesc")}
                      </span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={noAnimationOn}
                      onClick={() => setNoAnimationOn(!noAnimationOn)}
                      className={`${styles.toggleSwitch} ${noAnimationOn ? styles.switchOn : ""}`}
                    >
                      <span className={styles.switchKnob} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Lesson Preview */}
        <div className={styles.rightCol}>
          <div className={styles.lessonCard}>
            <div className={styles.lessonHeader}>
              <span className={styles.statusDot} />
              <span>{t("lessonPreview.lessonTitle")}</span>
            </div>

            <div className={styles.videoWrapper}>
              <Image
                src="/images/hero-video.png"
                alt={t("lessonPreview.videoAlt")}
                width={414}
                height={235}
                className={styles.videoImage}
                priority
              />
            </div>

            <div className={styles.togglesRow}>
              <div className={styles.toggleOption}>
                <div className={styles.toggleLabel}>
                  <span className={styles.blueDot} />
                  <span>{t("lessonPreview.subtitlesLabel")}</span>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={subtitlesOn}
                  onClick={() => setSubtitlesOn(!subtitlesOn)}
                  className={`${styles.toggleSwitch} ${subtitlesOn ? styles.switchOn : ""}`}
                >
                  <span className={styles.switchKnob} />
                </button>
              </div>

              <div className={styles.toggleOption}>
                <div className={styles.toggleLabel}>
                  <span className={styles.orangeDot} />
                  <span>{t("lessonPreview.transcriptLabel")}</span>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={transcriptOn}
                  onClick={() => setTranscriptOn(!transcriptOn)}
                  className={`${styles.toggleSwitch} ${transcriptOn ? styles.switchOn : ""}`}
                >
                  <span className={styles.switchKnob} />
                </button>
              </div>
            </div>

            {transcriptOn && (
              <div className={styles.transcriptBox}>
                <span className={styles.transcriptHeader}>
                  {t("lessonPreview.fragmentTitle")}
                </span>
                <div className={styles.transcriptContent}>
                  {t("lessonPreview.fragmentText")}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
