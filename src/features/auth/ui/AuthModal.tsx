"use client";

import { useState } from "react";

import { Button } from "@/shared/ui/button";

import { LoginForm } from "./LoginForm";

import styles from "./AuthModal.module.scss";

export function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className={styles.trigger} onClick={() => setIsOpen(true)}>
        Sign in
      </Button>

      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button className={styles.close} onClick={() => setIsOpen(false)}>
              ×
            </button>

            <h2 className={styles.title}>Вход</h2>

            <LoginForm />
          </div>
        </div>
      )}
    </>
  );
}
