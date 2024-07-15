import { ISkillItemProps } from "../Item/types";

export type ISkillListProps = {
  icon: string;
  title: string;
  items: Array<ISkillItemProps>;
  subTitle?: string;
};
