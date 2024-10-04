export interface IPortfolioItem {
  image: string | undefined;
  title: string;
  description: string;
  link: string;
}

export interface IUsePortfolios {
  portfolioItems: Array<IPortfolioItem>;
}
