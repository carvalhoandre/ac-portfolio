import { useTranslation } from "react-i18next";

import Labs from "@assets/portfolio/labs.svg";
import Giovanna from "@assets/portfolio/psi.svg";
import Dogs from "@assets/portfolio/dogs.svg";

import { IUsePortfolios } from "./types";

const usePortfolios = (): IUsePortfolios => {
  const { t } = useTranslation();

  const portfolioItems = [
    {
      image: Giovanna,
      title: "Psi Giovanna",
      description: t("portfolio.psi"),
      link: "https://giovannadias.netlify.app/",
    },
    {
      image: Labs,
      title: "ac Labs",
      description: t("portfolio.labs"),
      link: "https://lab.andreleitecarvalho.space/",
    },
    {
      image: Dogs,
      title: "ac Dogs",
      description: t("portfolio.dogs"),
      link: "https://ac-dogs.netlify.app",
    },
  ];

  return {
    portfolioItems,
  };
};

export default usePortfolios;
