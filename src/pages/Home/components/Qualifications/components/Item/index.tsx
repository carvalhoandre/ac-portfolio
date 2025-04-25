import IComponent from "@/@types";
import { IQualificationsItemProps } from "./types";
import { Icon } from "@/components";

const QualificationsItem: IComponent<IQualificationsItemProps> = ({
  testId = "qualifications-item",
  title,
  subtitle,
  date,
  side = "left",
}) => {
  const isRight = side === "right";

  const Content = () => (
    <div>
      <h3 className="qualification_title">{title}</h3>
      <span className="qualification_subtitle">{subtitle}</span>

      {!!date && (
        <div className="qualification_calendar">
          <Icon icon="calendar" className="uil uil-calendar-alt icon-calendar" />
          {date}
        </div>
      )}
    </div>
  );

  const Indicators = () => (
    <div>
      <span className="qualification_rounder" />
      <span className="qualification_line" />
    </div>
  );

  return (
    <li className="qualification_data" data-testid={testId}>
      {isRight && <div></div>}
      {isRight ? <Indicators /> : <Content />}
      {isRight ? <Content /> : <Indicators />}
    </li>
  );
};

export default QualificationsItem;
