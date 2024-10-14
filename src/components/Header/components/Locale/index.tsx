import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { getLanguage, setLanguage } from "@utils/language";

import IComponent from "@/@types";

import "./styles.css";

const languages = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

const Locale: IComponent = () => {
  const { i18n, t } = useTranslation();

  const currentLang = getLanguage() || "en";

  const changeLanguage = (lang: string) => {
    if (lang === currentLang) return;

    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const languageOptions = useMemo(() => {
    return languages.map((lang) => (
      <button
        key={lang.code}
        className={`language_item ${
          currentLang === lang.code ? "language_selected" : ""
        }`}
        onClick={() => changeLanguage(lang.code)}
        aria-label={t(`Change language to ${lang.label}`)}
      >
        {lang.label}
      </button>
    ));
  }, [currentLang, t]);

  return (
    <div className="language_container">
      <p className="language_title">{t("navbar.language")}:</p>

      <div className="language_items">{languageOptions}</div>
    </div>
  );
};

export { Locale };
