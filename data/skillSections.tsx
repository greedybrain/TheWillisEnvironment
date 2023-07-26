export interface ISkillSection {
  id: number;
  target: string;
  skillName: string;
}

export default [
  {
    id: 1,
    target: "#Programming-Languages",
    skillName: "programming-langs",
  },
  {
    id: 2,
    target: "#Libraries-Frameworks",
    skillName: "libs-and-frameworks",
  },
  {
    id: 3,
    target: "#Databases-DBMS",
    skillName: "databases-and-db-management-systems",
  },
  {
    id: 4,
    target: "#Styling",
    skillName: "styling",
  },
] as ISkillSection[];
