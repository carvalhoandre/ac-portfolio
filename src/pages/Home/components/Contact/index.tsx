import { useTranslation } from "react-i18next";
import IComponent from "@/@types";

import { Icon } from "@components/Icon";
import { SectionHeader } from "@components/index";

import "./styles.css";

const Contact: IComponent = ({ testId = "contact" }) => {
  const { t } = useTranslation();

  return (
    <section
      className="contact section"
      id="contactme"
      aria-labelledby="label-contact"
      data-testid={testId}
    >
      <SectionHeader title={t("contact.title")} />

      <ul className="contact_container container">
        <li className="contact_information">
          <Icon icon="envelope" className="contact_icon" />

          <div>
            <h3 className="contact_title">Email</h3>
            <span className="contact_subtitle">
              <a
                href="mailto:cavalho.devel@gmail.com?Subject=Olá André"
                target="_new"
                rel="external"
                className="contact_email"
              >
                carvalho.devel@gmail.com
              </a>
            </span>
          </div>
        </li>

        <li className="contact_information">
          <Icon icon="map-marker" className="contact_icon" />

          <div>
            <h3 className="contact_title">{t("contact.location")}</h3>
            <span className="contact_subtitle">{t("contact.city")}</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export { Contact };
