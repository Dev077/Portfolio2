// lib/projects.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'academic' | 'personal' | 'hackathon';
    date: string;
    techStack: string[];
    image?: string;
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    impact?: string;
  }
  
  export const projects: Project[] = [
    {
      id: 'smart-scheduler',
      title: 'Smart Course Scheduler',
      description: 'AI-powered course scheduling application for university students',
      category: 'academic',
      date: '2023-12',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      featured: true,
      impact: 'Used by 200+ students at Western Ontario'
    },
    {
      id: 'data-viz',
      title: 'Data Visualization Tool',
      description: 'Interactive data visualization for complex datasets',
      category: 'personal',
      date: '2023-08',
      techStack: ['D3.js', 'React', 'TypeScript'],
    },
    {
      id: 'ai-chatbot',
      title: 'AI Study Assistant',
      description: 'Hackathon project: AI-powered study assistant for students',
      category: 'hackathon',
      date: '2024-02',
      techStack: ['Python', 'Flask', 'OpenAI API', 'React'],
      impact: '1st place at University Hackathon'
    },
    // Add more projects as needed
  ];
  
  export function getFeaturedProject(): Project | undefined {
    return projects.find(project => project.featured);
  }
  
  export function getProjectsByCategory(category: string): Project[] {
    return projects.filter(project => project.category === category);
  }
  
  export function getAllProjects(): Project[] {
    return projects;
  }
  
  export function getProjectById(id: string): Project | undefined {
    return projects.find(project => project.id === id);
  }