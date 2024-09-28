import IComponent from "@/@types";

import { Icon } from "@components/Icon";
import { SectionHeader } from "@components/index";

import "./styles.css";

const Contact: IComponent = ({ testId = "contact" }) => {
  return (
    <section
      className="contact section"
      id="contactme"
      aria-labelledby="label-contact"
      data-testid={testId}
    >
      <SectionHeader title="Get in Touch" />

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
                cavalho.devel@gmail.com
              </a>
            </span>
          </div>
        </li>

        <li className="contact_information">
          <Icon icon="map-marker" className="contact_icon" />

          <div>
            <h3 className="contact_title">Location</h3>
            <span className="contact_subtitle">Brazil - São Paulo</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export { Contact };
