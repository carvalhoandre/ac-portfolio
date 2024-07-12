import { STORAGE_KEYS } from "@config/storage_keys.config";

const DEFAULT_THEME = "light";

export const getTheme = (): string => {
  try {
    const theme = localStorage.getItem(STORAGE_KEYS.theme);
    return theme ? JSON.parse(theme) : DEFAULT_THEME;
  } catch (error) {
    console.error("Error parsing theme from localStorage:", error);
    return DEFAULT_THEME;
  }
};

export const setTheme = (theme: string | null): void => {
  try {
    if (theme === null) {
      localStorage.removeItem(STORAGE_KEYS.theme);
    } else {
      localStorage.setItem(STORAGE_KEYS.theme, JSON.stringify(theme));
    }
  } catch (error) {
    console.error("Error setting theme in localStorage:", error);
  }
};
