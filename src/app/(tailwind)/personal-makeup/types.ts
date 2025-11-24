export interface SectionProps {
  id?: string;
  className?: string;
}

export interface Testimonial {
  text: string;
  author: string;
}

export interface CourseFeature {
  title: string;
  description?: string;
  value?: number;
}

export interface LearningPoint {
  title: string;
  items: string[];
}
