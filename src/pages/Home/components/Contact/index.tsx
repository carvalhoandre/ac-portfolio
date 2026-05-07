import { useTranslation } from "react-i18next";

import IComponent from "@/@types";

import { Icon, SectionHeader } from "@components/index";

import "./styles.css";

const Contact: IComponent = ({ testId = "contact" }) => {
  const { t } = useTranslation();


  return (
    <section
      className="contact section"
      id="contactme"
      aria-labelledby="label-contact"
      aria-describedby="contact-description"
      data-testid={testId}
    >
      <SectionHeader title={t("contact.title")} />

      <div className="contact_container container">
        <div className="contact_items">
          <div className="contact_information">
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
          </div>
          <div className="contact_information">
            <Icon icon="map-marker" className="contact_icon" />
            <div>
              <h3 className="contact_title">{t("contact.location")}</h3>
              <span className="contact_subtitle">{t("contact.city")}</span>
            </div>
          </div>

          <div className="contact_information">
            <Icon icon="phone" className="contact_icon" />
            <div>
              <h3 className="contact_title">{t("contact.cellphone")}</h3>
              <span className="contact_subtitle">
                <a
                  href="https://wa.me/5511949245875?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!"
                  target="_new"
                  rel="external"
                  className="contact_email"
                >
                  +55 11 949245875
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
