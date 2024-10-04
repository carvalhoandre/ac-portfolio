import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { getLanguage, setLanguage } from "@utils/language";

import IComponent from "@/@types";

import "./styles.css";

const Locale: IComponent = () => {
  const { i18n, t } = useTranslation();

  const lng = getLanguage() || "en";

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const languageOptions = useMemo(() => {
    const languages = [
      { code: "en", label: "EN" },
      { code: "pt", label: "PT" },
    ];

    return languages.map((lang) => (
      <button
        key={lang.code}
        className={`language_item ${
          lng === lang.code ? "language_selected" : ""
        }`}
        onClick={() => changeLanguage(lang.code)}
        aria-label={t(`Change language to ${lang.label}`)}
      >
        {lang.label}
      </button>
    ));
  }, [lng, t]);

  return (
    <div className="language_container">
      <p className="language_title">{t("navbar.language")}:</p>
      <div className="language_items">{languageOptions}</div>
    </div>
  );
};

export { Locale };
