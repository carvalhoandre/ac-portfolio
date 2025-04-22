import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

import IComponent from "@/@types";
import { ISelected } from "./types";

import useQualifications from "./hook";

import { SectionHeader } from "@components/index";
import QualificationsHeader from "./components/Header";
import QualificationsItem from "./components/Item";

import "./styles.css";

const Qualifications: IComponent = ({ testId = "skills" }) => {
  const { t } = useTranslation();

  const { studentList, workList } = useQualifications();

  const [selected, setSelected] = useState<ISelected>(null);

  const items =
    selected === "education"
      ? studentList
      : selected === "work"
        ? workList
        : [];

  const handleToggleOpen = useCallback((option: ISelected) => {
    setSelected((prevSelected) => (prevSelected === option ? null : option));
  }, []);

  return (
    <section
      className="qualification section"
      id="qualification"
      aria-labelledby="label-qualification"
      data-testid={testId}
    >
      <SectionHeader
        title={t("qualification.title")}
        subTitle={t("qualification.subTitle")}
      />

      <article className="qualification_container container">
        <div className="qualification_tabs">
          <QualificationsHeader
            title={t("qualification.education")}
            icon="graduation-cap"
            isOpen={selected === "education"}
            toggleOpen={() => handleToggleOpen("education")}
          />

          <QualificationsHeader
            title={t("qualification.work")}
            icon="bag"
            isOpen={selected === "work"}
            toggleOpen={() => handleToggleOpen("work")}
          />
        </div>

        <div className="qualification_sections">
          {!!selected && (
            <ul
              className="qualification_content qualification_active"
              data-content
              id={selected}
            >
              {items.map(({ title, date, subtitle }, index) => (
                <QualificationsItem
                  key={index}
                  title={title}
                  date={date}
                  subtitle={subtitle}
                  side={index % 2 === 0 ? "left" : "right"}
                />
              ))}
            </ul>
          )}
        </div>
      </article>
    </section>
  );
};

export { Qualifications };
