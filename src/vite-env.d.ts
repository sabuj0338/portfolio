/// <reference types="vite/client" />

type ProjectCategory = "frontend" | "backend" | "ai" | "mobile" | "package";

type PreviewTone = "command" | "muted" | "keyword" | "string" | "comment" | "success";

interface IPreviewLine {
  prefix: string;
  text: string;
  tone: PreviewTone;
}

interface IProject {
  title: string;
  short_description: string;
  images: string[];
  technologies: string[];
  live_url: string;
  label: string;
  host: string;
  categories: ProjectCategory[];
  // Shown in place of a screenshot when `images` is empty
  preview?: IPreviewLine[];
}

interface IMetric {
  value: string;
  label: string;
}

interface IExperience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  highlights: string[];
  metrics: IMetric[];
}

interface IEducation {
  degree: string;
  school: string;
  period: string;
}

interface IStackLayer {
  name: string;
  items: string[];
}

interface ICompany {
  name: string;
  link: string;
}

interface IDataResponse {
  projects: IProject[];
  experience: IExperience[];
  education: IEducation;
  stack: IStackLayer[];
  core_stack: string[];
  companies: ICompany[];
}
