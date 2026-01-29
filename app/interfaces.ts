export interface TableI {
  headers: string[];
  rows: string[][];
}
export interface ProjectI {
  href: string;
  imagePath: string;
  alt: string;
  name: string;
}
export interface IDirectionAngle {
  x: number;
  angle: number;
}
export interface ITechCard {
  imagePath: string;
  name: string;
}

export interface IDictionary {
  home: IHomeDict;
  projects: IProjects;
  contact: IContact;
}
export interface IHomeDict {
  main: IHomeMainDict;
}
export interface IHomeMainDict {
  mainCard: IHMainCard;
  presentationText: IHPresentationText;
}
export interface IHMainCard {
  title: string;
  subtitle_1: string;
  subtitle_2: string;
  icon_linkedin: string;
  icon_github: string;
  icon_email: string;
  icon_cv: string;
}
export interface IHPresentationText {
  subtitle_1: string;
  subtitle_2: string;
  subtitle_3: string;
}

export interface IProjects {
  title_1: string;
  subtitle_1: string;
  title_2: string;
  subtitle_2: string;
  experiences: IPExperiences;
}

export interface IPExperiences {
  title: string;
  table: IPETable;
}

export interface IPETable {
  titles: IPETTitle;
  content: IPETContent;
}

export interface IPETTitle {
  first: string;
  second: string;
  third: string;
}
export interface IPETContent {
  first: IPETCUnit;
  second: IPETCUnit;
  third: IPETCUnit;
  fourth: IPETCUnit;
}
export interface IPETCUnit {
  type: string;
  name: string;
  year: string;
}

export interface IContact {
  title: string;
  option_email: string;
  option_github: string;
  option_cv: string;
  option_linkedin: string;
}
