import { useTranslation } from "react-i18next";
import IComponent from "@/@types";

import { useForm } from "@hooks/useForm";

import { SectionHeader, Icon, Input } from "@components/index";

import "./styles.css";

const Contact: IComponent = ({ testId = "contact" }) => {
  const { t } = useTranslation();

  const name = useForm();
  const email = useForm();
  const project = useForm();
  const message = useForm();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!email.validate()) return;

    const { url, options } = LOST_PASSWORD({
      login: login.value,
      url: window.location.href.replace("recovery", "reset"),
    });

    const { response } = await request(url, options);

    if (response.ok) login.onChange("");
  };

  return (
    <section
      className="contact section"
      id="contactme"
      aria-labelledby="label-contact"
      data-testid={testId}
    >
      <SectionHeader title={t("contact.title")} />

      <div className="contact_container container">
        <div>
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
        </div>

        <form className="contact_form grid" onSubmit={handleSubmit}>
          <div className="contact_inputs grid">
            <Input label={t("form.name")} name="name" {...name} />
            <Input type="email" label="Email" name="email" {...email} />
            <Input label={t("form.project")} name="project" {...project} />
            <Input
              variant="textarea"
              label={t("form.message")}
              name="message"
              {...message}
            />
          </div>

          <div>
            <button className="button button--flex" type="submit">
              {t("form.send")}

              <Icon icon="message" className="button_icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export { Contact };
