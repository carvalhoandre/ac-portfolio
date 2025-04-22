import { useTranslation } from "react-i18next";

import Tweets from "@assets/portfolio/tweets.svg";
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
      image: Tweets,
      title: "ac Tweets",
      description: t("portfolio.tweets"),
      link: "https://tweet.andreleitecarvalho.space/",
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
