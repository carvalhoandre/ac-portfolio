import { useTranslation } from "react-i18next";

import Marvel from "@assets/portfolio/marvel.svg";
import Store from "@assets/portfolio/store.svg";
import Countries from "@assets/portfolio/countries.svg";

import { IUsePortfolios } from "./types";

const usePortfolios = (): IUsePortfolios => {
  const { t } = useTranslation();

  const portfolioItems = [
    {
      image: Store,
      title: "ac Store",
      description: t("portfolio.store"),
      link: "https://acstore.netlify.app",
    },
    {
      image: Marvel,
      title: "ac Marvel",
      description: t("portfolio.marvel"),
      link: "https://ac-marvel-heroes.netlify.app",
    },
    {
      image: Countries,
      title: "ac Countries",
      description: t("portfolio.countries"),
      link: "https://accountries.netlify.app",
    },
  ];

  return {
    portfolioItems,
  };
};

export default usePortfolios;
