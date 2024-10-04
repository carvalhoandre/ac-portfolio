import { useTranslation } from "react-i18next";

import { IQualificationsItemProps } from "./components/Item/types";
import { IUseQualifications } from "./types";

const useQualifications = (): IUseQualifications => {
  const { t } = useTranslation();

  const studentList: Array<IQualificationsItemProps> = [
    {
      date: "2024",
      subtitle: "EF English",
      title: t("qualification.english"),
    },
    {
      date: "Current",
      subtitle: "Origamid",
      title: t("qualification.frontend"),
    },
    {
      date: "2018 - 2022",
      subtitle: "Universidade Nove de Julho - UNINOVE",
      title: t("qualification.science"),
    },
    {
      date: "2018 - 2022",
      subtitle: "Scrum Certificate",
      title: "Scrum",
    },
    {
      date: "2021",
      subtitle: "Udemy - André Bernardes",
      title: "Ui/Ux Designer",
    },
    {
      date: "2021",
      subtitle: "Cod3r",
      title: "React Native",
    },
  ];

  const workList: Array<IQualificationsItemProps> = [
    {
      date: `${t("qualification.apr")} 2024 - ${t("qualification.current")}`,
      subtitle: "Syndesi",
      title: t("qualification.frontend"),
    },
    {
      date: `Mar 2022 - ${t("qualification.apr")} 2024`,
      subtitle: "Hyperlocal",
      title: t("qualification.frontend"),
    },
    {
      date: `${t("qualification.aug")} 2021 - Mar 2022`,
      subtitle: "Proative Technology",
      title: t("qualification.frontend"),
    },
    {
      date: `Jan 2021 - ${t("qualification.aug")} 2021`,
      subtitle: "Proative Technology",
      title: "DevOps - Internship",
    },
  ];

  return {
    workList,
    studentList,
  };
};

export default useQualifications;
