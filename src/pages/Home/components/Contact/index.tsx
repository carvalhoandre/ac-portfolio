import React from "react";
import { useTranslation } from "react-i18next";

import IComponent from "@/@types";

import { useForm } from "@hooks/useForm";
import { useFetch } from "@/hooks/useRequest";
import { useNotification } from "@components/NotificationContainer";

import { postSendEmail } from "@/services";

import { Icon, Input, Loader, SectionHeader } from "@components/index";

import "./styles.css";

const Contact: IComponent = ({ testId = "contact" }) => {
  const { t } = useTranslation();
  const { notification } = useNotification();

  const { loading, request } = useFetch();

  const project = useForm();
  const name = useForm({ required: true });
  const message = useForm({ required: true });
  const email = useForm({ type: "email", required: true });

  const [isFormValid, setIsFormValid] = React.useState(false);

  const clearForm = () => {
    name.reset();
    email.reset();
    project.reset();
    message.reset();

    setIsFormValid(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid) return;

    const { url, options } = postSendEmail({
      email: email.value,
      message: message.value,
      name: name.value,
      title: project.value,
    });

    await request(url, options);

    const messageNotify = t("form.success")

    notification(messageNotify, "success");

    clearForm();
  };

  React.useEffect(() => {
    setIsFormValid(name.validate() && email.validate() && message.validate());
  }, [name.value, email.value, message.value]);

  return (
    <section
      className="contact section"
      id="contactme"
      aria-labelledby="label-contact"
      aria-describedby="contact-description"
      data-testid={testId}
    >
      {loading && <Loader />}

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

        <form className="contact_form grid" onSubmit={handleSubmit}>
          <div className="contact_inputs grid">
            <Input label={t("form.name")} name="name" isRequired {...name} />
            <Input
              type="email"
              label="Email"
              name="email"
              isRequired
              {...email}
            />
            <Input label={t("form.project")} name="project" {...project} />
            <Input
              variant="textarea"
              label={t("form.message")}
              name="message"
              isRequired
              {...message}
            />
          </div>

          <div>
            <button
              className="button button--flex"
              type="submit"
              disabled={!isFormValid}
              aria-disabled={!isFormValid}
            >
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
