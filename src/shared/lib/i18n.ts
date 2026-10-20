import ru from "@/shared/i18n/ru.json";

export type TranslationDict = typeof ru;

export function getDictionary(): TranslationDict {
  return ru;
}

export function t(path: string): string {
  const keys = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = ru;

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = current[key];
    } else {
      return path;
    }
  }

  return typeof current === "string" ? current : path;
}

export function tArray(path: string): string[] {
  const keys = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = ru;

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = current[key];
    } else {
      return [];
    }
  }

  return Array.isArray(current) ? current : [];
}
