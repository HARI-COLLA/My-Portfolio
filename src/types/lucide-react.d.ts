declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }
  
  export type Icon = ComponentType<IconProps>;
  
  // Export specific icons used in the project
  export const Cloud: Icon;
  export const Activity: Icon;
  export const Sparkles: Icon;
  export const Briefcase: Icon;
  export const GraduationCap: Icon;
  export const Award: Icon;
  export const Brain: Icon;
  export const MessagesSquare: Icon;
  export const DatabaseZap: Icon;
  export const Bot: Icon;
  export const Mail: Icon;
  export const Linkedin: Icon;
  export const Github: Icon;
  export const Heart: Icon;
  export const FolderSearch: Icon;
  export const Code2: Icon;
  export const ListChecks: Icon;
  export const Coins: Icon;
  export const ArrowDown: Icon;
  export const ExternalLink: Icon;
  export const Terminal: Icon;
  export const Check: Icon;
  export const Menu: Icon;
  export const X: Icon;
  export const ArrowUpRight: Icon;
  export const Users: Icon;
  export const FileText: Icon;
  export const ArrowUp: Icon;
  export const Download: Icon;
  export const Phone: Icon;
  export const Target: Icon;
  export const ChevronDown: Icon;
}