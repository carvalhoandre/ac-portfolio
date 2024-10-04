import { useTranslation } from "react-i18next";

import { ITestimonial, IUseTestimonial } from "./types";

const useTestimonial = (): IUseTestimonial => {
  const { t } = useTranslation();

  const testimonials: Array<ITestimonial> = [
    {
      name: "Ian Charlesson Gomes Santana",
      client: t("testimonial.firstClient"),
      description: t("testimonial.firstDescription"),
    },
    {
      name: "Bruno Elias de Souza",
      client: t("testimonial.secondClient"),
      description: t("testimonial.secondDescription"),
    },
  ];

  return {
    testimonials,
  };
};

export default useTestimonial;
