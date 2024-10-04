import { useTranslation } from "react-i18next";

import Bikcraft from "@assets/portfolio/bikcraft.svg";
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
      link: "https://acstore.netlify.app/",
    },
    {
      image: Bikcraft,
      title: "ac Bikcraft",
      description: t("portfolio.bikcraft"),
      link: "https://acbikcraft.netlify.app/",
    },
    {
      image: Countries,
      title: "ac Countries",
      description: t("portfolio.countries"),
      link: "https://accountries.netlify.app/",
    },
  ];

  return {
    portfolioItems,
  };
};

export default usePortfolios;
