export type ISkillTagData = {
  title: string;
};

export type ISkillCategoryProps = {
  icon: string;
  title: string;
  description: string;
  items: Array<ISkillTagData>;
};
