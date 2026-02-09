
export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  tag: string;
  tagType: 'current' | 'academic' | 'public' | 'retail' | 'service' | 'logistics';
  description?: string;
  bullets?: string[];
}

export interface EducationData {
  university: string;
  degree: string;
  gradDate: string;
  gpa: string;
  atar: string;
  thesis: string;
  coursework: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface LanguageSkill {
  name: string;
  level: string;
  percentage: number;
}
