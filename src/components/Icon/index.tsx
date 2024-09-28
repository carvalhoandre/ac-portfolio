import IComponent from "@/@types";
import { IIconProps } from "./types";

const Icon: IComponent<IIconProps> = ({
  testId = "icon",
  id,
  icon,
  className,
  onClick,
}) => {
  return (
    <i
      id={id}
      data-testid={`${testId}-${icon}`}
      className={`uil uil-${icon} ${className}`}
      onClick={onClick}
    />
  );
};

export { Icon };
