"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import { loginSchema } from "../model/schema";
import type { LoginFormValues } from "../model/types";

import { mockCredentials } from "@/shared/mocks/auth";

import styles from "./LoginForm.module.scss";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      data.email === mockCredentials.email &&
      data.password === mockCredentials.password
    ) {
      console.log("Login success");
      return;
    }

    console.log("Invalid credentials");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.field}>
        <Input type="email" placeholder="Email" {...register("email")} />

        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.field}>
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>

      <Button disabled={isSubmitting} className={styles.button}>
        {isSubmitting ? "Loading..." : "Sign in"}
      </Button>
    </form>
  );
}
