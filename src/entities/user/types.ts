import type { UserRole } from "@/shared/types/auth";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}
