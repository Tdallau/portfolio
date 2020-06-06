
export interface Project {
  title: string;
  image: string;
  video?: string;
  description: string;
  technologies: Technology[];
  buttons?: Button[];
  tag: Tag;
}

interface Tag {
  name: 'Home' | 'School' | 'Work';
  color: string;
}

interface Button {
  title: string;
  style: 'btn-success' | 'btn-secondary' | 'btn-primary' | 'btn-danger' | 'btn-warning' | 'btn-info' | 'btn-light'
  | 'btn-dark' | 'btn-link';
  url: string;
}

interface Technology {
  name: string;
  color: string;
  url: string;
}
