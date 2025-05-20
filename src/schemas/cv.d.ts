import type { DateStr, Highlight } from "@/schemas/types";

export interface CV {
  basics: Basics;
  work: Array<Work>;
  education: Array<Education>;
  projects: Array<Projects>;
  skills: Array<Skills>;
}

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Array<Profiles>;
}

interface Location {
  address: string;
  region: string;
}

interface Profiles {
  network: string;
  url: string;
}

interface Work {
  name: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr | null;
  summary: string;
}

interface Education {
  institution: string;
  url: string;
  area: string;
  startDate: DateStr;
  endDate: DateStr;
  score: string;
}

interface Projects {
  name: string;
  isActive: boolean;
  github: boolean;
  description: string;
  highlights: Highlight;
  url: string;
}

interface Skills {
  name: string;
}
