import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  area: string;
  stack: string[];
  links: Record<string, string>;
  featured: boolean;
}

// Single source of truth: <repo root>/data/projects.yaml
const dataUrl = new URL('../../../data/projects.yaml', import.meta.url);

export function loadProjects(): Project[] {
  const raw = readFileSync(dataUrl, 'utf-8');
  const parsed = yaml.load(raw) as { projects: Project[] };
  return parsed.projects ?? [];
}
