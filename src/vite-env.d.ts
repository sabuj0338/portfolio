/// <reference types="vite/client" />

interface IProject {
  title: string;
  short_description: string;
  images: string[];
  technologies: string[];
  live_url: string;
  type: string;
}

interface ISkill {
  name: string;
  icon_url: string;
  type: string;
}

interface ICompany {
  name: string;
  link: string;
  image: string;
}

interface IDataResponse {
  projects: IProject[],
  skills: ISkill[],
  companies: ICompany[],
}