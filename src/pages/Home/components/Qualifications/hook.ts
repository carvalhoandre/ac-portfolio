import { useTranslation } from "react-i18next";

import { IQualificationsItemProps } from "./components/Item/types";
import { IUseQualifications } from "./types";

const useQualifications = (): IUseQualifications => {
  const { t } = useTranslation();

  const studentList: Array<IQualificationsItemProps> = [
    {
      date: "2026 - 2027",
      subtitle: "Pontifícia Universidade Católica do Paraná - PUC-PR",
      title: t("qualification.pos"),
    },
    {
      date: "2019 - 2022",
      subtitle: "Universidade Nove de Julho - UNINOVE",
      title: t("qualification.science"),
    },
  ];

  const workList: Array<IQualificationsItemProps> = [
    {
      date: `Jun 2026 - ${t("qualification.current")}`,
      subtitle: "GFT",
      title: "Backend & Cloud",
    },
    {
      date: "Jun 2025 - Jun 2026",
      subtitle: "GFT",
      title: t("qualification.frontend"),
    },
    {
      date: "Nov 2024 - Jun 2025",
      subtitle: "Montreal",
      title: t("qualification.frontend"),
    },
    {
      date: "Mar 2022 - Nov 2024",
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
