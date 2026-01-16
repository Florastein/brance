export interface Activity {
  id: string;
  type: 'text' | 'video' | 'quiz';
  title: string;
  content: string;
}

export interface Subsection {
  id: string;
  title: string;
  activities: Activity[];
}

export interface Section {
  id: string;
  title: string;
  subsections: Subsection[];
  isVisible: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}
