import { z } from "zod";

const emailSchema = z.email("Enter a valid email address").trim().toLowerCase();

const passwordSchema = z
  .string()
  .min(8, "Password must contain at least 8 characters")
  .max(64, "Password is too long");

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerSchema = z
  .object({
    firstName: z.string().trim().min(2, "First name is required").max(50),

    lastName: z.string().trim().min(2, "Last name is required").max(50),

    email: emailSchema,

    password: passwordSchema,

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
