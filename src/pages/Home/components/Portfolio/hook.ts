import { useTranslation } from "react-i18next";

import Fintech from "@assets/portfolio/fintech.svg";
import Store from "@assets/portfolio/store.svg";
import Countries from "@assets/portfolio/countries.svg";
import Dogs from "@assets/portfolio/dogs.svg";

import { IUsePortfolios } from "./types";

const usePortfolios = (): IUsePortfolios => {
  const { t } = useTranslation();

  const portfolioItems = [
    {
      image: Dogs,
      title: "ac Dogs",
      description: t("portfolio.dogs"),
      link: "https://ac-dogs.netlify.app",
    },
    {
      image: Store,
      title: "ac Store",
      description: t("portfolio.store"),
      link: "https://acstore.netlify.app",
    },
    {
      image: Fintech,
      title: "ac Simple Fintech",
      description: t("portfolio.fintech"),
      link: "https://ac-simple-fintech.netlify.app",
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
