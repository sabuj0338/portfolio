/// <reference types="vite/client" />

interface IProject {
  title: string;
  short_description: string;
  image: string;
  skill_icons: string[];
  live_url: string;
}

interface ISkill {
  name: string;
  icon_url: string;
}