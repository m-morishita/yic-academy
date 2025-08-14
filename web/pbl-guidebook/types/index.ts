export interface GuideSection {
  id: string;
  title: string;
  content: string;
  subsections?: GuideSection[];
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  category: string;
  checked?: boolean;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  url?: string;
  content?: string;
  category: string;
}

export interface NavigationItem {
  title: string;
  href?: string;
  items?: NavigationItem[];
}