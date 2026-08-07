import type { User } from "@/entities/user/types";

export const mockUser: User = {
  id: "1",
  firstName: "Polina",
  lastName: "Vasilieva",
  email: "polina@example.com",
  role: "student",
};

export const mockCredentials = {
  email: "polina@example.com",
  password: "Password123",
};

export const mockRegisterResponse: User = {
  id: "2",
  firstName: "New",
  lastName: "User",
  email: "newuser@example.com",
  role: "student",
};
