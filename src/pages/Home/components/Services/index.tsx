import { useTranslation } from "react-i18next";

import IComponent from "@/@types";
import ServiceItem from "./components/ServiceItem";

import { SectionHeader } from "@components/index";

import "./styles.css";

const Services: IComponent = ({ testId = "services" }) => {
  const { t } = useTranslation();

  return (
    <section
      className="services section"
      id="services"
      aria-labelledby="label-services"
      data-testid={testId}
    >
      <SectionHeader
        title={t("services.title")}
        subTitle={t("services.subTitle")}
      />

      <ul className="services_container container grid">
        <ServiceItem
          icon="code"
          title={t("services.frontend")}
          items={[t("services.apps"), t("services.web")]}
        />

        <ServiceItem
          icon="cog"
          title={t("services.backend")}
          items={[t("services.api"), t("services.data")]}
        />

        <ServiceItem
          icon="server-network"
          title={t("services.devops")}
          items={[t("services.cicd"), t("services.cloud")]}
        />
      </ul>
    </section>
  );
};

export { Services };
