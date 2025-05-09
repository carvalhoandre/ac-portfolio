import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import IComponent from "@/@types";
import { IServiceItemProps } from "./types";

import { Icon } from "@/components/Icon";

const ServiceItem: IComponent<IServiceItemProps> = ({
  testId = "service",
  title,
  items,
  icon,
}) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isModalOpen]);

  return (
    <li className="services_content" data-testid={testId}>
      <div>
        <Icon icon={icon} className="services_icon" />
        <h3 className="services_title">{title}</h3>
      </div>

      <button
        className="button button--flex button--small button--link services_button"
        onClick={() => setIsModalOpen(true)}
        aria-expanded={isModalOpen}
        aria-controls={`service-modal-${testId}`}
      >
        {t("services.viewMore")}
        <Icon icon="arrow-right" className="button_icon" />
      </button>

      <div
        ref={modalRef}
        className={`services_modal ${isModalOpen ? "active-modal" : ""}`}
        id={`service-modal-${testId}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`service-modal-title-${testId}`}
      >
        <div className="services_modal-content">
          <h4
            className="services_modal-title"
            id={`service-modal-title-${testId}`}
          >
            {title}
          </h4>

          <button
            className="services_modal-close"
            onClick={() => setIsModalOpen(false)}
            aria-label={t("common.close")}
          >
            <Icon icon="times" className="button_icon" />
          </button>

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
