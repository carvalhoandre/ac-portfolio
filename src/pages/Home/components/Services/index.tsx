import IComponent from "@/@types";
import ServiceItem from "./components/ServiceItem";

import SectionHeader from "@components/SectionHeader";

import "./styles.css";

const Services: IComponent = ({ testId = "services" }) => {
  return (
    <section
      className="services section"
      id="services"
      aria-labelledby="label-services"
      data-testid={testId}
    >
      <SectionHeader title="Services" subTitle="What i offer" />

      <ul className="services_container container grid">
        <ServiceItem
          icon="arrow"
          title="Frontend Developer"
          items={["Apps for Android and IOS.", "Web page development."]}
        />

        <ServiceItem
          icon="web-grid"
          title="Ui/Ux Designer"
          items={[
            "Creating Designs.",
            "I develop the user interface.",
            "I create ux element interactions.",
          ]}
        />
      </ul>
    </section>
  );
};

export default Services;
