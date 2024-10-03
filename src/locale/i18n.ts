import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import pt from "./locales/pt.json";
import { getLanguage } from "@/utils/language";

const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: pt,
  },
};

const userLanguage = getLanguage() || navigator.language.split("-")[0] || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: userLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
