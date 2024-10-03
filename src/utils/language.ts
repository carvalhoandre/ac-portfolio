import { STORAGE_KEYS } from "@config/storage_keys.config";

const DEFAULT_LANGUAGE = navigator.language.split("-")[0] || "en";

export const getLanguage = (): string => {
  try {
    const language = localStorage.getItem(STORAGE_KEYS.language);

    return language ? JSON.parse(language) : DEFAULT_LANGUAGE;
  } catch (error) {
    console.error("Error parsing Language from localStorage:", error);
    return DEFAULT_LANGUAGE;
  }
};

export const setLanguage = (language: string | null): void => {
  try {
    if (language === null) {
      localStorage.removeItem(STORAGE_KEYS.language);
    } else {
      localStorage.setItem(STORAGE_KEYS.language, JSON.stringify(language));
    }
  } catch (error) {
    console.error("Error setting Language in localStorage:", error);
  }
};
