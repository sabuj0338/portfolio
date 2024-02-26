/// <reference types="vite/client" />

interface IProject {
  title: string;
  short_description: string;
  image: string;
  technologies: string[];
  live_url: string;
}

interface ISkill {
  name: string;
  icon_url: string;
}

interface IDataResponse {
  projects: IProject[],
  skills: ISkill[],
}