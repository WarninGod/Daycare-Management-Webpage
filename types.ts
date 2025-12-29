import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Persona {
  title: string;
  description: string;
  points: string[];
}
