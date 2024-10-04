import { IQualificationsItemProps } from "./components/Item/types";

export type ISelected = "work" | "education" | null;

export interface IUseQualifications {
  studentList: Array<IQualificationsItemProps>;
  workList: Array<IQualificationsItemProps>;
}
