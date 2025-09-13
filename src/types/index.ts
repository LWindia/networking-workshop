export interface CourseModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  topics: string[];
}

export interface WorkshopHighlight {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}