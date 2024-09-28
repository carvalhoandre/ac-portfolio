import { useState, useCallback } from "react";

import IComponent from "@/@types";
import { ISelected } from "./types";

import { SectionHeader } from "@components/index";
import QualificationsHeader from "./components/Header";
import QualificationsItem from "./components/Item";

import "./styles.css";
import {
  QualificationsStudentList,
  QualificationsWorkList,
} from "./qualifications";

const Qualifications: IComponent = ({ testId = "skills" }) => {
  const [selected, setSelected] = useState<ISelected>(null);

  const handleToggleOpen = useCallback((option: ISelected) => {
    setSelected((prevSelected) => (prevSelected === option ? null : option));
  }, []);

  const items =
    selected === "education"
      ? QualificationsStudentList
      : selected === "work"
      ? QualificationsWorkList
      : [];

  return (
    <section
      className="qualification section"
      id="qualification"
      aria-labelledby="label-qualification"
      data-testid={testId}
    >
      <SectionHeader title="Qualification" subTitle="My personal journey" />

      <article className="qualification_container container">
        <div className="qualification_tabs">
          <QualificationsHeader
            title="Education"
            icon="graduation-cap"
            isOpen={selected === "education"}
            toggleOpen={() => handleToggleOpen("education")}
          />

          <QualificationsHeader
            title="Work"
            icon="briefcase-alt"
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
