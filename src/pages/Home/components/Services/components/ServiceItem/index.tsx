import React from "react";

import IComponent from "@/@types";
import { IServiceItemProps } from "./types";

import Icon from "@/components/Icon";

const ServiceItem: IComponent<IServiceItemProps> = ({
  testId = "service",
  title,
  items,
  icon,
}) => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <li className="services_content" data-testid={testId}>
      <div>
        <Icon icon={icon} className="services_icon" />

        <h3 className="services_title">{title}</h3>
      </div>

      <span
        className="button button--flex button--small button--link services_button"
        onClick={() => setShowMore(true)}
      >
        View More
        <Icon icon="arrow-right" className="button_icon" />
      </span>

      <div className={`services_modal ${showMore ? "active-modal" : ""}`}>
        <div className="services_modal-content">
          <h4 className="services_modal-title">{title}</h4>

          <Icon
            icon="times"
            onClick={() => setShowMore(false)}
            className="services_modal-close"
          />

          <ul className="services_modal-services grid">
            {items.map((item, index) => (
              <li className="services_modal-service" key={index}>
                <Icon icon="check-circle" className="services_modal-icon" />

                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ServiceItem;
