import { ISelected } from "../../types";

export type IQualificationsHeaderProps = {
  icon: string;
  title: string;
  isOpen: boolean;
  subTitle?: string;
  toggleOpen: (list: ISelected) => void;
};
